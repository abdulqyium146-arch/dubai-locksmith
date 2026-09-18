// ─────────────────────────────────────────────────────────────────────────────
// Lock repair service — Car Brand Data
// Every faqs[], commonIssues[], and uniqueIntro must be brand-specific.
// Fields marked "// TODO: verify" need human review before publishing.
// ─────────────────────────────────────────────────────────────────────────────
import type { CarBrand } from '@/types'

export const carBrands: CarBrand[] = [
  // ── 1. Toyota ──────────────────────────────────────────────────────────────
  {
    slug: 'toyota',
    name: 'Toyota',
    originCountry: 'Japan',
    icon: '🚗',
    popularModelsUAE: [
      'Land Cruiser 200', 'Land Cruiser 300', 'Prado 150',
      'Fortuner', 'Hilux', 'Camry', 'Corolla', 'RAV4', 'CHR', 'Yaris',
    ],
    keySystems: [
      '4C transponder chip (pre-2003, mechanical remote)',
      'G chip / ID47 40-bit transponder (2003–2014 smart key)',
      'H chip / DST80 AES-128 encrypted smart key (2015+)',
      'Toyota Smart Key System with Proximity Detection (push-button start)',
    ],
    commonIssues: [
      'Smart key battery failure causing intermittent start refusal — symptoms often mistaken for immobiliser fault',
      'Land Cruiser 300 (2021+) H-chip AES rejects generic aftermarket blanks — OEM blank required',
      'G-chip pairing reset after ECU battery disconnect requires OBDII re-initialization',
      'Worn key blade on high-mileage Prado/Land Cruiser damaging the ignition barrel',
      'Toyota all-keys-lost: DST80-AES (2015+) requires security login via OBDII — not simple to clone',
    ],
    transponderChipTypes: [
      '4C (pre-2003)',
      'G chip / ID47 40-bit (2003–2014)',
      'H chip / DST80 AES-128 (2015+)',
    ],
    priceRangeAED: [
      { service: 'Key Duplication (with existing key)', min: 150, max: 350, turnaround: '20–30 min' },
      { service: 'Smart Key Replacement — G-chip models', min: 450, max: 750, turnaround: '30–60 min' },
      { service: 'Smart Key Replacement — H-chip AES (LandCruiser 300, RAV4 2015+)', min: 650, max: 950, turnaround: '45–90 min' },
      { service: 'Transponder Programming (existing blade)', min: 300, max: 500, turnaround: '20–40 min' },
      { service: 'Emergency Car Unlock', min: 200, max: 350, turnaround: '20–40 min' },
    ],
    turnaroundTime: '20–90 minutes',
    oemVsAftermarket: 'For Toyota models up to 2014 using the G-chip (40-bit) system, quality aftermarket key shells with professionally programmed G-chip transponders are reliable and cost 40–60 % less than dealer-sourced OEM keys. For Land Cruiser 300 series (2021+) and other 2015+ H-chip AES models, the encryption algorithm validates that the blank carries a factory-seeded key identifier — generic aftermarket chips fail enrolment. Lock repair service stocks both OEM-sourced blanks for H-chip models and quality aftermarket shells for G-chip vehicles, and confirms which applies to your specific model year before ordering.',
    faqs: [
      {
        question: 'Can you programme a Toyota Land Cruiser key without going to a Toyota dealer?',
        answer: 'Yes, for all Land Cruiser models up to and including the 200 series (2021 build). Our OBDII equipment performs key enrolment on-site in 30–60 minutes. For the Land Cruiser 300 series (2021+) with DST80 AES-128 encryption, we can also programme keys but require an OEM-sourced blank rather than a generic chip — the process takes 45–90 minutes on-site.',
      },
      {
        question: 'How much does a Toyota smart key replacement cost in Dubai?',
        answer: 'Toyota smart key replacement in Dubai ranges from AED 450 to AED 950. G-chip models (Camry, Corolla, Fortuner up to 2014) cost AED 450–750. H-chip AES models (2015+ RAV4, Prado, Land Cruiser 300) cost AED 650–950 due to the AES encryption requiring more advanced programming steps and an OEM blank.',
      },
      {
        question: 'What is the difference between a Toyota G chip and H chip key?',
        answer: 'The G chip (2003–2014) is a 40-bit transponder that can be programmed via OBDII without needing the original key in most cases. The H chip (DST80 AES, 2015+) uses 128-bit AES encryption with a unique per-vehicle seed value — adding a new H-chip key requires an OBDII security handshake that validates both the key blank\'s factory seed and the vehicle\'s stored security token. All-keys-lost for H-chip models is significantly more involved.',
      },
      {
        question: 'My Toyota smart key is not recognised — what causes this?',
        answer: 'The most common causes are: a depleted CR2032 battery in the fob (free to fix yourself), a demagnetised transponder chip from proximity to strong magnets or other key electronics, or a failed Smart Entry ECU antenna. If doors unlock via the remote but the engine refuses to start, the transponder chip is the issue rather than the battery. We can diagnose in 15 minutes at your location.',
      },
      {
        question: 'Can you cut a Toyota key blade without the original?',
        answer: 'Yes, if the door lock code or ignition key code is on record or can be derived by reading the lock barrel. For newer laser-cut profiles (Hilux, Fortuner, Prado), we use code-cutting from the vehicle\'s key code stamped on the lock barrel plate. Call us with your VIN and we can confirm availability for your specific model.',
      },
      {
        question: 'How long does Toyota key replacement take in Dubai?',
        answer: 'Standard Toyota G-chip smart key replacement takes 30–60 minutes at your location. H-chip AES models (2015+) take 45–90 minutes. Mechanical blade-only duplication takes 15–25 minutes. Our mobile technician comes to you — no dealership or workshop visit required.',
      },
    ],
    relatedServiceSlugs: [
      'car-key-duplication', 'car-key-replacement', 'remote-smart-key-programming',
      'transponder-keys', 'emergency-car-unlock', 'lost-broken-car-keys',
    ],
    relatedLocationSlugs: ['al-satwa', 'al-badaa', 'al-quoz', 'dubai-marina', 'jumeirah'],
    metaTitle: 'Toyota Car Key Replacement & Programming Dubai | Lock repair service',
    metaDescription: 'Toyota key replacement, duplication & smart key programming in Dubai from AED 150. Land Cruiser, Prado, Camry, Fortuner — G-chip & H-chip AES specialist. Call +971 52 642 6161.',
    directAnswerOpener: 'Yes — Lock repair service replaces, duplicates and programmes Toyota car keys in Dubai from AED 150. We cover all models including Land Cruiser 300, Prado, Camry and Fortuner, handling G-chip and H-chip DST80-AES smart key systems on-site without a dealer visit. Call +971 52 642 6161.',
    uniqueIntro: 'Toyota is the most widely driven brand on UAE roads, and no model commands the Dubai landscape like the Land Cruiser and Prado. Lock repair service technicians are trained on the complete Toyota key platform — from the straightforward 4C transponder chips in older Hilux and Corolla models to the 128-bit AES encryption on the 2021+ Land Cruiser 300 that requires OEM blanks and OBDII security login.\n\nWe carry the key blanks, OBDII programming equipment, and Toyota-specific security credentials to handle everything from a routine spare key to a full lost-all-keys recovery, at your location anywhere in Dubai without a workshop visit or Toyota dealership appointment.',
  },

  // ── 2. Nissan ──────────────────────────────────────────────────────────────
  {
    slug: 'nissan',
    name: 'Nissan',
    originCountry: 'Japan',
    icon: '🚗',
    popularModelsUAE: [
      'Patrol Y62', 'Patrol Y61 (Super Safari)', 'Altima', 'Sunny',
      'Kicks', 'X-Trail', 'Navara D23', 'Murano', 'Armada', 'Tiida',
    ],
    keySystems: [
      'PCF7930/PCF7931 transponder (pre-2003, mechanical remote)',
      'PCF7936 ID46 transponder (2003–2011, cloneable)',
      'Nissan Intelligent Key (iKey) with HITAG2 rolling code (2007+)',
      'Push-button Smart Key with Proximity Detection (2012+)',
    ],
    commonIssues: [
      'BCM (Body Control Module) must be programmed when adding a new iKey — cloning alone is insufficient on 2012+ models',
      'Patrol Y62 iKey range reduction from worn door-handle proximity antenna',
      'iKey "Key ID Incorrect" error after battery swap — re-sync procedure required',
      'Patrol Y61 key-in-ignition warning chime failure (wear-related, not key fault)',
      'Sunny/Tiida key blade breakage inside the ignition cylinder from a worn barrel',
    ],
    transponderChipTypes: [
      'PCF7930/31 (pre-2003)',
      'PCF7936 ID46 (2003–2011)',
      'HITAG2 (2012+ Intelligent Key)',
    ],
    priceRangeAED: [
      { service: 'Key Duplication (with existing key)', min: 150, max: 300, turnaround: '20–30 min' },
      { service: 'Intelligent Key (iKey) Replacement', min: 400, max: 750, turnaround: '30–60 min' },
      { service: 'ID46 Transponder Programming', min: 280, max: 500, turnaround: '20–45 min' },
      { service: 'Emergency Car Unlock', min: 200, max: 350, turnaround: '20–40 min' },
      { service: 'Remote Fob Repair / Battery', min: 50, max: 150, turnaround: '10–20 min' },
    ],
    turnaroundTime: '20–60 minutes',
    oemVsAftermarket: 'For Nissan Patrol Y61, Sunny, and Tiida using PCF7936 ID46 chips, aftermarket key shells with programmed ID46 transponders are fully compatible and cost significantly less than dealer prices. For Patrol Y62 and 2012+ Nissan Intelligent Key models, the BCM registration step is the critical operation regardless of key shell source — we use manufacturer-grade OBDII programmers that match any iKey blank to the vehicle\'s Body Control Module reliably.',
    faqs: [
      {
        question: 'How much does a Nissan Patrol key replacement cost in Dubai?',
        answer: 'Nissan Patrol key replacement in Dubai ranges from AED 280 to AED 750. Patrol Y61 (Super Safari) with PCF7936 ID46 transponder costs AED 280–450. Patrol Y62 with the Nissan Intelligent Key system costs AED 500–750 because the Body Control Module also requires OBDII programming — not just the key itself.',
      },
      {
        question: 'Can you programme a Nissan Intelligent Key without an existing working key?',
        answer: 'Yes. For all-keys-lost iKey scenarios, we use dealer-level OBDII equipment to perform BCM key registration from a blank state. This requires physical access to the OBD port and takes 30–45 minutes on-site. Note: not all aftermarket programmers support iKey all-keys-lost — confirm the tool supports your exact model year before booking any service.',
      },
      {
        question: 'My Nissan iKey shows "Key ID Incorrect" — what does this mean?',
        answer: '"Key ID Incorrect" usually means the BCM has lost its pairing with the iKey after a battery swap or BCM reset. In many cases, a re-sync procedure (holding the fob against the steering column while pressing Start) resolves it without further work. If the error persists after re-sync, the key\'s HITAG2 chip may have failed — we can diagnose and resolve at your location.',
      },
      {
        question: 'Can the Nissan Sunny key be duplicated without programming?',
        answer: 'Only for pre-2005 Sunny models that use a purely mechanical key with no transponder chip. All 2005+ Sunny models include a PCF7936 ID46 transponder — a duplicate must have the chip programmed to the vehicle\'s immobiliser, otherwise the engine starts for a second and then cuts out on the immobiliser signal.',
      },
      {
        question: 'Do you cover Nissan key services in Deira, Al Quoz, and Bur Dubai?',
        answer: 'Yes. Our mobile technicians cover Deira, Al Quoz, Bur Dubai, Al Satwa, and all other Dubai areas for Nissan key work. We stock Patrol Y61 and Y62 key blanks in the mobile unit. Average arrival time to Deira from our Al Bada\'a base is 20–35 minutes.',
      },
    ],
    relatedServiceSlugs: [
      'car-key-duplication', 'car-key-replacement', 'remote-smart-key-programming',
      'transponder-keys', 'emergency-car-unlock',
    ],
    relatedLocationSlugs: ['al-satwa', 'al-badaa', 'deira', 'al-quoz', 'bur-dubai'],
    metaTitle: 'Nissan Car Key Replacement & Programming Dubai | iKey & ID46 Specialist',
    metaDescription: 'Nissan key replacement & Intelligent Key (iKey) programming in Dubai. Patrol Y61/Y62, Altima, Sunny, X-Trail — BCM programming available. From AED 150. Call +971 52 642 6161.',
    directAnswerOpener: 'Yes — Lock repair service replaces and programmes Nissan car keys in Dubai from AED 150. We cover all models including Patrol Y61/Y62, Altima, and Sunny, handling PCF7936 ID46 transponders and Nissan Intelligent Key BCM programming on-site. Call +971 52 642 6161.',
    uniqueIntro: 'Nissan is one of the highest-volume brands on UAE roads, with the Patrol Y62 and Y61 Super Safari being iconic across Dubai and the wider Emirates. Nissan\'s key platform spans two clear generations: older models carry cloneable PCF7936 ID46 transponders, while 2012+ Intelligent Key vehicles require Body Control Module registration that only dealer-grade OBDII tools can perform.\n\nLock repair service carries both ID46 blanks and specialist iKey programming hardware for the full Nissan range — Patrol, X-Trail, Navara, Altima, Sunny, Kicks — with mobile service to your location anywhere in Dubai, no dealership appointment required.',
  },

  // ── 3. BMW ─────────────────────────────────────────────────────────────────
  {
    slug: 'bmw',
    name: 'BMW',
    originCountry: 'Germany',
    icon: '🚗',
    popularModelsUAE: [
      '3 Series (F30/G20)', '5 Series (F10/G30)', 'X5 (E70/F15/G05)',
      'X3 (F25/G01)', 'X1', 'X7', '7 Series (G11)', 'M4/M5',
    ],
    keySystems: [
      'EWS3/EWS4 (1999–2006 E-series) — PCF7930/PCF7931 transponder',
      'CAS1 (E46, 2001–2003) — HITAG1 chip',
      'CAS2 (E60/E87, 2003–2009) — PCF7945/PCF7942 HITAG2',
      'CAS3/CAS3+ (2007–2012) — PCF7953 HITAG Pro',
      'CAS4/CAS4+ (2012–2014) — Infineon SLE 97144 Crypto 128-bit',
      'FEM/BDC (F/G-series 2014+) — Renesas MC9S12, chip-level module access required',
    ],
    commonIssues: [
      'CAS4+ all-keys-lost: Infineon Crypto chip requires module soldering or dealer infrastructure — very high complexity',
      'FEM/BDC all-keys-lost: Renesas MC9S12 ISN must be read from the module on a bench — module removal required',
      'EWS ring antenna failure causing "no key" errors on E46/E60',
      'Comfort Access proximity antenna wear on X5/X7 — key detected only at close range',
      'CAS2/CAS3 folding-key shell cracking at blade hinge — blade re-insert common repair',
      'ESCL (Electric Steering Column Lock) faults triggered by failed programming attempts on F-series',
    ],
    transponderChipTypes: [
      'PCF7930/31 (EWS3/4)',
      'PCF7942/PCF7945 HITAG2 (CAS2)',
      'PCF7953 HITAG Pro (CAS3)',
      'Infineon SLE 97144 Crypto 128-bit (CAS4/CAS4+)',
      'Renesas MC9S12-based FEM/BDC (2014+)',
    ],
    priceRangeAED: [
      { service: 'Key Blade Replacement / Cutting', min: 200, max: 450, turnaround: '20–30 min' },
      { service: 'CAS2/CAS3 Smart Key Programming', min: 600, max: 950, turnaround: '45–90 min' },
      { service: 'CAS4/CAS4+ Key Programming', min: 900, max: 1400, turnaround: '60–120 min' },
      { service: 'FEM/BDC Key Programming', min: 1000, max: 1600, turnaround: '90–180 min' },
      { service: 'Emergency Car Unlock', min: 250, max: 500, turnaround: '20–40 min' },
    ],
    turnaroundTime: '45–180 minutes',
    oemVsAftermarket: 'BMW key shells are available in aftermarket quality for CAS2 and CAS3 systems (E-series and early F-series up to ~2012). For CAS4+ (2012+) and FEM/BDC (2014+), the chip inside is a security-grade Infineon or Renesas microcontroller that is either extracted from a donor OEM key or sourced through the BMW parts network — generic blank chips do not function in these systems. Lock repair service works with genuine chip-extracted keys for CAS4+ and FEM systems, and quality aftermarket shells combined with correctly programmed OEM-specification transponders for CAS2/CAS3.',
    faqs: [
      {
        question: 'How much does a BMW key replacement cost in Dubai?',
        answer: 'BMW key replacement in Dubai ranges from AED 600 to AED 1,600 depending on CAS generation. CAS2 (E60/E90) costs AED 600–950; CAS3+ (early F-series) costs AED 750–1,100; CAS4/CAS4+ costs AED 900–1,400; FEM/BDC (2014+ F/G-series) costs AED 1,000–1,600 because of module-level access requirements for all-keys-lost scenarios.',
      },
      {
        question: 'What is the difference between BMW CAS3 and CAS4 key systems?',
        answer: 'CAS3 keys (2007–2012) use PCF7953 HITAG Pro transponders — programmable via OBDII with the right equipment. CAS4 and CAS4+ (2012+) use Infineon SLE 97144 with 128-bit Crypto encryption. For all-keys-lost on CAS4+, the chip data must be extracted by soldering the CAS module, which is why CAS4+ jobs are costlier, take longer, and need specialist equipment that not all locksmiths carry.',
      },
      {
        question: 'What is FEM/BDC and why does it make BMW key programming harder?',
        answer: 'FEM (Front Electronic Module) and BDC (Body Domain Controller) replaced the CAS module from 2014 on F/G-series. They run Renesas MC9S12 microcontrollers that manage both key learning and body electronics. Reading the ISN (Individual Serial Number) for all-keys-lost requires physically removing the module and programming it on a bench — it cannot be done purely via OBDII, making it the most complex BMW key job.',
      },
      {
        question: 'Can you programme a BMW key without going to a BMW dealer in Dubai?',
        answer: 'Yes for CAS1 through CAS3+ (all E-series and early F-series). Our BMW-compatible OBDII tools handle key enrolment on-site. For CAS4+ and FEM/BDC all-keys-lost scenarios, we can still handle the job but it may require module removal. We diagnose your CAS generation first and quote accurately before starting.',
      },
      {
        question: 'My BMW shows "No Key Detected" with the correct key in hand — what is wrong?',
        answer: '"No Key Detected" has four likely causes: a dead CR2032 battery in the fob (most common), a failed transponder chip, a broken EWS/CAS ring antenna (the coil around the ignition barrel), or a failing CAS/FEM module. If the key works when held directly to the Start button but not at distance, the Comfort Access antenna is the issue — not the key itself.',
      },
      {
        question: 'How long does BMW key replacement take in Dubai?',
        answer: 'CAS2/CAS3 programming takes 45–90 minutes on-site. CAS4+ takes 60–120 minutes. FEM/BDC jobs where the module must be removed and bench-programmed take 90–180 minutes. We come to you anywhere in Dubai — no workshop visit needed for OBDII-accessible jobs.',
      },
    ],
    relatedServiceSlugs: [
      'car-key-replacement', 'remote-smart-key-programming',
      'transponder-keys', 'emergency-car-unlock', 'automotive-lock-repair',
    ],
    relatedLocationSlugs: ['al-satwa', 'al-badaa', 'downtown-dubai', 'business-bay', 'dubai-marina'],
    metaTitle: 'BMW Car Key Replacement & Programming Dubai | CAS & FEM Specialist',
    metaDescription: 'BMW key replacement & programming in Dubai. CAS1–CAS4+, FEM/BDC specialist. 3 Series, 5 Series, X5, X3, X7. From AED 600. Mobile, no dealership needed. Call +971 52 642 6161.',
    directAnswerOpener: 'Yes — Lock repair service programmes and replaces BMW car keys in Dubai. We cover all CAS generations (CAS1–CAS4+) and FEM/BDC systems on F/G-series. Pricing starts at AED 600 for CAS2/CAS3 and AED 900+ for CAS4+/FEM. Call +971 52 642 6161.',
    uniqueIntro: 'BMW key systems are technically the most demanding in the automotive locksmith world. From CAS2 HITAG2 keys on the E60/E90 to Infineon 128-bit Crypto CAS4+ on mid-cycle F-series and Renesas MC9S12 FEM/BDC controllers on current G-series, each generation requires dedicated hardware, genuine expertise, and in some cases module-level access that no generic OBDII programmer supports.\n\nLock repair service specialises in BMW key work across all E, F, and G-series vehicles in Dubai. Whether you need a Comfort Access spare for your X5, an emergency unlock for your 3 Series near Downtown, or a full all-keys-lost recovery for a newer G30 — we carry the equipment and come to your location.',
  },

  // ── 4. Mercedes-Benz ───────────────────────────────────────────────────────
  {
    slug: 'mercedes-benz',
    name: 'Mercedes-Benz',
    originCountry: 'Germany',
    icon: '🚗',
    popularModelsUAE: [
      'C-Class (W204/W205)', 'E-Class (W212/W213)', 'S-Class (W222)',
      'GLE (W166/W167)', 'GLC (X253)', 'G-Class (W464)', 'A-Class (W177)', 'Sprinter Van',
    ],
    keySystems: [
      'IR (infrared) + PCF7935 transponder key (pre-2004 W210/W202/W208)',
      'NEC microcontroller-based KeylessGo comfort key (2003–2017)',
      'EIS (Electronic Ignition Switch) — NEC processor stores key enrolment data',
      'NEC+DST AES-128 proximity key (2018+ W205/W213/W222/W464)',
    ],
    commonIssues: [
      'EIS/EZS melting plastic connector on W164 (ML), W203 (C-Class), W210 (E-Class) — must be repaired before key programming',
      'All-keys-lost on NEC Crypto/DST-AES system requires ISN extraction from the EIS module by bench programming',
      'KeylessGo battery drain on W205/W213: proximity antenna stays active if amplifier module develops a fault',
      'IR key sync loss on older W210/W202 after battery replacement — re-sync sequence required',
      'W222 S-Class (2018+) NEC+DST-AES all-keys-lost is bench-only; cannot be completed via OBDII alone',
    ],
    transponderChipTypes: [
      'PCF7935 (pre-2004)',
      'NEC HiTag2 (2004–2017)',
      'NEC+DST AES-128 (2018+)',
    ],
    priceRangeAED: [
      { service: 'Key Blade Cutting', min: 200, max: 450, turnaround: '20–30 min' },
      { service: 'NEC Smart Key Programming (W204/W212)', min: 700, max: 1100, turnaround: '45–90 min' },
      { service: 'NEC+DST-AES Key Programming (2018+)', min: 1000, max: 1500, turnaround: '60–120 min' },
      { service: 'EIS/EZS Repair or Transfer', min: 500, max: 1200, turnaround: '60–180 min' },
      { service: 'Emergency Car Unlock', min: 250, max: 500, turnaround: '20–40 min' },
    ],
    turnaroundTime: '45–120 minutes',
    oemVsAftermarket: 'Mercedes NEC-based key shells (W204, W205, W212, W213) are available as quality aftermarket replacements. The critical component is the NEC microcontroller chip inside, which must carry either a genuine OEM chip or a re-programmed donor chip with the correct ISN. For 2018+ NEC+DST AES-128 models, the transponder blank must match the factory key specification — generic chips are rejected by the AES validation during EIS enrolment. We source OEM-specification blanks for AES-system vehicles and confirm compatibility before ordering.',
    faqs: [
      {
        question: 'How much does a Mercedes-Benz key replacement cost in Dubai?',
        answer: 'Mercedes-Benz key replacement in Dubai ranges from AED 700 to AED 1,500. W204 C-Class and W212 E-Class (NEC HiTag2) cost AED 700–1,100. The 2018+ models (W205, W213, W222, W464) with NEC+DST AES-128 encryption run AED 1,000–1,500. EIS/EZS repair or transfer, when needed, adds AED 500–1,200.',
      },
      {
        question: 'What is the EIS on a Mercedes and why does it matter for key programming?',
        answer: 'The EIS (Electronic Ignition Switch) is the module that reads the NEC chip in your Mercedes proximity key and authorises engine start. It stores each key\'s unique NEC code and must be programmed whenever a key is added or replaced. On W203, W164, and W210 models, the EIS plastic connector frequently melts from ignition heat — this connector must be repaired before any new key can be enrolled.',
      },
      {
        question: 'My Mercedes Keyless Go key is draining the car battery — is the key faulty?',
        answer: 'Not necessarily. Mercedes Keyless Go uses a low-frequency antenna that continuously scans for the key. If the antenna amplifier module develops a fault, it remains active permanently, draining the 12V battery over 2–4 days. This is a documented issue on W205 C-Class and W213 E-Class. Replacing the key fob battery will not fix it — the antenna amplifier needs to be diagnosed.',
      },
      {
        question: 'Can you programme a Mercedes key without the EIS security code?',
        answer: 'Yes — our OBDII diagnostic equipment reads the EIS ISN (Individual Security Number) directly from the module during a live session. This is standard procedure for adding a key when at least one working key exists. For all-keys-lost on NEC+DST AES (2018+), we need to physically access the EIS for bench programming, which requires removing it from the vehicle.',
      },
      {
        question: 'Do you service Mercedes G-Class and Sprinter key replacement?',
        answer: 'Yes. The G-Class W464 (2019+) uses NEC+DST AES-128 — same as the current W205/W213. The older W463 (pre-2018) uses NEC HiTag2. The Sprinter van uses a different key format (HU64 blade) but the same NEC platform. All three are covered by our mobile service across Dubai.',
      },
    ],
    relatedServiceSlugs: [
      'car-key-replacement', 'remote-smart-key-programming',
      'transponder-keys', 'emergency-car-unlock', 'automotive-lock-repair',
    ],
    relatedLocationSlugs: ['al-satwa', 'al-badaa', 'downtown-dubai', 'business-bay', 'jumeirah'],
    metaTitle: 'Mercedes-Benz Key Replacement & Programming Dubai | EIS/NEC Specialist',
    metaDescription: 'Mercedes-Benz key replacement in Dubai. EIS/NEC HiTag2 & NEC+DST AES-128 specialist. C-Class, E-Class, GLE, GLC, S-Class, G-Class. From AED 700. Call +971 52 642 6161.',
    directAnswerOpener: 'Yes — Lock repair service replaces and programmes Mercedes-Benz keys in Dubai from AED 700. We handle NEC HiTag2 (W204/W212) and NEC+DST AES-128 (2018+) systems including EIS/EZS repair. All models: C-Class, E-Class, GLE, GLC, S-Class, G-Class. Call +971 52 642 6161.',
    uniqueIntro: 'Mercedes-Benz vehicles in Dubai present a broad spectrum of key programming complexity. The NEC microcontroller architecture behind every Mercedes smart key from 2003 onward requires understanding the EIS module\'s ISN, the correct NEC chip generation, and whether the Electronic Ignition Switch itself needs repair before a new key can be enrolled — a step frequently overlooked on high-mileage W203, W164, and W210 models where the EIS connector melts.\n\nLock repair service technicians are experienced with the full Mercedes key platform: W204 C-Class and W212 E-Class NEC HiTag2, the 2018+ NEC+DST AES-128 encryption on current W205, W213, W222, and G-Class models, and the EIS/EZS repair work that often must precede key programming.',
  },

  // ── 5. Land Rover ──────────────────────────────────────────────────────────
  {
    slug: 'land-rover',
    name: 'Land Rover',
    originCountry: 'United Kingdom',
    icon: '🚗',
    popularModelsUAE: [
      'Range Rover Vogue (L322/L405)', 'Range Rover Sport (L320/L494)',
      'Discovery 3/4/5', 'Defender 90/110 (L663)',
      'Range Rover Evoque', 'Range Rover Velar',
    ],
    keySystems: [
      'PATS (Passive Anti-Theft System) transponder (Discovery 3/4, early L322)',
      'KVM (Keyless Vehicle Module) — central controller for all key functions (L322 SC, L405, L494, L663)',
      'Proximity key (fob) at 433.92 MHz with HITAG3 transponder',
      'Emergency concealed HU101 mechanical blade on all proximity-key models',
    ],
    commonIssues: [
      'KVM module failure on L320 Range Rover Sport — key completely unrecognised, vehicle immobilised until KVM replaced and reprogrammed',
      'PATS fault codes B2799/P0513 on Discovery 3/4 requiring JTIS security reset',
      'Proximity antenna module failure reducing detection range to under 20 cm',
      'L322 BECM (Body Electronics Control Module) fault preventing key learning',
      'Defender L663 key programming requires JLR IDS/Pathfinder tool — incompatible with generic OBDII',
      'Low-cost generic key blanks rejected by KVM during enrolment, causing a KVM lockout requiring module reset',
    ],
    transponderChipTypes: [
      'PCF7935/HITAG1 (early Discovery 3)',
      'PCF7945/7952 HITAG2 (L320 Range Rover Sport)',
      'HITAG3 (L405/L494/L663 proximity key)',
    ],
    priceRangeAED: [
      { service: 'Emergency Blade Cutting', min: 200, max: 450, turnaround: '20–30 min' },
      { service: 'KVM Key Programming (L405/L494/L663)', min: 800, max: 1300, turnaround: '60–90 min' },
      { service: 'PATS Key Programming (Discovery 3/4)', min: 500, max: 800, turnaround: '45–75 min' },
      { service: 'Emergency Unlock / EKA Entry', min: 300, max: 600, turnaround: '30–60 min' },
      { service: 'Proximity Fob Repair', min: 200, max: 500, turnaround: '30–60 min' },
    ],
    turnaroundTime: '45–90 minutes',
    oemVsAftermarket: 'Land Rover KVM-equipped models (L405 Range Rover Vogue, L494 Range Rover Sport, Evoque, Velar, Defender L663) require JLR-compatible key blanks — the KVM module validates the blank\'s key identifier during enrolment, and low-cost generic blanks frequently fail, triggering a KVM lockout that requires a reset procedure. Lock repair service uses JLR-specification key blanks and Autologic/IDS-grade tools to avoid these complications. For older PATS-equipped models (Discovery 3/4, early L322), quality aftermarket blanks work reliably.',
    faqs: [
      {
        question: 'How much does a Range Rover key replacement cost in Dubai?',
        answer: 'Range Rover key replacement in Dubai ranges from AED 800 to AED 1,300 for KVM-equipped models (L405, L494, Evoque, Velar). Discovery 3/4 PATS-based keys cost AED 500–800. The higher price on KVM models reflects the JLR IDS tool requirement and the risk-free JLR-specification key blanks we use.',
      },
      {
        question: 'What is KVM on a Range Rover and why does it affect key programming?',
        answer: 'KVM (Keyless Vehicle Module) is the central unit managing all key operations on later Land Rover models. Every function — adding, replacing, or deleting a key — passes through the KVM. If the KVM module fails (a known issue on L320 Range Rover Sport), no key will be recognised until the KVM is repaired or replaced and then reprogrammed with fresh keys. This is why KVM health is checked before any key programming job on Land Rovers.',
      },
      {
        question: 'My Land Rover says "Key Not Detected" — is it always the key?',
        answer: '"Key Not Detected" has several causes: dead key fob battery (try holding the fob to the Start button — Land Rover has a backup reader), a failed KVM proximity antenna, a corrupt key entry in the KVM, or a failing KVM module. We diagnose using JLR software within 20 minutes to tell you which it is before any parts are replaced.',
      },
      {
        question: 'Can you programme a key for the new Land Rover Defender L663?',
        answer: 'Yes. The Defender L663 (2020+) uses HITAG3 transponder with KVM architecture. Programming requires JLR IDS/Pathfinder-compatible tools — generic OBD2 readers do not support it. We can programme a replacement key on-site; all-keys-lost on the Defender may require KVM module access. Provide your VIN for an accurate quote.',
      },
      {
        question: 'What is the Land Rover EKA code and when do I need it?',
        answer: 'EKA (Emergency Key Access) is a four-digit code stored in Land Rover documentation for older PATS models (Discovery 1–3, early L322). It lets you unlock the door via a lock-button sequence when the remote fob is dead and the vehicle battery is flat. On KVM models, the procedure is different — hold the fob against the door handle release. We can retrieve EKA codes from vehicle records in many cases.',
      },
    ],
    relatedServiceSlugs: [
      'car-key-replacement', 'remote-smart-key-programming',
      'transponder-keys', 'emergency-car-unlock', 'lost-broken-car-keys',
    ],
    relatedLocationSlugs: ['al-satwa', 'al-badaa', 'dubai-marina', 'palm-jumeirah', 'jumeirah'],
    metaTitle: 'Land Rover / Range Rover Key Replacement Dubai | KVM Specialist',
    metaDescription: 'Land Rover & Range Rover key replacement & KVM programming in Dubai. Vogue, Sport, Discovery, Defender, Evoque — PATS & HITAG3 specialist. From AED 500. Call +971 52 642 6161.',
    directAnswerOpener: 'Yes — Lock repair service replaces Land Rover and Range Rover keys in Dubai from AED 500. We cover PATS (Discovery 3/4) and KVM proximity systems (Range Rover L405/L494, Defender L663) using JLR-compatible tools. All-keys-lost recovery available. Call +971 52 642 6161.',
    uniqueIntro: 'Land Rover and Range Rover are among Dubai\'s most prevalent luxury SUVs, with the Range Rover Vogue, Sport, and Defender L663 drawing a loyal following across Jumeirah, Palm Jumeirah, and Dubai Marina. Their KVM (Keyless Vehicle Module) architecture is one of the most complex key platforms in the industry — programming failures with incorrect key blanks or incompatible tools can trigger KVM lockouts that leave an expensive vehicle completely immobilised.\n\nLock repair service uses JLR-compatible Autologic/IDS tools and JLR-specification key blanks to eliminate this risk. Whether you need a spare for your Range Rover Sport or emergency assistance for a Discovery stranded in Dubai, our mobile technicians come to you.',
  },

  // ── 6. Lexus ───────────────────────────────────────────────────────────────
  {
    slug: 'lexus',
    name: 'Lexus',
    originCountry: 'Japan',
    icon: '🚗',
    popularModelsUAE: [
      'LX570', 'LX600', 'GX460', 'RX350', 'RX450h',
      'ES350', 'IS300', 'NX200t', 'UX250h', 'LS500',
    ],
    keySystems: [
      'G chip / ID47 40-bit (2005–2014 Smart Access)',
      'H chip / DST80 AES-128 (2015+ Smart Access with push-start)',
      'Lexus Smart Access — proximity detection + concealed mechanical HU101 blade',
      'Platform identical to Toyota H/G-chip; Lexus-specific blade profile (HON66 on some models)',
    ],
    commonIssues: [
      'LX600 (2022+) DST80 AES all-keys-lost requires OEM blank and OBDII security initialization — same restriction as Land Cruiser 300',
      'RX350/RX450h G-chip pairing loss after battery disconnect — re-registration required',
      'GX460 fob range reduction from multi-car 433MHz interference in residential garages',
      'IS300 key blade broken inside the door lock cylinder from a worn barrel',
      'ES350 Smart Access antenna misread on 2019+ causing "Smart Key System Malfunction" dashboard warning',
    ],
    transponderChipTypes: [
      'G chip ID47 40-bit (2005–2014)',
      'H chip DST80-AES 128-bit (2015+)',
    ],
    priceRangeAED: [
      { service: 'Key Duplication (with existing key)', min: 200, max: 400, turnaround: '20–30 min' },
      { service: 'Smart Key Replacement — G-chip (IS/ES/RX pre-2015)', min: 500, max: 850, turnaround: '30–60 min' },
      { service: 'Smart Key Replacement — H-chip AES (LX/RX/NX 2015+)', min: 700, max: 1100, turnaround: '45–90 min' },
      { service: 'Emergency Car Unlock', min: 250, max: 450, turnaround: '20–40 min' },
      { service: 'Remote Battery & Fob Repair', min: 50, max: 200, turnaround: '10–20 min' },
    ],
    turnaroundTime: '30–90 minutes',
    oemVsAftermarket: 'Lexus runs Toyota\'s key platform, so the OEM/aftermarket split is the same: G-chip models (IS, ES, RX up to 2014) accept quality aftermarket shells with programmed G-chip transponders at a significant saving over Lexus dealer prices. H-chip AES models (2015+ LX, RX, NX, LS) require OEM-sourced blanks — the AES system verifies the blank\'s factory seed value on enrolment. Lock repair service confirms your model year and chip type before sourcing blanks to avoid the OEM/aftermarket mismatch.',
    faqs: [
      {
        question: 'How much does a Lexus LX570 or LX600 key replacement cost in Dubai?',
        answer: 'Lexus LX570 key replacement (H-chip, 2016–2021) costs AED 700–1,050. The LX600 (2022+) with DST80 AES-128 runs AED 900–1,100 — an OEM blank is required and OBDII security initialization applies. LX570 G-chip variants (2008–2015) cost AED 500–800. All pricing includes on-site programming at your location.',
      },
      {
        question: 'Are Lexus and Toyota keys interchangeable in terms of programming?',
        answer: 'They share the same G-chip/H-chip transponder platform and OBDII programming protocol — the locksmith uses the same tool and procedure. However, the physical key shells, blade profiles, and fob designs are brand-specific (Lexus IS uses a HON66 blade, Toyota Camry uses a TOY48). You cannot use a Toyota remote to start a Lexus, but the programming method is identical.',
      },
      {
        question: 'Can you programme a Lexus smart key without the original key?',
        answer: 'For G-chip models (2005–2014): yes, OBDII all-keys-lost procedure is supported. For H-chip AES (2015+): the ECU security requires a validated OBDII security handshake. Our equipment supports this for most Lexus UAE models. LX600 (2022+) may require a PIN lookup from our key programming database — provide your VIN for confirmation.',
      },
      {
        question: 'My Lexus RX fob has reduced range — is the battery the only cause?',
        answer: 'Reduced range is most often a dying CR2032 battery — replace it first. If range is still poor after a fresh battery, check for 433MHz interference in your garage (parking sensors, wireless routers, other proximity keys stored together). If the problem persists in open space, the RX proximity antenna module may have a fault — diagnosable with Lexus OBDII tools.',
      },
      {
        question: 'How long does Lexus key replacement take in Dubai?',
        answer: 'G-chip models take 30–60 minutes on-site; H-chip AES models take 45–90 minutes for the additional security initialization. Our mobile technician arrives at your location in Dubai — no workshop or Lexus dealership visit needed. Average dispatch-to-arrival in central Dubai is 20–40 minutes.',
      },
    ],
    relatedServiceSlugs: [
      'car-key-duplication', 'car-key-replacement', 'remote-smart-key-programming',
      'transponder-keys', 'emergency-car-unlock',
    ],
    relatedLocationSlugs: ['al-satwa', 'al-badaa', 'dubai-marina', 'palm-jumeirah', 'downtown-dubai'],
    metaTitle: 'Lexus Car Key Replacement & Programming Dubai | LX570, RX, GX Specialist',
    metaDescription: 'Lexus key replacement & smart key programming in Dubai. LX570, LX600, GX460, RX350, ES, IS — G-chip & H-chip AES specialist. From AED 200. Call +971 52 642 6161.',
    directAnswerOpener: 'Yes — Lock repair service replaces and programmes Lexus car keys in Dubai from AED 200. All models: LX570/LX600, GX460, RX350, ES350, IS300 — G-chip and H-chip DST80-AES smart key systems handled on-site. Call +971 52 642 6161.',
    uniqueIntro: 'Lexus vehicles are a favourite in Dubai\'s luxury segment — the LX series dominates the premium SUV market around Jumeirah and Downtown Dubai, while IS and ES sedans are a fixture in Business Bay. Lexus runs on Toyota\'s key platform, technically identical in chip generation and programming protocol, but with Lexus-specific blade profiles and fob designs.\n\nLock repair service programmes Lexus smart keys across all model generations from the G-chip IS200/ES350 to the H-chip DST80-AES LX600 (2022+), all at your vehicle\'s location in Dubai without a workshop appointment.',
  },

  // ── 7. Hyundai ─────────────────────────────────────────────────────────────
  {
    slug: 'hyundai',
    name: 'Hyundai',
    originCountry: 'South Korea',
    icon: '🚗',
    popularModelsUAE: [
      'Elantra (CN7)', 'Sonata', 'Tucson (NX4)', 'Santa Fe (TM)',
      'Creta', 'Palisade', 'Accent', 'i10/i20/i30', 'Ioniq 5', 'Staria Van',
    ],
    keySystems: [
      'PCF7930/PCF7931 T5 transponder (pre-2006)',
      'PCF7936 ID46 transponder (2006–2013, cloneable)',
      'ID47 Crypto 128-bit transponder (2014–2018)',
      'ID49 / HITAG Pro AES (2018+)',
      'FOB + transponder combo on push-button smart key models',
    ],
    commonIssues: [
      'ID47 Crypto transponder requires OBDII PIN or security handshake — cannot be cloned by standard tools',
      'Elantra/Accent key shell cracking at the blade pivot point (high-mileage wear)',
      'Santa Fe proximity antenna PCB short causing "Key Not Detected" dashboard fault',
      'Ioniq 5 digital key (NFC phone-as-key) pairing failure after OTA software update',
      'Hyundai Blue Link telematics interference with smart key BCM programming on some 2020+ models',
    ],
    transponderChipTypes: [
      'PCF7930 T5 (pre-2006)',
      'PCF7936 ID46 (2006–2013)',
      'ID47 Crypto 128-bit (2014–2018)',
      'ID49 HITAG Pro AES (2018+)',
    ],
    priceRangeAED: [
      { service: 'Key Duplication (with existing key)', min: 150, max: 300, turnaround: '20–30 min' },
      { service: 'Smart Key Replacement (ID47/ID49)', min: 400, max: 700, turnaround: '30–60 min' },
      { service: 'Transponder Key (ID46, cloneable)', min: 250, max: 450, turnaround: '20–40 min' },
      { service: 'Emergency Car Unlock', min: 200, max: 350, turnaround: '20–40 min' },
      { service: 'Remote FOB Repair', min: 50, max: 150, turnaround: '10–20 min' },
    ],
    turnaroundTime: '20–60 minutes',
    oemVsAftermarket: 'Hyundai ID46 models (Sonata, Tucson, Santa Fe up to 2013) accept quality aftermarket key shells with programmed ID46 transponders. For ID47 Crypto and ID49 HITAG Pro (2014+), the transponder must be initialized via OBDII security access — the shell can be aftermarket, but the chip must be properly authenticated. We use Autel and XTOOL programmers with Hyundai-specific security datasets for all ID47/ID49 models.',
    faqs: [
      {
        question: 'How much does a Hyundai Tucson key replacement cost in Dubai?',
        answer: 'Hyundai Tucson key replacement in Dubai ranges from AED 250 to AED 700. Pre-2014 Tucson (ID46) costs AED 250–450; 2015–2020 Tucson (ID47 Crypto) costs AED 400–600; 2021+ Tucson NX4 (ID49 HITAG Pro) costs AED 500–700.',
      },
      {
        question: 'Can you duplicate a Hyundai key without the original?',
        answer: 'For ID46 models (pre-2014): yes, OBDII replacement is straightforward. For ID47 Crypto (2014–2018) and ID49 HITAG Pro (2018+), the all-keys-lost procedure requires an OBDII security handshake with the BCM. Our Autel programmers include Hyundai security access data for most UAE-spec models — contact us with your model year to confirm.',
      },
      {
        question: 'My Hyundai remote unlocks the doors but the car will not start — what is wrong?',
        answer: 'The remote (RF frequency) and the transponder chip (RFID) are two separate systems inside your key fob. If doors unlock but the engine cuts out on the immobiliser signal, the transponder chip is the fault — not the battery. The chip needs reprogramming or replacement, not a battery change.',
      },
      {
        question: 'Do you cover Hyundai key services in JVC and Al Barsha?',
        answer: 'Yes. We service Hyundai vehicles across Jumeirah Village Circle, Al Barsha, Al Quoz, Mirdif, Business Bay, and all Dubai areas. JVC is approximately 25–35 minutes from our Al Bada\'a base. We carry Tucson, Santa Fe, and Creta key blanks in the mobile unit.',
      },
      {
        question: 'How do I get a spare Hyundai key made in Dubai?',
        answer: 'Call us on +971 52 642 6161 with your Hyundai model and year. A mobile technician dispatches to your location with the correct blank and programming equipment. ID46 keys are ready in 20–30 minutes; ID47/ID49 keys take 30–60 minutes for OBDII programming. No dealership visit needed.',
      },
    ],
    relatedServiceSlugs: [
      'car-key-duplication', 'car-key-replacement',
      'transponder-keys', 'emergency-car-unlock', 'lost-broken-car-keys',
    ],
    relatedLocationSlugs: ['al-satwa', 'al-badaa', 'jumeirah-village-circle', 'al-barsha', 'mirdif'],
    metaTitle: 'Hyundai Car Key Replacement & Programming Dubai | ID46/ID47 Specialist',
    metaDescription: 'Hyundai key replacement & programming in Dubai from AED 150. Elantra, Tucson, Santa Fe, Creta, Sonata — ID46, ID47 Crypto & ID49 HITAG Pro specialist. Call +971 52 642 6161.',
    directAnswerOpener: 'Yes — Lock repair service replaces and programmes Hyundai keys in Dubai from AED 150. All models: Elantra, Tucson, Santa Fe, Creta — ID46 (cloneable), ID47 Crypto, and ID49 HITAG Pro smart key systems handled on-site. Call +971 52 642 6161.',
    uniqueIntro: 'Hyundai has become one of the highest-volume Korean brands in Dubai — the Tucson, Santa Fe, and Creta filling a large share of the mid-range SUV market. Hyundai\'s key platform progressed from cloneable ID46 transponders (pre-2014) through ID47 Crypto 128-bit (2014–2018) to the current ID49 HITAG Pro AES standard, each requiring more advanced programming infrastructure.\n\nLock repair service uses Autel and XTOOL diagnostic programmers with Hyundai-specific security databases to handle key programming across all model years. Mobile service to your location — no workshop visit needed.',
  },

  // ── 8. Kia ─────────────────────────────────────────────────────────────────
  {
    slug: 'kia',
    name: 'Kia',
    originCountry: 'South Korea',
    icon: '🚗',
    popularModelsUAE: [
      'Sportage (NQ5)', 'Sorento (MQ4)', 'Cerato (BD)',
      'Carnival', 'Stinger', 'EV6', 'Picanto', 'K5', 'Telluride',
    ],
    keySystems: [
      'PCF7936 ID46 transponder (pre-2014, cloneable)',
      'ID47 Crypto 128-bit (2014–2018 Sportage/Cerato/Sorento)',
      'ID49 / HITAG Pro AES (2018+ push-button smart key)',
      'Hyundai Motor Group shared platform — same chip progression as Hyundai',
    ],
    commonIssues: [
      'Cerato BD (2019+) ID47 all-keys-lost requires OBDII PIN security handshake — cannot be cloned by standard equipment',
      'Sportage QL push-button smart key internal PCB antenna separation (fob internal fault)',
      'Kia EV6 phone-as-key (NFC) pairing failure after OTA firmware update',
      'Carnival (Sedona) proximity sensor interference from sliding-door mechanism with third-row key detection',
      'Stinger aftermarket ID49 blank rejection — Stinger BCM validates OEM chip specification',
    ],
    transponderChipTypes: [
      'PCF7936 ID46 (pre-2014)',
      'ID47 Crypto 128-bit (2014–2018)',
      'ID49 HITAG Pro AES (2018+)',
    ],
    priceRangeAED: [
      { service: 'Key Duplication (with existing key)', min: 150, max: 300, turnaround: '20–30 min' },
      { service: 'Smart Key Replacement (ID47/ID49)', min: 400, max: 700, turnaround: '30–60 min' },
      { service: 'Transponder Key (ID46)', min: 250, max: 450, turnaround: '20–40 min' },
      { service: 'Emergency Car Unlock', min: 200, max: 350, turnaround: '20–40 min' },
      { service: 'FOB Repair / Button Replacement', min: 50, max: 150, turnaround: '10–20 min' },
    ],
    turnaroundTime: '20–60 minutes',
    oemVsAftermarket: 'Kia shares the Hyundai Motor Group key platform — the aftermarket landscape mirrors Hyundai exactly. ID46 models take quality aftermarket shells with programmed ID46 chips. For ID47 and ID49 models, chip initialization is OBDII-dependent and shell source is secondary; the Kia Stinger is an exception where the BCM appears to validate OEM chip specification specifically. We use Autel/XTOOL infrastructure with Kia-specific security calibration.',
    faqs: [
      {
        question: 'How much does a Kia Sportage key replacement cost in Dubai?',
        answer: 'Kia Sportage key replacement in Dubai costs AED 250–700. Sportage QL (2016–2021) with ID47 Crypto costs AED 400–600; Sportage NQ5 (2022+) with ID49 HITAG Pro runs AED 500–700; older KX5 variants (pre-2016, ID46) cost AED 250–450.',
      },
      {
        question: 'Are Kia and Hyundai keys interchangeable?',
        answer: 'Kia and Hyundai use identical transponder chip types and programming protocols — the same OBDII tool handles both. However, the physical blade profiles are different for most models (TOY43 is common for Kia; HYN14R for Hyundai). The fob shells also differ. A locksmith programmes both with the same equipment but the keys themselves are not physically interchangeable.',
      },
      {
        question: 'Can you make a Kia Cerato key without the original?',
        answer: 'For Cerato models up to 2014 (ID46): yes. For 2015+ Cerato (ID47 Crypto) and BD-generation (2019+): the all-keys-lost procedure requires an OBDII PIN security handshake. Our Autel equipment supports Kia-specific security access for most UAE-spec Cerato variants. Contact us with your model year.',
      },
      {
        question: 'My Kia push-button start is not working with the key inside the car — what should I do?',
        answer: 'First, hold the fob directly against the Start button — Kia builds a short-range proximity reader into the button for a dead-battery backup. If the car starts this way, replace the CR2032 battery. If it does not start even held against the button, the transponder chip has lost its BCM pairing and requires OBDII re-registration at your location.',
      },
      {
        question: 'Do you provide Kia key services in JVC and Al Barsha?',
        answer: 'Yes. We cover JVC, Al Barsha, Al Quoz, Business Bay, and all Dubai areas for Kia key services. Sportage and Cerato key blanks are stocked in our mobile unit. JVC is 25–35 minutes from our Al Bada\'a base.',
      },
    ],
    relatedServiceSlugs: [
      'car-key-duplication', 'car-key-replacement',
      'transponder-keys', 'emergency-car-unlock', 'lost-broken-car-keys',
    ],
    relatedLocationSlugs: ['al-satwa', 'al-badaa', 'jumeirah-village-circle', 'al-barsha', 'al-quoz'],
    metaTitle: 'Kia Car Key Replacement & Programming Dubai | ID46/ID47/ID49 Specialist',
    metaDescription: 'Kia key replacement & programming in Dubai from AED 150. Sportage, Sorento, Cerato, Carnival — ID46, ID47 Crypto & ID49 HITAG Pro specialist. Call +971 52 642 6161.',
    directAnswerOpener: 'Yes — Lock repair service replaces and programmes Kia car keys in Dubai from AED 150. All models: Sportage, Sorento, Cerato, Carnival — ID46, ID47 Crypto, and ID49 HITAG Pro systems handled on-site. Call +971 52 642 6161.',
    uniqueIntro: 'Kia has earned a strong position in Dubai\'s mid-range SUV and family car segment — Sportage and Cerato are common across JVC, Al Barsha, and Business Bay. Kia\'s key technology is built on the same Hyundai Motor Group platform: ID46 (pre-2014), ID47 Crypto (2014–2018), and ID49 HITAG Pro (2018+) — each generation requiring progressively more advanced OBDII programming.\n\nLock repair service programmes all Kia key types using Autel and XTOOL diagnostic tools with Kia-specific security access datasets, with mobile service to your location anywhere in Dubai.',
  },

  // ── 9. GMC ─────────────────────────────────────────────────────────────────
  {
    slug: 'gmc',
    name: 'GMC',
    originCountry: 'United States',
    icon: '🚗',
    popularModelsUAE: [
      'Yukon XL', 'Terrain', 'Acadia', 'Sierra (pickup)', 'Canyon',
    ],
    keySystems: [
      'GM PassLock II (2000–2005) — timed resistance-pellet challenge in ignition barrel',
      'PCF7941 ID40 transponder (2005–2013 Terrain/Acadia)',
      'Texas Instruments DST40 (Yukon/Sierra 2010–2018)',
      'GM PEPS (Passive Entry Passive Start) at 315 MHz (2014+ Yukon)',
      'B111-PT double-sided high-security blade (2015+ Yukon XL)',
    ],
    commonIssues: [
      'GM PassLock relearn procedure required after battery disconnect or ECM replacement — 30-minute timed procedure',
      'Yukon XL PEPS antenna module failure reducing keyless detection range',
      'Sierra/Canyon flip-key blade pivot fatigue — blade detaches from the remote housing',
      '2019+ Yukon XL all-keys-lost requires GM SPS (Service Programming System) subscription-level access',
      'Terrain ID40 — programmer must support the GM Tech2 / Opel security channel, not just generic CAN-OBD',
    ],
    transponderChipTypes: [
      'PCF7941 ID40 (2005–2013)',
      'Texas Instruments DST40 (2010–2018)',
      'PCF7946 (newer Acadia/Terrain)',
    ],
    priceRangeAED: [
      { service: 'Key Cutting (with existing key)', min: 150, max: 300, turnaround: '20–30 min' },
      { service: 'Transponder / PEPS Smart Key Programming', min: 400, max: 800, turnaround: '30–60 min' },
      { service: 'Emergency Car Unlock', min: 200, max: 400, turnaround: '20–40 min' },
      { service: 'Remote FOB Repair / Replacement', min: 100, max: 300, turnaround: '20–40 min' },
      { service: 'PassLock Relearn / BCM Reset', min: 200, max: 500, turnaround: '30–60 min' },
    ],
    turnaroundTime: '30–60 minutes',
    oemVsAftermarket: 'GMC and Chevrolet share the same key blank and transponder platform. Aftermarket shells for the B111 high-security blade (Yukon XL, Terrain) are available and compatible; the chip must be OBDII-programmed regardless of shell source. For older PassLock systems (2000–2005), the relearn timing is critical and requires properly calibrated equipment — ELM-based generic readers frequently miss the PassLock timing window. We use GM-compatible Tech2-equivalent tools for all GMC programming.',
    faqs: [
      {
        question: 'How much does a GMC Yukon XL key replacement cost in Dubai?',
        answer: 'GMC Yukon XL key replacement in Dubai ranges from AED 400 to AED 800. 2014–2018 Yukon XL with DST40 costs AED 400–650; 2019+ Yukon XL with PEPS smart key costs AED 600–800 due to the SPS programming level required.',
      },
      {
        question: 'My GMC will not start after the battery was replaced — is this a key fault?',
        answer: 'If your GMC has a PassLock system (2000–2005 models), a battery disconnect can cause PassLock to lose its resistance calibration — the result is a no-start even with the correct key. The fix is a PassLock relearn: a 30-minute timed ignition-on sequence that recalibrates the system. This is not a key fault. Call us and we can guide you through it or dispatch a technician to your location.',
      },
      {
        question: 'Can you cut a GMC Terrain key without the original?',
        answer: 'Yes. The Terrain HU100 blade profile can be cut by code if the key code is on record, or we can read the code from the door lock cylinder directly. We carry HU100 blanks in the mobile unit. The transponder chip must also be programmed to the Terrain\'s ID40 immobiliser via OBDII.',
      },
      {
        question: 'Do you cover GMC key services in Al Quoz and Mirdif?',
        answer: 'Yes. GMC Yukon is common across Al Quoz, Mirdif, and Dubai\'s villa communities — we carry Yukon XL key blanks in the mobile unit and cover all Dubai areas. Al Quoz is 15–25 minutes from our Al Bada\'a base.',
      },
    ],
    relatedServiceSlugs: [
      'car-key-duplication', 'car-key-replacement',
      'transponder-keys', 'emergency-car-unlock', 'automotive-lock-repair',
    ],
    relatedLocationSlugs: ['al-satwa', 'al-badaa', 'al-quoz', 'deira', 'mirdif'],
    metaTitle: 'GMC Car Key Replacement & Programming Dubai | Yukon, Terrain Specialist',
    metaDescription: 'GMC key replacement & programming in Dubai. Yukon XL, Terrain, Acadia, Sierra — DST40, ID40 & PEPS specialist. PassLock relearn available. From AED 150. Call +971 52 642 6161.',
    directAnswerOpener: 'Yes — Lock repair service replaces and programmes GMC car keys in Dubai from AED 150. Yukon XL, Terrain, Acadia, Sierra — DST40, ID40, and PEPS smart key systems covered. PassLock relearn also available. Call +971 52 642 6161.',
    uniqueIntro: 'GMC vehicles — particularly the Yukon XL — are a staple of Dubai family life, appearing in high numbers across Mirdif, Al Quoz, and the villa communities of Jumeirah and Mirdif. GMC\'s key platform is shared with Chevrolet across the full GM range: PassLock history on older trucks, ID40 and DST40 transponders on mid-generation models, and PEPS smart key on the current Yukon XL.\n\nLock repair service programmes GMC keys using GM-compatible Tech2-equivalent OBDII tools for all Yukon, Terrain, and Acadia variants. Mobile service to your Dubai location — no workshop visit needed.',
  },

  // ── 10. Chevrolet ──────────────────────────────────────────────────────────
  {
    slug: 'chevrolet',
    name: 'Chevrolet',
    originCountry: 'United States',
    icon: '🚗',
    popularModelsUAE: [
      'Tahoe', 'Suburban', 'Silverado', 'Traverse', 'Malibu',
      'Captiva', 'Spark', 'Camaro', 'Colorado', 'Blazer',
    ],
    keySystems: [
      'GM PassLock I/II (pre-2006 Tahoe/Suburban)',
      'PCF7937 / ID40 transponder (2005–2013)',
      'Texas Instruments DST40 (2010–2018 Tahoe/Silverado/Suburban)',
      'GM PEPS 315 MHz (2015+ Tahoe/Silverado)',
      'HU100 blade profile (Captiva, Malibu, Silverado)',
    ],
    commonIssues: [
      'PassLock relearn required after ECM or battery replacement on pre-2006 Tahoe/Suburban',
      'Captiva ID46 dual-key programming — on some variants all enrolled keys must be present during session',
      'Tahoe PEPS antenna module failure (documented 2017+ issue) reducing key detection range',
      'Silverado flip-key pivot fatigue — blade detaches from the remote housing',
      'Spark/Malibu thin blade breakage inside the ignition cylinder on high-mileage vehicles',
    ],
    transponderChipTypes: [
      'PCF7937 ID40 (2005–2013)',
      'Texas Instruments DST40 (2010–2018)',
      'PCF7941 ID46 (Captiva/Malibu)',
    ],
    priceRangeAED: [
      { service: 'Key Duplication (with existing key)', min: 150, max: 300, turnaround: '20–30 min' },
      { service: 'PEPS Smart Key Programming', min: 400, max: 750, turnaround: '30–60 min' },
      { service: 'Transponder Key (ID40/DST40)', min: 300, max: 550, turnaround: '20–45 min' },
      { service: 'Emergency Car Unlock', min: 200, max: 400, turnaround: '20–40 min' },
      { service: 'PassLock Relearn / BCM Reset', min: 200, max: 450, turnaround: '30–60 min' },
    ],
    turnaroundTime: '20–60 minutes',
    oemVsAftermarket: 'Chevrolet Captiva, Malibu, and Spark key platforms are well-supported by quality aftermarket shells. ID40 and ID46 transponders in these vehicles can be programmed from aftermarket blank chips. For current Tahoe and Silverado with Texas Instruments DST40 and PEPS, the blank key must be a GM PEPS-compatible profile — the PEPS system validates the key shape at the antenna. We carry both standard HU100/B111 blanks and PEPS-specific profiles.',
    faqs: [
      {
        question: 'How much does a Chevrolet Tahoe key replacement cost in Dubai?',
        answer: 'Chevrolet Tahoe key replacement in Dubai ranges from AED 350 to AED 750. 2010–2014 Tahoe (DST40) costs AED 350–550; 2015–2018 with PEPS smart key costs AED 500–700; 2019+ Tahoe with the updated GM PEPS system runs AED 600–750.',
      },
      {
        question: 'Can you programme a Chevrolet Captiva key if not all keys are available?',
        answer: 'For Captiva models where the programming session requires all enrolled keys, we can still add a replacement key — but the session will delete previously registered keys that are not presented. This is a GM security design on specific Captiva build variants. For all-keys-lost Captiva, we work directly with the BCM to re-initialize the key table. Contact us with your VIN to confirm which procedure applies.',
      },
      {
        question: 'My Chevrolet Spark key is stuck in the ignition — what should I do?',
        answer: 'A stuck Spark ignition key is usually a binding steering column lock (turn the wheel gently while pulling the key), a worn ignition barrel gripping the blade, or a flat battery preventing the gear selector from confirming Park mode. If the steering wheel is locked with the key in, the barrel likely needs replacement — we can do this on-site.',
      },
      {
        question: 'Do you cover Chevrolet key services across Mirdif and Jumeirah?',
        answer: 'Yes — Mirdif, Jumeirah, Al Quoz, Business Bay, and all Dubai areas for Chevrolet key services. Tahoe and Suburban key blanks are stocked in the mobile unit (popular in villa communities). Average dispatch-to-arrival is 20–45 minutes across Dubai.',
      },
    ],
    relatedServiceSlugs: [
      'car-key-duplication', 'car-key-replacement',
      'transponder-keys', 'emergency-car-unlock', 'automotive-lock-repair',
    ],
    relatedLocationSlugs: ['al-satwa', 'al-badaa', 'mirdif', 'al-quoz', 'jumeirah'],
    metaTitle: 'Chevrolet Car Key Replacement & Programming Dubai | Tahoe, Captiva Specialist',
    metaDescription: 'Chevrolet key replacement & programming in Dubai. Tahoe, Captiva, Malibu, Spark, Camaro — DST40 & PEPS specialist. PassLock relearn available. From AED 150. Call +971 52 642 6161.',
    directAnswerOpener: 'Yes — Lock repair service replaces and programmes Chevrolet car keys in Dubai from AED 150. Tahoe, Captiva, Malibu, Spark — DST40, ID40/ID46, and PEPS smart key systems covered. Call +971 52 642 6161.',
    uniqueIntro: 'Chevrolet vehicles are a common sight across Dubai\'s villa communities and highways — the Tahoe and Suburban commanding the American-SUV market alongside GMC\'s Yukon. Chevrolet\'s key platform is identical to GMC\'s across the full GM line: the same PassLock history, ID40/DST40 transponder progression, and PEPS smart key architecture.\n\nLock repair service programmes Chevrolet keys with GM-compatible OBDII tools for all model years — from straightforward Spark blade cuts to full Tahoe PEPS key recovery — at your location anywhere in Dubai.',
  },

  // ── 11. Audi ───────────────────────────────────────────────────────────────
  {
    slug: 'audi',
    name: 'Audi',
    originCountry: 'Germany',
    icon: '🚗',
    popularModelsUAE: [
      'A3', 'A4', 'A5', 'A6', 'A7', 'A8',
      'Q3', 'Q5', 'Q7', 'Q8', 'e-tron', 'R8',
    ],
    keySystems: [
      'ID48 Megamos Crypto transponder (2001–2016, most A/Q models)',
      'ID48 Crypto 128-bit transponder (2011+ A6/A8/Q7/Q8 — cannot be cloned)',
      'KESSY (Keyless Entry Start System) proximity key with HU162 laser blade (2009+)',
      'VAG (Volkswagen-Audi Group) shared platform with Volkswagen, SEAT, Škoda',
    ],
    commonIssues: [
      'Audi MQB platform (A3/A4, 2013+) all-keys-lost requires VCDS Security Access Code (SAC) — highly complex',
      'Q7/A6 ID48 Crypto 128-bit: standard cloning tools cannot copy the chip — OBDII programming only',
      'KESSY proximity key range reduction from worn antenna module inside door handle',
      'HU162 laser blade wear on A4/A5 (MQB) — specialist cutting equipment required',
      'Audi IMMO-4 (2015+ models) uses new immobiliser protocol incompatible with many aftermarket programmers',
      // TODO: verify IMMO-4 compatibility list for specific UAE model years
    ],
    transponderChipTypes: [
      'ID48 Megamos (2001–2010)',
      'ID48 Crypto 128-bit (2011+)',
      'HiTag Pro (newer A/Q models)',
    ],
    priceRangeAED: [
      { service: 'Key Blade Cutting', min: 200, max: 500, turnaround: '20–30 min' },
      { service: 'KESSY Smart Key Programming (ID48/HiTag)', min: 700, max: 1200, turnaround: '45–90 min' },
      { service: 'Emergency Car Unlock', min: 250, max: 500, turnaround: '20–40 min' },
      { service: 'Remote FOB Repair', min: 150, max: 400, turnaround: '20–40 min' },
    ],
    turnaroundTime: '45–90 minutes',
    oemVsAftermarket: 'Audi ID48 Crypto 128-bit (2011+) keys require OBDII programming — shell source is secondary but the transponder chip must be programmed via the VAG security protocol. HU162 laser blade profiles require specialist cutting machines. We use VCDS-compatible infrastructure for Audi key programming. // TODO: Verify specific UAE-spec SAC availability for A6/Q7 all-keys-lost scenarios.',
    faqs: [
      {
        question: 'How much does an Audi key replacement cost in Dubai?',
        answer: 'Audi key replacement in Dubai ranges from AED 700 to AED 1,200 depending on model and KESSY generation. Older A4/A6 with ID48 Megamos cost AED 700–950; MQB platform (A3/A4, 2013+) with ID48 Crypto 128-bit runs AED 900–1,200.',
      },
      {
        question: 'Can you programme an Audi key without the original key?',
        answer: 'For Audi models with standard ID48 Megamos (pre-2011): yes, OBDII programming is available. For ID48 Crypto 128-bit and IMMO-4 models (2011+), all-keys-lost requires a Security Access Code (SAC) from the VAG dealer network or advanced infrastructure. Contact us with your VIN — we confirm feasibility before booking.',
      },
      {
        question: 'What is KESSY on an Audi?',
        answer: 'KESSY (Keyless Entry Start System) is Audi\'s proximity key system — same as Volkswagen\'s Keyless Access. The key fob must be within range of the door handle antenna to unlock and within the cabin antenna range to start. KESSY fobs contain an ID48 Crypto or HiTag Pro transponder plus a remote module for range-based locking.',
      },
      {
        question: 'Do you service Audi keys in Business Bay and Downtown Dubai?',
        answer: 'Yes. We cover Business Bay, Downtown Dubai, Dubai Marina, Al Satwa, and all Dubai areas for Audi key services. Audi is common in Business Bay and Downtown — average arrival time is 20–35 minutes from our Al Bada\'a base.',
      },
    ],
    relatedServiceSlugs: [
      'car-key-replacement', 'remote-smart-key-programming',
      'transponder-keys', 'emergency-car-unlock',
    ],
    relatedLocationSlugs: ['al-satwa', 'al-badaa', 'business-bay', 'downtown-dubai', 'dubai-marina'],
    metaTitle: 'Audi Car Key Replacement & Programming Dubai | KESSY & ID48 Specialist',
    metaDescription: 'Audi key replacement & programming in Dubai. A3, A4, A6, Q5, Q7, Q8 — KESSY, ID48 Crypto & HiTag specialist. From AED 700. Call +971 52 642 6161.',
    directAnswerOpener: 'Yes — Lock repair service replaces and programmes Audi car keys in Dubai from AED 700. We cover A3, A4, A6, Q5, Q7, Q8 and all Audi models, handling KESSY proximity keys and ID48 Crypto/HiTag transponders. Call +971 52 642 6161.',
    uniqueIntro: 'Audi vehicles occupy a strong position in Dubai\'s business and luxury segments — A4, Q5, and Q7 are common across Business Bay, Downtown Dubai, and Dubai Marina. Audi uses the VAG (Volkswagen-Audi Group) key platform, with ID48 Megamos on older models and the more demanding ID48 Crypto 128-bit on 2011+ vehicles, combined with the KESSY proximity key system on most current A/Q models.\n\nLock repair service handles Audi key programming using VCDS-compatible infrastructure for all standard KESSY and ID48 Crypto operations. Contact us with your VIN before booking all-keys-lost jobs on MQB-platform models.',
    needsReview: true,
  },

  // ── 12. Volkswagen ─────────────────────────────────────────────────────────
  {
    slug: 'volkswagen',
    name: 'Volkswagen',
    originCountry: 'Germany',
    icon: '🚗',
    popularModelsUAE: [
      'Passat', 'Golf', 'Tiguan', 'Touareg', 'Atlas',
      'Jetta', 'Polo', 'Caddy Van', 'T-Roc',
    ],
    keySystems: [
      'ID48 Megamos transponder (2001–2010, Golf/Passat/Jetta)',
      'ID48 Crypto 128-bit (2011+ Tiguan/Touareg/Atlas)',
      'Keyless Access proximity key with HU162 laser blade (2010+ Touareg/Atlas)',
      'VAG group platform — shared with Audi, SEAT, Škoda',
    ],
    commonIssues: [
      'Touareg/Atlas Keyless Access all-keys-lost: requires SAC (Security Access Code) from dealer network',
      'Golf MQB (2013+) ID48 Crypto 128-bit cannot be cloned by standard OBDII programmers',
      'Passat B8 key profile HU162: high-security laser blade requires specialist cutting machine',
      'Jetta older models (pre-2011): HU66 blade profile, ID48 Megamos — generally programmer-friendly',
      // TODO: verify MQB platform SAC availability for UAE-spec Volkswagen models
    ],
    transponderChipTypes: [
      'ID48 Megamos (2001–2010)',
      'ID48 Crypto 128-bit (2011+)',
    ],
    priceRangeAED: [
      { service: 'Key Blade Cutting', min: 200, max: 450, turnaround: '20–30 min' },
      { service: 'Keyless Access Smart Key Programming', min: 650, max: 1100, turnaround: '45–90 min' },
      { service: 'Emergency Car Unlock', min: 250, max: 500, turnaround: '20–40 min' },
      { service: 'Remote FOB Repair', min: 150, max: 350, turnaround: '20–40 min' },
    ],
    turnaroundTime: '30–90 minutes',
    oemVsAftermarket: 'Volkswagen ID48 Megamos key shells are widely available in aftermarket quality. For ID48 Crypto 128-bit (2011+), the chip must be programmed via VAG OBDII protocol — generic cloning tools do not work. HU162 laser blade requires specialist cutting equipment. // TODO: Verify SAC-based all-keys-lost feasibility for UAE-spec Tiguan/Atlas without dealer subscription.',
    faqs: [
      {
        question: 'How much does a Volkswagen Tiguan key replacement cost in Dubai?',
        answer: 'VW Tiguan key replacement in Dubai ranges from AED 650 to AED 1,100. Pre-2018 Tiguan (ID48 Megamos) costs AED 650–900; 2018+ Tiguan (ID48 Crypto, MQB Evo) runs AED 800–1,100 due to the 128-bit encryption requiring VCDS security-level OBDII access.',
      },
      {
        question: 'Can you programme a VW key without the original?',
        answer: 'For older VW models with ID48 Megamos (pre-2011): OBDII replacement is generally feasible. For ID48 Crypto 128-bit (2011+), all-keys-lost requires a SAC from the VAG dealer network or advanced VAG infrastructure. Contact us with your VIN for confirmation.',
      },
      {
        question: 'What is the HU162 blade on a Volkswagen?',
        answer: 'HU162 is a high-security laser-cut blade profile used on newer MQB-platform Volkswagen vehicles (Golf VII/VIII, Passat B8, Tiguan). It has a distinctive double-sided milled cut requiring specialist laser-cutting machines — standard key cutters cannot copy it. We carry the necessary equipment and HU162 blanks.',
      },
      {
        question: 'Do you service Volkswagen keys in Dubai Marina and JLT?',
        answer: 'Yes. We cover Dubai Marina, Jumeirah Lakes Towers, Business Bay, and all Dubai areas. Average arrival from our Al Bada\'a base to Dubai Marina is 20–30 minutes.',
      },
    ],
    relatedServiceSlugs: [
      'car-key-replacement', 'remote-smart-key-programming',
      'transponder-keys', 'emergency-car-unlock',
    ],
    relatedLocationSlugs: ['al-satwa', 'al-badaa', 'dubai-marina', 'jumeirah-lakes-towers', 'business-bay'],
    metaTitle: 'Volkswagen Car Key Replacement & Programming Dubai | ID48 Specialist',
    metaDescription: 'Volkswagen key replacement & programming in Dubai. Tiguan, Passat, Golf, Touareg, Atlas — ID48 Megamos & Crypto specialist. From AED 650. Call +971 52 642 6161.',
    directAnswerOpener: 'Yes — Lock repair service replaces and programmes Volkswagen car keys in Dubai from AED 650. Tiguan, Passat, Golf, Touareg — ID48 Megamos and ID48 Crypto 128-bit systems handled with VCDS-compatible OBDII tools. Call +971 52 642 6161.',
    uniqueIntro: 'Volkswagen has a solid foothold in Dubai\'s European-car segment — Tiguan and Passat are regulars in Business Bay and Dubai Marina. Volkswagen uses the same VAG key platform as Audi: ID48 Megamos on older models and ID48 Crypto 128-bit on 2011+ vehicles, with Keyless Access proximity keys on Touareg and Atlas.\n\nLock repair service handles Volkswagen key programming with VCDS-compatible tools across all standard ID48 operations. Contact us before booking all-keys-lost work on MQB-platform 2013+ models.',
    needsReview: true,
  },

  // ── 13. Ford ───────────────────────────────────────────────────────────────
  {
    slug: 'ford',
    name: 'Ford',
    originCountry: 'United States',
    icon: '🚗',
    popularModelsUAE: [
      'Explorer', 'F-150', 'Edge', 'EcoSport', 'Escape', 'Expedition',
      'Fusion', 'Mustang', 'Bronco', 'Ranger (T6)',
    ],
    keySystems: [
      'Ford PATS (Passive Anti-Theft System) — Type 1–5 depending on generation',
      '4D60 transponder (PATS Type 3, Ford 2002–2008)',
      '4D63 80-bit transponder (PATS Type 4, Ford 2008–2017)',
      'Ford Intelligent Access (push-button start) with ID63 Crypto (2011+)',
      'FordPass Phone-as-Key NFC (2020+ Explorer/Mustang)',
    ],
    commonIssues: [
      'PATS Type 4 (4D63 80-bit) cannot be cloned — OBDII PIN/seed code required from Ford dealer or specialist database',
      'Ford Intelligent Access all-keys-lost: requires PCM-IPC security seed exchange',
      'Explorer post-2011 PATS antenna ring failure causing intermittent "Theft" warning',
      'F-150 flip-key blade FO38 pivot fatigue — blade separates from the remote housing',
      // TODO: verify FordPass Phone-as-Key programming feasibility for UAE-spec 2022+ Explorer
    ],
    transponderChipTypes: [
      '4D60 (PATS Type 3, 2002–2008)',
      '4D63 80-bit (PATS Type 4, 2008–2017)',
      'ID63 Crypto (Intelligent Access, 2011+)',
    ],
    priceRangeAED: [
      { service: 'Key Blade Cutting', min: 200, max: 400, turnaround: '20–30 min' },
      { service: 'PATS Key Programming (Type 3/4)', min: 400, max: 750, turnaround: '30–60 min' },
      { service: 'Intelligent Access Key Programming', min: 600, max: 1000, turnaround: '45–90 min' },
      { service: 'Emergency Car Unlock', min: 200, max: 400, turnaround: '20–40 min' },
    ],
    turnaroundTime: '30–90 minutes',
    oemVsAftermarket: 'Ford 4D60 (PATS Type 3) keys accept quality aftermarket shells and chips. 4D63 80-bit (PATS Type 4) transponders must be programmed via OBDII with a Ford IDS-compatible PIN/seed code — the chip cannot be directly cloned. Intelligent Access keys require OEM-specification fob blanks for the proximity system to validate correctly. // TODO: Verify Ford IDS pin-code database coverage for UAE-spec Explorer/F-150.',
    faqs: [
      {
        question: 'How much does a Ford Explorer key replacement cost in Dubai?',
        answer: 'Ford Explorer key replacement in Dubai ranges from AED 400 to AED 1,000. Pre-2011 Explorer with PATS Type 4 costs AED 400–700; 2011+ with Ford Intelligent Access push-button start costs AED 600–1,000 depending on the generation.',
      },
      {
        question: 'What is Ford PATS and how does it affect key replacement?',
        answer: 'PATS (Passive Anti-Theft System) is Ford\'s transponder immobiliser. It has five generations — Type 1 (basic resistor) through Type 5 (encrypted ID). For PATS Type 4 (4D63 80-bit, most 2008–2017 Fords), the transponder cannot be cloned with standard tools — it requires a Ford IDS security PIN/seed exchange. PATS Type 3 (pre-2008) is more accessible by comparison.',
      },
      {
        question: 'Can you programme a Ford key in Dubai without a Ford dealer?',
        answer: 'For PATS Type 1–3 models (pre-2008): yes. For PATS Type 4/5 and Ford Intelligent Access (2008+), we use Ford IDS-compatible programmers with security seed databases. All-keys-lost for newer Intelligent Access models may require security seed acquisition — contact us with your VIN for a feasibility check.',
      },
      {
        question: 'Do you cover Ford key services in Deira and Silicon Oasis?',
        answer: 'Yes. We cover Deira, Silicon Oasis, Mirdif, Business Bay, and all Dubai areas for Ford key services. Average arrival time to Silicon Oasis from our Al Bada\'a base is 25–40 minutes.',
      },
    ],
    relatedServiceSlugs: [
      'car-key-replacement', 'remote-smart-key-programming',
      'transponder-keys', 'emergency-car-unlock',
    ],
    relatedLocationSlugs: ['al-satwa', 'al-badaa', 'deira', 'silicon-oasis', 'mirdif'],
    metaTitle: 'Ford Car Key Replacement & Programming Dubai | PATS & Intelligent Access Specialist',
    metaDescription: 'Ford key replacement & programming in Dubai. Explorer, F-150, Edge, Mustang, Bronco — PATS Type 3/4 & Intelligent Access specialist. From AED 400. Call +971 52 642 6161.',
    directAnswerOpener: 'Yes — Lock repair service replaces and programmes Ford car keys in Dubai from AED 400. Explorer, F-150, Edge, Mustang — PATS Type 3/4 and Ford Intelligent Access systems handled on-site. Call +971 52 642 6161.',
    uniqueIntro: 'Ford vehicles are a consistent presence on Dubai roads — the Explorer and F-150 in particular have a loyal following in the villa communities of Mirdif, Jumeirah, and Deira. Ford\'s PATS (Passive Anti-Theft System) spans five generations with different programming requirements, with Type 4 and Intelligent Access models requiring Ford IDS-compatible security seed procedures that distinguish a genuine automotive locksmith from a generic key cutter.\n\nLock repair service programmes Ford keys with IDS-compatible OBDII tools for all standard PATS and Intelligent Access operations, mobile to your location in Dubai.',
    needsReview: true,
  },

  // ── 14. Infiniti ───────────────────────────────────────────────────────────
  {
    slug: 'infiniti',
    name: 'Infiniti',
    originCountry: 'Japan',
    icon: '🚗',
    popularModelsUAE: [
      'QX80', 'QX60', 'QX50', 'Q50', 'Q60', 'QX55',
    ],
    keySystems: [
      'Nissan Intelligent Key (iKey) platform — same BCM registration as Nissan',
      'HITAG2 rolling code on QX80/QX60 (2013–2019)',
      'HiTag Pro (2019+ Q50/QX50)',
      'Push-button smart key with Proximity Detection across all current models',
    ],
    commonIssues: [
      'QX80 BCM programming required for all-keys-lost — same complexity as Nissan Patrol Y62',
      'Q50 V37 smart key antenna PCB fault causing "No Key Detected" at range',
      'Infiniti iKey enrolment: BCM must be in programme mode simultaneously — requires dealer-grade OBDII',
      // TODO: verify HiTag Pro all-keys-lost support for UAE-spec QX50/QX55 2021+
    ],
    transponderChipTypes: [
      'HITAG2 (2013–2018)',
      'HiTag Pro (2019+)',
    ],
    priceRangeAED: [
      { service: 'iKey Replacement & BCM Programming', min: 500, max: 900, turnaround: '30–60 min' },
      { service: 'Emergency Car Unlock', min: 250, max: 500, turnaround: '20–40 min' },
      { service: 'Key Blade Cutting', min: 200, max: 400, turnaround: '20–30 min' },
    ],
    turnaroundTime: '30–60 minutes',
    oemVsAftermarket: 'Infiniti uses the Nissan iKey platform — the same BCM registration requirement applies. Shell source is secondary to the BCM programming step, which requires dealer-level OBDII. We use the same Nissan/Infiniti-compatible tools for both brands. // TODO: Verify availability of HiTag Pro blank supply for 2021+ UAE-spec Infiniti.',
    faqs: [
      {
        question: 'How much does an Infiniti QX80 key replacement cost in Dubai?',
        answer: 'Infiniti QX80 key replacement in Dubai ranges from AED 500 to AED 900. The QX80 uses the Nissan iKey (HITAG2) platform requiring BCM programming — the cost is similar to Nissan Patrol Y62.',
      },
      {
        question: 'Can you programme an Infiniti key without the original?',
        answer: 'Yes. Infiniti uses the Nissan Intelligent Key BCM platform — all-keys-lost is performed via dealer-level OBDII BCM re-initialization. This takes 30–45 minutes on-site. Contact us with your model and year to confirm.',
      },
      {
        question: 'Is Infiniti key programming the same as Nissan?',
        answer: 'Yes — Infiniti is Nissan\'s luxury division and uses identical iKey hardware and BCM programming protocol. The key shells and fob designs are different, but the locksmith uses the same OBDII programming tool and procedure for both brands.',
      },
    ],
    relatedServiceSlugs: [
      'car-key-replacement', 'remote-smart-key-programming',
      'transponder-keys', 'emergency-car-unlock',
    ],
    relatedLocationSlugs: ['al-satwa', 'al-badaa', 'downtown-dubai', 'business-bay', 'palm-jumeirah'],
    metaTitle: 'Infiniti Car Key Replacement & Programming Dubai | QX80, Q50 Specialist',
    metaDescription: 'Infiniti key replacement & iKey BCM programming in Dubai. QX80, QX60, Q50 — HITAG2 & HiTag Pro specialist. From AED 500. Call +971 52 642 6161.',
    directAnswerOpener: 'Yes — Lock repair service replaces and programmes Infiniti car keys in Dubai from AED 500. QX80, QX60, Q50 — Nissan iKey platform with HITAG2/HiTag Pro BCM programming on-site. Call +971 52 642 6161.',
    uniqueIntro: 'Infiniti vehicles — particularly the QX80 and Q50 — are a visible presence in Dubai\'s business and residential premium segments. As Nissan\'s luxury arm, Infiniti uses an identical iKey platform requiring the same Body Control Module programming that makes Nissan Intelligent Key replacement more involved than a standard transponder job. Lock repair service handles Infiniti key programming with the same Nissan-compatible BCM tools, mobile to your Dubai location.',
    needsReview: true,
  },

  // ── 15. Honda ──────────────────────────────────────────────────────────────
  {
    slug: 'honda',
    name: 'Honda',
    originCountry: 'Japan',
    icon: '🚗',
    popularModelsUAE: [
      'Civic', 'CR-V', 'Accord', 'HR-V', 'Pilot', 'Odyssey', 'Jazz (Fit)', 'Passport',
    ],
    keySystems: [
      'Honda GEN1 immobiliser: Philips ID48 transponder (1997–2003)',
      'Honda GEN2 immobiliser: Hitag2 transponder (2004–2012)',
      'Honda GEN3 immobiliser: Hitag2 + 128-bit security (2012+)',
      'Honda Smart Key (Push-Start): proximity + transponder (2016+ Accord, CR-V, Civic)',
    ],
    commonIssues: [
      'Honda GEN3 (2012+) all-keys-lost requires a PIN/seed code from Honda dealer network — not available via standard OBDII',
      'Civic 10th gen (FC, 2016–2021) smart key antenna fault causing false "Key Not in Vehicle" alerts',
      'CR-V 5th gen (RW, 2017+) KESSY-style proximity key battery drain if left in charge stand',
      'Jazz/Fit HON66 blade breakage inside the door lock cylinder',
      // TODO: verify Honda GEN3 seed-code availability for UAE-spec Civic 2022+ (FL5 generation)
    ],
    transponderChipTypes: [
      'Philips ID48 (GEN1, 1997–2003)',
      'Hitag2 (GEN2, 2004–2011)',
      'Hitag2 128-bit (GEN3, 2012+)',
    ],
    priceRangeAED: [
      { service: 'Key Duplication (with existing key)', min: 150, max: 300, turnaround: '20–30 min' },
      { service: 'Smart Key / Transponder Programming (GEN2)', min: 350, max: 600, turnaround: '30–60 min' },
      { service: 'GEN3 Smart Key Programming', min: 500, max: 850, turnaround: '45–90 min' },
      { service: 'Emergency Car Unlock', min: 200, max: 400, turnaround: '20–40 min' },
    ],
    turnaroundTime: '30–90 minutes',
    oemVsAftermarket: 'Honda GEN1/GEN2 key shells are available in quality aftermarket versions with compatible Hitag2 chips. GEN3 (2012+) all-keys-lost typically requires a Honda dealer PIN code or specialist seed database — we use Honda-specific OBDII infrastructure where available. HON66 blade blanks are stocked. // TODO: Verify GEN3 seed database coverage for all current UAE Honda models.',
    faqs: [
      {
        question: 'How much does a Honda Civic key replacement cost in Dubai?',
        answer: 'Honda Civic key replacement in Dubai ranges from AED 350 to AED 850. 10th gen Civic (FC, 2016–2021) with GEN3 immobiliser and smart key costs AED 500–850; older 9th gen (FB, 2012–2015) with GEN2/GEN3 costs AED 350–600.',
      },
      {
        question: 'Can you programme a Honda key without the original?',
        answer: 'For GEN1 and GEN2 Honda models (pre-2012): yes, OBDII programming is generally available. For GEN3 (2012+), all-keys-lost may require a Honda dealer seed code. Contact us with your model year — we confirm before booking and will tell you upfront if a dealer code is needed.',
      },
      {
        question: 'What is the HON66 key blade on Honda vehicles?',
        answer: 'HON66 is the blade profile used on most Honda models from 2003 onwards — a standard single-sided blade with a specific tip shape. It is widely stocked and cut with standard key-cutting machines. Newer Honda smart keys use a concealed HON66 blade for emergency manual entry.',
      },
    ],
    relatedServiceSlugs: [
      'car-key-duplication', 'car-key-replacement',
      'transponder-keys', 'emergency-car-unlock',
    ],
    relatedLocationSlugs: ['al-satwa', 'al-badaa', 'jumeirah-village-circle', 'discovery-gardens', 'international-city'],
    metaTitle: 'Honda Car Key Replacement & Programming Dubai | Civic, CR-V Specialist',
    metaDescription: 'Honda key replacement & programming in Dubai. Civic, CR-V, Accord, HR-V — GEN2/GEN3 Hitag2 & Smart Key specialist. From AED 150. Call +971 52 642 6161.',
    directAnswerOpener: 'Yes — Lock repair service replaces and programmes Honda car keys in Dubai from AED 150. Civic, CR-V, Accord, HR-V — GEN2/GEN3 Hitag2 and Smart Key systems handled on-site. Call +971 52 642 6161.',
    uniqueIntro: 'Honda vehicles are popular across Dubai\'s affordable-to-mid-range market — Civic and CR-V are common in JVC, Discovery Gardens, and International City. Honda\'s three-generation immobiliser platform means programming complexity varies significantly by year: GEN1/GEN2 (pre-2012) are accessible with standard OBDII tools, while GEN3 all-keys-lost scenarios may require dealer seed codes. Lock repair service handles all Honda key types mobile, and confirms feasibility before booking.',
    needsReview: true,
  },

  // ── 16. Porsche ────────────────────────────────────────────────────────────
  {
    slug: 'porsche',
    name: 'Porsche',
    originCountry: 'Germany',
    icon: '🚗',
    popularModelsUAE: [
      'Cayenne', 'Macan', 'Panamera', '911', 'Boxster / Cayman', 'Taycan',
    ],
    keySystems: [
      'Porsche PASE (Porsche Advanced Key System) — proximity entry (2010+ Panamera/Cayenne)',
      'ID48 Crypto transponder (Cayenne 2011–2017, Macan, Panamera)',
      'HiTag Pro (2018+ Cayenne/Macan/Taycan)',
      'Programming requires Porsche PIWIS (Porsche Integrated Workshop Information System)',
    ],
    commonIssues: [
      'Porsche PIWIS required for key programming — standard OBDII programmers cannot access Porsche security protocols',
      'PASE all-keys-lost: Porsche security PIN required from Porsche Centre or PIWIS licence',
      'Taycan (EV): digital key programming requires Porsche Connect + PIWIS session',
      '911 (992) remote key: HiTag Pro, dealer infrastructure typically required',
      // TODO: verify PIWIS-compatible third-party tool availability for UAE-spec 2022+ Cayenne/Macan
    ],
    transponderChipTypes: [
      'ID48 Crypto (2011–2017)',
      'HiTag Pro (2018+)',
    ],
    priceRangeAED: [
      { service: 'Key Blade Cutting', min: 300, max: 600, turnaround: '20–30 min' },
      { service: 'PASE Smart Key Programming (where feasible)', min: 1200, max: 2200, turnaround: '60–120 min' },
      { service: 'Emergency Car Unlock', min: 300, max: 700, turnaround: '20–40 min' },
    ],
    turnaroundTime: '60–120 minutes',
    oemVsAftermarket: 'Porsche key programming is one of the most restricted platforms in the locksmith industry — PIWIS access is required for virtually all Porsche ECU security operations. Key blade cutting is straightforward; full PASE key programming feasibility depends on PIWIS licence access. We recommend calling us first with your VIN to confirm whether the specific model can be serviced without a Porsche Centre visit. // TODO: Confirm PIWIS-compatible third-party tool capability for UAE fleet.',
    faqs: [
      {
        question: 'Can you programme a Porsche key without going to a Porsche Centre in Dubai?',
        answer: 'For Porsche key blade cutting and fob shell replacement, yes — straightforward mechanical work. For full PASE key enrolment (adding or replacing a smart key), Porsche uses the PIWIS security system which restricts programming to licensed PIWIS tools. Contact us with your VIN — we confirm feasibility before booking and will clearly advise if a Porsche Centre visit is the only option.',
      },
      {
        question: 'How much does a Porsche Cayenne key replacement cost in Dubai?',
        answer: 'Porsche Cayenne key blade cutting costs AED 300–600. Full PASE smart key programming (where feasible via PIWIS-compatible tools) costs AED 1,200–2,200. Emergency unlock costs AED 300–700. We provide a confirmed quote before any work begins.',
      },
      {
        question: 'Do you service Porsche key needs in Downtown Dubai and Business Bay?',
        answer: 'Yes — emergency unlock, key blade cutting, and fob repair for Porsche vehicles across Downtown Dubai, Business Bay, Dubai Marina, and all Dubai areas. For full smart key enrolment, contact us first with your VIN.',
      },
    ],
    relatedServiceSlugs: [
      'car-key-replacement', 'emergency-car-unlock', 'automotive-lock-repair',
    ],
    relatedLocationSlugs: ['al-satwa', 'al-badaa', 'downtown-dubai', 'business-bay', 'dubai-marina'],
    metaTitle: 'Porsche Car Key Replacement Dubai | Cayenne, Macan, Panamera Key Service',
    metaDescription: 'Porsche key services in Dubai — Cayenne, Macan, Panamera, 911. Key blade cutting, fob repair & emergency unlock. PASE smart key programming where feasible. Call +971 52 642 6161.',
    directAnswerOpener: 'Lock repair service provides Porsche key blade cutting, fob repair, and emergency unlock in Dubai. PASE smart key programming feasibility depends on model year — contact us with your VIN first. Emergency unlock from AED 300. Call +971 52 642 6161.',
    uniqueIntro: 'Porsche occupies a premium niche in Dubai\'s automotive landscape — Cayenne and Macan are common around Downtown Dubai and Business Bay, while the 911 and Taycan draw attention on Sheikh Zayed Road. Porsche\'s key programming is protected behind the PIWIS system, making full smart key enrolment one of the most restricted operations in the locksmith industry.\n\nLock repair service offers Porsche key blade cutting, emergency unlocking, and fob shell repair across all Dubai areas. For full PASE key programming, we assess feasibility against your specific model and year before committing — we will not take a booking we cannot deliver.',
    needsReview: true,
  },

  // ── 17. MG ─────────────────────────────────────────────────────────────────
  {
    slug: 'mg',
    name: 'MG',
    originCountry: 'China (SAIC Motor)',
    icon: '🚗',
    popularModelsUAE: [
      'MG HS', 'MG ZS', 'MG5', 'MG6', 'MG3', 'Marvel R (EV)',
    ],
    keySystems: [
      'ID47 Crypto 128-bit transponder (MG HS/ZS/5/6)',
      'ID48 Crypto on some MG HS variants (2021+)',
      '433 MHz smart key with push-button start on MG HS and ZS EV',
      'SAIC-developed BCM platform — programming tool compatibility varies by model year',
    ],
    commonIssues: [
      'MG HS 2021+ ID48 Crypto variant: some OBDII programmers lack SAIC BCM protocol — verify tool before booking',
      'MG ZS EV: digital key (NFC) pairing requires SAIC Mobility app re-registration after BCM reset',
      'MG key shell cracking at blade pivot (thin shell material on budget-tier fobs)',
      // TODO: verify SAIC BCM protocol support for 2023+ MG HS and MG4 EV for UAE market
    ],
    transponderChipTypes: [
      'ID47 Crypto 128-bit',
      'ID48 Crypto (some 2021+ variants)',
    ],
    priceRangeAED: [
      { service: 'Key Duplication (with existing key)', min: 150, max: 300, turnaround: '20–30 min' },
      { service: 'Smart Key Programming (ID47/ID48)', min: 350, max: 650, turnaround: '30–60 min' },
      { service: 'Emergency Car Unlock', min: 200, max: 350, turnaround: '20–40 min' },
    ],
    turnaroundTime: '20–60 minutes',
    oemVsAftermarket: 'MG key shells are available in aftermarket quality. The ID47/ID48 transponder must be initialized via OBDII — shell source is secondary. SAIC\'s BCM protocol is supported by Autel and XTOOL on most models from 2019–2022; newer 2023+ models may require updated database versions. // TODO: Confirm 2023+ MG coverage in XTOOL database for UAE market.',
    faqs: [
      {
        question: 'How much does an MG HS key replacement cost in Dubai?',
        answer: 'MG HS key replacement in Dubai ranges from AED 350 to AED 650, depending on the transponder variant (ID47 or ID48 Crypto) and model year.',
      },
      {
        question: 'Can you programme an MG key without the original?',
        answer: 'For most MG HS and ZS models (2019–2022): yes, OBDII replacement is feasible. For 2023+ models, we confirm tool compatibility with your VIN before booking.',
      },
      {
        question: 'Do you service MG keys in International City and Discovery Gardens?',
        answer: 'Yes — International City and Discovery Gardens, where MG has a strong presence due to its competitive pricing, are well within our service area. Arrival time from Al Bada\'a is 30–45 minutes.',
      },
    ],
    relatedServiceSlugs: [
      'car-key-duplication', 'car-key-replacement',
      'transponder-keys', 'emergency-car-unlock',
    ],
    relatedLocationSlugs: ['al-satwa', 'al-badaa', 'international-city', 'discovery-gardens', 'silicon-oasis'],
    metaTitle: 'MG Car Key Replacement & Programming Dubai | HS, ZS, MG5 Specialist',
    metaDescription: 'MG key replacement & programming in Dubai. MG HS, ZS, MG5, MG6 — ID47/ID48 Crypto specialist. From AED 150. Call +971 52 642 6161.',
    directAnswerOpener: 'Yes — Lock repair service replaces and programmes MG car keys in Dubai from AED 150. MG HS, ZS, MG5 — ID47/ID48 Crypto systems handled on-site with SAIC-compatible OBDII tools. Call +971 52 642 6161.',
    uniqueIntro: 'MG (now owned by SAIC Motor) has grown rapidly in Dubai\'s value-vehicle market — the MG HS and ZS are especially popular in International City, Discovery Gardens, and Silicon Oasis. MG uses the ID47 Crypto 128-bit key platform (with some 2021+ HS variants carrying ID48), programmed via SAIC\'s BCM protocol on Autel/XTOOL-compatible tools. Lock repair service provides MG key programming mobile across all Dubai areas, with tool-compatibility checked against your VIN before dispatch.',
    needsReview: true,
  },

  // ── 18. Genesis ────────────────────────────────────────────────────────────
  {
    slug: 'genesis',
    name: 'Genesis',
    originCountry: 'South Korea',
    icon: '🚗',
    popularModelsUAE: [
      'G70', 'G80', 'G90', 'GV70', 'GV80',
    ],
    keySystems: [
      'ID47 Crypto 128-bit (G70/G80/GV70)',
      'ID49 / HITAG Pro AES (2020+ GV80/G90)',
      'Hyundai Motor Group premium platform — same chip progression as Hyundai/Kia',
      'Digital key (NFC phone-as-key) on GV80 and G80 (2021+)',
    ],
    commonIssues: [
      'Genesis GV80 ID49 HITAG Pro: all-keys-lost requires dealer-level BCM security handshake',
      'G80 proximity key antenna module fault causing "Smart Key Not Detected" on 2021+ models',
      // TODO: verify Genesis-specific BCM programming protocol vs generic Hyundai approach for UAE fleet
    ],
    transponderChipTypes: [
      'ID47 Crypto 128-bit (G70/G80 2017–2019)',
      'ID49 HITAG Pro AES (2020+)',
    ],
    priceRangeAED: [
      { service: 'Smart Key Replacement (ID47)', min: 500, max: 850, turnaround: '30–60 min' },
      { service: 'Smart Key Replacement (ID49 HITAG Pro)', min: 700, max: 1100, turnaround: '45–90 min' },
      { service: 'Emergency Car Unlock', min: 250, max: 500, turnaround: '20–40 min' },
    ],
    turnaroundTime: '30–90 minutes',
    oemVsAftermarket: 'Genesis uses the Hyundai Motor Group ID47/ID49 platform. Aftermarket shells are available but the transponder initialization is OBDII-dependent. Genesis BCM programming may use a slightly different security handshake than standard Hyundai — our Autel tools include Genesis-specific datasets. // TODO: Verify Genesis GV80 2023+ BCM protocol for UAE market.',
    faqs: [
      {
        question: 'How much does a Genesis GV80 key replacement cost in Dubai?',
        answer: 'Genesis GV80 key replacement ranges from AED 700 to AED 1,100 depending on model year. GV80 uses the ID49 HITAG Pro AES platform — same advanced security as current Hyundai/Kia high-end models.',
      },
      {
        question: 'Is Genesis key programming the same as Hyundai?',
        answer: 'Genesis uses the same Hyundai Motor Group ID47/ID49 chip platform, and most programming steps are identical. However, Genesis BCM may use a slightly different security authentication layer — we use Genesis-specific datasets in Autel to ensure correct pairing.',
      },
    ],
    relatedServiceSlugs: [
      'car-key-replacement', 'remote-smart-key-programming',
      'transponder-keys', 'emergency-car-unlock',
    ],
    relatedLocationSlugs: ['al-satwa', 'al-badaa', 'downtown-dubai', 'business-bay', 'dubai-marina'],
    metaTitle: 'Genesis Car Key Replacement & Programming Dubai | G70, GV80, G80 Specialist',
    metaDescription: 'Genesis key replacement & programming in Dubai. G70, G80, GV70, GV80 — ID47/ID49 HITAG Pro specialist. From AED 500. Call +971 52 642 6161.',
    directAnswerOpener: 'Yes — Lock repair service replaces and programmes Genesis car keys in Dubai from AED 500. G70, G80, GV70, GV80 — ID47 Crypto and ID49 HITAG Pro AES systems handled on-site. Call +971 52 642 6161.',
    uniqueIntro: 'Genesis, Hyundai\'s premium brand, is growing in Dubai\'s luxury segment with the GV80 and G80 establishing a presence in Downtown Dubai and Business Bay. Genesis uses the Hyundai Motor Group\'s ID47/ID49 key platform — the same progressive security as current Hyundai and Kia, with Genesis-specific BCM authentication layers. Lock repair service programmes Genesis keys with Autel infrastructure carrying Genesis-specific datasets, mobile to your Dubai location.',
    needsReview: true,
  },
]

// ── Data access helpers ────────────────────────────────────────────────────────

export function getAllCarBrandSlugs(): string[] {
  return carBrands.map((b) => b.slug)
}

export function getCarBrandBySlug(slug: string): CarBrand | undefined {
  return carBrands.find((b) => b.slug === slug)
}

export function getPublishedCarBrands(): CarBrand[] {
  return carBrands.filter((b) => !b.needsReview)
}

export function getAllCarBrands(): CarBrand[] {
  return carBrands
}
