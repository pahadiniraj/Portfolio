export async function getCaptchaToken(): Promise<string | null> {
  return new Promise<string | null>((resolve) => {
    if (typeof grecaptcha === "undefined") {
      console.error("reCAPTCHA not loaded");
      resolve(null);
      return;
    }

    grecaptcha.ready(async () => {
      const siteKey = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY;
      if (!siteKey) {
        console.error("Site key is not defined");
        resolve(null);
        return;
      }

      try {
        const token = await grecaptcha.execute(siteKey, {
          action: "register",
        });
        resolve(token);
      } catch (error) {
        console.error("Error executing reCAPTCHA", error);
        resolve(null);
      }
    });
  });
}

export async function verifyCaptchaToken(token: string) {
  const secretKey = process.env.CAPTCHA_SECRET_KEY;
  if (!secretKey) {
    throw new Error("No secret key found ");
  }
  const url = new URL("https://www.google.com/recaptcha/api/siteverify");
  url.searchParams.append("secret", secretKey);
  url.searchParams.append("response", token);

  const res = await fetch(url, { method: "POST" });
  const captchaData: CaptchaData = await res.json();
  if (!res.ok) {
    return null;
  }
  return captchaData;
}

type CaptchaData =
  | {
      success: true;
      challenges_ts: string;
      hostname: string;
      score: number;
      action: string;
    }
  | {
      success: false;
      "error-codes": ErrorCodes[];
    };

type ErrorCodes =
  | "missing-input-secret	"
  | "invalid-input-secret	"
  | " missing-input-response	"
  | " invalid-input-response	"
  | " bad-request"
  | " timeout-or-duplicate";
