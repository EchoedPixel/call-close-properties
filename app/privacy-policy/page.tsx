import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Call & Close Properties.",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold">Privacy Policy</h1>
      <p className="mb-6 text-sm text-muted">Last Updated: 6/15/2026</p>

      <p className="mb-6 text-muted leading-relaxed">
        At Call &amp; Close Properties, we value your privacy and are committed
        to protecting your personal information.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold">Information We Collect</h2>
      <p className="mb-3 text-muted leading-relaxed">
        When you contact us or book a consultation, we may collect:
      </p>
      <ul className="mb-6 list-disc pl-6 space-y-1 text-muted">
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Company name</li>
        <li>Any information you choose to share with us</li>
      </ul>
      <p className="mb-6 text-muted leading-relaxed">
        We may also collect basic website analytics, such as browser type,
        device information, and pages visited.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold">How We Use Your Information</h2>
      <ul className="mb-6 list-disc pl-6 space-y-1 text-muted">
        <li>Respond to your inquiries</li>
        <li>Schedule consultations</li>
        <li>Provide our services</li>
        <li>Improve our website and customer experience</li>
        <li>Communicate with you about our services</li>
      </ul>

      <h2 className="mb-3 mt-10 text-xl font-semibold">Information Sharing</h2>
      <p className="mb-6 text-muted leading-relaxed">
        We do not sell or rent your personal information. We may share
        information only with trusted service providers who help us operate
        our business or when required by law.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold">Data Security</h2>
      <p className="mb-6 text-muted leading-relaxed">
        We take reasonable measures to protect your information from
        unauthorized access, disclosure, or misuse.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold">Cookies</h2>
      <p className="mb-6 text-muted leading-relaxed">
        Our website may use cookies and similar technologies to improve your
        browsing experience and analyze website traffic.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold">Your Rights</h2>
      <p className="mb-6 text-muted leading-relaxed">
        You may request access to, correction of, or deletion of your personal
        information by contacting us.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold">Contact Us</h2>
      <p className="text-muted leading-relaxed">
        Email:{" "}
        <a href="mailto:callandclosee@gmail.com" className="text-primary-light hover:underline">
          callandclosee@gmail.com
        </a>
      </p>
    </section>
  );
}