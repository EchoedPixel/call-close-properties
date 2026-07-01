import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Call & Close Properties.",
  robots: { index: false, follow: false },
};

export default function TermsOfServicePage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold">Terms of Service</h1>

      <p className="mb-6 text-muted leading-relaxed">
        Welcome to Call &amp; Close Properties. By accessing or using our
        website, you agree to these Terms of Service.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold">1. Use of Our Website</h2>
      <p className="mb-6 text-muted leading-relaxed">
        You agree to use this website only for lawful purposes and in a manner
        that does not interfere with its operation or the experience of other
        users.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold">2. Our Services</h2>
      <p className="mb-6 text-muted leading-relaxed">
        Call &amp; Close Properties provides real estate cold calling, lead
        generation, lead qualification, and related outbound support services
        for real estate professionals. All services are subject to separate
        agreements, proposals, or contracts between Call &amp; Close Properties
        and its clients.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold">3. Intellectual Property</h2>
      <p className="mb-6 text-muted leading-relaxed">
        All content on this website, including text, graphics, branding, logos,
        and design, is the property of Call &amp; Close Properties and may not
        be copied, reproduced, or distributed without written permission.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold">4. Changes to These Terms</h2>
      <p className="mb-6 text-muted leading-relaxed">
        We reserve the right to update these Terms of Service at any time. Any
        changes will be posted on this page with the updated effective date.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-semibold">5. Contact Us</h2>
      <p className="text-muted leading-relaxed">
        Email:{" "}
        <a href="mailto:callandclosee@gmail.com" className="text-primary-light hover:underline">
          callandclosee@gmail.com
        </a>
      </p>
    </section>
  );
}