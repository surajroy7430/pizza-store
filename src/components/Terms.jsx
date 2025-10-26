const Terms = () => {
  return (
    <div className="terms-of-service">
      <h1>Terms of Service</h1>
      <details>
        <summary>Click to view Terms of Service</summary>
        <div className="terms-content">
          <h2>1. Acceptance of Terms</h2>
          <p>
            Thank you for using Pizza Hallen. These Terms of Service are
            intended to make you aware of your legal rights and responsibilities
            with respect to your access to and use of the Pizza Hallen website
            at{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://pizzahallen.vercel.app/"
            >
              www.pizzahallen.com
            </a>{" "}
            (the "Site") including but not limited to delivery of information
            via the website whether existing now or in the future that link to
            the Terms.
          </p>

          <h2>2. Changes to These Terms</h2>
          <p>
            Pizza Hallen reserves the right to make changes to these Terms at
            any time. If we make material changes to these Terms, we will notify
            you by email or by posting a notice on our Site prior to the
            effective date of the changes.
          </p>

          <h2>3. Privacy Policy</h2>
          <p>
            Please refer to our Privacy Policy for information on how we
            collect, use and disclose information from our users. You
            acknowledge and agree that your use of the Services is subject to
            our Privacy Policy.
          </p>

          <h2>4. User Responsibilities</h2>
          <p>
            You are responsible for your use of the Services and for any content
            you provide, including compliance with applicable laws, rules, and
            regulations.
          </p>
        </div>
      </details>
    </div>
  );
};

export default Terms;
