"use server";

import { verifyCaptchaToken } from "./Utils/captcha";

export async function registerAction(token: string | null, data: any) {
  if (!token) {
    return {
      success: false,
      message: "Token not Found",
    };
  }

  // verify token

  const captchaData = await verifyCaptchaToken(token);
  if (!captchaData) {
    return {
      success: false,
      message: "Captcha Failed",
    };
  }
  if (!captchaData.success || captchaData.score < 0.5) {
    return {
      success: false,
      message: "Bot not Allowed",
      errors: !captchaData.success ? captchaData["error-codes"] : undefined,
    };
  }
  return {
    success: true,
    message: "User registered successfully",
  };
}
