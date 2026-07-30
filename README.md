# Travel Safe — Premium Travel Website

A production-ready marketing website for **Travel Safe**, built with Next.js 15
(App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # eslint
```

## Tech Stack

- **Next.js 15** (App Router, Server Components, `generateStaticParams`, `generateMetadata`)
- **TypeScript** throughout
- **Tailwind CSS** with a custom brand theme (`tailwind.config.ts`)
- **Framer Motion** for scroll reveals, hover states, and micro-interactions
- **next-themes** for dark / light mode
- **lucide-react** for icons
- Image optimization via `next/image` (Unsplash placeholders — swap for your own DAM/CDN)

## Project Structure

```
app/
  layout.tsx              Root layout — fonts, metadata, theme provider, schema.org JSON-LD
  page.tsx                Homepage (assembles all home sections)
  globals.css             Base styles, glass/utility classes
  sitemap.ts               Dynamic sitemap.xml
  robots.ts                Dynamic robots.txt
  not-found.tsx             Custom 404
  destinations/
    page.tsx               Listing + filters (?q=, ?type=, ?category=)
    [slug]/page.tsx         Destination detail (SSG via generateStaticParams)
  packages/[slug]/page.tsx  Package detail + itinerary timeline
  booking/page.tsx          Booking form (reads ?package=slug)
  blog/
    page.tsx                Blog listing
    [slug]/page.tsx          Blog post detail
  about/page.tsx
  contact/page.tsx          Enquiry form + visa services + embedded map
  privacy-policy/page.tsx
  terms-conditions/page.tsx
  refund-policy/page.tsx
  admin/page.tsx            Admin dashboard preview (mock data, client-side)

components/
  layout/                  Navbar, Footer, ThemeToggle/Provider, WhatsApp/Call buttons
  home/                    One component per homepage section
  ui/                      Reusable primitives: Button, Badge, Container,
                           SectionHeading, Counter, DestinationCard, PackageCard,
                           SafetyBadge (the brand's shield-check motif), LegalPage

lib/
  data.ts                  Mock content: destinations, packages, testimonials,
                           blog posts, stats, categories, gallery
  types.ts                 Shared TypeScript interfaces
  utils.ts                 cn(), formatINR(), slugify()
```

## Design System

- **Colors**: Primary `#0F4C81`, Secondary `#00B4D8`, Accent `#FFB703`, defined as
  full Tailwind color scales in `tailwind.config.ts` (`primary-50…950`, etc.),
  so every shade you need is available as a utility class.
- **Typography**: Poppins (via `next/font/google`), loaded as a CSS variable
  (`--font-poppins`) and wired into Tailwind's `font-sans`.
- **Signature motif**: a shield-check "Travel Safe Score" badge appears on
  destination cards, the hero, and detail pages — a recurring visual tied
  directly to the brand name and the "confidence" positioning.
- **Dark mode**: class-based (`darkMode: "class"`), toggled via `next-themes`;
  every section has matching dark-mode styles.

## What's Wired Up vs. What Needs Backend Work

This is a complete **front-end** implementation with realistic mock data.
To take it to production you'll want to:

1. **Replace `lib/data.ts`** with a real data source (headless CMS, or your own
   API/database) — the types in `lib/types.ts` already match the shape used
   throughout the UI, so swapping the source shouldn't require UI changes.
2. **Wire up forms** (`EnquiryForm`, `Newsletter`, `booking/page.tsx`) to real
   API routes — e.g. `app/api/enquiries/route.ts` — that write to your CRM/DB
   and trigger email notifications (Resend, SendGrid, etc.).
3. **Admin dashboard** (`app/admin/page.tsx`) is a functional UI preview with
   in-memory state. Add authentication (e.g. NextAuth/Clerk) and connect the
   Add/Edit/Delete actions to real API routes before exposing it publicly —
   it's currently listed in `robots.ts` as disallowed for crawlers, but has no
   auth gate yet.
4. **Images**: Unsplash URLs are used as placeholders. Swap in your own
   photography and update `next.config.mjs` `images.remotePatterns` to match
   your CDN/DAM domain.
5. **Integrations**:
   - *Google Analytics*: drop your GA4 snippet (or use `@next/third-parties`)
     into `app/layout.tsx`.
   - *Google Maps*: `app/contact/page.tsx` already embeds a basic iframe map —
     swap the query for your real office address, or upgrade to the JS API.
   - *WhatsApp*: update the phone number in `components/layout/WhatsAppButton.tsx`.
   - *Email notifications*: hook into your form API routes.
6. **Domain**: update `siteUrl` in `app/layout.tsx` and `app/sitemap.ts` /
   `app/robots.ts` to your production domain.

## SEO

- Per-page `generateMetadata` for destinations, packages, and blog posts
  (dynamic titles, descriptions, canonical URLs, Open Graph images).
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and
  `/robots.txt` automatically from the same data source as the UI.
- `TravelAgency` JSON-LD (schema.org) is injected in the root layout.
- Semantic headings, descriptive alt text, and `next/image` for Core Web
  Vitals-friendly image loading.
