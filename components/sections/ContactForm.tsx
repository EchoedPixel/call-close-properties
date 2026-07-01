"use client";

import { useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2 } from "lucide-react";
import { CONTACT_SERVICE_OPTIONS, AGENT_OPTIONS } from "@/lib/constants";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  service: string;
  agents: string;
  message: string;
  agreed: boolean;
}

interface FormErrors {
  fullName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  service?: string;
  agents?: string;
  message?: string;
  agreed?: string;
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    service: preselectedService,
    agents: "",
    message: "",
    agreed: false
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.service) {
      newErrors.service = "Please select a service";
    }
    if (!formData.agents) {
      newErrors.agents = "Please select the number of agents";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    if (!formData.agreed) {
      newErrors.agreed = "You must agree before submitting.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setApiError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setApiError(data.error || "Something went wrong. Please try again.");
        return;
      }

      // Success — show confirmation and reset form
      setSubmitted(true);
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        service: "",
        agents: "",
        message: "",
        agreed: false,
      });
    } catch {
      setApiError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (submitted) {
    return (
      <Card gradient className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-8 w-8 text-primary-light" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-white">
          Message Received
        </h3>
        <p className="mt-3 text-muted">
          Thank you for reaching out to Call & Close Properties. A member of our
          team will respond within 24 hours.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: "",
              companyName: "",
              email: "",
              phone: "",
              service: "",
              agents: "",
              message: "",
              agreed: false
            });
          }}
        >
          Send Another Message
        </Button>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          label="Full Name"
          placeholder="John Smith"
          value={formData.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          error={errors.fullName}
          required
        />
        <Input
          label="Company Name"
          placeholder="ABC Corporation"
          value={formData.companyName}
          onChange={(e) => handleChange("companyName", e.target.value)}
          error={errors.companyName}
          required
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          label="Email"
          type="email"
          placeholder="john@acme.com"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          error={errors.email}
          required
        />
        <Input
          label="Phone Number"
          type="tel"
          placeholder="+1 (555) 000-0000"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          error={errors.phone}
          required
        />
      </div>

      <Select
        label="Service Needed"
        placeholder="Select a service"
        options={CONTACT_SERVICE_OPTIONS}
        value={formData.service}
        onChange={(e) => handleChange("service", e.target.value)}
        error={errors.service}
        required
      />

      <Select
        label="How Many Agents Do You Need?"
        placeholder="Select number of agents"
        options={AGENT_OPTIONS}
        value={formData.agents}
        onChange={(e) => handleChange("agents", e.target.value)}
        error={errors.agents}
        required
      />

      <Textarea
        label="Message"
        placeholder="Tell us about your goals, target market, and timeline..."
        value={formData.message}
        onChange={(e) => handleChange("message", e.target.value)}
        error={errors.message}
        required
      />

      <div className="space-y-2">
        <label className="flex items-start gap-3 text-sm text-muted">
            <input
                type="checkbox"
                checked={formData.agreed}
                onChange={(e) => {
                    setFormData((prev) => ({
                        ...prev,
                        agreed: e.target.checked,
                    }));

                    if (errors.agreed) {
                        setErrors((prev) => ({
                            ...prev,
                            agreed: undefined,
                        }));
                    }
                }}
                className="mt-1"
            />

            <span>
              I agree to receive communications by text message about my
              inquiry from <strong>Call &amp; Close Properties</strong>.
              Consent is not a condition of purchase. You may opt out by
              replying <strong>STOP</strong> or reply <strong>HELP</strong>{" "}
              for more information. Message frequency varies. Message and
              data rates may apply. By submitting, you agree to our{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-light underline hover:text-primary"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="/terms-of-service"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-light underline hover:text-primary"
              >
                Terms of Service
              </a>
              .
            </span>
        </label>

        {errors.agreed && (
            <p className="text-sm text-red-500">
                {errors.agreed}
            </p>
        )}
      </div>

      {apiError && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {apiError}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        className="w-full sm:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
