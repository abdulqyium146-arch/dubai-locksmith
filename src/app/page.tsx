// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Homepage
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, MessageCircle, CheckCircle2, ArrowRight, PhoneCall, Wrench, ThumbsUp, MapPin, Clock, ChevronDown } from 'lucide-react'

import { HeroSection } from '@/components/sections/HeroSection'
import { TrustBar } from '@/components/sections/TrustBar'
import { ServiceCard } from '@/components/sections/ServiceCard'
import { LocationCard } from '@/components/sections/LocationCard'
import { ReviewsSection } from '@/components/sections/ReviewsSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { JsonLd } from '@/components/schema/JsonLd'
import { WebPageSchema, HowToSchema } from '@/components/schema/WebPageSchema'
import { Button } from '@/components/ui/Button'

import { services } from '@/data/services'
import { locations } from '@/data/locations'
import {
  BUSINESS_NAME,
  BUSINESS_TAGLINE,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
  SITE_URL,
  DEFAULT_OG_IMAGE,
} from '@/lib/constants'
import { formatPriceRange } from '@/lib/utils'
import type { Review } from '@/types'

// ── Metadata ──────────────────────────────────────────────────────────────────

// GMB top searches: "key maker near me" (66), "key duplication service" (51), "locksmith" (20)
// Title targets #1 + #2 GMB terms; H1 changed to match "key maker" language
const HOMEPAGE_TITLE = "Key Maker Near Me Dubai | Key Shop Satwa | Lock Repair Satwa"
const HOMEPAGE_DESC  = "Key maker & key shop near me in Satwa, Dubai. Lock Repair Satwa: key duplication service from AED 50, car key cutting, door lock repair. 24/7 mobile locksmith. Rated 4.7★. Call +971 52 642 6161."

export const metadata: Metadata = {
  title: { absolute: HOMEPAGE_TITLE },
  description: HOMEPAGE_DESC,
  alternates: {
    canonical: SITE_URL,
    languages: { en: SITE_URL, 'x-default': SITE_URL },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    title: HOMEPAGE_TITLE,
    description: HOMEPAGE_DESC,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Lock Repair Satwa — Key Maker & Key Shop in Al Bada'a, Satwa Dubai",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: HOMEPAGE_TITLE,
    description: "Key maker & key shop in Satwa, Dubai. Key duplication service from AED 50, car key cutting, 24/7 locksmith. Rated 4.7★.",
    images: [DEFAULT_OG_IMAGE],
  },
}

// ── Website + SearchAction Schema ─────────────────────────────────────────────

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: BUSINESS_NAME,
  url: SITE_URL,
  description: BUSINESS_TAGLINE,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/services?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

// ── TODO: Replace with real, verbatim Google reviews from business owner ──────
// IMPORTANT: The reviews below are PLACEHOLDERS only. Do not publish these
// placeholder reviews on the live site. The business owner must supply real,
// verbatim review content with actual reviewer names and verified dates from
// Google Maps before going live.

const PLACEHOLDER_REVIEWS: Review[] = [
  // TODO: Replace with real Google reviews — contact business owner
]

// ── FAQ data — GEO/AIO/AEO optimised ─────────────────────────────────────────
// Questions mirror exact search queries and AI engine prompts. Answers are
// fact-dense with prices, times, brands, and location signals.

const FAQ_CATEGORIES = [
  {
    category: 'Pricing',
    faqs: [
      {
        q: 'How much does key duplication cost in Dubai?',
        a: 'Standard door key duplication starts from AED 50–150 at our Satwa shop or via mobile service. Car key duplication with transponder chip programming starts from AED 150–350. All prices are confirmed before work begins — call +971 52 642 6161 for an instant quote.',
      },
      {
        q: 'How much does car key replacement cost in Dubai?',
        a: 'Car key replacement when all keys are lost costs AED 400–900, depending on the car make, model, and key type. This includes cutting a new blade and programming the transponder from scratch using your vehicle\'s OBD port data. Call us with your car details for a specific quote.',
      },
      {
        q: 'How much does car key programming cost in Dubai?',
        a: 'Car key programming costs AED 300–700. Common models (Toyota, Nissan, Hyundai, Kia) are at the lower end; luxury European brands (BMW, Mercedes-Benz, Porsche, Land Rover, Audi) are at the higher end. Price is confirmed on the phone before any work starts.',
      },
      {
        q: 'Is a mobile locksmith cheaper than the dealership for a spare car key?',
        a: 'Yes — significantly. Dealership car key duplication typically costs AED 600–1,200, requires advance booking, and sometimes towing. Lock Repair Satwa cuts and programs a spare key at your location for AED 150–350 with same-day, no-appointment service anywhere in Dubai.',
      },
      {
        q: 'How much does a locksmith cost in Dubai?',
        a: 'Locksmith prices in Dubai: key duplication from AED 50, door lock repair from AED 100–300, metal door lock body change from AED 250–500, wooden door latch (patti) repair from AED 150, smart lock installation from AED 350–1,200, safe box opening from AED 200, emergency car unlock from AED 150. No hidden charges — price confirmed upfront.',
      },
      {
        q: 'How much does it cost to change a door lock in Dubai?',
        a: 'Door lock body change costs AED 250–500 for a metal door and AED 150–300 for a wooden door latch. This includes the new lock unit and fitting. Our mobile technician comes to your home or office. Call +971 52 642 6161 for a quote based on your door type.',
      },
    ],
  },
  {
    category: 'Availability & Response Time',
    faqs: [
      {
        q: 'Is there a 24/7 locksmith in Dubai?',
        a: 'Yes. Lock Repair Satwa provides 24/7 mobile locksmith service across all Dubai areas. The shop at D90, Al Bada\'a is open 7:00 AM – 11:30 PM daily. Emergency mobile response runs all night. Call +971 52 642 6161 any time — day or night.',
      },
      {
        q: 'How quickly can a locksmith reach me in Dubai?',
        a: 'We reach Al Satwa and Al Bada\'a in 5–10 minutes. For most other Dubai areas — Dubai Marina, JBR, Business Bay, Downtown Dubai, Deira, Jumeirah, JVC, Al Barsha, Palm Jumeirah — response time is 20–45 minutes. Call +971 52 642 6161 for a live ETA.',
      },
      {
        q: 'Are you open on Fridays and public holidays in Dubai?',
        a: 'Yes. Lock Repair Satwa is open 7 days a week, 365 days a year. The shop opens at 7:00 AM and closes at 11:30 PM daily, including Fridays and all UAE public holidays. Emergency mobile service operates 24/7 without exception.',
      },
      {
        q: 'How long does key duplication take?',
        a: 'A standard door key duplicate takes 5–10 minutes in our shop. A car key with a transponder chip takes 30–45 minutes including programming. We confirm the turnaround time when you call with your key type and vehicle details.',
      },
      {
        q: 'How long does car key programming take in Dubai?',
        a: 'Car key programming takes 30–60 minutes on-site. Common models (Toyota, Nissan) take 20–30 minutes. Luxury vehicles with advanced security systems (BMW, Mercedes-Benz, Porsche) may take 45–60 minutes. Our technician gives you a precise estimate after confirming your car details.',
      },
    ],
  },
  {
    category: 'Location & Service Area',
    faqs: [
      {
        q: 'Where is the nearest key shop to Al Satwa in Dubai?',
        a: 'Lock Repair Satwa at D90, Al Bada\'a is the closest key shop to Al Satwa — a 2–3 minute walk from Al Satwa Road, near Queen\'s Medical Centre and Al Diyafa Street. Open daily 7:00 AM – 11:30 PM for walk-in key cutting from AED 50.',
      },
      {
        q: 'Do you cover all areas of Dubai?',
        a: 'Yes. Mobile locksmith service is available across all major Dubai areas: Al Satwa, Al Bada\'a, Jumeirah, Dubai Marina, JBR, Downtown Dubai, Business Bay, DIFC, Deira, Bur Dubai, Al Barsha, JVC, JVT, Palm Jumeirah, Mirdif, Silicon Oasis, Al Quoz, Dubai Hills, Motor City, Discovery Gardens, International City, and more.',
      },
      {
        q: 'Do I need to visit your shop, or do you come to me?',
        a: 'Both options are available. The shop at D90, Al Bada\'a is open 7:00 AM – 11:30 PM for walk-in key cutting and duplication. For all other hours, or if you cannot travel, our mobile technician comes directly to you anywhere in Dubai — home, office, car park, or roadside. Mobile service is 24/7.',
      },
      {
        q: 'Is there a key maker near me in Satwa?',
        a: 'Yes. Lock Repair Satwa is the key maker closest to Al Satwa, based at D90, Al Bada\'a — 2 minutes from Satwa Road. We cut all types of keys on the spot: door keys from AED 50, car keys from AED 150. No appointment needed.',
      },
    ],
  },
  {
    category: 'Car Keys',
    faqs: [
      {
        q: 'Can you duplicate a car key without the original?',
        a: 'In most cases, no — duplication requires the original key as a template. However, if you have lost all your keys, we offer car key replacement (AED 400–900) that generates a completely new key using your vehicle\'s OBD port data — no original required.',
      },
      {
        q: 'Will a duplicated car key work with my car\'s immobiliser?',
        a: 'Yes. For transponder keys, we clone the chip signal to the new key so your car\'s immobiliser recognises it. For basic mechanical keys without chips, only the blade is cut. Every duplicated key is tested in your ignition and door locks before we leave.',
      },
      {
        q: 'Which car brands do you cover for key cutting and programming?',
        a: 'We cover 50+ brands: Toyota, Nissan, Honda, Mitsubishi, Mazda, BMW, Mercedes-Benz, Audi, Volkswagen, Land Rover, Jaguar, Porsche, Lexus, Infiniti, Ford, Chevrolet, GMC, Jeep, Hyundai, Kia, Tesla, Volvo, Subaru, Bentley, Rolls-Royce, and more. Call +971 52 642 6161 with your car details for confirmation.',
      },
      {
        q: 'I\'m locked out of my car in Dubai — what should I do?',
        a: 'Call Lock Repair Satwa immediately on +971 52 642 6161. Our mobile locksmith reaches most Dubai areas in 20–45 minutes (5–10 min in Satwa). We open car doors without damage in most cases. Available 24/7. Do not force the lock — it causes expensive damage to the door mechanism.',
      },
      {
        q: 'Can you make a new car key if I\'ve lost all my keys?',
        a: 'Yes. We specialise in lost-all-keys car key replacement across Dubai. Using OBD diagnostic equipment, we extract key data from your vehicle\'s ECU and program a completely new key — no original key required. Cost: AED 400–900 depending on the vehicle make and model.',
      },
      {
        q: 'Can you program car keys for BMW, Mercedes, or Audi in Dubai?',
        a: 'Yes. We program car keys for BMW, Mercedes-Benz, Audi, Volkswagen, and other European luxury brands using specialist OBD diagnostic tools. Pricing for European brand key programming is AED 500–900 depending on the model and key type. Call with your car details for a firm quote.',
      },
    ],
  },
  {
    category: 'Door Locks & Home Locksmith',
    faqs: [
      {
        q: 'I\'m locked out of my apartment in Dubai — can you help?',
        a: 'Yes. Call +971 52 642 6161 now. Our mobile technician will come to your address and open the lock non-destructively where possible. If the lock needs replacing, we carry standard UAE door lock bodies and can fit a new one in the same visit. Available 24/7 across all Dubai areas.',
      },
      {
        q: 'My door lock is stiff or broken — can you fix it?',
        a: 'Yes. We repair stiff cylinders, broken latches, faulty handles, and damaged lock bodies for wooden, metal, and aluminium doors. Metal door lock body change from AED 250; wooden door patti (latch) repair from AED 150. Mobile technician comes to you. Call +971 52 642 6161.',
      },
      {
        q: 'Can you install a smart lock in my Dubai apartment?',
        a: 'Yes. We supply and install smart locks — fingerprint, keypad, RFID card, and app-controlled — in Dubai apartments, villas, and offices. Installation starts from AED 350 including the lock unit. Same-day installation is available. Call +971 52 642 6161.',
      },
      {
        q: 'Should I change my locks when moving into a new Dubai apartment?',
        a: 'Yes — we strongly recommend it. Changing your cylinder or full lock body ensures previous tenants\' keys no longer work. Lock Repair Satwa replaces door locks from AED 250. Mobile technician comes to you. Call +971 52 642 6161 to book.',
      },
    ],
  },
  {
    category: 'Safes & Other Services',
    faqs: [
      {
        q: 'Can you open a safe without the combination or key?',
        a: 'Yes. Our safe technicians open safes non-destructively where possible (AED 200–400). If the mechanism has fully failed, we drill and replace the lock (AED 300–500). We handle hotel safes, home safes, floor safes, and commercial safes. Call +971 52 642 6161 with the brand and model.',
      },
      {
        q: 'Do you duplicate access cards and parking fobs in Dubai?',
        a: 'Yes. We duplicate 125kHz RFID access cards (building entry cards, parking cards, gym cards) on-site in minutes. Compatible with most standard UAE building access systems. From AED 50 per card. Call to confirm compatibility with your specific card system.',
      },
    ],
  },
  {
    category: 'Trust, Warranty & Payment',
    faqs: [
      {
        q: 'Are you a licensed locksmith in Dubai?',
        a: 'Yes. Lock Repair Satwa operates under a valid UAE trade licence. Our technicians are trained in automotive key programming and security hardware installation. For emergency jobs, we may ask for proof of vehicle ownership or residency — standard practice to protect our customers.',
      },
      {
        q: 'Do you charge extra for emergency or night-time calls?',
        a: 'We do not add emergency surcharges on most standard services. The price quoted over the phone is the price you pay. Some specialist services (rare key blanks, luxury car programming) may carry different rates — always disclosed upfront before any work begins.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept cash, credit card, and debit card. Bank transfer is available for commercial clients by prior arrangement. Payment is taken after the job is complete and you are satisfied — we do not take upfront payment for mobile call-outs.',
      },
      {
        q: 'Do you provide a warranty on locksmith work?',
        a: 'Yes. Key duplication: 7-day warranty — if a key fails due to a cutting error, we recut it free. Lock installation: 30-day workmanship warranty. Car key programming: 7-day warranty on transponder programming. Locks carry the manufacturer\'s product warranty.',
      },
    ],
  },
]

// FAQPage schema — all 27 Q&As structured for featured snippets and AI answer engines
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_CATEGORIES.flatMap(({ faqs }) =>
    faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    }))
  ),
}

// ── Featured locations (first 6) ──────────────────────────────────────────────

const featuredLocations = locations.slice(0, 6)

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────

export default async function HomePage() {
  const HOW_IT_WORKS = [
    {
      step: 1,
      icon: PhoneCall,
      title: 'Call or WhatsApp Us',
      description: 'Call +971 52 642 6161 or send a WhatsApp message. Tell us your location, key type or lock issue and the service you need. We confirm availability and give you an upfront price in under 2 minutes.',
    },
    {
      step: 2,
      icon: Wrench,
      title: 'We Come to You',
      description: "A trained mobile technician is dispatched immediately from our Al Bada'a base or nearest available unit. We reach most Dubai locations in 20–45 minutes — no need to tow your car or visit a workshop.",
    },
    {
      step: 3,
      icon: ThumbsUp,
      title: 'Problem Solved, On the Spot',
      description: 'Our technician carries professional key-cutting machines, OBD programming tools and diagnostic equipment. Most jobs are completed in a single visit — you get a tested, working key before we leave.',
    },
  ]

  const DIFFERENTIATORS = [
    { title: 'Physical Key Shop in Al Bada\'a', description: 'Walk in to our shop at D90, Al Bada\'a — open daily 7 AM to 11:30 PM — or call for mobile service anywhere in Dubai.' },
    { title: 'Daily Service 7 AM – 11:30 PM, 7 Days a Week', description: 'Open every day from 7:00 AM to 11:30 PM including weekends and public holidays.' },
    { title: '100% Mobile — We Come to You', description: 'No workshop visit needed. Our technicians carry all equipment directly to your location.' },
    { title: 'Dubai-Based & Dubai-Focused', description: "Headquartered in Al Bada'a, Dubai — we know every area and respond fast." },
    { title: 'Upfront, Transparent Pricing', description: 'You receive a firm quote before we start any work. No hidden fees, no surprises.' },
    { title: '50+ Car Brands Covered', description: 'From Toyota Land Cruisers to BMW, Mercedes-Benz, Tesla and everything in between.' },
  ]

  const SHOP_IMAGES = [
    {
      src: '/images/shop/locksmith-shop-satwa-al-badaa-dubai.webp',
      alt: "Lock Repair Satwa shop exterior in Al Bada'a — key maker and locksmith in Satwa Dubai",
      caption: 'Our Shop — Satwa',
    },
    {
      src: '/images/shop/padlock-collection-lock-shop-satwa-dubai.webp',
      alt: "Padlock and lock collection on display at Lock Repair Satwa, Al Bada'a Dubai",
      caption: 'Padlocks & Locks',
    },
    {
      src: '/images/shop/key-duplication-display-for-sale-satwa-dubai.webp',
      alt: 'Key duplication display stand showing duplicate keys for sale — Lock Repair Satwa, Dubai',
      caption: 'Keys for Sale',
    },
    {
      src: '/images/services/car-remote-key-blanks-locksmith-shop-dubai.webp',
      alt: 'Car remote key blanks and spare keys on display at Lock Repair Satwa locksmith shop, Dubai',
      caption: 'Car Key Blanks',
    },
    {
      src: '/images/shop/door-lock-handles-repair-shop-satwa-dubai.webp',
      alt: 'Door handles and lock hardware display at Lock Repair Satwa, Satwa Dubai',
      caption: 'Door Locks',
    },
    {
      src: '/images/shop/keychains-accessories-key-shop-satwa-dubai.webp',
      alt: 'Key accessories and keychains at Lock Repair Satwa key shop in Satwa, Dubai',
      caption: 'Accessories',
    },
  ]

  return (
    <>
      {/* Structured data */}
      <JsonLd data={websiteSchema} />
      <JsonLd data={faqSchema} />

      {/* WebPage + Speakable — signals AI Overviews & answer engines */}
      <WebPageSchema
        pageUrl={SITE_URL}
        pageId="homepage"
        name="Key Maker Near Me Dubai | Key Shop Satwa | Lock Repair Satwa"
        description="Key maker & key shop near me in Satwa, Dubai. Key duplication service from AED 50, car key cutting, door lock repair. 24/7 mobile locksmith. Rated 4.7★."
        breadcrumbs={[{ name: 'Home', url: SITE_URL }]}
        primaryImageUrl={`${SITE_URL}/images/shop/locksmith-shop-satwa-al-badaa-dubai.webp`}
        primaryImageAlt="Lock Repair Satwa key shop exterior in Al Bada'a, nearest key maker to Al Satwa Road, Dubai"
        dateModified={new Date().toISOString().split('T')[0]}
        images={[
          { url: `${SITE_URL}/images/shop/key-duplication-display-for-sale-satwa-dubai.webp`, caption: 'Key duplication display at Lock Repair Satwa key shop, Satwa Dubai' },
          { url: `${SITE_URL}/images/services/car-remote-key-blanks-locksmith-shop-dubai.webp`, caption: 'Car remote key blanks at Lock Repair Satwa locksmith shop, Dubai' },
          { url: `${SITE_URL}/images/shop/wire-key-rings-accessories-dubai.webp`, caption: 'Key accessories at Lock Repair Satwa, Satwa Dubai' },
        ]}
      />

      {/* HowTo schema — "How It Works" 3 steps: eligible for HowTo rich result */}
      <HowToSchema
        name="How to Get a Car Key Made or Locksmith Service in Dubai"
        description="Three simple steps to get a spare key cut, car key programmed, or lock repaired by Lock Repair Satwa — Dubai's key maker near me."
        totalTime="PT45M"
        pageUrl={`${SITE_URL}/#how-it-works`}
        steps={[
          {
            position: 1,
            name: 'Call or WhatsApp Us',
            text: 'Call +971 52 642 6161 or WhatsApp. Tell us your location, car make/model, and the key or lock issue. We confirm availability and quote an upfront price in under 2 minutes.',
          },
          {
            position: 2,
            name: 'We Come to You',
            text: "A trained mobile technician is dispatched from our Al Bada'a base. We reach most Dubai areas in 20–45 minutes — no towing, no workshop visit required.",
          },
          {
            position: 3,
            name: 'Problem Solved, On the Spot',
            text: 'Our technician carries professional key-cutting machines and OBD programming tools. Most jobs are completed in a single visit — you get a tested, working key before we leave.',
          },
        ]}
      />

      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <HeroSection
        title={
          <>
            Dubai&apos;s Key Maker &amp; Key Shop —{' '}
            <span className="text-gold-gradient">Satwa &amp; All Areas</span>
          </>
        }
        subtitle="Key duplication service from AED 50 · Car key cutting & programming · Door lock repair · Emergency locksmith 24/7 — mobile across all Dubai areas. Nearest key shop to Al Satwa Road."
        badge="Key Maker Near Me in Dubai — Key Shop Satwa"
        ctaLabel="View All 12 Services"
        ctaHref="/services"
        showTrustBar={false}
      />

      {/* ── Trust Bar ───────────────────────────────────────────────────────── */}
      <TrustBar dark />

      {/* ── 2. Services Section ─────────────────────────────────────────────── */}
      <section
        aria-labelledby="services-heading"
        className="py-16 sm:py-20 bg-background cv-auto"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold mb-4">
              Complete Service Range
            </span>
            <h2
              id="services-heading"
              className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              All Car Key &amp; Locksmith Services in Dubai
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              From a simple spare key to full smart key programming for a European luxury car — we handle every automotive key and lock need across Dubai, on-site at your location.
            </p>
          </div>

          {/* Services grid — all 12 */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                featured={service.slug === 'emergency-car-unlock' || service.slug === 'car-key-replacement'}
              />
            ))}
          </div>

          {/* View all CTA */}
          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 3. Price Guide ──────────────────────────────────────────────────── */}
      <section
        aria-labelledby="prices-heading"
        className="py-16 sm:py-20 bg-muted/40 border-y border-border cv-auto"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold mb-4">
              Transparent Pricing
            </span>
            <h2
              id="prices-heading"
              className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Dubai Locksmith Price Guide 2025
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
              All prices confirmed upfront before work starts. No hidden fees. Prices in AED — inclusive of labour, parts, and on-site service across Dubai.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/60">
                  <th className="px-5 py-3.5 text-left font-semibold text-foreground">Service</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-foreground">Price (AED)</th>
                  <th className="hidden sm:table-cell px-5 py-3.5 text-left font-semibold text-foreground">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { service: 'Standard door key duplication', price: '50–150', note: 'In-shop, ready in 5–10 min' },
                  { service: 'Car key duplication (with chip)', price: '150–350', note: 'Transponder cloned + tested' },
                  { service: 'Car key replacement (all keys lost)', price: '400–900', note: 'OBD programming, no original needed' },
                  { service: 'Remote / smart key programming', price: '300–700', note: 'All brands, on-site' },
                  { service: 'Flip key replacement', price: '250–550', note: 'Cut + programmed' },
                  { service: 'Emergency car unlock', price: '150–350', note: 'No damage, 24/7' },
                  { service: 'Door lock body change (metal door)', price: '250–500', note: 'New lock supplied + fitted' },
                  { service: 'Door latch repair (wooden door)', price: '150–300', note: 'Same-day mobile visit' },
                  { service: 'Smart door lock installation', price: '350–1,200', note: 'Fingerprint/keypad/RFID' },
                  { service: 'Safe box opening', price: '200–500', note: 'Non-destructive where possible' },
                  { service: 'Parking remote / access card copy', price: '50–200', note: '125kHz RFID compatible' },
                  { service: 'Car battery replacement', price: '250–600', note: 'On-site, all makes' },
                ].map(({ service, price, note }) => (
                  <tr key={service} className="hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3.5 font-medium text-foreground">{service}</td>
                    <td className="px-5 py-3.5 text-right font-semibold text-brand-gold whitespace-nowrap">{price}</td>
                    <td className="hidden sm:table-cell px-5 py-3.5 text-muted-foreground">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-center text-xs text-muted-foreground">
            Prices vary by car make/model and lock type. Call <a href={PHONE_HREF} className="font-semibold text-brand-gold hover:underline">{PHONE_DISPLAY}</a> for a free, instant quote.
          </p>
        </div>
      </section>

      {/* ── 4. How It Works ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="how-it-works-heading"
        className="py-16 sm:py-20 bg-muted/40 border-y border-border cv-auto"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold mb-4">
              Lock Repair Satwa · Simple Process
            </span>
            <h2
              id="how-it-works-heading"
              className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              How Our Dubai Locksmith Service Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Three steps from stranded to sorted. No towing, no dealership, no waiting days.
            </p>
          </div>

          {/* Steps */}
          <div className="relative grid gap-8 md:grid-cols-3">
            {/* Connecting line (desktop) */}
            <div
              aria-hidden="true"
              className="absolute top-10 left-1/3 right-1/3 hidden h-px bg-gradient-to-r from-brand-gold/20 via-brand-gold/60 to-brand-gold/20 md:block"
            />

            {HOW_IT_WORKS.map(({ step, icon: Icon, title, description }) => (
              <div
                key={step}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-navy dark:bg-brand-navy-light ring-4 ring-brand-gold/30 shadow-lg">
                  <Icon className="h-8 w-8 text-brand-gold" aria-hidden="true" />
                  {/* Step number badge */}
                  <span
                    className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-brand-gold text-xs font-bold text-brand-navy"
                    aria-hidden="true"
                  >
                    {step}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-xs">
                  {description}
                </p>
              </div>
            ))}
          </div>

          {/* Emergency CTA below steps */}
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="primary" className="btn-pulse w-full sm:w-auto" asChild>
              <a href={PHONE_HREF} aria-label={`Call Lock Repair Satwa: ${PHONE_DISPLAY}`}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                {`Call Now — ${PHONE_DISPLAY}`}
              </a>
            </Button>
            <Button size="lg" variant="whatsapp" className="w-full sm:w-auto" asChild>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Lock Repair Satwa"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Services in Action Gallery ──────────────────────────────────────── */}
      <section
        aria-labelledby="gallery-heading"
        className="py-16 sm:py-20 bg-background cv-auto"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold mb-4">
              Real Work — Real Results
            </span>
            <h2
              id="gallery-heading"
              className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Our Services in Action
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
              From a Nissan door key to a Bentley smart key — tap any photo to see the full service and pricing.
            </p>
          </div>

          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {services
              .filter((s) => s.heroImage)
              .map((service, index) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-border shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`${service.title} — ${formatPriceRange(service.pricing.min, service.pricing.max)}`}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={service.heroImage!}
                      alt={service.heroImageAlt ?? `${service.title} in Dubai — Lock Repair Satwa`}
                      width={400}
                      height={300}
                      priority={index < 2}
                      loading={index < 2 ? undefined : 'lazy'}
                      sizes="(max-width: 640px) calc(50vw - 24px), (max-width: 1024px) calc(50vw - 24px), calc(25vw - 24px)"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                      {formatPriceRange(service.pricing.min, service.pricing.max)}
                    </p>
                    <p className="text-sm font-semibold text-white leading-snug mt-0.5">
                      {service.title}
                    </p>
                  </div>
                  {/* Hover arrow badge */}
                  <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md">
                    <ArrowRight className="h-3.5 w-3.5 text-brand-navy" aria-hidden="true" />
                  </div>
                </Link>
              ))}
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            All services available 24/7 · Mobile across all Dubai areas · Price confirmed before work starts
          </p>
        </div>
      </section>

      {/* ── Satwa Key Shop Section ──────────────────────────────────────────── */}
      <section
        aria-labelledby="satwa-section-heading"
        className="py-16 sm:py-20 bg-brand-navy text-white cv-auto"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/15 px-3 py-1 text-xs font-semibold text-brand-gold mb-5">
                Key Shop — Al Satwa, Dubai
              </span>
              <h2 id="satwa-section-heading" className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                The Nearest Key Maker to Al Satwa
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/75">
                Lock Repair Satwa at D90, Al Bada&apos;a is the closest key shop and locksmith to Al Satwa Road, Queen&apos;s Medical Centre, and Al Diyafa Street. Walk in for instant key duplication, or call for mobile service anywhere in Dubai.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Key duplication & key cutting from AED 50',
                  'Car key maker — all brands, on-site programming',
                  'Door lock body change from AED 250',
                  'Wooden door latch (patti) repair from AED 150',
                  'Smart lock installation & access cards',
                  'Emergency lockout service — 5-10 min response in Satwa',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="primary" size="lg" className="btn-pulse" asChild>
                  <a href={PHONE_HREF}>
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    {`Call Now — ${PHONE_DISPLAY}`}
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/locations/al-satwa">
                    Al Satwa Service Page
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {SHOP_IMAGES.map(({ src, alt, caption }) => (
                <figure key={src} className="group">
                  <div className="aspect-square overflow-hidden rounded-xl border border-white/10">
                    <Image
                      src={src}
                      alt={alt}
                      width={220}
                      height={220}
                      loading="lazy"
                      sizes="(max-width: 1024px) 33vw, 220px"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="mt-1.5 text-center text-[11px] font-medium text-white/50 truncate">
                    {caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Recent Work Section ─────────────────────────────────────────────── */}
      <section
        aria-labelledby="recent-work-heading"
        className="py-16 sm:py-20 bg-muted/40 border-y border-border cv-auto"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold mb-4">
              Real Jobs · Dubai
            </span>
            <h2
              id="recent-work-heading"
              className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Recent Locksmith Projects in Dubai
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
              Photos from real completed jobs — Mercedes smart key replacements, Eufy smart lock installations, electronic door lock repairs, safe box openings, car key programming, and door lock repairs across Dubai.
            </p>
          </div>

          <div className="grid gap-5 grid-cols-2 sm:grid-cols-3">
            {/* Job 1 — Nissan Car Key Replacement */}
            <Link
              href="/services/car-key-replacement"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Nissan Car Key Replacement in Dubai"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <Image
                  src="/images/nissan-car-key-replacement-satwa-dubai.webp"
                  alt="Nissan car key replacement Dubai — new Nissan transponder key cut and programmed by Lock Repair Satwa auto locksmith in Satwa"
                  width={400}
                  height={533}
                  loading="lazy"
                  sizes="(max-width: 640px) calc(50vw - 20px), (max-width: 1024px) calc(33vw - 24px), 380px"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                  Al Satwa, Dubai
                </p>
                <p className="mt-1 text-sm font-semibold text-white leading-snug">
                  Nissan Car Key Replacement
                </p>
              </div>
            </Link>

            {/* Job 2 — Safe Box Opening Service */}
            <Link
              href="/services/safe-box-services"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Safe Box Opening Service Dubai"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <Image
                  src="/images/safe-box-opening-drilled-dubai.webp"
                  alt="Safe box opening service Dubai — commercial safe drilled and opened by Lock Repair Satwa safe specialist, internal lock bolts visible"
                  width={400}
                  height={533}
                  loading="lazy"
                  sizes="(max-width: 640px) calc(50vw - 20px), (max-width: 1024px) calc(33vw - 24px), 380px"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                  Dubai, UAE
                </p>
                <p className="mt-1 text-sm font-semibold text-white leading-snug">
                  Safe Box Opening Service
                </p>
              </div>
            </Link>

            {/* Job 3 — Smart Door Lock Installation */}
            <Link
              href="/services/smart-door-locks"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Smart Door Lock Installation Dubai"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <Image
                  src="/images/smart-door-lock-fingerprint-reader-dubai.webp"
                  alt="Smart door lock installation Dubai — black fingerprint and touch-panel smart lock fitted on wooden apartment door by Lock Repair Satwa"
                  width={400}
                  height={533}
                  loading="lazy"
                  sizes="(max-width: 640px) calc(50vw - 20px), (max-width: 1024px) calc(33vw - 24px), 380px"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                  Dubai Marina
                </p>
                <p className="mt-1 text-sm font-semibold text-white leading-snug">
                  Smart Door Lock Installation
                </p>
              </div>
            </Link>

            {/* Job 4 — Digital Door Lock with Fingerprint */}
            <Link
              href="/services/smart-door-locks"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Digital Door Lock Installation Dubai"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <Image
                  src="/images/digital-door-lock-fingerprint-installation-dubai.webp"
                  alt="Digital door lock installation Dubai — premium fingerprint smart lock with touchpad and doorbell sensor installed on wooden door"
                  width={400}
                  height={533}
                  loading="lazy"
                  sizes="(max-width: 640px) calc(50vw - 20px), (max-width: 1024px) calc(33vw - 24px), 380px"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                  JVC, Dubai
                </p>
                <p className="mt-1 text-sm font-semibold text-white leading-snug">
                  Digital Door Lock Installation
                </p>
              </div>
            </Link>

            {/* Job 5 — Safe Lock Replacement */}
            <Link
              href="/services/safe-box-services"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Safe Lock Replacement Dubai"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <Image
                  src="/images/safe-lock-replacement-broken-cylinder-dubai.webp"
                  alt="Safe lock replacement Dubai — damaged safe cylinder drilled out and replaced by Lock Repair Satwa safe technician"
                  width={400}
                  height={533}
                  loading="lazy"
                  sizes="(max-width: 640px) calc(50vw - 20px), (max-width: 1024px) calc(33vw - 24px), 380px"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                  Al Barsha, Dubai
                </p>
                <p className="mt-1 text-sm font-semibold text-white leading-snug">
                  Safe Lock Replacement
                </p>
              </div>
            </Link>

            {/* Job 6 — Door Lock Repair */}
            <Link
              href="/services/lock-repair"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Door Lock Repair &amp; Replacement Dubai"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <Image
                  src="/images/door-lock-repair-dubai-lock-replacement-satwa.jpg.webp"
                  alt="Door lock repair and replacement Dubai — lock mechanism serviced by Lock Repair Satwa, Al Bada'a Satwa"
                  width={400}
                  height={533}
                  loading="lazy"
                  sizes="(max-width: 640px) calc(50vw - 20px), (max-width: 1024px) calc(33vw - 24px), 380px"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                  Al Bada&apos;a, Satwa — Dubai
                </p>
                <p className="mt-1 text-sm font-semibold text-white leading-snug">
                  Door Lock Repair &amp; Replacement
                </p>
              </div>
            </Link>

            {/* Job 7 — Mercedes-Benz Smart Key Replacement */}
            <Link
              href="/services/car-key-replacement"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Mercedes-Benz Smart Key Replacement Dubai"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <Image
                  src="/images/mercedes-benz-smart-key-replacement-dubai.webp"
                  alt="Mercedes-Benz smart key replacement Dubai — new Mercedes proximity key programmed on-site by Lock Repair Satwa auto locksmith, Al Bada'a"
                  width={400}
                  height={533}
                  loading="lazy"
                  sizes="(max-width: 640px) calc(50vw - 20px), (max-width: 1024px) calc(33vw - 24px), 380px"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                  Dubai, UAE
                </p>
                <p className="mt-1 text-sm font-semibold text-white leading-snug">
                  Mercedes-Benz Smart Key Replacement
                </p>
              </div>
            </Link>

            {/* Job 8 — Mercedes Car Key Cutting & Duplication */}
            <Link
              href="/services/car-key-duplication"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Mercedes Car Key Cutting and Duplication Dubai"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <Image
                  src="/images/mercedes-car-key-cutting-duplication-dubai.webp"
                  alt="Mercedes car key cutting and duplication Dubai — Mercedes blade key precision-cut and programmed by Lock Repair Satwa mobile locksmith"
                  width={400}
                  height={533}
                  loading="lazy"
                  sizes="(max-width: 640px) calc(50vw - 20px), (max-width: 1024px) calc(33vw - 24px), 380px"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                  Dubai, UAE
                </p>
                <p className="mt-1 text-sm font-semibold text-white leading-snug">
                  Mercedes Key Cutting &amp; Duplication
                </p>
              </div>
            </Link>

            {/* Job 9 — Luxury Car Key Programming */}
            <Link
              href="/services/remote-smart-key-programming"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Luxury Car Key Programming Service Dubai"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <Image
                  src="/images/luxury-car-key-programming-service-dubai.webp"
                  alt="Luxury car key programming service Dubai — premium European car smart key programmed on-site by Lock Repair Satwa OBD specialist"
                  width={400}
                  height={533}
                  loading="lazy"
                  sizes="(max-width: 640px) calc(50vw - 20px), (max-width: 1024px) calc(33vw - 24px), 380px"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                  Dubai, UAE
                </p>
                <p className="mt-1 text-sm font-semibold text-white leading-snug">
                  Luxury Car Key Programming
                </p>
              </div>
            </Link>

            {/* Job 10 — Eufy Smart Lock Installation */}
            <Link
              href="/services/smart-door-locks"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Eufy Smart Lock Installation Al Satwa Dubai"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <Image
                  src="/images/eufy-smart-lock-installation-al-satwa-dubai.webp"
                  alt="Eufy smart lock installation Al Satwa Dubai — Eufy video doorbell smart lock fitted on apartment door by Lock Repair Satwa near Al Satwa Road"
                  width={400}
                  height={533}
                  loading="lazy"
                  sizes="(max-width: 640px) calc(50vw - 20px), (max-width: 1024px) calc(33vw - 24px), 380px"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                  Al Satwa, Dubai
                </p>
                <p className="mt-1 text-sm font-semibold text-white leading-snug">
                  Eufy Smart Lock Installation
                </p>
              </div>
            </Link>

            {/* Job 11 — Electronic Door Lock Repair */}
            <Link
              href="/services/lock-repair"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Electronic Door Lock Repair Al Bada'a Dubai"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <Image
                  src="/images/electronic-door-lock-repair-al-bada-dubai.webp"
                  alt="Electronic door lock repair Al Bada'a Dubai — digital smart lock fault-diagnosed and repaired by Lock Repair Satwa technician at D90, Al Bada'a"
                  width={400}
                  height={533}
                  loading="lazy"
                  sizes="(max-width: 640px) calc(50vw - 20px), (max-width: 1024px) calc(33vw - 24px), 380px"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                  Al Bada&apos;a, Dubai
                </p>
                <p className="mt-1 text-sm font-semibold text-white leading-snug">
                  Electronic Door Lock Repair
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. Locations Section ────────────────────────────────────────────── */}
      <section
        aria-labelledby="locations-heading"
        className="py-16 sm:py-20 bg-background cv-auto"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold mb-4">
              All Dubai Areas Covered
            </span>
            <h2
              id="locations-heading"
              className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              We Serve Every Corner of Dubai
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              From our Al Bada&apos;a base, our mobile technicians reach 15+ major Dubai areas. Whether you&apos;re in Downtown, Dubai Marina, JVC or International City — we come to you.
            </p>
          </div>

          {/* Location cards grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredLocations.map((location) => (
              <LocationCard key={location.slug} location={location} />
            ))}
          </div>

          {/* All service areas — crawlable text for Google local SEO */}
          <div className="mt-10 rounded-xl border border-border bg-muted/30 px-5 py-4 text-center">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">All 24+ Areas Covered</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Al Satwa · Al Bada&apos;a · Downtown Dubai · Business Bay · DIFC · Dubai Marina · JBR ·
              Jumeirah Lakes Towers · Jumeirah Village Circle · Jumeirah Village Triangle ·
              Al Barsha · Al Barsha South · Dubai Hills Estate · Palm Jumeirah · Deira ·
              Bur Dubai · Al Quoz · Motor City · Mirdif · Dubai Silicon Oasis ·
              Discovery Gardens · International City · Jebel Ali Village · Al Khawaneej
            </p>
          </div>

          {/* View all locations */}
          <div className="mt-6 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/locations">
                {`View All ${locations.length} Service Areas`}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 6. About / E-E-A-T Section ──────────────────────────────────────── */}
      <section
        aria-labelledby="about-heading"
        className="py-16 sm:py-20 bg-brand-navy text-white cv-auto"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left: copy */}
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/15 px-3 py-1 text-xs font-semibold text-brand-gold mb-5">
                About Lock Repair Satwa
              </span>
              <h2
                id="about-heading"
                className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                Dubai&apos;s Professional Locksmith — Satwa &amp; Al Bada&apos;a
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/75">
                Lock Repair Satwa is a professional locksmith based at D90, Al Bada&apos;a, Dubai. We serve all major Dubai areas with expert lock repair, car key duplication, and security solutions — without the days of waiting and premium markup that franchised dealerships charge. Rated 4.7★ on Google by our customers.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/75">
                Our technicians carry professional key-cutting machines, OBD programming equipment and a comprehensive stock of key blanks for 50+ vehicle brands. We cover every type of locksmith service — from a basic spare key to full smart key programming for the latest European luxury vehicles — all performed at your location.
              </p>

              {/* Brand tags */}
              <div className="mt-6">
                <p className="text-sm font-semibold text-white/50 mb-3 uppercase tracking-wide">
                  Supported Makes Include
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Toyota', 'Nissan', 'BMW', 'Mercedes-Benz', 'Audi', 'Land Rover', 'Ford', 'GMC', 'Hyundai', 'Lexus', 'Porsche', 'Tesla'].map((brand) => (
                    <span
                      key={brand}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
                    >
                      {brand}
                    </span>
                  ))}
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                    + 40 more
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <Button variant="primary" size="lg" className="btn-pulse" asChild>
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: differentiator cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {DIFFERENTIATORS.map(({ title, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-semibold text-white text-sm">{title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-white/60">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Reviews Section ──────────────────────────────────────────────── */}
      {PLACEHOLDER_REVIEWS.length > 0 && (
        <section
          aria-labelledby="reviews-section-heading"
          className="py-16 sm:py-20 bg-muted/40 border-y border-border"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ReviewsSection reviews={PLACEHOLDER_REVIEWS} />
          </div>
        </section>
      )}

      {/* Placeholder notice — visible only until real reviews are added */}
      {PLACEHOLDER_REVIEWS.length === 0 && (
        <section className="py-12 bg-muted/30 border-y border-border cv-auto" aria-label="Customer reviews">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <p className="text-sm text-muted-foreground">
              {/* TODO: Replace this section with ReviewsSection once real Google reviews are provided by the business owner */}
              Customer reviews coming soon — rated 4.7★ on Google Maps.{' '}
              <a
                href="https://maps.google.com/?q=Lock+Repair+Satwa+Al+Bada%27a+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-brand-gold transition-colors"
              >
                Read our reviews on Google
              </a>
            </p>
          </div>
        </section>
      )}

      {/* ── 7. Find Us — Map Section ────────────────────────────────────────── */}
      <section
        aria-labelledby="map-heading"
        className="py-16 sm:py-20 bg-muted/30 border-y border-border cv-auto"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold mb-4">
              Visit Us
            </span>
            <h2
              id="map-heading"
              className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Find Us in Al Bada&apos;a, Dubai
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
              Walk in for instant key cutting, or call for mobile locksmith service anywhere in Dubai.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_320px] items-start">
            {/* Map iframe */}
            <div className="overflow-hidden rounded-2xl border border-border shadow-md aspect-[16/9] lg:aspect-auto lg:h-[420px]">
              <iframe
                src="https://www.google.com/maps?q=25.23341473023507,55.275106874155064&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lock Repair Satwa location on Google Maps — D90, Al Bada'a, Dubai"
              />
            </div>

            {/* Address + CTA card */}
            <div className="rounded-2xl border border-border bg-background p-6 shadow-sm lg:sticky lg:top-24">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-5">
                Our Location
              </h3>
              <address className="not-italic space-y-4 text-sm text-muted-foreground">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                  <span>
                    <strong className="block text-foreground mb-0.5">Lock Repair Satwa</strong>
                    D90, Al Bada&apos;a<br />
                    Dubai, UAE
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                  <span>
                    <strong className="block text-foreground mb-0.5">Hours</strong>
                    Shop: 7:00 AM – 11:30 PM daily<br />
                    <span className="text-green-600 dark:text-green-400 font-medium">
                      Mobile service: 24/7
                    </span>
                  </span>
                </p>
              </address>

              <div className="mt-6 flex flex-col gap-3">
                <Button size="md" variant="primary" className="btn-pulse w-full" asChild>
                  <a href={PHONE_HREF} aria-label={`Call Lock Repair Satwa: ${PHONE_DISPLAY}`}>
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {`Call ${PHONE_DISPLAY}`}
                  </a>
                </Button>
                <Button size="md" variant="whatsapp" className="w-full" asChild>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp Lock Repair Satwa"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    WhatsApp Us
                  </a>
                </Button>
                <a
                  href="https://maps.google.com/?q=Lock+Repair+Satwa+Al+Bada%27a+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-xs text-muted-foreground hover:text-brand-gold transition-colors underline underline-offset-2"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. FAQ Section ──────────────────────────────────────────────────── */}
      <section
        aria-labelledby="faq-heading"
        className="py-16 sm:py-20 bg-background border-y border-border cv-auto"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold mb-4">
              Lock Repair Satwa · Dubai FAQ
            </span>
            <h2
              id="faq-heading"
              className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Locksmith FAQs — Dubai Prices, Response Times &amp; Coverage
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto page-description">
              Everything you need to know about key cutting, car key programming, lock repair, and locksmith services in Dubai — prices, response times, locations, and more.
            </p>
          </div>

          {/* FAQ categories */}
          <div className="space-y-10">
            {FAQ_CATEGORIES.map(({ category, faqs }) => (
              <div key={category}>
                <h3 className="mb-4 text-base font-semibold uppercase tracking-widest text-brand-gold">
                  {category}
                </h3>
                <div className="space-y-2">
                  {faqs.map(({ q, a }, i) => (
                    <details
                      key={q}
                      open={i === 0}
                      className="group rounded-xl border border-border bg-card shadow-sm"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
                        <span className="text-sm font-semibold text-foreground">{q}</span>
                        <ChevronDown
                          className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                          aria-hidden="true"
                        />
                      </summary>
                      <div className="px-5 pb-5">
                        <p className="direct-answer text-sm leading-relaxed text-muted-foreground">
                          {a}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* View all FAQs link */}
          <div className="mt-8 text-center">
            <a
              href="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              View all 60+ FAQs →
            </a>
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 rounded-2xl border border-brand-gold/20 bg-brand-gold/5 px-6 py-8 text-center">
            <p className="text-base font-semibold text-foreground">
              Have a question not answered here?
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Call or WhatsApp us — we respond in under 2 minutes, 24/7.
            </p>
            <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button variant="primary" size="lg" className="btn-pulse w-full sm:w-auto" asChild>
                <a href={PHONE_HREF} aria-label={`Call Lock Repair Satwa: ${PHONE_DISPLAY}`}>
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  {`Call ${PHONE_DISPLAY}`}
                </a>
              </Button>
              <Button variant="whatsapp" size="lg" className="w-full sm:w-auto" asChild>
                <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Lock Repair Satwa">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. Final CTA ────────────────────────────────────────────────────── */}
      <CtaSection
        heading="Need a Locksmith or Spare Key? Call Now."
        subtext="Lock Repair Satwa (D90, Al Bada'a, Dubai) is a professional locksmith serving all Dubai areas, open daily 24/7. We come to you — at home, the office, the mall or the roadside."
      />
    </>
  )
}
