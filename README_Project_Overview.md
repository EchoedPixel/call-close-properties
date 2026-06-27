# Call & Close Properties

Developer Documentation & Maintenance Guide

---

# Project Overview

**Project Name:** Call & Close Properties

**Website:** https://callcloseproperties.com

**Framework:** Next.js 15 (App Router)

**Language:** TypeScript

**Styling:** Tailwind CSS v4

**Hosting:** Vercel

**Domain Registrar & DNS:** Hostinger

**Email Service:** Resend

**Package Manager:** npm

**Production Branch:** main

---

# Project Purpose

This website was built for **Call & Close Properties**, a premium real estate outbound lead generation company.

The website is primarily a marketing website containing:

* Home
* About
* Services
* Who We Serve
* Contact
* Book a Strategy Call

The contact page sends inquiries directly to the company using Resend.

---

# Tech Stack

* Next.js 15
* React 19
* TypeScript
* Tailwind CSS v4
* Framer Motion
* Lucide React Icons
* Resend API
* Vercel
* Hostinger

---

# Local Development

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Production build

```bash
npm run build
```

Start production server

```bash
npm run start
```

---

# Deployment

The website is hosted on **Vercel**.

Deployment workflow:

Developer

↓

GitHub Repository

↓

Vercel

↓

Production Deployment

Every push to the **main** branch automatically deploys to Production.

---

# Domain

Production Domain

```
callcloseproperties.com
```

DNS Provider

```
Hostinger
```

Hosting

```
Vercel
```

Important Notes

* DNS records are managed in Hostinger.
* Vercel provides the required DNS records.
* If Vercel recommends updating DNS records, update them inside Hostinger.

---

# Email System

Provider

```
Resend
```

Purpose

The Contact page sends emails directly to the company inbox.

Client Form

```
components/sections/ContactForm.tsx
```

API Route

```
app/api/contact/route.ts
```

Current Form Fields

* Full Name
* Company Name
* Email
* Phone Number
* Service Needed
* Number of Agents Needed
* Message
* Agreement Checkbox

After successful submission:

* Inputs are validated
* Data is sanitized
* HTML email is generated
* Email is sent using Resend
* Success message is shown to the user

---

# Environment Variables

Create

```
.env.local
```

Required variables

```env
RESEND_API_KEY=YOUR_RESEND_API_KEY
CONTACT_EMAIL=YOUR_RECEIVING_EMAIL
```

These variables must also be added inside:

Vercel

↓

Settings

↓

Environment Variables

For

* Production
* Preview
* Development

---

# Resend Setup

The sending domain is

```
callcloseproperties.com
```

The domain must remain verified inside Resend.

If emails stop working:

1. Check that the domain is still verified.
2. Check that the API key is valid.
3. Check Vercel Environment Variables.
4. Check Hostinger DNS records.
5. Check Vercel Function Logs.

Sender email is configured inside

```
app/api/contact/route.ts
```

Look for

```ts
from:
```

Reply-To is automatically set to the customer's email.

---

# Hosting Information

Hosting Provider

```
Vercel
```

Production Branch

```
main
```

Production Project

```
call-close-properties
```

Deployment Type

```
Automatic
```

Every push to the main branch deploys automatically.

---

# DNS Information

DNS is managed through Hostinger.

Current important records include

* A Record
* CNAME Record (www)
* Resend Verification Records
* SPF Record
* DKIM Record
* DMARC Record

Do not remove Resend DNS records unless migrating away from Resend.

---

# Contact Form

Location

```
components/sections/ContactForm.tsx
```

API

```
app/api/contact/route.ts
```

Validation includes

* Required fields
* Email validation
* Agreement checkbox validation

---

# Important Files

Application

```
app/
```

Contact API

```
app/api/contact/route.ts
```

Contact Form

```
components/sections/ContactForm.tsx
```

Constants

```
lib/constants.ts
```

Metadata

```
lib/metadata.ts
```

Global Layout

```
app/layout.tsx
```

Public Assets

```
public/
```

---

# SEO

Metadata is generated through

```
lib/metadata.ts
```

Every page exports

```ts
export const metadata
```

Favicon

```
public/favicon.ico
```

---

# Branding

Theme

Luxury / Premium Real Estate

Primary Colors

* Black
* Gold

---

# Client Requested Changes (Completed)

## Contact Page

✔ Added Company Name field

✔ Added Service Needed dropdown

✔ Added Number of Agents dropdown

✔ Added Agreement checkbox

✔ Connected Resend email service

✔ Responsive improvements

---

## General Website

✔ Added custom domain

✔ Connected Hostinger DNS

✔ Connected Vercel deployment

✔ Added favicon

✔ Fixed production deployment

---

## Removed Per Client Request

The following sections were intentionally removed and should **NOT** be reintroduced unless specifically requested.

### Homepage

* Client Results
* Testimonials Carousel

### About Page

* Leadership Team

---

# Third-Party Services

| Service   | Purpose             |
| --------- | ------------------- |
| Vercel    | Website Hosting     |
| Hostinger | Domain & DNS        |
| Resend    | Contact Form Emails |
| GitHub    | Source Control      |

---

# Future Improvements

Possible future additions

* Google Analytics
* Google Tag Manager
* Meta Pixel
* CRM Integration
* HubSpot
* GoHighLevel
* Calendly Integration
* reCAPTCHA
* Dashboard for Leads
* CMS
* Newsletter

---

# Troubleshooting

## Contact Form Doesn't Send

Check

* Resend API Key
* Verified Resend Domain
* Vercel Environment Variables
* Hostinger DNS
* Vercel Function Logs

---

## Website Not Updating

Check

* Latest GitHub commit
* Vercel Deployment
* Production Deployment Status
* Browser Cache

---

## Domain Issues

Check

* Hostinger DNS
* Vercel Domain Configuration
* DNS Propagation

---

## Favicon Doesn't Update

* Hard Refresh
* Disable Browser Cache
* Check

```
https://callcloseproperties.com/favicon.ico
```

---

# Credentials

Credentials are managed through

* Hostinger Account main gmail
* Vercel Account linked to github
* Resend Account main gmail
* GitHub Account

Environment Variables should only exist in

* `.env.local`
* Vercel Environment Variables

---

# Notes for Future Developers

* Keep DNS changes inside Hostinger.
* Keep hosting on Vercel unless migrating.
* Keep email sending through Resend unless migrating.
* Any new environment variables should be documented here.
* Never commit `.env.local`.
* Always run `npm run build` before deploying major changes.
* If modifying the Contact Form, update both:

  * `components/sections/ContactForm.tsx`
  * `app/api/contact/route.ts`
* If changing the sender email, ensure the sending domain remains verified in Resend.

---

# Project Structure

```
app/
components/
lib/
public/
README.md
package.json
tsconfig.json
next.config.ts
```

---

# Ownership

Company

```
Call & Close Properties
```

Production Website

```
https://callcloseproperties.com
```

Hosting

```
Vercel
```

Domain & DNS

```
Hostinger
```

Email Provider

```
Resend
```

Repository

```
GitHub
```

---

Last Updated

June 2026
