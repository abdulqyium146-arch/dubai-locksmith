import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MessageCircle, ChevronDown } from 'lucide-react'
import { BreadcrumbNav } from '@/components/sections/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { Button } from '@/components/ui/Button'
import {
  BUSINESS_NAME,
  SITE_URL,
  DEFAULT_OG_IMAGE,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
} from '@/lib/constants'

export const metadata: Metadata = {
  title: { absolute: `Locksmith FAQs Dubai | ${BUSINESS_NAME} — All Questions Answered` },
  description: `Every locksmith question answered for Dubai. Prices, response times, car key programming, door lock repair, smart locks, safe opening, emergency lockout — Lock Repair Satwa, Al Bada'a, Satwa.`,
  alternates: {
    canonical: `${SITE_URL}/faq`,
    languages: { en: `${SITE_URL}/faq`, 'x-default': `${SITE_URL}/faq` },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: `${SITE_URL}/faq`,
    siteName: BUSINESS_NAME,
    title: `Locksmith FAQs Dubai | ${BUSINESS_NAME}`,
    description: `Prices, response times, car keys, door locks, smart locks, emergency lockout — every locksmith question answered for Dubai by Lock Repair Satwa.`,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `${BUSINESS_NAME} — Locksmith FAQs Dubai` }],
  },
}

// ── FAQ data ─────────────────────────────────────────────────────────────────
// Sourced from Google People Also Ask + real customer enquiries.
// All answers are Dubai-specific with AED prices and local context.

const FAQ_CATEGORIES = [
  {
    category: 'About Lock Repair Satwa',
    faqs: [
      {
        q: 'What is Lock Repair Satwa?',
        a: "Lock Repair Satwa is a professional locksmith and key shop located at D90, Al Bada'a, Dubai — immediately adjacent to Al Satwa. We provide key duplication from AED 50, car key programming, door lock repair, smart lock installation, safe opening, and 24/7 emergency mobile locksmith service across all Dubai areas. Rated 4.7★ on Google.",
      },
      {
        q: "Where is Lock Repair Satwa located?",
        a: "Our shop is at D90, Al Bada'a, Dubai — a 2–3 minute walk from Al Satwa Road, near Queen's Medical Centre and Al Diyafa Street. GPS coordinates: 25.2334° N, 55.2751° E. Open daily 7:00 AM – 11:30 PM for walk-in service.",
      },
      {
        q: 'What are Lock Repair Satwa opening hours?',
        a: 'The shop is open 7:00 AM – 11:30 PM daily, including Fridays and UAE public holidays. Mobile emergency locksmith service runs 24 hours a day, 7 days a week, 365 days a year — including Eid, National Day, and all other public holidays.',
      },
      {
        q: 'How do I contact Lock Repair Satwa?',
        a: `Call or WhatsApp +971 52 642 6161 any time — day or night. For emergency lockouts, call immediately and we will dispatch a mobile technician to your location. For non-urgent enquiries, WhatsApp is fastest. Email: info@locksmith-dubai.com.`,
      },
      {
        q: 'Is Lock Repair Satwa licensed to operate in Dubai?',
        a: 'Yes. Lock Repair Satwa operates under a valid UAE trade licence. Our technicians are trained in automotive key programming and security hardware installation. For emergency lockout jobs, we may request proof of vehicle ownership or residency — standard security practice to protect our customers.',
      },
    ],
  },
  {
    category: 'Locksmith Prices in Dubai (AED)',
    faqs: [
      {
        q: 'How much does a locksmith charge per hour in Dubai?',
        a: 'Lock Repair Satwa does not charge by the hour — we quote a fixed price per job, confirmed before work begins. This means no surprise bills. Indicative prices: key duplication from AED 50, door lock repair from AED 100–300, car key programming AED 300–700, emergency car unlock from AED 150, smart lock installation from AED 350.',
      },
      {
        q: 'How much does a full lock change cost in Dubai?',
        a: 'A full door lock body change in Dubai costs AED 250–500 for metal doors and AED 150–300 for wooden door latches. This includes the new lock unit and fitting by a mobile technician at your location. Mortise lock full sets with handle: AED 350–700. Call +971 52 642 6161 for a quote based on your door type.',
      },
      {
        q: 'What is the cheapest way to change locks in Dubai?',
        a: "The cheapest option is rekeying — we change the internal pins of your existing lock cylinder so old keys no longer work, and cut new keys. Rekeying costs AED 100–200 per lock and keeps your existing hardware. Full lock replacement costs AED 250–500. Rekeying is ideal when moving into a new Dubai apartment — the lock body is undamaged, you just don't want previous tenants' keys to work.",
      },
      {
        q: 'How much does it cost to change door locks in Dubai?',
        a: 'Door lock change costs vary by type: standard cylinder change AED 150–250, deadbolt installation AED 200–400, mortise lock change AED 300–600, smart lock installation AED 350–1,200. All prices include the hardware unit and fitting. Call +971 52 642 6161 for a firm quote.',
      },
      {
        q: 'How expensive is a new lock in Dubai?',
        a: 'New lock prices in Dubai: basic padlocks AED 50–200, cylinder deadbolts AED 150–400, mortise locks AED 200–600, high-security locks AED 350–800, smart fingerprint locks AED 350–1,200. Lock Repair Satwa supplies and installs all types — price includes hardware and fitting at your location.',
      },
      {
        q: 'Is a locksmith cheaper than a dealership for car keys in Dubai?',
        a: 'Yes — significantly. UAE dealerships charge AED 600–1,200+ for a spare car key and require advance booking (often days). Lock Repair Satwa cuts and programs a spare key at your location for AED 150–350 on the same day without an appointment. For lost-all-keys replacement: AED 400–900 vs. AED 1,500–3,000 at dealerships.',
      },
      {
        q: 'Do you charge extra for emergency or night calls in Dubai?',
        a: 'We do not add emergency surcharges on most standard services. The price quoted on the phone is the price you pay. Some specialist services (rare key blanks, luxury European car programming) may carry different rates — always disclosed upfront before any work begins. No payment is taken before the job is done.',
      },
    ],
  },
  {
    category: 'Emergency Lockout — Dubai',
    faqs: [
      {
        q: "I'm locked out of my apartment in Dubai — what should I do?",
        a: 'Call Lock Repair Satwa immediately on +971 52 642 6161. Our mobile technician will come to your address and open the lock non-destructively in most cases. We operate 24/7 including nights and Fridays. Do not attempt to force the lock — it causes expensive damage to the door mechanism that costs significantly more than a locksmith call-out.',
      },
      {
        q: 'Can we open a door lock without a key in Dubai?',
        a: 'Yes. A professional locksmith can open a door lock without the key using specialist picks, decoder tools, or bypass methods — without damaging the door or lock in the vast majority of cases. For standard Dubai apartment and villa door locks, this takes 5–20 minutes. Call +971 52 642 6161 for 24/7 emergency lockout service.',
      },
      {
        q: "How do I open my door if the key is locked inside?",
        a: 'Call a locksmith immediately — +971 52 642 6161. Attempting to force the door yourself (credit card, screwdriver) usually damages the latch or frame. Our technicians can non-destructively open most Dubai apartment doors in 5–15 minutes. We operate 24/7.',
      },
      {
        q: "I'm locked out of my car in Dubai — what should I do?",
        a: 'Call Lock Repair Satwa on +971 52 642 6161. Our mobile locksmith will reach you in 5–10 minutes in Satwa or 20–45 minutes across Dubai. We open car doors without damage using professional slim jim and air wedge tools. Never force the door — it bends the frame and voids insurance. Available 24/7 across all Dubai areas.',
      },
      {
        q: 'Do I need to call the police if locked out in Dubai?',
        a: 'No — the police do not provide property lockout services in Dubai. Call a locksmith directly. Lock Repair Satwa is faster (20–45 min response), available 24/7, and far cheaper than any alternative. Call +971 52 642 6161.',
      },
      {
        q: 'How to force a lock open?',
        a: "We strongly recommend against forcing a lock open yourself — this almost always damages the lock body, door frame, or door, turning a AED 150 locksmith call into a AED 500+ repair job. A professional locksmith can open most locks non-destructively. For emergencies in Dubai, call +971 52 642 6161 anytime — we'll reach you in 20–45 minutes.",
      },
      {
        q: 'What should I do if my key breaks inside the lock?',
        a: 'Do not try to push it further in or use another key — this jams both pieces. Call a locksmith. We use specialist broken key extractors to remove the fragment without damaging the cylinder in most cases. If the cylinder is damaged, we replace it. Broken key extraction from AED 100. Call +971 52 642 6161.',
      },
    ],
  },
  {
    category: 'Car Keys & Automotive Locksmith',
    faqs: [
      {
        q: 'Can a locksmith program a car key in Dubai?',
        a: 'Yes. Lock Repair Satwa programs transponder keys, smart keys, flip keys, and remote keys for 50+ car brands using OBD diagnostic equipment. Car key programming costs AED 300–700 depending on vehicle make and model. We come to your location — no towing required. Available 24/7.',
      },
      {
        q: 'What is a transponder key?',
        a: "A transponder key contains a small microchip that communicates with your car's immobiliser. When you insert the key, the car's ECU reads the chip — if it matches, the immobiliser disarms and the engine starts. A blank cut key without the chip will turn in the ignition but not start the car. Transponder key programming requires specialist equipment and costs AED 250–350 on top of the key cutting.",
      },
      {
        q: 'Can you make a car key without the original in Dubai?',
        a: "Yes. If you've lost all your keys, we generate a replacement via OBD port programming — no original key required. We extract key data from your vehicle's ECU and program a completely new key. This is car key replacement (AED 400–900) as opposed to duplication (AED 150–350 when you have the original). Proof of vehicle ownership (registration card/Mulkiya) required.",
      },
      {
        q: 'Which car brands do you cover for key programming in Dubai?',
        a: 'Toyota, Nissan, Honda, Mitsubishi, Mazda, BMW, Mercedes-Benz, Audi, Volkswagen, Land Rover, Jaguar, Porsche, Lexus, Infiniti, Ford, Chevrolet, GMC, Jeep, Hyundai, Kia, Tesla, Volvo, Subaru, Bentley, Rolls-Royce, Ferrari, Lamborghini, and 30+ more. Call +971 52 642 6161 with your car make, model, and year for confirmation.',
      },
      {
        q: 'What is the difference between key duplication and key replacement?',
        a: 'Key duplication: copies your existing working key as a template — AED 150–350, takes 15–45 min. Key replacement: generates a completely new key when all originals are lost, using your vehicle OBD data — AED 400–900, takes 45–90 min. Duplication always requires the original. Replacement does not.',
      },
      {
        q: 'Can you programme car keys for BMW, Mercedes-Benz, or Audi in Dubai?',
        a: 'Yes. We program car keys for BMW, Mercedes-Benz, Audi, Volkswagen, Porsche, Land Rover, and other European luxury brands using specialist OBD diagnostic tools. European brand key programming costs AED 500–900 depending on the model and security generation. We confirm the price before any work starts.',
      },
      {
        q: 'How long does car key programming take in Dubai?',
        a: 'Common models (Toyota, Nissan, Hyundai): 20–30 minutes on-site. Mid-range (Honda, Ford, Kia): 30–45 minutes. Luxury European (BMW, Mercedes, Audi, Porsche): 45–90 minutes due to more complex security systems. Our technician gives a precise estimate after confirming your car details.',
      },
    ],
  },
  {
    category: 'Door Locks — Types, Repair & Installation',
    faqs: [
      {
        q: 'What are the 7 types of locks?',
        a: 'The seven main lock types: (1) Deadbolts — solid bolt, highest mechanical security; (2) Mortise locks — installed inside door edge, standard for UAE villas and offices; (3) Padlocks — portable, free-standing; (4) Knob locks — round handles with built-in cylinder; (5) Lever handle locks — push-handle, common in commercial buildings; (6) Cam locks — small cylindrical locks for cabinets and mailboxes; (7) Smart locks — electronic keyless systems with fingerprint, PIN, or app access. Lock Repair Satwa supplies and installs all seven types.',
      },
      {
        q: 'What is the best type of front door lock for a Dubai apartment?',
        a: "For Dubai apartments, we recommend: Primary — a digital smart lock (fingerprint + PIN + app + emergency key), AED 350–800. Secondary — a quality deadbolt. This combination gives keyless daily convenience plus mechanical backup. For villas: a high-security mortise lock with anti-pick cylinder is the main door standard. Lock Repair Satwa installs both and advises on the right spec for your door.",
      },
      {
        q: 'Which locks are best for home security in Dubai?',
        a: "Best for Dubai homes: (1) Smart fingerprint locks — best convenience + security, AED 350–1,200; (2) Grade 1 certified deadbolts — best mechanical security, AED 200–500; (3) Anti-pick mortise locks with hardened cylinder — best for villa main doors, AED 300–700. Avoid single knob locks on exterior doors — they provide minimal security. Lock Repair Satwa can advise on the right combination for your property.",
      },
      {
        q: 'What is a 7-lever lock?',
        a: 'A 7-lever lock is a high-security mechanical lock using seven internal metal plates (levers) that must all be lifted to precise heights by the correct key simultaneously for the bolt to move. More levers = significantly harder to pick. 7-lever locks are common in heavy padlocks, safes, and high-security main doors. Lock Repair Satwa stocks and fits 7-lever systems for high-security applications.',
      },
      {
        q: 'Are locks easy to change in Dubai?',
        a: 'Simple knob locks can be DIY-swapped with just a screwdriver. However, the most common UAE door types — cylinder mortise locks and euro cylinder deadbolts — require precise alignment and correct sizing. Improper installation creates security gaps and premature wear. Lock Repair Satwa fits any lock correctly from AED 100 labour, at your location, same day.',
      },
      {
        q: 'How to fix a door lock in Dubai?',
        a: 'For a stiff key: spray dry graphite or silicone lubricant into the keyhole — avoid WD-40 long-term as it gums up. For a latch that misses the strike plate: tighten door hinges or adjust the strike plate position. For a completely failed lock: call a locksmith. Lock Repair Satwa repairs door locks from AED 100 or replaces them from AED 250, at your home or office.',
      },
      {
        q: 'How to fix a door lock cylinder?',
        a: 'Lubricate with graphite or PTFE spray (not WD-40). If jammed with a broken key, use needle-nose pliers or a broken key extractor. If the cylinder is failed: remove the retaining screw on the door edge, insert the key, turn it slightly to release the cam, and pull the cylinder out. Measure the existing cylinder (e.g., 30/30, 35/35) and buy a matching replacement. Or call Lock Repair Satwa — cylinder replacement from AED 150 including parts.',
      },
      {
        q: 'What causes a door lock to become stiff in Dubai?',
        a: "The most common causes in Dubai: (1) Fine dust and sand accumulation in the keyway — very common in the UAE climate, (2) Lack of lubrication — use dry graphite, not oil, (3) Worn internal springs or pins, (4) Door misalignment from building settlement or humidity. Regular dry lubrication every 6–12 months prevents most stiffness. If stiffness persists after lubrication, call a locksmith — it may indicate a worn cylinder.",
      },
      {
        q: 'Should I change my locks when moving into a new Dubai apartment?',
        a: "Yes — always. Previous tenants (or their family, friends, or building contractors) may have copies of keys you don't know about. Lock Repair Satwa replaces apartment door locks from AED 250 or rekeyes from AED 100–200. A one-time cost for ongoing peace of mind. We can do it the day you move in.",
      },
      {
        q: 'Can I change a lock by myself in Dubai?',
        a: 'Standard knob locks can be DIY-replaced with a screwdriver and a matching replacement set. However, the most common UAE apartment and villa door types use mortise locks or euro cylinders that need precise sizing and fitting. Professional fitting costs AED 100 labour and ensures the lock works perfectly, aligns with the strike plate, and the door closes smoothly. Lock Repair Satwa comes to you — no workshop visit needed.',
      },
      {
        q: 'How to remove a door lock?',
        a: 'For a standard knob or handle lock: (1) Find and remove screws on the interior faceplate, (2) Pull both inner and outer handle pieces off, (3) Unscrew the latch plate on the door edge, (4) Slide the latch mechanism out. For cylinder locks: locate the retaining screw on the door edge, remove it, then pull the cylinder with the key turned slightly. Lock Repair Satwa removes and replaces any lock type from AED 100.',
      },
    ],
  },
  {
    category: 'Smart Locks — Dubai Apartments & Villas',
    faqs: [
      {
        q: 'What are smart locks and should I get one for my Dubai apartment?',
        a: "Smart locks are electronic door locks that use fingerprints, PIN codes, RFID cards, or smartphone apps instead of (or alongside) traditional keys. For Dubai apartments they offer: no key to lose, temporary access codes for guests/maids/maintenance, tamper alarms, access logs, and battery backup with emergency key slot. Lock Repair Satwa installs smart locks from AED 350 — same-day installation.",
      },
      {
        q: 'What brands of smart lock do you recommend for Dubai?',
        a: "We install and recommend: Samsung SHP and SHS series (most reliable, heat-tested, widely serviced in UAE), Philips EasyKey series, Yale Assure and ENTR, Schlage Encode, and other RFID/fingerprint brands. Entry-level: AED 350–500. Mid-range: AED 500–800. Premium: AED 800–1,200. We advise on the right model for your door type and help configure it on-site.",
      },
      {
        q: "Do smart locks work reliably in Dubai's heat?",
        a: "Quality smart locks are rated to operate in temperatures up to 60–70°C, which covers Dubai's summer climate. Cheap unrated locks can have battery drain, sensor errors, or motor failures in extreme heat. Lock Repair Satwa only installs brands with verified UAE climate ratings. All installations come with manufacturer warranty and we provide after-installation support.",
      },
      {
        q: 'How do I install a smart lock in my Dubai apartment?',
        a: "Smart lock installation requires matching the lock to your existing door preparation (backset size, door thickness, handle position). Incorrect sizing means the lock won't fit or the door won't close properly. Lock Repair Satwa measures your door, confirms the compatible model, and installs it fully configured — fingerprints enrolled, PIN set, emergency key tested. Installation from AED 350 including the lock unit.",
      },
      {
        q: "What happens if my smart lock battery dies in Dubai?",
        a: "Quality smart locks have: (1) Low battery warning (weeks in advance), (2) Emergency key slot (physical key backup), (3) 9V battery jumpstart port on some models (place a 9V battery against the contacts to power up temporarily). Lock Repair Satwa recommends changing batteries every 6–12 months as preventive maintenance. We also supply batteries and can service your smart lock on-site.",
      },
    ],
  },
  {
    category: 'Rekeying vs Lock Replacement',
    faqs: [
      {
        q: 'What is rekeying and when should I use it in Dubai?',
        a: "Rekeying changes the internal pin configuration of your existing lock cylinder so old keys no longer work, and new keys are cut to the new configuration. Cost: AED 100–200 per lock. Use rekeying when: moving into a new Dubai property, losing a key, or a former employee/tenant had access. If the lock body itself is damaged, stiff beyond lubrication, or you want to upgrade security — opt for full replacement instead.",
      },
      {
        q: 'Can a lock be rekeyed multiple times?',
        a: 'Yes. Most standard pin-tumbler cylinders (the type used in 95% of UAE doors) can be rekeyed multiple times without replacing the hardware. Each rekeying changes the pin heights to match a new key. Lock Repair Satwa rekeyes most standard UAE door cylinders from AED 100. We recommend rekeying rather than replacement whenever the existing hardware is still in good condition.',
      },
      {
        q: 'What is the difference between rekeying and changing a lock?',
        a: 'Rekeying: changes only the internal pin configuration — keeps the same lock body and handles, costs AED 100–200, takes 20–30 minutes. Lock change: replaces the entire lock body with new hardware — better if the lock is damaged, old, or you want a security upgrade, costs AED 250–500, takes 30–60 minutes. Lock Repair Satwa advises which is right for your situation.',
      },
    ],
  },
  {
    category: 'Safe Box Services',
    faqs: [
      {
        q: 'Can you open a safe without the combination or key in Dubai?',
        a: 'Yes. Our safe technicians use non-destructive methods (manipulation, bypass, or scope) where possible — AED 200–400. If the mechanism is fully seized, we drill and replace the lock — AED 300–500. We service hotel room safes, home floor and wall safes, document safes, gun safes, and commercial cash safes. Call +971 52 642 6161 with the brand and model for a quote.',
      },
      {
        q: 'What types of safes does Lock Repair Satwa service?',
        a: "We open and service all common safe types in Dubai: hotel room safes (common in apartments and villas rented furnished), home floor and wall safes, fireproof document safes, gun safes, depository safes, biometric safes, and commercial cash safes. We also supply and install new safes at competitive prices.",
      },
      {
        q: 'How do I choose a safe for my Dubai home?',
        a: "For a Dubai home: choose a fireproof safe rated at least 30 minutes at 1,000°C for documents. For valuables: a floor safe bolted to the ground prevents removal. Electronic combination with emergency key backup is the most practical for daily use. Size to your actual contents — most people underestimate how quickly safes fill up. Lock Repair Satwa supplies, delivers, and installs safes at your home. Call +971 52 642 6161 for advice.",
      },
      {
        q: 'Do you duplicate access cards and parking fobs in Dubai?',
        a: 'Yes. We duplicate 125kHz RFID access cards (building entry cards, parking cards, gym cards, office access) on-site in minutes. Compatible with most standard UAE building access systems. From AED 50 per card. 13.56MHz cards (Mifare) — call to confirm compatibility. Bring the original card for same-day duplication.',
      },
    ],
  },
  {
    category: 'Lock Types — Expert Guide',
    faqs: [
      {
        q: 'What are common door lock problems?',
        a: "The five most common Dubai door lock problems: (1) Stiff key — dust/debris in keyway or worn pins; fix with dry lubricant, (2) Key broken inside — call a locksmith immediately for extraction (AED 100+), (3) Door won't latch — latch misalignment from building settlement or warping; adjust strike plate, (4) Lock won't open — worn or seized mechanism; repair or replace, (5) Smart lock won't respond — low battery or sensor error; replace battery first. Call +971 52 642 6161 for same-day diagnosis and repair.",
      },
      {
        q: 'What is a master key and how does it work?',
        a: 'A master key system uses locks where each door has its own individual key, but one master key opens all doors in the group. Achieved by adding a master wafer between certain pin pairs — both the change key height and the master key height create a shear line. Lock Repair Satwa designs and installs master key systems for apartment buildings, offices, and commercial complexes in Dubai.',
      },
      {
        q: 'Which key opens every lock?',
        a: "A skeleton key (a key with the warded section removed) can open multiple warded locks of the same system. For modern pin-tumbler locks (95% of Dubai doors), no single key opens all locks — each is independently keyed. A master key in a master key system opens all locks within that specific system only. There is no universal key for modern security locks.",
      },
      {
        q: 'Can a lock be opened by different keys?',
        a: 'Standard locks: one key per lock. Master key systems: both the individual (change) key and a master key open the lock — achieved by adding a third pin (master wafer) that creates a second shear line. Keyed-alike systems: multiple locks share the same key profile so one key opens all of them — common in Dubai apartment main door and building entry sets. Lock Repair Satwa can set up any of these configurations.',
      },
      {
        q: 'What locks can a locksmith not open?',
        a: "A professional locksmith can open almost any standard residential or commercial lock without destruction. The most challenging cases are: (1) Advanced biometric safes that require manufacturer factory reset codes, (2) High-security electronic locks where the firmware is corrupted, (3) Specialist bank vault systems requiring certified vault technicians. For all standard Dubai apartment locks, villa locks, car locks, padlocks, and most safes — Lock Repair Satwa opens them non-destructively.",
      },
      {
        q: 'What is a C-type padlock?',
        a: "A C-type padlock (also called a chain-specific padlock) has a body shaped to accept chain links or cables directly through its shackle gap — allowing it to secure a chain without a separate padlock hasp. Used for securing bicycles, motorcycles, gates, and storage units. Lock Repair Satwa supplies padlocks of all types including C-type and heavy-duty anti-cut models from AED 50.",
      },
      {
        q: 'How long do door locks last in Dubai?',
        a: "Quality locks last 10–20 years under normal use. Dubai's climate — high humidity in summer and fine sand — accelerates corrosion and wear in cheaper locks. Use stainless steel or marine-grade hardware for exterior installations. Signs a lock needs replacing: persistent stiffness after lubrication, visible corrosion on the cylinder, rattling mechanism, key no longer engages smoothly. Regular dry lubrication every 6–12 months extends life significantly.",
      },
    ],
  },
  {
    category: 'Security Advice for Dubai Residents',
    faqs: [
      {
        q: 'What is the best way to secure my Dubai apartment front door?',
        a: "Best security setup for a Dubai apartment: (1) Smart fingerprint lock as primary entry — keyless, tamper alarm, access log; (2) Deadbolt as secondary mechanical lock; (3) Strike plate reinforced with 7cm+ screws (most UAE apartments use short screws easily kicked in); (4) Door chain for when you're inside. Lock Repair Satwa can implement all of this in a single visit from AED 350.",
      },
      {
        q: 'Can a locksmith open a car without damaging it in Dubai?',
        a: 'Yes. Lock Repair Satwa uses professional slim jim tools, air wedge kits, and long-reach tools designed specifically for non-destructive car opening. We successfully open car doors without damage in the vast majority of cases across all common UAE vehicle types (Toyota, Nissan, Ford, Lexus, and more). Available 24/7 — call +971 52 642 6161.',
      },
      {
        q: 'How do I make my Dubai villa more secure?',
        a: "For Dubai villas: (1) Upgrade main entrance to an anti-pick, anti-drill mortise lock with reinforced strike plate; (2) Add a smart lock for convenience and access logging; (3) Ensure all side/back doors have deadbolts; (4) Change locks on all doors when moving in — you don't know who has keys; (5) Consider a CCTV/smart intercom integration. Lock Repair Satwa can audit your villa's security and recommend upgrades. Call +971 52 642 6161.",
      },
      {
        q: 'What should I do if I suspect my locks have been tampered with in Dubai?',
        a: 'Do not use the lock and call a locksmith for inspection. Signs of tampering: fresh scratches around the keyway, a key that suddenly fits loosely, or a cylinder that wobbles. We inspect for signs of picking, bumping, or forced entry and replace compromised cylinders. Call +971 52 642 6161 — we can inspect and replace the same day.',
      },
    ],
  },
]

// FAQPage schema
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

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}/faq#webpage`,
  url: `${SITE_URL}/faq`,
  name: `Locksmith FAQs Dubai | ${BUSINESS_NAME}`,
  description: "Every locksmith question answered for Dubai — prices, response times, car keys, door locks, smart locks, safe opening, emergency lockout.",
  inLanguage: 'en',
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#lock-repair-satwa` },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.direct-answer', '.page-description'],
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${SITE_URL}/faq` },
    ],
  },
}

const totalFaqs = FAQ_CATEGORIES.reduce((sum, cat) => sum + cat.faqs.length, 0)

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={webPageSchema} />

      <BreadcrumbNav
        items={[
          { name: 'Home', href: '/' },
          { name: 'FAQ', href: '/faq' },
        ]}
      />

      <main>
        {/* Hero */}
        <section className="bg-brand-navy py-14 sm:py-20 text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/15 px-3 py-1 text-xs font-semibold text-brand-gold mb-5">
              {totalFaqs} Questions Answered
            </span>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Locksmith FAQs — Dubai
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/75 max-w-2xl mx-auto page-description direct-answer">
              Every question about key cutting, car key programming, door lock repair, smart locks, safe opening,
              and emergency locksmith service in Dubai — answered with exact AED prices and real response times
              by {BUSINESS_NAME}, Al Bada&apos;a, Satwa.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button variant="primary" size="lg" className="btn-pulse w-full sm:w-auto" asChild>
                <a href={PHONE_HREF}>
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  {`Call ${PHONE_DISPLAY}`}
                </a>
              </Button>
              <Button variant="whatsapp" size="lg" className="w-full sm:w-auto" asChild>
                <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Category quick-nav */}
        <nav aria-label="FAQ categories" className="border-b border-border bg-muted/40 py-4">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {FAQ_CATEGORIES.map(({ category }) => (
                <a
                  key={category}
                  href={`#${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground hover:border-brand-gold hover:text-brand-gold transition-colors"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* FAQ Categories */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
            {FAQ_CATEGORIES.map(({ category, faqs }) => (
              <div
                key={category}
                id={category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                className="scroll-mt-24"
              >
                <h2 className="mb-5 text-base font-semibold uppercase tracking-widest text-brand-gold border-b border-brand-gold/20 pb-2">
                  {category}
                </h2>
                <div className="space-y-2">
                  {faqs.map(({ q, a }, i) => (
                    <details
                      key={q}
                      open={i === 0}
                      className="group rounded-xl border border-border bg-card shadow-sm"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
                        <span className="text-sm font-semibold text-foreground leading-snug">{q}</span>
                        <ChevronDown
                          className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                          aria-hidden="true"
                        />
                      </summary>
                      <div className="px-5 pb-5 pt-1">
                        <p className="direct-answer text-sm leading-relaxed text-muted-foreground">{a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-14 bg-brand-navy text-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Still Have a Question? Call Us.
            </h2>
            <p className="mt-3 text-base text-white/70">
              Lock Repair Satwa responds in under 2 minutes — 24 hours a day, 7 days a week.
              D90, Al Bada&apos;a, Dubai.
            </p>
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button variant="primary" size="lg" className="btn-pulse w-full sm:w-auto" asChild>
                <a href={PHONE_HREF}>
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  {`Call ${PHONE_DISPLAY}`}
                </a>
              </Button>
              <Button variant="whatsapp" size="lg" className="w-full sm:w-auto" asChild>
                <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/50">
              <Link href="/services" className="hover:text-brand-gold transition-colors">All Services</Link>
              <Link href="/locations" className="hover:text-brand-gold transition-colors">Service Areas</Link>
              <Link href="/contact" className="hover:text-brand-gold transition-colors">Contact</Link>
              <Link href="/booking" className="hover:text-brand-gold transition-colors">Book Online</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
