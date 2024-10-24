import Script from "next/script";

export default function Capcha() {
  return (
    <>
      {/* Load reCAPTCHA script */}
      <Script
        src="https://www.google.com/recaptcha/api.js?render=6LemNmAqAAAAAGo5gQmOWBoZ-WFVn5aTvOVkSjzC"
        strategy="beforeInteractive"
      />
      {/* Hidden reCAPTCHA element with z-index */}
      <div style={{ display: "none", zIndex: -1, position: "absolute" }}>
        <input type="hidden" id="recaptchaResponse" />
      </div>
    </>
  );
}
