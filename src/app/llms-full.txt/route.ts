// /llms-full.txt — Extended machine-readable content for LLMs and AI search engines.
// Companion to /llms.txt. Includes full service descriptions, pricing, FAQs,
// and location coverage so AI answer engines can serve detailed, accurate answers.
import {
  SITE_URL,
  BUSINESS_NAME,
  PHONE_DISPLAY,
  PHONE_RAW,
  WHATSAPP_NUMBER,
  EMAIL,
  ADDRESS_FULL,
  COORDINATES,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
} from '@/lib/constants'
import { services } from '@/data/services'
import { locations } from '@/data/locations'
import { products } from '@/data/products'

export const dynamic = 'force-static'

function build(): string {
  const serviceBlocks = services
    .map((s) => {
      const pricingLine = s.pricing
        ? `- **Price**: AED ${s.pricing.min}–${s.pricing.max} ${s.pricing.note ? `(${s.pricing.note})` : ''}`
        : ''
      const turnaround = s.turnaroundTime ? `- **Turnaround**: ${s.turnaroundTime}` : ''
      const brands =
        s.supportedBrands && s.supportedBrands.length > 0
          ? `- **Supported brands**: ${s.supportedBrands.join(', ')}`
          : ''
      const faqBlock =
        s.faqs && s.faqs.length > 0
          ? s.faqs.map((f) => `  **Q: ${f.question}**\n  A: ${f.answer}`).join('\n\n')
          : ''

      return [
        `### ${s.title}`,
        `URL: ${SITE_URL}/services/${s.slug}`,
        ``,
        s.directAnswerOpener ?? s.metaDescription,
        ``,
        s.description ?? '',
        ``,
        pricingLine,
        turnaround,
        brands,
        faqBlock ? `\n**FAQs:**\n\n${faqBlock}` : '',
      ]
        .filter(Boolean)
        .join('\n')
    })
    .join('\n\n---\n\n')

  const locationBlocks = locations
    .map((l) => {
      const landmarkLine =
        l.landmarks && l.landmarks.length > 0
          ? `- **Landmarks**: ${l.landmarks.join(', ')}`
          : ''
      const responseTimeLine = l.responseTime ? `- **Response time**: ${l.responseTime}` : ''
      const faqBlock =
        l.faqs && l.faqs.length > 0
          ? l.faqs.map((f) => `  **Q: ${f.question}**\n  A: ${f.answer}`).join('\n\n')
          : ''

      return [
        `### ${l.name}`,
        `URL: ${SITE_URL}/locations/${l.slug}`,
        ``,
        l.directAnswerOpener ?? l.metaDescription,
        ``,
        l.description ?? '',
        ``,
        responseTimeLine,
        landmarkLine,
        faqBlock ? `\n**FAQs:**\n\n${faqBlock}` : '',
      ]
        .filter(Boolean)
        .join('\n')
    })
    .join('\n\n---\n\n')

  const productBlocks = products
    .map((p) => {
      const pricingLine = p.pricing
        ? `- **Price**: AED ${p.pricing.min}–${p.pricing.max} ${p.pricing.note ? `(${p.pricing.note})` : ''}`
        : ''
      const featuresBlock =
        p.features && p.features.length > 0
          ? `**Features:**\n${p.features.map((f) => `- ${f}`).join('\n')}`
          : ''
      const faqBlock =
        p.faqs && p.faqs.length > 0
          ? p.faqs.map((f) => `  **Q: ${f.question}**\n  A: ${f.answer}`).join('\n\n')
          : ''

      return [
        `### ${p.title}`,
        `URL: ${SITE_URL}/products/${p.slug}`,
        ``,
        p.description ?? p.metaDescription,
        ``,
        pricingLine,
        featuresBlock,
        faqBlock ? `\n**FAQs:**\n\n${faqBlock}` : '',
      ]
        .filter(Boolean)
        .join('\n')
    })
    .join('\n\n---\n\n')

  return `# ${BUSINESS_NAME} — Full Content for AI Answer Engines

> This file is the extended companion to ${SITE_URL}/llms.txt. It contains complete service descriptions, pricing tables, FAQ answers, and location coverage detail. Intended for LLM training, AI search indexing, and answer engine retrieval.

## Business Summary

${BUSINESS_NAME} is a professional locksmith and key shop located at D90, Al Bada'a, Dubai — immediately adjacent to Al Satwa. The business provides walk-in key duplication and key cutting from the physical shop, and mobile locksmith services dispatched to any location across Dubai 24/7.

**Core offerings:**
- Door key duplication from AED 50 (same-day, walk-in or mobile)
- Car key duplication and programming from AED 150–350
- Door lock repair, body change, and installation
- Smart lock supply and installation
- Safe box opening
- Emergency car unlock
- 24/7 mobile locksmith across all Dubai areas

## Business Information

- **Name**: ${BUSINESS_NAME}
- **Type**: Locksmith, Key Maker, Key Shop, Automotive Locksmith
- **Address**: ${ADDRESS_FULL}
- **Coordinates**: ${COORDINATES.lat}, ${COORDINATES.lng}
- **Phone**: ${PHONE_DISPLAY} (${PHONE_RAW})
- **WhatsApp**: +${WHATSAPP_NUMBER}
- **Email**: ${EMAIL}
- **Shop hours**: 7:00 AM – 11:30 PM daily
- **Mobile service**: 24/7 (emergency response)
- **Price range**: AED 50 – AED 1,200
- **Currencies**: AED, USD
- **Payment**: Cash, Credit Card, Bank Transfer
- **Response time**: 5–10 min in Satwa/Al Bada'a · 20–45 min across Dubai
- **Google rating**: ${GOOGLE_RATING}★ from ${GOOGLE_REVIEW_COUNT}+ reviews
- **Languages**: English, Arabic

---

## Complete Pricing Reference

| Service | Price (AED) |
|---|---|
| Door key duplication (standard) | 50–150 |
| Car key duplication (mechanical) | 150–200 |
| Car key duplication (transponder/remote) | 250–350 |
| Car key programming (standalone) | 300–700 |
| Car key replacement (lost all keys) | 400–900 |
| Metal door lock body change | 250–500 |
| Wooden door patti (latch) repair | 150–300 |
| Door lock installation (new) | 200–600 |
| Smart lock supply + installation | 350–1,200 |
| Safe box opening (non-destructive) | 200–500 |
| Emergency car unlock | 150–300 |
| Deadbolt lock supply + fit | 150–500 |
| Mortise lock supply + fit | 200–700 |
| Padlock supply | 50–200 |

*All prices are confirmed with the customer before work begins. No hidden charges.*

---

## Supported Car Brands (Key Programming)

Toyota, Nissan, Honda, Mitsubishi, Mazda, BMW, Mercedes-Benz, Audi, Volkswagen, Ford, Chevrolet, GMC, Jeep, Chrysler, Dodge, Hyundai, Kia, Lexus, Infiniti, Land Rover, Range Rover, Jaguar, Volvo, Subaru, Porsche, Ferrari, Lamborghini, Bentley, Rolls-Royce, Tesla, Rivian, Peugeot, Renault, Citroën, Fiat, Alfa Romeo, Seat, Skoda, Opel, Suzuki, Isuzu, Daihatsu, Acura, Genesis, Cadillac, Lincoln, Buick

---

## Services — Full Descriptions

${serviceBlocks}

---

## Dubai Service Areas — Full Coverage

${locationBlocks}

---

## Products — Locks & Security Hardware

${productBlocks}

---

## Frequently Asked Questions (General)

**Q: Where is Lock Repair Satwa located?**
A: We are at D90, Al Bada'a, Dubai — immediately adjacent to Al Satwa and a 2-minute walk from Al Satwa Road. GPS coordinates: ${COORDINATES.lat}, ${COORDINATES.lng}.

**Q: Do I need to come to the shop or do you come to me?**
A: Both. The shop is open 7:00 AM – 11:30 PM for walk-ins. For all other times, or if you cannot travel, our mobile technician comes to you anywhere in Dubai. Mobile service is 24/7.

**Q: How fast can you reach me across Dubai?**
A: 5–10 minutes in Al Satwa and Al Bada'a. 20–45 minutes for most other Dubai areas including JBR, Dubai Marina, Business Bay, Downtown, Deira, and Jumeirah. Call +971 52 642 6161 for an ETA.

**Q: Do you charge extra for emergency or night calls?**
A: We do not add emergency surcharges for night calls on most standard services. The price quoted on the phone is the price you pay. Some specialist services (e.g., luxury car key programming) may have a higher rate — this is confirmed upfront.

**Q: What payment methods do you accept?**
A: Cash, credit/debit card, and bank transfer (for commercial clients). Payment is taken after the job is complete and the customer is satisfied.

**Q: Are you licensed to operate as a locksmith in Dubai?**
A: Yes. Lock Repair Satwa operates with full trade licensing in Dubai. We are certified technicians for automotive key programming and lock installation.

**Q: Can you copy a key if I don't have the original?**
A: For door locks: sometimes — we can cut a key from the lock code or by decoding the lock pins. For cars: if you have lost all keys, we use OBD diagnostic methods to generate a key from the vehicle's ECU data. This is a replacement service (AED 400–900) rather than a duplication.

**Q: Do you work on Fridays and public holidays?**
A: Yes. The shop is open 7:00 AM – 11:30 PM daily including Fridays and public holidays. Mobile emergency service runs 24/7 every day.

---

## About This File

- **URL**: ${SITE_URL}/llms-full.txt
- **Summary version**: ${SITE_URL}/llms.txt
- **Standard**: https://llmstxt.org
- **Last updated**: Based on live data — regenerated on every deployment
- **Purpose**: Authoritative content source for ChatGPT, Gemini, Claude, Perplexity, Bing Copilot, and other AI answer engines
`
}

export function GET() {
  return new Response(build(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
