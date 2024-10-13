import Script from "next/script";

export default function Capcha() {
  return (
    <div className="">
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=6LemNmAqAAAAAGo5gQmOWBoZ-WFVn5aTvOVkSjzC`}
        strategy="beforeInteractive"
      />
    </div>
  );
}
