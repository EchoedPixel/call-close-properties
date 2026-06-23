"use client";

import { useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2 } from "lucide-react";
import { CONTACT_SERVICE_OPTIONS } from "@/lib/constants";
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
  message: string;
}

interface FormErrors {
  fullName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
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
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate form submission — replace with API route or email service
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
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
              message: "",
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
          placeholder="Acme Corporation"
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

      <Textarea
        label="Message"
        placeholder="Tell us about your goals, target market, and timeline..."
        value={formData.message}
        onChange={(e) => handleChange("message", e.target.value)}
        error={errors.message}
        required
      />

      <Button type="submit" variant="primary" className="w-full sm:w-auto">
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
