// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Services Data
// ─────────────────────────────────────────────────────────────────────────────
import type { Service } from '@/types'

export const services: Service[] = [
  // ── 1. Car Key Duplication ─────────────────────────────────────────────────
  {
    slug: 'car-key-duplication',
    category: 'automotive',
    title: 'Key Duplication & Key Cutting',
    metaTitle: 'Key Duplication & Key Cutting in Dubai | Lock Repair Satwa',
    metaDescription:
      'Lock Repair Satwa provides key duplication and key cutting in Dubai from AED 50. Car keys, door keys, padlock keys, all types. Mobile service 24/7. Call +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa provides key duplication and key cutting in Dubai from AED 50 for door keys and AED 150–350 for car keys. Same-day service, all key types, 24/7 mobile across all Dubai areas. Call +971 52 642 6161.',
    description:
      'Having a spare car key is one of the simplest precautions a Dubai driver can take — yet most people wait until they\'ve locked themselves out or lost their only key before acting. Lock Repair Satwa provides on-site car key duplication across all of Dubai, cutting and programming a working copy of your existing key directly at your location.\n\nOur certified technicians carry professional key-cutting machines and a wide range of key blanks to cover virtually every make and model sold in the UAE market — from Toyota Land Cruisers and Nissan Patrols to BMW, Mercedes-Benz and Tesla. Whether you need a simple mechanical blade copy, a remote-equipped key, or a full transponder duplicate with chip programming, we handle it all in a single visit.\n\nThe process takes 15 to 45 minutes depending on key complexity. Standard mechanical keys are cut in as little as 15 minutes; transponder keys with chip cloning take 30–45 minutes. All duplicated keys are tested in the vehicle\'s ignition and doors before we leave.\n\nPricing starts at AED 150 for basic mechanical keys and goes up to AED 350 for keys that include remote buttons and a transponder chip. We recommend getting a spare key made before you ever need it — the cost of duplication is a fraction of the emergency call-out price for a replacement.',
    benefits: [
      {
        title: 'Immediate On-Site Service',
        description:
          'Our mobile unit comes to your home, office or car park. No need to visit a workshop or dealership — we bring the key-cutting equipment to you anywhere in Dubai.',
      },
      {
        title: 'Covers All Key Types',
        description:
          'From simple cut-to-code mechanical keys to laser-cut high-security blades with transponder chips and remote buttons — we duplicate every key type in the market.',
      },
      {
        title: 'Tested Before We Leave',
        description:
          'Every duplicated key is tested in your car\'s lock cylinder and ignition. We do not hand over a key that has not been verified to work.',
      },
      {
        title: 'Cheaper Than a Dealership',
        description:
          'Dealership key duplication typically costs AED 600–1,200 and requires booking days in advance. Our mobile service costs AED 150–350 and is available same-day.',
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Call or WhatsApp',
        description:
          'Contact us on +971 52 642 6161. Tell us your car make, model, year and key type. We confirm availability and quote a price on the spot.',
      },
      {
        step: 2,
        title: 'Technician Dispatched',
        description:
          'A certified technician departs from our Al Bada\'a base or the nearest available unit with the correct key blank and cutting equipment for your vehicle.',
      },
      {
        step: 3,
        title: 'Key Cutting On-Site',
        description:
          'Using professional automatic key-cutting machines, the technician cuts the blade to the precise profile of your original key.',
      },
      {
        step: 4,
        title: 'Chip Programming (if required)',
        description:
          'For transponder or remote keys, the chip is cloned or programmed to match your car\'s immobiliser using OBD diagnostic equipment.',
      },
      {
        step: 5,
        title: 'Test & Hand Over',
        description:
          'We test the new key in the ignition, door locks and boot. Once confirmed working, we hand it over and issue a receipt.',
      },
    ],
    pricing: {
      min: 150,
      max: 350,
      currency: 'AED',
      note: 'Mechanical keys from AED 150; transponder/remote keys AED 250–350. Price confirmed before work begins.',
    },
    turnaroundTime: '15-45 minutes',
    faqs: [
      {
        question: 'Can you duplicate a key without the original?',
        answer:
          'In most cases, no — duplication requires your original key as a template. If you have lost all keys, you need a key replacement service, which we also offer. However, for some older vehicles we can cut a key from the key code recorded on the lock barrel.',
      },
      {
        question: 'Will a duplicated key work with my car\'s immobiliser?',
        answer:
          'Yes, if the original key has a transponder chip. We clone the chip signal to the new key so your car\'s immobiliser recognises it. Keys without chips simply need the blade cut.',
      },
      {
        question: 'How long does car key duplication take in Dubai?',
        answer:
          'Simple mechanical keys take 15–20 minutes on-site. Transponder or remote keys take 30–45 minutes due to chip programming. Our technician will give you a precise estimate after inspecting your key.',
      },
      {
        question: 'Do you come to my location or do I need to go to your workshop?',
        answer:
          'We are 100% mobile. Our technician travels to wherever your car is parked — your home, office, mall car park, or roadside. There is no fixed workshop you need to visit.',
      },
      {
        question: 'Which car brands do you cover for key duplication?',
        answer:
          'We cover the full range of vehicles popular in Dubai: Toyota, Nissan, Honda, Ford, Chevrolet, GMC, BMW, Mercedes-Benz, Audi, Hyundai, Kia, Land Rover and many more. Call us with your car details and we will confirm availability.',
      },
    ],
    supportedBrands: [
      'Toyota', 'Nissan', 'Honda', 'Mitsubishi', 'Mazda',
      'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen',
      'Ford', 'Chevrolet', 'GMC', 'Jeep',
      'Hyundai', 'Kia', 'Lexus', 'Infiniti',
      'Land Rover', 'Volvo', 'Subaru',
    ],
    heroImage: '/images/services/nissan-car-key-duplication-dubai.webp',
    heroImageAlt: 'Technician holding a duplicate Nissan car key inside the vehicle — key duplication service in Dubai, Lock Repair Satwa',
    icon: '🔑',
    emergency: false,
  },

  // ── 2. Car Key Replacement ─────────────────────────────────────────────────
  {
    slug: 'car-key-replacement',
    category: 'automotive',
    title: 'Car Key Replacement',
    metaTitle: 'Car Key Replacement Dubai | Lost Key Experts',
    metaDescription:
      'Lost your only car key in Dubai? We replace car keys on-site without needing the original. All makes covered. mobile service, available 24/7 — +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa replaces lost or damaged car keys in Dubai without requiring a dealership visit. Using OBD programming tools and VIN-based key cutting, we make a fully functional replacement key on-site. Pricing ranges from AED 300 to AED 900 depending on vehicle and key technology. Service available 24/7 across all Dubai areas.',
    description:
      'Losing your only car key in Dubai is more than an inconvenience — it can strand you for days if you rely on the dealership. Lock Repair Satwa offers a fast, fully mobile car key replacement service that gets you back on the road without the long wait and premium dealership pricing.\n\nUnlike duplication (which needs your original key), replacement involves generating a new key from your vehicle\'s VIN (Vehicle Identification Number) and programming it directly to your car\'s ECU via OBD port. Our technicians carry the latest key generation software and a comprehensive library of key blanks, covering everything from basic mechanical vehicles to the latest proximity/smart keys.\n\nThe process starts with identity verification — we will ask for your Emirates ID, vehicle registration (Mulkiya) and a photograph of your driving licence. This is a legal requirement to prevent unauthorised key production. Once verified, the technician generates the key code from the VIN, cuts the blade, and programs the transponder/remote to your vehicle.\n\nReplacement takes 45 minutes to 1.5 hours on-site. All existing keys can be erased from the vehicle\'s memory on request, so a previously lost key can no longer be used to access your car. We cover all mainstream brands sold in the UAE and many European and American luxury marques.',
    benefits: [
      {
        title: 'No Original Key Required',
        description:
          'We generate a new key from your car\'s VIN and immobiliser data — no original is needed. Perfect for total key loss situations.',
      },
      {
        title: 'Old Keys Can Be Erased',
        description:
          'We can delete all previously registered keys from your car\'s memory so lost keys can never be used to access your vehicle again.',
      },
      {
        title: 'Identity-Verified for Security',
        description:
          'We require Emirates ID, vehicle registration and driving licence before producing any replacement key, ensuring only authorised owners receive a new key.',
      },
      {
        title: 'Same-Day Service Across Dubai',
        description:
          'available 24/7. Most replacements are completed the same day you call, eliminating the 3–7 day dealership lead time.',
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Identity Verification',
        description:
          'Provide your Emirates ID, vehicle Mulkiya and driving licence photo. This step is mandatory and protects you against unauthorised key cutting.',
      },
      {
        step: 2,
        title: 'VIN Confirmation',
        description:
          'The technician reads the VIN from your vehicle (dashboard or door jamb) and cross-references it with our key code database to generate the correct cutting code.',
      },
      {
        step: 3,
        title: 'Key Cutting',
        description:
          'The new key blade is cut to the precise factory specification for your VIN using our professional cutting machine.',
      },
      {
        step: 4,
        title: 'ECU Programming',
        description:
          'The new transponder chip is programmed to your car\'s immobiliser via the OBD port. For smart/proximity keys, all wireless protocols are configured.',
      },
      {
        step: 5,
        title: 'Erasing Lost Keys (Optional)',
        description:
          'On request, we wipe all previously registered keys from the immobiliser memory — a crucial security step when your original key is missing.',
      },
      {
        step: 6,
        title: 'Full Functional Test',
        description:
          'The replacement key is tested for ignition start, door lock/unlock and boot release. Remote and push-start functions are confirmed before handover.',
      },
    ],
    pricing: {
      min: 300,
      max: 900,
      currency: 'AED',
      note: 'Mechanical replacement from AED 300; smart/proximity key replacement AED 600–900. Exact quote provided after vehicle inspection.',
    },
    turnaroundTime: '45-90 minutes',
    faqs: [
      {
        question: 'Can you replace my car key if I have lost all copies?',
        answer:
          'Yes. We specialise in total-loss key replacement. Using your VIN and our key code database, we generate and program a completely new key without needing the original.',
      },
      {
        question: 'What documents do I need for a car key replacement?',
        answer:
          'You need your Emirates ID (or valid passport), vehicle registration card (Mulkiya) and driving licence. All three must match the registered owner\'s name.',
      },
      {
        question: 'Can you erase the old lost key so it no longer works?',
        answer:
          'Yes. Once a new key is programmed to your immobiliser, we can erase all previously registered keys from the ECU memory. This is strongly recommended whenever a key is lost.',
      },
      {
        question: 'Is your replacement key as good as the dealership\'s?',
        answer:
          'Our keys use OEM-grade blanks and are programmed with factory-level protocols. The replacement key will function identically to a dealership-issued key at a fraction of the cost and time.',
      },
      {
        question: 'How much does car key replacement cost in Dubai?',
        answer:
          'Costs range from AED 300 for a basic mechanical replacement to AED 900 for a proximity/smart key on a European luxury car. We provide an exact quote before starting any work.',
      },
    ],
    supportedBrands: [
      'Toyota', 'Nissan', 'Honda', 'Mitsubishi', 'Mazda', 'Subaru',
      'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Porsche', 'Land Rover',
      'Ford', 'Chevrolet', 'GMC', 'Jeep', 'Cadillac',
      'Hyundai', 'Kia', 'Lexus', 'Infiniti', 'Acura',
      'Volvo', 'MINI', 'Jaguar',
    ],
    heroImage: '/images/services/car-remote-key-blanks-locksmith-shop-dubai.webp',
    heroImageAlt: 'Display case full of car remote key blanks and spare keys at Lock Repair Satwa locksmith shop, Dubai — car key replacement service',
    icon: '🗝️',
    emergency: true,
  },

  // ── 3. Remote / Smart Key Programming ─────────────────────────────────────
  {
    slug: 'remote-smart-key-programming',
    category: 'automotive',
    title: 'Remote & Smart Key Programming',
    metaTitle: 'Remote & Smart Key Programming Dubai | AED 400–900',
    metaDescription:
      'Expert remote and smart key programming for all car brands in Dubai. Keyless entry, push-start, proximity keys. Mobile service 24/7 — +971 52 642 6161.',
    directAnswerOpener:
      'Remote and smart key programming in Dubai costs AED 400–900 depending on make and key technology. Lock Repair Satwa programs OEM and aftermarket remote keys, keyless entry fobs and proximity push-start keys using manufacturer-level OBD tools. Mobile service available 24/7; most programming jobs completed in 30–60 minutes at your location.',
    description:
      'Modern car keys do far more than simply cut an ignition — they communicate wirelessly with your car\'s security system via rolling-code encryption, proximity sensors and push-start electronics. When that communication breaks down — because of a dead remote, a replaced ECU, a new key purchase or a battery reset — Lock Repair Satwa provides expert reprogramming to restore full functionality.\n\nWe program remote keys, smart keys and proximity fobs for all major makes sold in Dubai. Our technicians use OEM-compatible programming tools (including Autel, Launch X431, Lonsdor K518 and brand-specific platforms) that access the vehicle\'s immobiliser, body control module and smart key ECU directly over the OBD port.\n\nCommon scenarios we handle include: adding a second remote key to your vehicle, reprogramming a remote that stopped working after a battery change, replacing a damaged smart key fob, and setting up a new proximity key after an ECU swap. We also handle keyless entry systems (one-touch lock/unlock) and remote start programming where factory-equipped.\n\nAll programming is non-destructive — your existing keys remain active unless you specifically request that old keys be erased. We provide a written confirmation of which keys are active in your vehicle\'s system at the end of every job.',
    benefits: [
      {
        title: 'Factory-Level OBD Programming',
        description:
          'We use the same OBD protocol access that authorised dealers use, ensuring the programmed key communicates at the full security depth of your vehicle\'s system.',
      },
      {
        title: 'All Frequencies Covered',
        description:
          'We program 315 MHz, 433 MHz and 868 MHz remote systems — covering North American, GCC and European market variants of the same model.',
      },
      {
        title: 'Non-Destructive to Existing Keys',
        description:
          'Adding a new remote key does not affect your working keys. We can add up to the maximum number of keys your vehicle supports without resetting the others.',
      },
      {
        title: 'Proximity & Push-Start Ready',
        description:
          'We program the full suite of smart key functions: keyless entry, push-button start, boot release and driver memory seat/mirror profiles where supported.',
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Diagnosis',
        description:
          'We plug into the OBD port to read the current smart key configuration, identify any fault codes and confirm how many keys are currently registered to the vehicle.',
      },
      {
        step: 2,
        title: 'Key & Blank Preparation',
        description:
          'If a new key is needed, the blade is cut to your VIN spec. The transponder/smart chip is verified to be the correct type for your vehicle.',
      },
      {
        step: 3,
        title: 'Programming Sequence',
        description:
          'Using the appropriate OBD tool, we enter the vehicle\'s immobiliser learning mode and bind the new key\'s chip ID to the ECU.',
      },
      {
        step: 4,
        title: 'Remote Synchronisation',
        description:
          'The remote buttons are synchronised to the Body Control Module (BCM) so lock, unlock and boot functions work at the correct range.',
      },
      {
        step: 5,
        title: 'Full Function Test',
        description:
          'We test every function: ignition start, door lock/unlock, boot release, push-button start and proximity detection at varying distances.',
      },
    ],
    pricing: {
      min: 400,
      max: 900,
      currency: 'AED',
      note: 'Remote key programming from AED 400; full proximity/smart key programming AED 600–900. Price varies by vehicle make and model year.',
    },
    turnaroundTime: '30-60 minutes',
    faqs: [
      {
        question: 'My remote key stopped working after I changed the battery — can you fix it?',
        answer:
          'Yes. A battery change can sometimes de-synchronise the rolling code between the remote and your car\'s BCM. We re-sync the remote in approximately 15–30 minutes — often without needing a new key.',
      },
      {
        question: 'Can you program an aftermarket remote key?',
        answer:
          'We can program high-quality aftermarket remotes for most vehicles. We recommend OEM keys for European luxury brands (BMW, Audi, Mercedes-Benz) where aftermarket compatibility is limited, but will advise you on the best option.',
      },
      {
        question: 'How many remote keys can be programmed to one car?',
        answer:
          'This depends on the vehicle. Most cars support 4–8 keys. Japanese brands often allow up to 8; some European brands limit to 4. We read the current count from the ECU and inform you before programming.',
      },
      {
        question: 'My push-start button does not respond — is this a key programming issue?',
        answer:
          'Not always. If the car detects the key but won\'t start, the issue may be with the push-start button or the brake switch. If the car doesn\'t detect the key at all, re-programming is likely the fix. We diagnose both scenarios on-site.',
      },
      {
        question: 'Can you program smart keys for Tesla and other EVs?',
        answer:
          'Tesla uses a proprietary app-based and card key system that requires Tesla service centre access. For other EVs such as BYD, Hyundai Ioniq and Kia EV6, we can program smart keys using our OBD tools.',
      },
    ],
    supportedBrands: [
      'Toyota', 'Nissan', 'Honda', 'Lexus', 'Infiniti', 'Acura',
      'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Porsche',
      'Ford', 'Chevrolet', 'GMC', 'Jeep', 'Cadillac', 'Dodge',
      'Hyundai', 'Kia', 'Genesis',
      'Land Rover', 'Jaguar', 'Volvo', 'MINI',
      'Mitsubishi', 'Mazda', 'Subaru', 'Suzuki',
      'BYD', 'MG',
    ],
    heroImage: '/images/services/transponder-chip-smart-key-programming-dubai.webp',
    heroImageAlt: 'Smart car key circuit board being inspected during remote key programming — Lock Repair Satwa Dubai',
    icon: '📡',
    emergency: false,
  },

  // ── 4. Transponder Keys ────────────────────────────────────────────────────
  {
    slug: 'transponder-keys',
    category: 'automotive',
    title: 'Transponder Key Cutting & Programming',
    metaTitle: 'Transponder Key Programming Dubai | AED 350–700',
    metaDescription:
      'Transponder key cutting and programming in Dubai for all car makes. On-site chip cloning and ECU pairing. Same-day mobile service — +971 52 642 6161.',
    directAnswerOpener:
      'Transponder keys contain a micro-chip that must be programmed to your car\'s immobiliser before the engine will start. Lock Repair Satwa cuts and programs transponder keys for all major brands in Dubai for AED 350–700. Our mobile technicians use OBD-based programming tools and chip cloners — same-day on-site service, no dealership required.',
    description:
      'A transponder key (also called a "chipped key") contains a small RFID microchip embedded in the key head. When you turn the ignition, an antenna ring around the ignition barrel sends a radio signal to the chip, which responds with a unique code. If the code matches what the car\'s immobiliser expects, the engine is allowed to start. Without this handshake, the engine will crank but not fire — making transponder keys a highly effective theft deterrent.\n\nLock Repair Satwa provides complete transponder key services: blade cutting, chip programming, chip cloning and immobiliser bypass (for vehicles where the immobiliser has failed). We stock a comprehensive range of transponder chips — fixed-code chips, crypto-transponders (Hitag 2, Hitag Pro, DST80) and OEM smart chips — to cover vehicles from the late 1990s through to the current model year.\n\nChip cloning is available for vehicles where the ECU supports it, allowing us to copy the exact chip signal from your original key to a new blank without entering the car\'s programming mode. This is the fastest method and does not disturb your other registered keys. For vehicles requiring ECU-based programming, we access the immobiliser via OBD and add the new chip\'s ID to the authorised key table.\n\nAll transponder work is conducted with your vehicle present and your ownership documents verified. We provide a 30-day warranty on all transponder key work.',
    benefits: [
      {
        title: 'Chip Cloning & OBD Programming',
        description:
          'We offer both chip-cloning (for compatible vehicles) and direct OBD immobiliser programming — giving us the widest possible coverage across all makes and years.',
      },
      {
        title: 'Full Range of Chip Types',
        description:
          'From basic fixed-code chips (ID46, ID48) to advanced crypto-transponders (Hitag 2, Hitag Pro, DST-AES), we stock the right chip for every vehicle.',
      },
      {
        title: '30-Day Warranty',
        description:
          'All transponder programming is backed by a 30-day warranty. If the key fails to communicate with the immobiliser within 30 days, we fix it at no charge.',
      },
      {
        title: 'Immobiliser Fault Diagnosis',
        description:
          'We can read immobiliser fault codes and determine whether a non-starting vehicle is due to a key chip failure, an antenna fault or an ECU issue.',
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Chip Identification',
        description:
          'We use a transponder chip reader to identify the chip type in your existing key. This determines whether cloning or OBD programming is the appropriate method.',
      },
      {
        step: 2,
        title: 'Blade Cutting',
        description:
          'The new key blade is cut to match your vehicle\'s lock profile — either from the original key or via VIN-based code if you have no working key.',
      },
      {
        step: 3,
        title: 'Chip Programming',
        description:
          'We programme the new chip via cloning (for compatible vehicles) or via OBD immobiliser access. The chip\'s unique ID is enrolled into the car\'s authorised key list.',
      },
      {
        step: 4,
        title: 'Ignition Test',
        description:
          'The new key is inserted in the ignition and the engine is started to confirm the immobiliser handshake is successful and the engine fires normally.',
      },
      {
        step: 5,
        title: 'Documentation',
        description:
          'We provide a written receipt confirming the work performed and the 30-day warranty terms.',
      },
    ],
    pricing: {
      min: 350,
      max: 700,
      currency: 'AED',
      note: 'Basic transponder keys (fixed code) from AED 350; Hitag/crypto-transponder keys AED 500–700. Price confirmed after chip identification.',
    },
    turnaroundTime: '30-60 minutes',
    faqs: [
      {
        question: 'How do I know if my car key has a transponder chip?',
        answer:
          'Most cars manufactured after 1998 have transponder keys. Visual signs include a thick plastic head (housing the chip) and sometimes a small logo on the key. If your car has an immobiliser indicator light on the dashboard, it almost certainly uses a transponder key.',
      },
      {
        question: 'My car cranks but won\'t start — is it a transponder problem?',
        answer:
          'A cranking-but-not-starting condition is a classic immobiliser fault symptom, often caused by a dead transponder chip. We can diagnose this on-site — it may be the chip, the antenna coil, or the ECU. We will pinpoint the fault before recommending a solution.',
      },
      {
        question: 'Can you clone a transponder chip?',
        answer:
          'Yes, for vehicles using clonable chip types (ID46, ID60, ID63, etc.). European brands like BMW and Volkswagen use encrypted chips that cannot be cloned and require OBD programming instead. We advise you on the correct method after reading your existing chip.',
      },
      {
        question: 'What if my transponder key works but my car won\'t start?',
        answer:
          'If the key\'s chip is communicating but the car still won\'t start, the fault may be elsewhere — a fuel pump issue, ECU fault or ignition switch problem. We carry OBD diagnostic equipment and can narrow down the cause on-site.',
      },
    ],
    supportedBrands: [
      'Toyota', 'Nissan', 'Honda', 'Mitsubishi', 'Mazda', 'Subaru', 'Suzuki',
      'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Porsche',
      'Ford', 'Chevrolet', 'GMC', 'Dodge', 'Jeep',
      'Hyundai', 'Kia', 'Lexus', 'Infiniti',
      'Land Rover', 'Jaguar', 'Volvo', 'MINI',
    ],
    heroImage: '/images/services/kia-flip-key-programming-keydiy-dubai.webp',
    heroImageAlt: 'KIA transponder flip key next to KEYDIY programmer device — transponder key cutting and programming in Dubai',
    icon: '📟',
    emergency: true,
  },

  // ── 5. Emergency Unlock ────────────────────────────────────────────────────
  {
    slug: 'emergency-car-unlock',
    category: 'automotive',
    title: 'Emergency Car Unlock',
    metaTitle: 'Emergency Car Unlock Dubai | 24/7 — AED 200–500',
    metaDescription:
      'Locked out of your car in Dubai? Our mobile locksmith opens any vehicle in 20–45 minutes. 24/7 service, no damage — +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa provides 24/7 car unlock service across Dubai for AED 200–500. A certified mobile locksmith reaches most Dubai locations within 20–45 minutes and opens your vehicle using non-destructive lock-pick, wedge or OBD unlock methods. No damage to door seals, windows or lock cylinders guaranteed.',
    description:
      'Being locked out of your car is one of the most stressful roadside situations in Dubai — especially in summer when cabin temperatures can exceed 60°C within minutes. If a child or pet is trapped inside, every second counts. Lock Repair Satwa operates daily from 7 AM to 11:30 PM, 365 days a year, with fast-response mobile locksmiths positioned across Dubai to reach you as quickly as possible.\n\nOur technicians are trained in non-destructive vehicle entry techniques: air wedge and long-reach tools for vehicles with manual door controls, and OBD-based electronic unlock for modern keyless vehicles. We never break windows unless you explicitly request it or an emergency involving a child or animal inside the car makes it absolutely necessary — in which case the fastest method takes priority.\n\nCommon scenarios we handle: keys locked inside the car, key broken in the door lock, remote key battery dead with no manual unlock option, electronic door failure due to a flat car battery, and smart key malfunction.\n\nWe cover all Dubai areas including Motor City, Dubai Hills, International City and other locations further from our Al Bada\'a base. Emergency unlocks at peak traffic times carry a small surcharge for travel. All pricing is confirmed before the technician departs.',
    benefits: [
      {
        title: 'Open Daily 24/7 Including Public Holidays',
        description:
          'We answer the phone at 3 AM on Eid just as readily as at noon on a Wednesday. Lockouts don\'t keep business hours, and neither do we.',
      },
      {
        title: 'Non-Destructive Entry Methods',
        description:
          'Our first choice is always a damage-free unlock. We use air wedge kits and slim-jim tools for mechanical locks, and OBD/diagnostic tools for electronic locks.',
      },
      {
        title: 'Child & Pet Emergency Priority',
        description:
          'If a child or pet is trapped inside a vehicle, we treat this as a priority call and deploy the nearest available technician immediately.',
      },
      {
        title: 'No Callout Fee for Failed Jobs',
        description:
          'If for any reason we cannot open your car, you do not pay the service fee (travel cost may apply). We believe you should only pay for a result.',
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Emergency Call',
        description:
          'Call +971 52 642 6161. Tell us your location (area, street or Plus Code), car make/model and the nature of the lockout. Mention immediately if a child or pet is inside.',
      },
      {
        step: 2,
        title: 'Technician Dispatch',
        description:
          'The nearest available technician is dispatched with the appropriate unlock tools for your vehicle type.',
      },
      {
        step: 3,
        title: 'Identity Verification',
        description:
          'On arrival, we confirm your identity with Emirates ID or driving licence to ensure we only unlock cars for their rightful owners.',
      },
      {
        step: 4,
        title: 'Non-Destructive Entry',
        description:
          'Using the appropriate technique for your vehicle (air wedge, OBD unlock, or lock pick), we open the car without damage.',
      },
      {
        step: 5,
        title: 'Post-Unlock Check',
        description:
          'We verify the door, lock cylinder and window seal are undamaged before we leave and provide a receipt for the service.',
      },
    ],
    pricing: {
      min: 200,
      max: 500,
      currency: 'AED',
      note: 'Standard unlock AED 200–300; high-security or keyless vehicles AED 350–500. Prices confirmed before dispatch. Night surcharge may apply after 12 AM.',
    },
    turnaroundTime: '20-45 minutes',
    faqs: [
      {
        question: 'How quickly can you reach me if I am locked out in Dubai?',
        answer:
          'Response times depend on your location and time of day. For areas close to Al Bada\'a (Jumeirah, Business Bay, Downtown), we typically arrive in 15–25 minutes. Further areas like International City or Dubai Silicon Oasis may take 35–50 minutes.',
      },
      {
        question: 'Will you damage my car to unlock it?',
        answer:
          'Our commitment is to non-destructive entry. We use professional slim-jim tools, air wedges and OBD unlock equipment that leave no marks on door seals, glass or lock cylinders. We only break a window as a last resort in child/pet emergencies.',
      },
      {
        question: 'What do I need to show you to prove it\'s my car?',
        answer:
          'Emirates ID or driving licence plus your vehicle registration card (Mulkiya). If you cannot produce these, we may request a Dubai Police authorisation before opening. This policy protects every car owner in Dubai.',
      },
      {
        question: 'My key is broken in the lock — can you help?',
        answer:
          'Yes. We extract broken keys from door lock cylinders and ignition barrels using professional extraction tools, usually without damaging the lock. If the lock cylinder itself is damaged, we can replace it on-site for most common vehicles.',
      },
      {
        question: 'What if my car battery is flat and the door won\'t open electronically?',
        answer:
          'Most cars have a hidden mechanical key slot under the door handle badge or inside the door pull. We use the manual unlock method for flat-battery situations. If no manual entry point exists (some EVs), we use a portable jump pack to restore power and then unlock electronically.',
      },
    ],
    supportedBrands: [
      'Toyota', 'Nissan', 'Honda', 'Mitsubishi', 'Mazda', 'Subaru', 'Isuzu',
      'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Porsche',
      'Ford', 'Chevrolet', 'GMC', 'Jeep', 'Cadillac', 'Dodge',
      'Hyundai', 'Kia', 'Genesis', 'Lexus', 'Infiniti',
      'Land Rover', 'Jaguar', 'Volvo', 'MINI', 'Smart',
      'BYD', 'MG', 'Tesla',
    ],
    heroImage: '/images/services/locksmith-tools-lock-cylinders-dubai.webp',
    heroImageAlt: 'Professional locksmith tools, lock cylinders and key blanks laid out — emergency car unlock service in Dubai by Lock Repair Satwa',
    icon: '🚗',
    emergency: true,
  },

  // ── 6. Lost / Broken Keys ──────────────────────────────────────────────────
  {
    slug: 'lost-broken-car-keys',
    category: 'automotive',
    title: 'Lost & Broken Car Key Service',
    metaTitle: 'Lost or Broken Car Key Dubai | Fast Replacement',
    metaDescription:
      'Lost or snapped your car key in Dubai? We replace and extract broken keys on-site. 24/7 service for all makes. Call +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa handles lost and broken car key situations across Dubai 24/7. We extract broken key fragments from ignition barrels and door locks, then cut and program a full replacement key on-site. Service costs AED 200–700 depending on vehicle and key type. No tow truck or dealership visit required.',
    description:
      'Dubai\'s extreme heat cycles cause car keys to become brittle over time — a key that snaps in the ignition or door lock is a surprisingly common call we receive. Equally, losing your only key in a mall, on the beach or at the airport leaves you completely stranded. Lock Repair Satwa handles both scenarios with a single mobile call-out.\n\nFor broken keys, our technicians use specialist extraction tools to remove key fragments from ignition barrels and door lock cylinders without damage to the lock mechanism. Once extracted, the broken blade is used as a template (where possible) to cut a new key. If the break makes the blade unusable, we cut from the VIN-based code.\n\nFor lost keys, the process is identical to our full car key replacement service: identity verification, VIN-based blade cutting, transponder chip programming and remote synchronisation. We also offer the option to erase the lost key from the immobiliser memory so it cannot be used if found by someone else.\n\nWe recommend that every Dubai driver has at least one spare key made before they need it — the cost of duplication (AED 150–350) is significantly lower than an emergency replacement call-out (AED 300–900).',
    benefits: [
      {
        title: 'Broken Key Extraction Without Damage',
        description:
          'We extract snapped key fragments from ignition and door locks using specialist tools, preserving the lock cylinder so replacement is not necessary in most cases.',
      },
      {
        title: 'On-Site Replacement After Extraction',
        description:
          'Once the broken piece is out, we cut and program a brand new key in the same visit — getting you back on the road without a second call-out.',
      },
      {
        title: 'Security Wipe for Lost Keys',
        description:
          'If your key is lost (not just broken), we erase it from the immobiliser so it is permanently deactivated, protecting your vehicle from unauthorised access.',
      },
      {
        title: '24/7 availability',
        description:
          'Broken keys don\'t happen at convenient times. We are available daily 24/7, including weekends and UAE public holidays.',
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Assess the Situation',
        description:
          'Tell us whether the key is lost or broken, and where the broken piece is (ignition, door lock or boot). This determines the tools and parts the technician brings.',
      },
      {
        step: 2,
        title: 'Extraction (Broken Keys)',
        description:
          'Using slim-pick extractors and hook tools, the broken fragment is carefully removed from the lock cylinder without damaging the barrel.',
      },
      {
        step: 3,
        title: 'Blade Cutting',
        description:
          'A new blade is cut — either from the recovered fragment as a template or from the vehicle\'s VIN code.',
      },
      {
        step: 4,
        title: 'Chip & Remote Programming',
        description:
          'The new key\'s transponder chip and remote (if applicable) are programmed to the vehicle\'s immobiliser via OBD.',
      },
      {
        step: 5,
        title: 'Deactivate Lost Key (if applicable)',
        description:
          'For lost key scenarios, all old keys are erased from the immobiliser and only the new key is re-enrolled.',
      },
    ],
    pricing: {
      min: 200,
      max: 700,
      currency: 'AED',
      note: 'Broken key extraction starts at AED 200. Full replacement after extraction: AED 350–700 depending on key type.',
    },
    turnaroundTime: '45-75 minutes',
    faqs: [
      {
        question: 'My key snapped in the ignition — can you fix it without replacing the ignition?',
        answer:
          'In most cases, yes. We extract the broken fragment with specialist tools that fit alongside the broken piece without forcing it deeper. Only if the fragment is very short or the lock is already damaged might ignition replacement be needed.',
      },
      {
        question: 'Can I still drive if only part of my key blade broke off?',
        answer:
          'It depends on where it broke. If enough blade remains to turn the ignition, you may be able to move the car — but do not try to force it, as it may break further or jam. Call us first for advice.',
      },
      {
        question: 'The remaining stub of my broken key is too short to extract — what happens?',
        answer:
          'In this situation we may need to replace the lock cylinder. We carry common cylinder types and can swap the barrel on-site for most popular vehicles. If your car model requires an unusual cylinder, we can source and return within 24 hours.',
      },
    ],
    supportedBrands: [
      'Toyota', 'Nissan', 'Honda', 'Mitsubishi', 'Mazda', 'Subaru',
      'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen',
      'Ford', 'Chevrolet', 'GMC', 'Jeep',
      'Hyundai', 'Kia', 'Lexus', 'Infiniti',
      'Land Rover', 'Volvo', 'MINI',
    ],
    heroImage: '/images/services/bentley-spare-car-key-duplication-dubai.webp',
    heroImageAlt: 'Bentley original and newly duplicated spare car key — lost or broken car key replacement in Dubai, Lock Repair Satwa',
    icon: '🔨',
    emergency: true,
  },

  // ── 7. Flip Keys ──────────────────────────────────────────────────────────
  {
    slug: 'flip-keys',
    category: 'automotive',
    title: 'Flip Key Replacement & Programming',
    metaTitle: 'Flip Key Replacement Dubai | Folding Key Service',
    metaDescription:
      'Flip key shell replacement, blade cutting and remote programming in Dubai. All car makes covered. On-site mobile service — +971 52 642 6161.',
    directAnswerOpener:
      'Flip keys (folding remote keys) combine a retractable blade and a remote fob in one compact unit. Lock Repair Satwa replaces damaged flip key shells, cuts new blades and programs the remote electronics on-site across Dubai. Service costs AED 250–550. Common on Toyota, Nissan, Audi, VW and many other brands popular in the UAE.',
    description:
      'The flip key — also called a folding key — is one of the most common key types on UAE roads. Found on Toyota Fortuners, Nissan Patrols, Audi vehicles, Volkswagen models and many others, the flip mechanism folds the blade into the remote housing when not in use, protecting the blade and reducing pocket bulk.\n\nOver time, the hinge mechanism can break, the blade can snap, the remote buttons can fail, or the entire key can be lost. Lock Repair Satwa handles every flip-key scenario: shell replacement (when the blade and chip are intact but the housing is cracked), blade replacement (when the blade snaps at the hinge), full replacement (when the key is lost entirely), and remote reprogramming (when the lock/unlock buttons stop responding).\n\nFor shell replacements, we transfer the existing blade and chip to a new housing — a cost-effective option when only the plastic is damaged. For full replacements, we cut a new blade to VIN spec and program the remote and transponder chip via OBD. Our technicians carry a wide range of flip key shells to cover the most popular UAE vehicle models.',
    benefits: [
      {
        title: 'Shell Replacement Without Full Reprogramming',
        description:
          'If only the plastic housing is broken, we transfer your existing chip and blade to a new shell — saving the cost of full reprogramming.',
      },
      {
        title: 'Hinge & Button Repair',
        description:
          'Worn flip hinges and faulty remote buttons are repaired on-site. We stock button membranes and pivot pins for the most common flip key models.',
      },
      {
        title: 'Full Replacement Available',
        description:
          'If the flip key is lost or the blade is broken, we perform a full cut-and-program replacement, including transponder chip and remote synchronisation.',
      },
      {
        title: 'Wide Shell Inventory',
        description:
          'We carry flip key shells for Toyota, Nissan, Honda, Audi, Volkswagen, Hyundai, Kia and other popular UAE market brands.',
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Damage Assessment',
        description:
          'We examine the key to determine whether a shell swap, blade replacement, remote re-sync or full replacement is needed.',
      },
      {
        step: 2,
        title: 'Shell / Blade Work',
        description:
          'Damaged shell components are replaced. If the blade is broken, a new one is cut. If the key is lost, a new blade is cut from VIN code.',
      },
      {
        step: 3,
        title: 'Electronics Transfer or Programming',
        description:
          'The transponder chip and remote circuit board are transferred to the new shell (if reusing existing components) or programmed fresh via OBD (for full replacements).',
      },
      {
        step: 4,
        title: 'Remote Sync',
        description:
          'The remote is synchronised to the BCM so all buttons function at full range.',
      },
      {
        step: 5,
        title: 'Test',
        description:
          'Ignition start, door lock/unlock and boot release are tested before handover.',
      },
    ],
    pricing: {
      min: 250,
      max: 550,
      currency: 'AED',
      note: 'Shell replacement from AED 250; full flip key replacement with programming AED 400–550.',
    },
    turnaroundTime: '30-60 minutes',
    faqs: [
      {
        question: 'The blade on my flip key snapped at the hinge — can it be repaired?',
        answer:
          'Yes. We replace the blade and refit it to the existing flip mechanism. If the hinge pivot itself is damaged, we replace the entire shell assembly and transfer your existing chip.',
      },
      {
        question: 'My flip key remote buttons don\'t work but the blade is fine — can you fix just the remote?',
        answer:
          'Often yes. We replace the button membrane and battery, then re-sync the remote to your car. If the circuit board is faulty, we may need to replace the remote section and reprogram it.',
      },
      {
        question: 'How much does a flip key replacement cost in Dubai?',
        answer:
          'Shell-only replacement starts at AED 250. A full flip key (new shell, new blade, transponder and remote programming) costs AED 400–550 depending on the vehicle make and model.',
      },
    ],
    supportedBrands: [
      'Toyota', 'Nissan', 'Honda', 'Mitsubishi',
      'Audi', 'Volkswagen', 'MINI',
      'Hyundai', 'Kia',
      'Ford', 'Chevrolet',
      'Mazda', 'Subaru', 'Suzuki',
    ],
    heroImage: '/images/services/ducati-motorcycle-key-cutting-dubai.webp',
    heroImageAlt: 'Ducati motorcycle flip key on leather surface — flip key cutting and programming service in Dubai by Lock Repair Satwa',
    icon: '🔄',
    emergency: false,
  },

  // ── 8. Smart Door Locks ───────────────────────────────────────────────────
  {
    slug: 'smart-door-locks',
    category: 'residential',
    title: 'Smart Door Lock Installation & Repair',
    metaTitle: 'Smart Door Lock Installation Dubai | AED 350–1200',
    metaDescription:
      'Smart door lock supply, installation and repair in Dubai. Fingerprint, PIN, RFID and app-controlled locks for villas and apartments — +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa installs and repairs smart door locks in Dubai for residential and commercial properties. We supply and fit fingerprint, PIN code, RFID card and app-controlled smart locks compatible with Dubai\'s villa and apartment door types. Installation costs AED 350–1,200 including the lock unit. Service available 7 days a week.',
    description:
      'Smart door locks are becoming the preferred access solution across Dubai\'s villa communities and high-rise apartments — eliminating the need for physical keys while providing audit logs, remote access and multiple entry methods. Lock Repair Satwa supplies, installs and services a curated range of smart lock brands tested for reliability in Dubai\'s climate, where summer humidity and heat can degrade cheaper electronic components.\n\nWe offer four main smart lock categories: fingerprint biometric locks (recognition in under 0.5 seconds), PIN keypad locks (programmable with multiple user codes), RFID card/fob locks (compatible with most building access cards), and WiFi/Bluetooth app-controlled locks (remotely controllable via iOS and Android apps). Many models combine multiple methods on a single unit.\n\nOur technicians assess your existing door and frame before recommending a lock. We cover standard apartment doors, solid wood villa doors, glass doors, and hollow-core doors — each requiring different mounting hardware. All installations include a full function test, programming of at least one fingerprint/PIN/card, and an orientation walkthrough for the resident.\n\nWe also repair and service existing smart locks: battery replacement, fingerprint sensor cleaning, firmware updates, and lock mechanism servicing.',
    benefits: [
      {
        title: 'Multiple Entry Methods',
        description:
          'Fingerprint, PIN, RFID card, physical key backup and smartphone app — all in one device. Never locked out due to a single point of failure.',
      },
      {
        title: 'Remote Access Control',
        description:
          'WiFi-enabled models let you lock and unlock your door from anywhere in the world via a smartphone app — useful for letting in housekeepers or family members remotely.',
      },
      {
        title: 'Multiple User Profiles',
        description:
          'Programme up to 100 fingerprints and unlimited PIN codes. Create time-limited access for short-term guests without re-programming when they leave.',
      },
      {
        title: 'Dubai Climate Tested',
        description:
          'We only supply locks rated for high-humidity, high-temperature environments. All models are IP-rated and have been tested in UAE summer conditions.',
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Site Assessment',
        description:
          'Our technician visits your property, measures the door thickness and style, and recommends the appropriate smart lock model for your needs and budget.',
      },
      {
        step: 2,
        title: 'Lock Supply',
        description:
          'We source and supply the chosen smart lock unit. Most popular models are available from our stock for same-day installation.',
      },
      {
        step: 3,
        title: 'Removal of Old Lock',
        description:
          'The existing lock and hardware are carefully removed, and any required mortise or bore adjustments are made to the door.',
      },
      {
        step: 4,
        title: 'Smart Lock Installation',
        description:
          'The new smart lock is fitted, wired (where applicable) and secured. Door alignment is checked to ensure smooth operation.',
      },
      {
        step: 5,
        title: 'Programming & Handover',
        description:
          'We programme the owner\'s fingerprint, PIN and/or RFID card, pair the app where applicable, and walk you through the full operation.',
      },
    ],
    pricing: {
      min: 350,
      max: 1200,
      currency: 'AED',
      note: 'Includes lock unit and installation. Basic PIN/RFID locks from AED 350; fingerprint + WiFi app models AED 700–1,200.',
    },
    turnaroundTime: '60-120 minutes',
    faqs: [
      {
        question: 'Will a smart lock fit on my Dubai apartment door?',
        answer:
          'Most UAE apartment doors use a standard 60 mm or 70 mm backset lock profile that is compatible with our smart lock range. Our technician will measure your door before confirming. In rare cases of non-standard doors, we may need to adjust the door bore.',
      },
      {
        question: 'What happens if the smart lock battery dies?',
        answer:
          'All models we supply have a physical key override. Some also have an external battery terminal where you can power the lock from a 9V battery to enter and then replace the internal batteries at your convenience.',
      },
      {
        question: 'Can I install a smart lock on a Dubai villa main gate?',
        answer:
          'Yes, for gate locks we recommend RFID or keypad models specifically rated for outdoor exposure. We can assess your gate hardware and recommend the best-fit model.',
      },
      {
        question: 'How many users can a smart lock support?',
        answer:
          'Most models support 10–100 fingerprints and 10–50 PIN codes. RFID card capacity varies by model. We will specify the capacity of the model we recommend for your household or office size.',
      },
    ],
    supportedBrands: [],
    heroImage: '/images/services/smart-door-lock-installation-dubai.webp',
    heroImageAlt: 'Black smart door lock with touchpad installed on apartment door — smart lock installation service in Dubai by Lock Repair Satwa',
    icon: '🏠',
    emergency: false,
  },

  // ── 9. Safe Boxes ─────────────────────────────────────────────────────────
  {
    slug: 'safe-box-services',
    category: 'residential',
    title: 'Safe Box Opening, Installation & Repair',
    metaTitle: 'Safe Box Opening & Installation Dubai | AED 200–800',
    metaDescription:
      'Safe box opening, combination reset and installation in Dubai. Hotel, home and office safes. Mobile service — call +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa opens, repairs and installs safe boxes for homes, hotels and offices across Dubai. We open safes with forgotten combinations, dead batteries or malfunctioning locks — without drilling where possible. Safe opening starts at AED 200. We also supply and install new electronic and mechanical safes from AED 400.',
    description:
      'Whether you have forgotten your safe combination, the electronic keypad has failed, the battery has died, or you have acquired a second-hand safe with an unknown code, Lock Repair Satwa provides professional safe box services across Dubai.\n\nOur technicians are trained in both electronic and mechanical safe entry methods. For electronic safes, we first attempt a battery bypass or keypad reset. If these are unsuccessful, we use manufacturer override codes (where available) before resorting to any physical manipulation. For combination mechanical safes, we use non-destructive dial manipulation techniques developed by professional locksmiths.\n\nWe also supply and install new safes for home, hotel room and office use. Our range includes compact hotel-style safes, large home safes bolted to floors or walls, and heavy-duty commercial safes for jewellery and document storage. All installations include secure anchoring to the floor or wall structure and full programming of the initial combination.\n\nNote: We do not open safes without proof of ownership. For hotel safes, we work directly with hotel management and security teams.',
    benefits: [
      {
        title: 'Non-Destructive Opening Where Possible',
        description:
          'Our first approach is always non-destructive — battery bypass, override codes or dial manipulation. Drilling is a last resort.',
      },
      {
        title: 'Combination Reset Service',
        description:
          'Once opened, we reset your safe to a new combination of your choice and confirm you can lock and reopen it before we leave.',
      },
      {
        title: 'Full Safe Supply & Installation',
        description:
          'We supply electronic and mechanical safes and bolt them to your floor or wall for maximum security — preventing removal by burglars.',
      },
      {
        title: 'Hotel & Commercial Service',
        description:
          'We work with Dubai hotels and serviced apartment operators to open and service hotel room safes — a common requirement for guests who forget their code on checkout.',
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Safe Assessment',
        description:
          'We identify the safe make, model and lock type to determine the correct entry approach.',
      },
      {
        step: 2,
        title: 'Non-Destructive Entry Attempt',
        description:
          'Battery bypass, emergency override codes or dial manipulation are attempted first.',
      },
      {
        step: 3,
        title: 'Physical Entry (if required)',
        description:
          'Only if non-destructive methods fail do we proceed with controlled drilling at the least-damaging point.',
      },
      {
        step: 4,
        title: 'Lock Repair / Reset',
        description:
          'After opening, the lock mechanism is inspected, repaired if necessary, and reprogrammed to a new combination.',
      },
      {
        step: 5,
        title: 'Documentation',
        description:
          'We provide a written receipt and, where requested, a report for insurance purposes.',
      },
    ],
    pricing: {
      min: 200,
      max: 800,
      currency: 'AED',
      note: 'Safe opening from AED 200 (electronic) or AED 350 (mechanical). New safe supply and installation AED 400–800.',
    },
    turnaroundTime: '30-90 minutes',
    faqs: [
      {
        question: 'Can you open a hotel safe in Dubai if a guest forgets the code?',
        answer:
          'Yes, we work with hotel management and security. We require written authorisation from the hotel before opening any guest room safe. Response time for hotel calls is typically 30–60 minutes.',
      },
      {
        question: 'Can you open a safe without destroying it?',
        answer:
          'In most cases, yes. Electronic safes can often be opened via battery bypass or emergency code. Mechanical combination safes can be opened by dial manipulation. Drilling is only required for heavily reinforced safes or cases where the locking bolts are mechanically jammed.',
      },
      {
        question: 'What do I need to prove I own the safe?',
        answer:
          'We require Emirates ID and, where possible, a purchase receipt or photo of the safe in your home/office. For office safes, written authorisation from a company manager is required.',
      },
    ],
    supportedBrands: [],
    icon: '🔒',
    emergency: true,
  },

  // ── 10. Parking Remotes ───────────────────────────────────────────────────
  {
    slug: 'parking-remotes',
    category: 'residential',
    title: 'Parking Remote & Gate Remote Services',
    metaTitle: 'Parking Remote Programming Dubai | Gate Fob Cloning',
    metaDescription:
      'Parking and gate remote programming, cloning and replacement in Dubai. All frequencies covered. Mobile service — call +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa programs, clones and replaces parking garage and gate remotes across Dubai for AED 150–450. We cover fixed-code and rolling-code systems used in Dubai residential buildings, villa community gates, and underground car parks. Same-day service for most remote types.',
    description:
      'Parking remotes and gate fobs are easy to lose and surprisingly expensive to replace through building management companies. Lock Repair Satwa offers a faster, more affordable alternative — we clone, program or replace parking remotes for Dubai residential buildings, compound gates and underground car parks.\n\nWe work with the two main remote system categories used in Dubai buildings: fixed-code remotes (where we can clone the signal to a new fob in minutes) and rolling-code remotes (where we must program the new fob through the gate control panel, which typically requires building management cooperation).\n\nFor fixed-code remotes (the majority of older residential buildings in Dubai), we clone your existing remote to a new fob in under 15 minutes. For rolling-code systems, we program the new remote if you have access to the control panel, or advise on the building management process.\n\nWe also supply spare remotes at competitive prices, allowing you to keep a backup fob without paying the premium charged by building management offices.',
    benefits: [
      {
        title: 'Remote Cloning in 15 Minutes',
        description:
          'For fixed-code remotes, we clone your existing fob to a new blank using a handheld programmer — no need to visit the building management office.',
      },
      {
        title: 'Wide Frequency Coverage',
        description:
          'We program remotes at 433 MHz, 315 MHz, 868 MHz and 433.92 MHz — covering virtually all gate and parking systems used in Dubai.',
      },
      {
        title: 'Affordable Spare Remotes',
        description:
          'Having a spare parking remote costs a fraction of the building management replacement fee. We supply and program spares on-site.',
      },
      {
        title: 'No Building Management Needed (Fixed Code)',
        description:
          'For fixed-code systems, no contact with building management is required. We clone the signal directly from your existing working remote.',
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Remote Identification',
        description:
          'We identify the frequency and code type (fixed or rolling) of your existing remote.',
      },
      {
        step: 2,
        title: 'Cloning or Programming',
        description:
          'Fixed-code remotes are cloned in minutes. Rolling-code remotes require access to the gate control panel for programming.',
      },
      {
        step: 3,
        title: 'Range Test',
        description:
          'The new remote is tested at the gate or parking barrier to confirm it triggers the opening at the correct range.',
      },
      {
        step: 4,
        title: 'Handover',
        description:
          'The new fob is handed over with a receipt and guidance on battery replacement.',
      },
    ],
    pricing: {
      min: 150,
      max: 450,
      currency: 'AED',
      note: 'Remote cloning from AED 150; rolling-code programming (with control panel access) AED 250–450.',
    },
    turnaroundTime: '15-45 minutes',
    faqs: [
      {
        question: 'Can you clone my building parking remote without the original?',
        answer:
          'For fixed-code systems, we need the original remote or the signal code to clone. Without the original, we need to program a new fob via the control panel, which requires building management access.',
      },
      {
        question: 'How do I know if my building uses a fixed-code or rolling-code remote?',
        answer:
          'Call us with the remote model number printed on the back, or send a photo. We will tell you immediately which system your building uses and whether cloning is possible.',
      },
      {
        question: 'My parking remote battery is dead — can you just replace it?',
        answer:
          'Absolutely. Most parking remotes use a CR2032 coin battery. We can replace it on-site for AED 20–50 including the battery. A dead battery never requires a full remote replacement.',
      },
    ],
    supportedBrands: [],
    icon: '🅿️',
    emergency: false,
  },

  // ── 11. Rubber Stamps ─────────────────────────────────────────────────────
  {
    slug: 'rubber-stamps',
    title: 'Rubber Stamp Making Dubai',
    metaTitle: 'Rubber Stamp Making Dubai | Fast Same-Day Service',
    metaDescription:
      'Custom rubber stamps in Dubai — self-inking, pre-inked and traditional. Business, legal and personal stamps. Same-day delivery — +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa produces custom rubber stamps in Dubai for businesses, professionals and personal use. We make self-inking, pre-inked and traditional rubber stamps with custom text, logos and Arabic text. Stamps are ready in 30–90 minutes. Pricing starts at AED 50 for a basic round stamp, up to AED 200 for large self-inking business stamps.',
    description:
      'Custom rubber stamps are an essential business tool across Dubai — from company signature stamps and "Received" office stamps to notary-style stamps for legal documents. Lock Repair Satwa provides fast, high-quality rubber stamp production as an extension of our physical security and key services.\n\nWe produce three stamp types: self-inking stamps (built-in ink reservoir, recommended for frequent use), pre-inked stamps (high-impression-quality, ink-infused die for premium results) and traditional rubber stamps (requiring a separate ink pad, most economical option).\n\nOur stamps support English and Arabic text, custom logos, QR codes and signature reproductions. We can produce standard round and rectangular stamps, as well as custom shapes for marketing purposes. Files can be submitted as PDF, PNG or AI (Adobe Illustrator) format.\n\nOrder online or by WhatsApp, and your stamp is ready for collection or delivery within 1–3 hours for standard designs.',
    benefits: [
      {
        title: 'Arabic & English Text',
        description:
          'We produce bilingual stamps with properly typeset Arabic text alongside English — essential for UAE legal and commercial documents.',
      },
      {
        title: 'Same-Day Production',
        description:
          'Standard designs are ready in 1–3 hours. Rush orders completed in 30–60 minutes where possible.',
      },
      {
        title: 'All Stamp Types Available',
        description:
          'Self-inking, pre-inked and traditional rubber stamps in all standard sizes — 20 mm round up to 60 × 90 mm rectangular.',
      },
      {
        title: 'Custom Logos & QR Codes',
        description:
          'Upload your company logo or we generate a QR code stamp for contactless business card information.',
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Submit Design',
        description:
          'Send your text and/or logo via WhatsApp or email. We confirm the design proof within 30 minutes.',
      },
      {
        step: 2,
        title: 'Design Approval',
        description:
          'We send a digital proof for your approval before production begins.',
      },
      {
        step: 3,
        title: 'Production',
        description:
          'The stamp die is laser-engraved and mounted in the chosen stamp housing.',
      },
      {
        step: 4,
        title: 'Quality Check',
        description:
          'A test impression is taken and checked for sharpness and accuracy.',
      },
      {
        step: 5,
        title: 'Collection or Delivery',
        description:
          'Collect from our Al Bada\'a location or arrange same-day delivery across Dubai.',
      },
    ],
    pricing: {
      min: 50,
      max: 200,
      currency: 'AED',
      note: 'Basic round rubber stamp from AED 50; large self-inking business stamp AED 120–200.',
    },
    turnaroundTime: '30-90 minutes',
    faqs: [
      {
        question: 'Can you make an Arabic rubber stamp?',
        answer:
          'Yes. We produce Arabic-only, English-only and bilingual Arabic/English stamps. Send us the Arabic text and we will typeset it correctly in the stamp design proof.',
      },
      {
        question: 'How long does a self-inking stamp last?',
        answer:
          'A quality self-inking stamp produces 10,000–50,000 impressions before the ink reservoir needs refilling. We offer ink refill service for AED 10–20.',
      },
      {
        question: 'Can you reproduce my handwritten signature as a stamp?',
        answer:
          'Yes. Send a clear scan or photo of your signature and we reproduce it on a pre-inked stamp die. The stamp quality is excellent for routine document signing.',
      },
    ],
    supportedBrands: [],
    icon: '📮',
    emergency: false,
  },

  // ── 12. Car Battery Replacement ───────────────────────────────────────────
  {
    slug: 'car-battery-replacement',
    category: 'automotive',
    title: 'Car Battery Replacement Dubai',
    metaTitle: 'Car Battery Replacement Dubai | AED 250–600',
    metaDescription:
      'Mobile car battery replacement in Dubai. We test, supply and fit batteries for all car makes. 24/7 service, no towing needed — +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa provides mobile car battery replacement across Dubai for AED 250–600, including the battery and fitting. We carry batteries for Japanese, European, American and Korean vehicles. A technician tests your current battery on-site using a digital load tester, then fits a new battery and resets any ECU memory codes. available 24/7.',
    description:
      'Dubai\'s extreme summer heat is the number one killer of car batteries — the average battery life in UAE climates is 2–3 years, compared to 4–5 years in Europe. When your car refuses to start on a scorching Dubai morning, the battery is the most common culprit.\n\nLock Repair Satwa provides a complete mobile battery service: we come to you, test the existing battery with a professional digital load tester, confirm the diagnosis, and replace the battery with a correctly spec\'d replacement unit sourced from trusted brands (Varta, Bosch, ACDelco, Rocket, and Amaron).\n\nOur technicians carry the most common battery sizes for popular UAE vehicles — Toyota Land Cruisers, Nissan Patrols, Honda Accords, BMW 5 Series and many more. If your battery size is less common, we can source and deliver it within 2–4 hours.\n\nImportantly, we handle ECU memory reset after battery replacement on modern vehicles that require it (some BMWs, Mercedes and other European cars need battery registration to the BCM to ensure correct charging profile). We carry OBD tools to perform this step on-site, preventing erratic charging behaviour from a newly fitted battery.\n\nOld batteries are removed and disposed of responsibly through our recycling partner.',
    benefits: [
      {
        title: 'Digital Load Testing First',
        description:
          'We test your existing battery before recommending replacement. If the battery is still serviceable, we tell you — we do not replace batteries that don\'t need it.',
      },
      {
        title: 'ECU Battery Registration',
        description:
          'For European vehicles (BMW, Mercedes, Audi) that require ECU battery registration, we perform this step on-site using OBD tools, ensuring the alternator charges the new battery correctly.',
      },
      {
        title: 'Quality Brands Only',
        description:
          'We supply Varta, Bosch, ACDelco, Amaron and Rocket batteries — brands with established UAE market presence and warranty support.',
      },
      {
        title: 'Responsible Old Battery Disposal',
        description:
          'Lead-acid batteries are environmental hazards. We remove and dispose of your old battery through a licensed recycling partner at no extra charge.',
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Technician Arrival & Safety Check',
        description:
          'The technician parks safely, switches off the vehicle and performs a visual check of the battery, terminals and cables.',
      },
      {
        step: 2,
        title: 'Load Test',
        description:
          'A digital battery load tester measures cranking amps (CCA) and state of health. Results are shown to you before any work is recommended.',
      },
      {
        step: 3,
        title: 'Battery Selection & Price Confirmation',
        description:
          'We select the correct battery by OEM spec (group size, CCA rating, RC minutes) and confirm the price before proceeding.',
      },
      {
        step: 4,
        title: 'Safe Replacement',
        description:
          'Negative terminal is disconnected first, then positive. The new battery is fitted, terminals cleaned, and connections torqued to spec.',
      },
      {
        step: 5,
        title: 'ECU Registration & Start Test',
        description:
          'For vehicles requiring it, battery registration is performed via OBD. The engine is started and charging voltage confirmed at 13.8–14.7V.',
      },
    ],
    pricing: {
      min: 250,
      max: 600,
      currency: 'AED',
      note: 'Includes battery and fitting. Small/mid-range vehicles AED 250–350; SUVs and European vehicles AED 350–600. Brand and warranty duration vary by price point.',
    },
    turnaroundTime: '20-45 minutes',
    faqs: [
      {
        question: 'How often should I replace my car battery in Dubai?',
        answer:
          'In Dubai\'s heat, most batteries last 2–3 years. If your car is slow to start, especially in the morning, or if the battery is over 2 years old, a load test is worthwhile. Don\'t wait until you are stranded.',
      },
      {
        question: 'Will I lose my car settings when the battery is replaced?',
        answer:
          'Possibly. Radio presets, seat memory and clock settings may reset. On modern vehicles, we use a memory saver device to maintain 12V power to the electronics while swapping the battery, minimising data loss.',
      },
      {
        question: 'Do you provide a warranty on the battery?',
        answer:
          'Yes. Batteries we supply come with a 12-month replacement warranty (Varta/Bosch) or 18-month warranty (Amaron). If the battery fails within the warranty period, we replace it at no charge.',
      },
      {
        question: 'Can you replace the battery for my electric or hybrid vehicle?',
        answer:
          'We replace the 12V auxiliary battery (not the high-voltage traction battery) for hybrid and electric vehicles. The 12V auxiliary battery in an EV or hybrid behaves like a normal car battery and fails on a similar schedule.',
      },
      {
        question: 'My car battery is not completely dead — can you just charge it?',
        answer:
          'Yes. For a discharged (but not failed) battery, we can connect a smart charger on-site. If our load test shows the battery is holding charge correctly, a recharge is the right solution and we will not push an unnecessary replacement.',
      },
    ],
    supportedBrands: [
      'Toyota', 'Nissan', 'Honda', 'Mitsubishi', 'Mazda', 'Subaru', 'Isuzu', 'Suzuki',
      'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Porsche', 'Volvo', 'MINI',
      'Ford', 'Chevrolet', 'GMC', 'Jeep', 'Cadillac', 'Dodge', 'RAM',
      'Hyundai', 'Kia', 'Genesis', 'Lexus', 'Infiniti', 'Acura',
      'Land Rover', 'Jaguar',
      'BYD', 'MG', 'Tesla',
    ],
    icon: '🔋',
    emergency: true,
  },

  // ── 13. Key Duplication (Residential) ─────────────────────────────────────
  {
    slug: 'key-duplication',
    category: 'residential',
    title: 'Key Duplication',
    metaTitle: 'Key Duplication Dubai | Door & Home Keys | Lock Repair Satwa',
    metaDescription:
      'Fast key duplication in Dubai for door keys, padlock keys, mailbox keys and more. From AED 50. Mobile service or visit our Al Bada\'a workshop — +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa provides key duplication in Dubai from AED 50 for standard door keys. We copy mortise keys, Yale keys, padlock keys, mailbox keys and more in 10–20 minutes. Mobile service available across all Dubai neighbourhoods or visit our D90 Al Bada\'a workshop. Call +971 52 642 6161.',
    description:
      'Having a spare door key is one of the simplest and most practical security measures for any Dubai home. Whether you need a copy for a family member, a housekeeper, or simply as a backup, Lock Repair Satwa duplicates all types of residential keys quickly and at competitive prices.\n\nWe copy mortise keys, Yale flat keys, dimple keys, tubular keys, padlock keys, mailbox keys and safe deposit keys. Our precision key-cutting machines ensure the duplicate is cut to exact tolerances — keys that actually work first time, not approximate copies that wear out your lock.\n\nOur Al Bada\'a workshop is open daily, and we also offer mobile key duplication for customers who prefer service at their home or office. Standard door keys are duplicated in as little as 10 minutes. Specialty high-security keys with restricted profiles may take slightly longer.',
    benefits: [
      {
        title: 'All Key Types Copied',
        description: 'Mortise, Yale, dimple, tubular, padlock and mailbox keys all duplicated on professional cutting machines for guaranteed fit.',
      },
      {
        title: 'Ready in 10–20 Minutes',
        description: 'Standard residential keys are duplicated on the spot. No lengthy waits or appointment booking required.',
      },
      {
        title: 'Workshop or Mobile Service',
        description: 'Visit our D90 Al Bada\'a workshop or call for a mobile technician who will come to your Dubai home or office.',
      },
      {
        title: 'Affordable Starting Price',
        description: 'Door key duplication starts from just AED 50 — a small investment that can save you significantly in an emergency lockout situation.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Bring or Send Your Key', description: 'Visit our workshop with your original key, or request a mobile visit. We confirm the key type and provide a price.' },
      { step: 2, title: 'Key Cutting', description: 'Your key is cut to the exact profile using professional automatic key-cutting machines calibrated for precision.' },
      { step: 3, title: 'Quality Check', description: 'The cut duplicate is inspected for burrs, depth accuracy and profile alignment before it is handed over.' },
      { step: 4, title: 'Test (On-Site Mobile Only)', description: 'For mobile visits, we test the duplicate in your door lock to confirm it operates smoothly before we leave.' },
    ],
    pricing: { min: 50, max: 200, currency: 'AED', note: 'Standard Yale/mortise keys from AED 50; dimple and high-security keys AED 100–200. Price confirmed before cutting.' },
    turnaroundTime: '10-20 minutes',
    faqs: [
      { question: 'Can you duplicate a key without the original?', answer: 'In most cases we need the original as a template. For some common locks we can cut from a code. If you have lost all keys, a lock change or picking service is the alternative.' },
      { question: 'Do you duplicate keys for all Dubai apartment door types?', answer: 'Yes. We cover the most common lock types in UAE apartments and villas — Yale, mortise, dimple and tubular. Bring your key and we confirm compatibility on the spot.' },
      { question: 'Can I get a key cut for my mailbox in a Dubai building?', answer: 'Absolutely. Mailbox keys are one of the most common duplication requests. Bring the original mailbox key and we cut a copy in under 10 minutes.' },
    ],
    supportedBrands: [],
    icon: '🔑',
    emergency: false,
  },

  // ── 14. Safe Opening ──────────────────────────────────────────────────────
  {
    slug: 'safe-opening',
    category: 'residential',
    title: 'Safe Opening',
    metaTitle: 'Safe Opening Dubai | Forgotten Combination Experts | AED 200+',
    metaDescription:
      'Professional safe opening in Dubai without drilling where possible. Forgotten combination, dead battery or jammed mechanism — Lock Repair Satwa opens it. Call +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa opens safes in Dubai with forgotten combinations, dead batteries or malfunctioning electronic keypads. We use non-destructive methods first — battery bypass, override codes and dial manipulation — before any drilling. Safe opening starts at AED 200. Available 24/7 for emergency situations. Call +971 52 642 6161.',
    description:
      'A locked safe you cannot open is one of the most frustrating situations — especially when important documents, cash or valuables are inside. Lock Repair Satwa provides professional safe opening services across Dubai for home, hotel and office safes of all makes and models.\n\nOur approach is always non-destructive first. For electronic safes, we attempt battery bypass via the external terminal, followed by emergency override codes where the manufacturer provides them. For mechanical combination safes, our locksmiths use professional dial manipulation techniques that require no drilling and leave the safe in full working condition.\n\nOnly in cases where the locking bolts are mechanically jammed or the safe is a high-security vault without any bypass option do we proceed with controlled drilling at the point of least structural damage. After opening, we inspect and service the lock mechanism, reset the combination to your new code, and confirm the safe is fully functional before we leave.',
    benefits: [
      {
        title: 'Non-Destructive First Approach',
        description: 'We attempt battery bypass, manufacturer override codes and dial manipulation before any drilling — preserving the safe\'s integrity in most cases.',
      },
      {
        title: 'Combination Reset After Opening',
        description: 'Once the safe is open, we reset the combination to your chosen new code and confirm you can operate the safe independently.',
      },
      {
        title: 'All Safe Types Covered',
        description: 'Electronic keypad safes, mechanical combination safes, key safes, hotel room safes and floor safes — we handle all types.',
      },
      {
        title: 'Ownership Verification Required',
        description: 'We require proof of ownership before opening any safe, protecting every customer against unauthorised access to their property.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Identification & Ownership Check', description: 'We identify the safe make and model, and verify your ownership via Emirates ID and proof of premises.' },
      { step: 2, title: 'Non-Destructive Entry Attempt', description: 'Battery bypass and emergency override codes are tried first for electronic safes. Dial manipulation for mechanical safes.' },
      { step: 3, title: 'Controlled Drill (If Required)', description: 'Only if non-destructive methods fail do we drill at the manufacturer\'s designated access point to minimise damage.' },
      { step: 4, title: 'Lock Service & Combination Reset', description: 'The lock mechanism is serviced, worn parts replaced if needed, and the combination is reset to your new code.' },
      { step: 5, title: 'Full Function Test', description: 'The safe is locked and reopened with the new combination to confirm everything functions correctly before we leave.' },
    ],
    pricing: { min: 200, max: 600, currency: 'AED', note: 'Electronic safe opening from AED 200; mechanical combination safes from AED 350; high-security vaults from AED 500. Exact quote after assessment.' },
    turnaroundTime: '30-90 minutes',
    faqs: [
      { question: 'Can you open a safe without the combination?', answer: 'Yes. For electronic safes we use battery bypass and override methods. For mechanical safes we use dial manipulation. Drilling is only required for high-security vaults or jammed bolt mechanisms.' },
      { question: 'Will my safe be damaged when you open it?', answer: 'Our goal is always damage-free entry. Most electronic and mechanical safes can be opened without any damage. We are transparent — if your safe type requires drilling, we tell you before we start and quote accordingly.' },
      { question: 'Can you open a hotel safe in Dubai?', answer: 'Yes, but we require written authorisation from hotel management and security before opening any guest room safe. We work directly with Dubai hotels and serviced apartment properties.' },
      { question: 'How long does safe opening take?', answer: 'Electronic safes with battery bypass: 15–30 minutes. Mechanical dial safes: 30–90 minutes depending on complexity. Vaults requiring drilling: 60–120 minutes.' },
    ],
    supportedBrands: [],
    icon: '🔓',
    emergency: true,
  },

  // ── 15. Access Card Duplication ───────────────────────────────────────────
  {
    slug: 'access-card-duplication',
    category: 'residential',
    title: 'Access Card Duplication',
    metaTitle: 'Access Card Duplication Dubai | RFID & Proximity Cards',
    metaDescription:
      'Access card and key fob duplication in Dubai for residential buildings. RFID, proximity and EM4100 card cloning — 15–30 minutes. Call +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa duplicates access cards and key fobs for Dubai residential buildings, offices and parking barriers. We clone RFID (125 kHz EM4100), HID proximity and NFC access cards in 15–30 minutes from AED 50. Mobile service available — we come to your home or office. Call +971 52 642 6161.',
    description:
      'Access cards and key fobs are the primary entry method for the vast majority of Dubai\'s residential towers and villa communities. Losing one — or needing a spare for a family member or housekeeper — means either paying the building management\'s premium replacement fee or waiting days for processing.\n\nLock Repair Satwa provides fast, affordable access card and fob duplication for standard 125 kHz cards (EM4100, EM4102, T5577 format) and HID proximity cards commonly used in UAE buildings. We clone the card\'s identification data to a new blank card of the same format, producing an identical duplicate that works on all readers registered to the original.\n\nNote: Encrypted card systems (Mifare Classic with custom encryption, DESFire) and building-specific high-security cards cannot be cloned — these require direct programming through the building management system. We will identify your card type during the service and advise whether cloning is feasible.',
    benefits: [
      {
        title: 'Fast Cloning in 15–30 Minutes',
        description: 'Standard 125 kHz and HID cards are cloned in under 30 minutes using professional programmers. No building management office visits needed.',
      },
      {
        title: 'Spare Card for Family or Staff',
        description: 'Get an extra card programmed for a family member, housekeeper or driver without paying building management\'s replacement fee.',
      },
      {
        title: 'Card Type Identification Included',
        description: 'We identify your card type before starting. If cloning is not possible due to encryption, we tell you upfront and suggest alternatives.',
      },
      {
        title: 'Mobile Service Available',
        description: 'We come to your Dubai home or office. No need to carry your access card to a workshop while worrying about access to your building.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Card Type Identification', description: 'We read your card using an RFID analyser to identify frequency, protocol and whether it is a clonable format.' },
      { step: 2, title: 'Feasibility Confirmation', description: 'We confirm whether duplication is possible and provide a price before proceeding.' },
      { step: 3, title: 'Card Cloning', description: 'The card data is read and written to a compatible blank card using professional RFID programming equipment.' },
      { step: 4, title: 'Test at Reader', description: 'Where possible, we test the new card on an available reader to confirm it triggers correctly before handover.' },
    ],
    pricing: { min: 50, max: 150, currency: 'AED', note: 'Standard 125 kHz EM4100 card duplication from AED 50; HID proximity card duplication AED 100–150.' },
    turnaroundTime: '15-30 minutes',
    faqs: [
      { question: 'Can you duplicate any access card?', answer: 'We can clone most 125 kHz cards (EM4100, HID 26-bit) used in standard Dubai residential buildings. Encrypted systems (Mifare DESFire, high-security access control) cannot be cloned and require building management programming.' },
      { question: 'How do I know what type of card my building uses?', answer: 'Send us a photo or bring the card to our workshop. We identify the type within minutes using our RFID analyser and tell you immediately if it is clonable.' },
      { question: 'Will a cloned card work exactly like the original?', answer: 'Yes, for clonable card types. The clone contains identical data to the original and will be recognised by all readers registered to the original card.' },
    ],
    supportedBrands: [],
    icon: '💳',
    emergency: false,
  },

  // ── 16. Lock Change ───────────────────────────────────────────────────────
  {
    slug: 'lock-change',
    category: 'residential',
    title: 'Lock Change',
    metaTitle: 'Lock Change Dubai | Residential Door Lock Replacement',
    metaDescription:
      'Lock change service for Dubai apartments and villas. We replace mortise locks, deadbolts and smart locks. From AED 200 — +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa changes door locks for Dubai apartments, villas and offices from AED 200 including parts and labour. We supply and fit mortise locks, deadbolt locks, digital smart locks and padlocks. Service takes 30–60 minutes. Available daily across all Dubai areas. Call +971 52 642 6161.',
    description:
      'Changing your door lock is the most effective security upgrade you can make when you move into a new Dubai property, after a break-in, when a key is lost, or when a previous tenant or contractor may still have a key. Lock Repair Satwa supplies and fits replacement locks for all residential and light commercial door types across Dubai.\n\nWe carry a range of quality lock brands suitable for Dubai\'s climate — from standard mortise locks and single/double cylinder deadbolts to high-security picks-resistant locks for enhanced protection. Our technicians match the new lock to your existing door preparation where possible, avoiding unnecessary drilling or door modification.\n\nFor apartments, we replace the lock cylinder within the existing mortise body, preserving the door hardware and reducing cost. For villas and buildings requiring a full lock mechanism replacement, we supply and fit the complete unit. We also offer digital smart lock upgrades as part of a lock change — replacing a standard mechanical lock with a fingerprint or PIN-code model in the same visit.',
    benefits: [
      {
        title: 'Same-Day Lock Supply & Fitting',
        description: 'We carry a range of standard lock units. Most residential lock changes are completed same-day without needing to order parts.',
      },
      {
        title: 'Cylinder Change Without Full Replacement',
        description: 'For apartments with standard mortise bodies, we can replace just the cylinder — a more cost-effective option that maintains your existing door hardware.',
      },
      {
        title: 'Security Upgrade Options',
        description: 'Upgrading at the same time? We can fit high-security, anti-pick, anti-drill locks or digital smart locks during the same visit.',
      },
      {
        title: 'All Dubai Door Types Covered',
        description: 'Wooden villa doors, aluminium apartment doors, steel fire doors and glass entrance doors — we fit locks appropriate for each door type.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Assessment', description: 'We inspect your existing door, lock type and door preparation to recommend the most suitable replacement and quote a price.' },
      { step: 2, title: 'Lock Selection', description: 'You choose from our recommended options. We explain the security features and price of each before proceeding.' },
      { step: 3, title: 'Old Lock Removal', description: 'The existing lock is carefully removed without damaging the door or door frame.' },
      { step: 4, title: 'New Lock Fitting', description: 'The replacement lock is fitted, aligned and secured. Door operation is checked to ensure smooth action.' },
      { step: 5, title: 'Key Cutting & Test', description: 'New keys are cut for the new lock and tested in both the lock and the door before handover.' },
    ],
    pricing: { min: 200, max: 600, currency: 'AED', note: 'Cylinder change from AED 200; full mortise lock replacement AED 300–500; high-security lock upgrade AED 400–600. Price includes lock unit and fitting.' },
    turnaroundTime: '30-60 minutes',
    faqs: [
      { question: 'Do I need to change the whole lock or just the cylinder?', answer: 'In most Dubai apartments, only the cylinder needs replacing — this is quicker and less expensive. For older or damaged lock bodies, a full replacement is better. We assess on-site and advise before starting.' },
      { question: 'Can you change my lock without damaging my door?', answer: 'Yes. We use the existing door preparation wherever possible. Only if the door requires a new bore size (e.g., for a smart lock installation) is any drilling needed, and we explain this beforehand.' },
      { question: 'How many keys do I get with a new lock?', answer: 'Standard locks come with 2–3 keys. Additional keys can be cut for AED 50–100 each. High-security restricted locks come with 2 keys, and additional copies require a registered authorised order.' },
    ],
    supportedBrands: [],
    icon: '🔐',
    emergency: false,
  },

  // ── 17. Lock Repair ───────────────────────────────────────────────────────
  {
    slug: 'lock-repair',
    category: 'residential',
    title: 'Lock Repair',
    metaTitle: 'Lock Repair Dubai | Stiff, Jammed or Broken Locks Fixed',
    metaDescription:
      'Lock repair in Dubai for stiff, jammed or broken door locks. On-site service in 30–60 minutes. From AED 150 — +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa repairs stiff, jammed, broken or misaligned door locks across Dubai for AED 150–400. Common faults include loose handles, broken cylinders, misaligned strike plates and worn mortise mechanisms. Our mobile locksmiths diagnose and fix most lock faults on-site in 30–60 minutes. Call +971 52 642 6161.',
    description:
      'A stiff, sticky or jammed door lock is both an inconvenience and a security risk — a lock that is hard to operate can fail completely at the worst possible time, leaving you locked out or unable to secure your property. Lock Repair Satwa provides on-site lock repair across Dubai for residential and light commercial doors.\n\nCommon lock faults we repair include: worn cylinder pins (causing the key to turn with difficulty), broken springs inside the mortise body, misaligned strike plates causing the latch or bolt to bind, loose or wobbly handles due to worn through-bolts, broken cam in the cylinder preventing key operation, and general lubrication and servicing to restore smooth operation.\n\nWhere a lock fault is caused by door misalignment — which is common in Dubai buildings where temperature cycling causes frames to expand and contract — we adjust the strike plate position or sand the door edge to restore proper alignment. This avoids unnecessary lock replacement costs when the lock body itself is not at fault.',
    benefits: [
      {
        title: 'Diagnosis Before Repair Quote',
        description: 'We identify the root cause of the fault before quoting. Many lock problems are simple fixes that cost far less than a full replacement.',
      },
      {
        title: 'On-Site Parts for Common Faults',
        description: 'We carry springs, cylinders, strike plates and mortise components for the most common lock types in Dubai residential buildings.',
      },
      {
        title: 'Door Alignment Assessment',
        description: 'Many lock problems are caused by door misalignment, not the lock itself. We check the full door operation and fix the root cause.',
      },
      {
        title: 'Emergency Same-Day Response',
        description: 'A jammed lock can trap you inside or outside your property. We treat lock repair calls as priority and aim to arrive within 30–60 minutes in most Dubai areas.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Inspection', description: 'We inspect the lock, door alignment, cylinder action and strike plate to identify all contributing faults.' },
      { step: 2, title: 'Fault Diagnosis & Quote', description: 'We explain exactly what is wrong and provide a transparent repair quote before starting any work.' },
      { step: 3, title: 'Repair', description: 'Depending on the fault: lubrication, cylinder servicing, spring replacement, strike plate adjustment or mortise component replacement.' },
      { step: 4, title: 'Door Alignment (if needed)', description: 'If the door frame or hinges are causing the lock to bind, we adjust strike plate position or recommend hinge adjustment.' },
      { step: 5, title: 'Full Operational Test', description: 'We test the lock from both inside and outside, confirming smooth key operation and secure bolt throw before completing the job.' },
    ],
    pricing: { min: 150, max: 400, currency: 'AED', note: 'Simple lubrication and adjustment from AED 150; cylinder replacement or mortise service AED 250–400. Price confirmed after diagnosis.' },
    turnaroundTime: '30-60 minutes',
    faqs: [
      { question: 'My lock is stiff but still works — should I repair or replace it?', answer: 'Stiffness is usually caused by worn pins or lack of lubrication — both inexpensive to fix. We always assess whether repair is viable before recommending replacement.' },
      { question: 'My key turns but the door won\'t open — what is the fault?', answer: 'This is typically a misaligned strike plate, a worn latch spring or a door that has warped. We diagnose and fix the specific cause on-site rather than replacing the whole lock unnecessarily.' },
      { question: 'Can you fix a lock that has been forced or tampered with?', answer: 'Yes. Forced or tampered locks often have bent bolts, cracked cylinders or damaged frames. We assess the damage and either repair or replace the affected components, and advise on security upgrades to prevent recurrence.' },
    ],
    supportedBrands: [],
    icon: '🔧',
    emergency: true,
  },

  // ── 18. Mailbox Lock ──────────────────────────────────────────────────────
  {
    slug: 'mailbox-lock',
    category: 'residential',
    title: 'Mailbox Lock Services',
    metaTitle: 'Mailbox Lock Dubai | Open, Replace & Duplicate Keys',
    metaDescription:
      'Mailbox lock opening, replacement and key duplication in Dubai. Same-day service for apartment and villa mailboxes — +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa opens, replaces and provides spare keys for mailbox locks across Dubai from AED 100. If you have lost your mailbox key or the lock is jammed, our locksmiths open it without damage and supply a replacement lock and spare keys. Service takes 20–40 minutes. Call +971 52 642 6161.',
    description:
      'Mailbox locks are small but important — your utility bills, official correspondence and bank letters all arrive via the mailbox, making it a security concern. Lock Repair Satwa provides a full range of mailbox lock services for Dubai apartment complexes, villa compounds and commercial buildings.\n\nWe open locked mailboxes without a key using non-destructive picking or impressioning techniques. Once open, we replace the lock with a new unit and provide two or more spare keys. We also duplicate mailbox keys when an original is available but spares are needed.\n\nCommon Dubai mailbox lock types include cam locks (the most common type in UAE buildings) and tubular locks. We carry a range of standard cam lock sizes and can match or replace the existing lock in most cases without requiring a specialist order.',
    benefits: [
      {
        title: 'Non-Destructive Mailbox Opening',
        description: 'We open jammed or locked mailboxes using picking and impressioning — no drilling or damage to the mailbox door or housing.',
      },
      {
        title: 'Same-Day Lock Replacement',
        description: 'We carry standard cam locks in the most common sizes for UAE mailboxes. Replacement is completed the same visit as the opening.',
      },
      {
        title: 'Spare Keys Cut on Spot',
        description: 'Whether you need one spare or five, we cut mailbox key copies during the same visit.',
      },
      {
        title: 'Building Management Coordination',
        description: 'For communal mailbox banks in Dubai buildings, we coordinate with building management to ensure access compliance and documentation.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Lock Inspection', description: 'We identify the mailbox lock type (cam lock size, key type) and the best approach for non-destructive entry.' },
      { step: 2, title: 'Non-Destructive Opening', description: 'Using appropriate picking or impressioning tools, we open the mailbox without damage.' },
      { step: 3, title: 'Lock Replacement (if required)', description: 'We replace the cam lock with a new unit of matching dimensions and provide new keys.' },
      { step: 4, title: 'Spare Key Cutting', description: 'Additional key copies are cut from the new key at your request.' },
    ],
    pricing: { min: 100, max: 250, currency: 'AED', note: 'Mailbox opening and key cutting from AED 100; lock replacement included AED 150–250 depending on lock type.' },
    turnaroundTime: '20-40 minutes',
    faqs: [
      { question: 'Can you open a mailbox without a key and without breaking it?', answer: 'Yes. Most UAE mailboxes use standard cam locks that can be picked or impressioned without any damage. We open and re-lock them cleanly, then replace the lock if you wish.' },
      { question: 'Can you cut a spare key for my mailbox?', answer: 'Absolutely. Bring the original mailbox key or request a mobile visit and we cut spare keys on the spot in 5–10 minutes.' },
      { question: 'What size cam lock does my building mailbox use?', answer: 'Most Dubai building mailboxes use 16 mm or 19 mm cam locks. We carry both sizes. If your mailbox uses a less common size, we can source and return within 24 hours.' },
    ],
    supportedBrands: [],
    icon: '📬',
    emergency: false,
  },

  // ── 19. Garage Remote Duplicate ───────────────────────────────────────────
  {
    slug: 'garage-remote-duplicate',
    category: 'residential',
    title: 'Garage Remote Duplicate',
    metaTitle: 'Garage Remote Duplicate Dubai | Gate & Garage Fob Cloning',
    metaDescription:
      'Garage remote and gate fob duplication in Dubai. Clone your remote in 15–30 minutes from AED 150. Mobile service available — +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa clones and duplicates garage and gate remotes across Dubai in 15–30 minutes from AED 150. We cover fixed-code and compatible rolling-code remotes used in Dubai villa garages and residential gate systems. Mobile service available — we come to your location. Call +971 52 642 6161.',
    description:
      'Garage remotes are convenient until you need a spare or lose one. Lock Repair Satwa provides garage remote duplication services for Dubai villas and residential properties, creating an exact working copy of your existing remote without any programming of the gate control panel.\n\nFor fixed-code garage remotes (the most common type in older Dubai villa garages), we clone the signal directly from your working remote to a new blank fob in minutes. The clone works identically on your garage door or gate motor.\n\nFor more modern rolling-code garage systems (commonly found in newer Dubai villa developments), cloning requires access to the garage motor\'s learn button or control panel to register the new remote. Where you have access to the motor, we handle the full programming process on-site.\n\nWe carry a range of universal remote blanks compatible with popular garage motor brands used in Dubai, including FAAC, BFT, Nice, Came, Hormann and others commonly installed in UAE residential developments.',
    benefits: [
      {
        title: 'Fixed-Code Cloning Without Motor Access',
        description: 'Most older Dubai villa garage remotes use fixed codes — cloned directly from your existing remote with no need to open the motor housing or call the installer.',
      },
      {
        title: 'Wide Frequency Coverage',
        description: 'We clone remotes at 433 MHz, 315 MHz and 868 MHz — covering all major garage motor brands installed in Dubai villas and communities.',
      },
      {
        title: 'Spare Remote for Every Family Member',
        description: 'Get spares programmed for your spouse, children\'s drivers or housekeeper without the garage installer\'s call-out fee.',
      },
      {
        title: 'Mobile Service to Your Villa',
        description: 'We come to you — no need to visit a workshop. Our technician clones the remote at your garage door to confirm it works on-site.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Remote Type Identification', description: 'We read your existing remote\'s frequency and code type to confirm whether cloning is possible without motor access.' },
      { step: 2, title: 'Clone or Program', description: 'Fixed-code remotes are cloned in minutes. Rolling-code remotes are programmed via the motor learn sequence.' },
      { step: 3, title: 'Range Test at Gate', description: 'The new remote is tested at your actual garage door or gate to confirm it operates at the correct range.' },
      { step: 4, title: 'Handover', description: 'New fob is handed over with guidance on battery replacement and programming reset if needed in the future.' },
    ],
    pricing: { min: 150, max: 350, currency: 'AED', note: 'Fixed-code garage remote cloning from AED 150; rolling-code programming AED 250–350. Price confirmed after remote identification.' },
    turnaroundTime: '15-30 minutes',
    faqs: [
      { question: 'Can you clone my garage remote without opening the motor?', answer: 'For fixed-code remotes, yes — we clone directly from the existing fob. For rolling-code remotes, we need access to the motor\'s learn button or control panel, which is typically inside your garage.' },
      { question: 'My garage remote brand is not listed on common websites — can you still clone it?', answer: 'We identify the frequency and protocol from the remote itself, not the brand name. As long as it is a standard 433 MHz or 315 MHz fixed-code remote, we can clone it regardless of brand markings.' },
      { question: 'How do I know if my garage has fixed-code or rolling-code?', answer: 'Older garage motors (pre-2010) typically use fixed code. Newer installations usually use rolling code. Send us a photo of the remote and motor brand and we advise you immediately.' },
    ],
    supportedBrands: [],
    icon: '🚪',
    emergency: false,
  },

  // ── 20. Sliding Patio Door Lock ───────────────────────────────────────────
  {
    slug: 'sliding-patio-door-lock',
    category: 'residential',
    title: 'Sliding Patio Door Lock Installation',
    metaTitle: 'Sliding Patio Door Lock Dubai | Installation & Repair',
    metaDescription:
      'Sliding patio door lock installation and repair in Dubai for villas and apartments. From AED 250 — +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa installs and repairs sliding patio door locks in Dubai villas and apartments from AED 250. We fit mortise sliding locks, hook bolt locks, multi-point locks and secondary security bars for aluminium and uPVC sliding doors. Available 7 days a week across all Dubai areas. Call +971 52 642 6161.',
    description:
      'Sliding patio doors are a feature of many Dubai villa gardens and apartment balconies, but they are frequently the weakest point in a property\'s security. Standard sliding door locks are often flimsy, and the doors can be easily lifted off their tracks if no secondary security is fitted. Lock Repair Satwa installs high-quality sliding door locks and security solutions that provide genuine protection.\n\nWe install mortise-style sliding door locks that engage a bolt into the frame, hook bolt locks that prevent the door being lifted out of the track, multi-point locking bars, and secondary security pins or bars for an additional layer of protection. For balcony sliding doors in apartments, we also install key-locking secondary bolts that prevent the door being opened from outside even if the primary latch is defeated.\n\nFor existing sliding doors where the lock mechanism has worn or the handle is loose, we service and repair the lock carriage, replace worn rollers that cause the door to bind, and adjust the frame to ensure the lock engages properly.',
    benefits: [
      {
        title: 'Security Upgrade for Vulnerable Sliding Doors',
        description: 'Standard sliding door latches offer minimal security. We install hook bolt and multi-point locks that provide real resistance to forced entry.',
      },
      {
        title: 'Anti-Lift Protection',
        description: 'We install security pins and secondary bolts that prevent sliding doors being lifted off their tracks — a common forced-entry method.',
      },
      {
        title: 'Balcony & Garden Patio Coverage',
        description: 'We service both balcony-level apartment sliding doors and ground-floor garden patio doors in Dubai villas.',
      },
      {
        title: 'Lock Repair Without Full Replacement',
        description: 'Many sliding door lock problems are due to worn rollers or misalignment rather than the lock itself. We diagnose and fix the underlying cause first.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Door Assessment', description: 'We inspect the door frame, track, existing lock mechanism and handle to identify all security weaknesses and mechanical faults.' },
      { step: 2, title: 'Lock & Security Selection', description: 'We recommend appropriate locks and secondary security measures for your door type, and quote a price before starting.' },
      { step: 3, title: 'Installation', description: 'New lock mechanism is fitted to the door frame and strike plate aligned to ensure the bolt engages correctly with the frame.' },
      { step: 4, title: 'Secondary Security Fitting', description: 'Secondary bolts, security pins or anti-lift blocks are installed as recommended.' },
      { step: 5, title: 'Operation Test', description: 'We slide the door repeatedly, test the lock from both sides and confirm all security elements are engaged before leaving.' },
    ],
    pricing: { min: 250, max: 500, currency: 'AED', note: 'Standard sliding door lock installation from AED 250; multi-point lock or full security upgrade AED 350–500. Price includes lock unit and fitting.' },
    turnaroundTime: '45-90 minutes',
    faqs: [
      { question: 'My sliding patio door lock is broken — can you repair it without replacing the whole door?', answer: 'Yes. Most sliding door lock faults are in the lock carriage or the rollers, not the door itself. We repair or replace the lock mechanism while the door stays in place.' },
      { question: 'Can my sliding door be secured from the outside with a key?', answer: 'Yes. We install key-locking hooks or mortise locks that allow the door to be secured from outside. This is particularly useful for villa garden doors.' },
      { question: 'How can I stop my sliding door being forced open?', answer: 'The most effective measures are a hook bolt lock (resists horizontal force) plus an anti-lift pin (prevents the door being lifted off the track). We install both in a single visit.' },
    ],
    supportedBrands: [],
    icon: '🪟',
    emergency: false,
  },

  // ── 21. Home Lockout ──────────────────────────────────────────────────────
  {
    slug: 'home-lockout',
    category: 'residential',
    title: 'Home Lockout Service',
    metaTitle: 'Home Lockout Dubai | 24/7 Emergency Locksmith | 20–40 Min',
    metaDescription:
      'Locked out of your home in Dubai? We arrive in 20–40 minutes, open your door without damage and can change the lock on the spot. +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa resolves home lockout situations across Dubai 24/7, with average arrival in 20–40 minutes. We use non-destructive picking, impressioning or bypass methods to open residential doors without damage. Service costs AED 200–400. We can also change the lock in the same visit if needed. Call +971 52 642 6161.',
    description:
      'Being locked out of your Dubai home is stressful at any hour — even more so late at night or with children waiting outside. Lock Repair Satwa provides a fast, professional home lockout response across all Dubai areas, with technicians on the road 24/7 including weekends and public holidays.\n\nOur locksmiths use non-destructive entry techniques as the first approach: lock picking for standard pin-tumbler cylinders (mortise and Yale locks), card shimming for spring latches, and bypass tools for deadbolts with accessible cam mechanisms. In the vast majority of residential lockout situations, we open the door without any damage to the lock or door frame.\n\nOnce you are inside, we can change the lock in the same visit if needed — for example if the key was lost outside and security is a concern, or if the lock is old and worn and contributed to the lockout. We carry a range of common cylinder and mortise lock replacements for same-day fitting.\n\nWe require identity verification (Emirates ID or passport, plus any tenancy or ownership document for the property) before opening any residential door, to protect property owners against unauthorised entry.',
    benefits: [
      {
        title: '24/7 Emergency Response',
        description: 'We answer calls at any hour. A technician is dispatched immediately — average arrival across central Dubai is 20–40 minutes.',
      },
      {
        title: 'Non-Destructive Door Opening',
        description: 'We use picking, impressioning and bypass tools before any drilling. The vast majority of home lockouts are resolved without damage to the door or lock.',
      },
      {
        title: 'Same-Visit Lock Change Available',
        description: 'If your key was lost or security is compromised, we change the lock in the same visit so you do not need a second call-out.',
      },
      {
        title: 'Identity Verification for Your Security',
        description: 'We verify ownership or tenancy before opening any door. This protects you and your neighbours from unauthorised entry.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Emergency Call', description: 'Call +971 52 642 6161. Tell us your address and lock type. We dispatch the nearest available technician immediately.' },
      { step: 2, title: 'Identity Verification on Arrival', description: 'Provide Emirates ID or passport and any available tenancy agreement or property document.' },
      { step: 3, title: 'Non-Destructive Entry', description: 'We attempt lock picking, shimming or bypass before any drilling. Most residential locks are opened in 5–15 minutes.' },
      { step: 4, title: 'Lock Change (Optional)', description: 'If required, we replace the lock in the same visit and provide new keys.' },
      { step: 5, title: 'Receipt & Documentation', description: 'We provide a written receipt confirming the service performed and any parts fitted.' },
    ],
    pricing: { min: 200, max: 400, currency: 'AED', note: 'Home lockout opening from AED 200; with same-visit lock change AED 300–400 including new lock unit.' },
    turnaroundTime: '20-40 minutes',
    faqs: [
      { question: 'How quickly can you reach me for a home lockout in Dubai?', answer: 'For central Dubai areas (Downtown, Jumeirah, Business Bay, Satwa, Al Quoz), we typically arrive in 20–30 minutes. For outer areas (Dubai Hills, International City, Silicon Oasis), allow 30–50 minutes.' },
      { question: 'Will my door be damaged when you open it?', answer: 'Our goal is always damage-free entry. Standard UAE residential lock types (mortise, Yale, deadbolt) are opened by picking without damage in the vast majority of cases.' },
      { question: 'What ID do I need to show?', answer: 'Emirates ID or passport plus any proof of residence (tenancy contract, utility bill) if you have it. If you cannot produce ID, we may need Dubai Police authorisation before opening.' },
      { question: 'Can you open a door if the key broke off inside the lock?', answer: 'Yes. We extract broken key fragments from cylinders using specialist extractor tools, usually without damaging the lock. Once the fragment is out, you can use your spare key or we can replace the cylinder.' },
    ],
    supportedBrands: [],
    icon: '🏠',
    emergency: true,
  },

  // ── 22. Key Maker Dubai ───────────────────────────────────────────────────
  {
    slug: 'key-maker',
    category: 'residential',
    title: 'Key Maker Dubai',
    metaTitle: 'Key Maker Dubai | All Key Types Cut | Lock Repair Satwa',
    metaDescription:
      'Key maker service in Dubai for all key types — door keys, padlock keys, cabinet keys, safe keys and more. From AED 50. Call +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa is a professional key maker in Dubai, cutting keys for doors, padlocks, cabinets, safes, mailboxes and more from AED 50. Our workshop at D90 Al Bada\'a and mobile technicians cover all Dubai areas. Keys are cut on professional machines and tested before handover. Call +971 52 642 6161.',
    description:
      'A key maker service in Dubai needs to handle far more than just simple house keys — from the tubular padlock keys used on storage rooms to the high-security dimple keys protecting villas, and the tiny cam lock keys for cabinets and mailboxes. Lock Repair Satwa provides a comprehensive key making service from our Al Bada\'a workshop and via mobile technicians across Dubai.\n\nWe cut keys by duplication from your original, by code from manufacturers\' key code databases, and by impressioning for situations where no original or code is available. Our key-cutting machines are regularly calibrated for precision, ensuring every key we produce turns smoothly without forcing or excessive wear on the lock.\n\nKey types we cut include: Yale flat keys, mortise keys (both round and flat profiles), dimple keys, tubular keys, T-shaped furniture keys, cam lock keys, padlock keys, safe deposit box keys, cabinet and drawer lock keys, and various specialist security key profiles. We carry a comprehensive range of key blanks to minimise situations where we need to order in.',
    benefits: [
      {
        title: 'Workshop & Mobile Cutting Available',
        description: 'Visit our D90 Al Bada\'a workshop or request a mobile visit. Mobile key cutting is available for customers who need keys made at their home, office or storage facility.',
      },
      {
        title: 'Comprehensive Key Blank Stock',
        description: 'We stock key blanks for door locks, padlocks, cabinets, mailboxes, safes and more — minimising situations where we need to order parts.',
      },
      {
        title: 'Code Cutting Available',
        description: 'For locks where the key code is known (embossed on the lock or documented in the manufacturer record), we cut keys by code without needing the original.',
      },
      {
        title: 'Precision Calibrated Machines',
        description: 'Our key-cutting machines are regularly calibrated. Keys are checked for depth and profile accuracy, and tested before handover.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Key Type Identification', description: 'We identify the key profile and blank required from your original key or lock model information.' },
      { step: 2, title: 'Key Cutting', description: 'The key is cut on the appropriate machine — profile, laser, or code cutting depending on the key type.' },
      { step: 3, title: 'Deburring & Finish', description: 'Cut edges are deburred and the key is checked for correct depth and spacing before testing.' },
      { step: 4, title: 'Test & Handover', description: 'The key is tested in your lock (mobile visits) or confirmed to match the blank profile before handover at the workshop.' },
    ],
    pricing: { min: 50, max: 300, currency: 'AED', note: 'Standard door keys from AED 50; high-security dimple or code-cut keys AED 150–300. Price confirmed after identifying key type.' },
    turnaroundTime: '10-30 minutes',
    faqs: [
      { question: 'Can you make a key from a lock with no original?', answer: 'In some cases yes — by impressioning (cutting directly from the lock) or by code if the lock manufacturer provides key code data. Call us with your lock brand and model number.' },
      { question: 'Do you cut keys for cabinet and drawer locks?', answer: 'Yes. Cabinet cam lock keys, drawer lock keys and furniture keys are common requests. Bring the original key or the lock model details.' },
      { question: 'Can you cut a key with a number stamped on the original?', answer: 'If the number on your key is a manufacturer\'s key code (common on padlocks and some mortise locks), we can cut a new key from that code without needing the original present.' },
    ],
    supportedBrands: [],
    icon: '⚙️',
    emergency: false,
  },

  // ── 23. Master Key System ─────────────────────────────────────────────────
  {
    slug: 'master-key-system',
    category: 'commercial',
    title: 'Master Key System',
    metaTitle: 'Master Key System Dubai | Commercial Lock Hierarchy Setup',
    metaDescription:
      'Master key system design and installation in Dubai for offices, hotels and commercial buildings. Custom lock hierarchy, keyed-alike options — +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa designs and installs master key systems for commercial properties in Dubai from AED 500. A master key system allows one key to open multiple locks while individual keys open only their designated door — ideal for offices, hotels, warehouses and residential complexes. System design takes 1–3 days depending on property size. Call +971 52 642 6161.',
    description:
      'A master key system is the foundation of access control for any commercial property in Dubai — allowing management to hold one key that opens every door, while employees, tenants or guests hold individual keys that only open their designated areas. Lock Repair Satwa designs, supplies and installs bespoke master key systems for offices, hotels, warehouses, apartment complexes and commercial buildings across Dubai.\n\nWe work with high-quality master key-compatible cylinder ranges from established manufacturers, planning the pin stack configurations that create the required key hierarchy without compromising the security level of individual locks. Our systems support grand master keys (open everything), master keys (open a section), and change keys (individual door access) — as many levels as your property requires.\n\nThe process begins with a site survey to map all doors, access zones and the required key hierarchy. We then specify the cylinder and key blank combination, manufacture the cylinders and keys to your specification, and install or rekey all locks in a single planned operation to minimise disruption to your business.',
    benefits: [
      {
        title: 'Custom Hierarchy Design',
        description: 'We design a key hierarchy specific to your building\'s zones — management, operations, individual rooms — with as many levels as needed.',
      },
      {
        title: 'High-Security Cylinder Options',
        description: 'Our master key systems use anti-pick, anti-drill cylinders with restricted key profiles, preventing unauthorised key copies being cut.',
      },
      {
        title: 'Minimal Business Disruption',
        description: 'Installation is planned to rekey all locks in a single coordinated operation, minimising the time during which doors are off-line.',
      },
      {
        title: 'System Documentation Provided',
        description: 'We provide full documentation of the key hierarchy, cylinder positions and key allocations for your records and future expansion.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Site Survey', description: 'We visit the property, map all doors and access zones, and discuss the required key hierarchy and security level with your team.' },
      { step: 2, title: 'System Design', description: 'We design the pin configuration and key hierarchy, selecting compatible cylinder and key blank combinations for your specification.' },
      { step: 3, title: 'Cylinder Manufacture', description: 'Master key cylinders are pinned to specification. Keys are cut to the required profiles for each level of the hierarchy.' },
      { step: 4, title: 'Installation', description: 'All existing cylinders are replaced with the new master key system cylinders. Keys are allocated and labelled.' },
      { step: 5, title: 'System Handover & Documentation', description: 'Full system documentation is provided including key hierarchy chart, cylinder log and key holder records.' },
    ],
    pricing: { min: 500, max: 2000, currency: 'AED', note: 'Small office systems (5–10 doors) from AED 500; large commercial installations (20+ doors) AED 1,000–2,000+. Exact quote after site survey.' },
    turnaroundTime: '1-3 days',
    faqs: [
      { question: 'How many doors can a master key system cover?', answer: 'A well-designed master key system can cover from 5 doors to several hundred doors in a large commercial complex. We scale the design to any size.' },
      { question: 'Can I add more doors to the system in the future?', answer: 'Yes. We design all systems with expansion in mind. New cylinders can be added to the existing hierarchy without replacing the full system.' },
      { question: 'Are master key system keys more secure than standard keys?', answer: 'We recommend master key systems using restricted key profiles — keys that cannot be copied without authorisation from our workshop. This prevents staff from making unauthorised duplicates.' },
    ],
    supportedBrands: [],
    icon: '🗝️',
    emergency: false,
  },

  // ── 24. Cabinet Lock ──────────────────────────────────────────────────────
  {
    slug: 'cabinet-lock',
    category: 'commercial',
    title: 'Cabinet Lock Services',
    metaTitle: 'Cabinet Lock Dubai | Office Filing Cabinet & Drawer Locks',
    metaDescription:
      'Cabinet lock replacement, opening and rekeying for office filing cabinets and drawers in Dubai. Same-day service from AED 100 — +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa opens, replaces and rekeys office cabinet and drawer locks across Dubai from AED 100. We service filing cabinet locks (desk and lateral), pedestal drawers, roller shutters and display case locks. Same-day service for most cabinet types. Mobile service available for offices across Dubai. Call +971 52 642 6161.',
    description:
      'Office filing cabinets, pedestal drawers and storage cabinets are critical for securing confidential documents, valuables and equipment in Dubai commercial premises. When a cabinet lock fails, jams or the key is lost, Lock Repair Satwa provides fast on-site solutions without needing to remove the furniture or wait for the original supplier.\n\nWe open locked cabinets using non-destructive picking and bypass methods for standard filing cabinet locks. Once open, we rekey the lock to a new key or replace the lock cylinder entirely. Where the existing key is available but the lock is stiff, worn or faulty, we service and lubricate the mechanism to restore smooth operation.\n\nFor offices requiring all cabinets to be opened by a single key (keyed-alike service), we rekey multiple cabinets to the same key as part of the same visit — eliminating the frustration of managing many different cabinet keys.',
    benefits: [
      {
        title: 'Non-Destructive Cabinet Opening',
        description: 'We open filing cabinets and pedestal drawers without drilling, using picking and bypass techniques that preserve the lock for rekeying.',
      },
      {
        title: 'Keyed-Alike Service',
        description: 'We rekey multiple office cabinets to operate on the same key — ideal when you want to reduce the number of keys your team manages.',
      },
      {
        title: 'On-Site Service for Offices',
        description: 'We come to your Dubai office — no need to transport cabinets to a workshop or disrupt your office operations more than necessary.',
      },
      {
        title: 'Lost Key Situations Handled',
        description: 'Lost the key to an office cabinet? We open it, rekey or replace the lock, and provide new keys in the same visit.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Cabinet Lock Assessment', description: 'We identify the cabinet lock type and best approach for non-destructive entry or replacement.' },
      { step: 2, title: 'Opening & Inspection', description: 'Cabinet is opened and the lock mechanism inspected for wear or damage.' },
      { step: 3, title: 'Rekey or Replace', description: 'Lock is rekeyed to a new key or replaced with a new unit depending on condition.' },
      { step: 4, title: 'Key Cutting', description: 'New keys are cut to match the rekeyed or replacement lock.' },
      { step: 5, title: 'Keyed-Alike (if requested)', description: 'Additional cabinets are rekeyed to the same new key in sequence.' },
    ],
    pricing: { min: 100, max: 300, currency: 'AED', note: 'Single cabinet opening and rekeying from AED 100; keyed-alike service for multiple cabinets AED 50–80 per additional unit.' },
    turnaroundTime: '20-45 minutes',
    faqs: [
      { question: 'Can you open a filing cabinet without the key?', answer: 'Yes. Standard filing cabinet locks can be picked or bypassed without drilling. We open the cabinet and rekey or replace the lock in the same visit.' },
      { question: 'Can all my office cabinets be opened by one key?', answer: 'Yes. Rekeying multiple cabinets to operate on a single key is a standard service. We rekey all cabinets during one office visit.' },
      { question: 'Do you service cabinet locks for specific brands?', answer: 'We service most common office furniture brands including Bisley, Steelcase, Herman Miller, IKEA (office range) and locally purchased filing cabinets. Brand identification is usually possible from the cabinet or lock markings.' },
    ],
    supportedBrands: [],
    icon: '🗄️',
    emergency: false,
  },

  // ── 25. Access Control Installation ──────────────────────────────────────
  {
    slug: 'access-control-installation',
    category: 'commercial',
    title: 'Access Control Installation',
    metaTitle: 'Access Control Installation Dubai | Commercial Security Systems',
    metaDescription:
      'Access control system installation in Dubai for offices and commercial buildings. RFID, biometric and PIN systems from AED 800 — +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa installs access control systems for commercial properties in Dubai from AED 800. We supply and install RFID card readers, biometric fingerprint readers, PIN keypads and video intercom systems. Systems are configured for your exact access zones and staff hierarchy. Installation takes 1–2 days depending on size. Call +971 52 642 6161.',
    description:
      'Access control systems replace physical keys with electronic credentials — RFID cards, PIN codes or biometric fingerprints — giving commercial properties in Dubai precise, auditable control over who can enter which area and when. Lock Repair Satwa installs, commissions and configures access control systems for offices, warehouses, server rooms, retail premises and apartment buildings.\n\nOur systems range from standalone single-door controllers (ideal for individual office doors or server rooms) to networked multi-door systems covering an entire building with central software management. All systems include door strike or magnetic lock hardware, the reader/controller, and the power supply and cabling required for a complete installation.\n\nWe integrate with electric door strikes, magnetic locks and automatic door operators. For properties wanting video confirmation of access, we also supply and install video intercom systems that allow staff to see and verify visitors before granting entry. All systems are configured to your specific access rules — time zones, anti-passback, and multiple credential levels.',
    benefits: [
      {
        title: 'Full System Supply & Installation',
        description: 'We supply the controller, readers, locks, power supply and cables — a single-contractor solution with no coordination between multiple suppliers.',
      },
      {
        title: 'Scalable From Single Door to Enterprise',
        description: 'Start with one controlled door and expand the same system to cover your entire building as your business grows.',
      },
      {
        title: 'Audit Trail & Time Zone Control',
        description: 'Electronic access logs every entry and exit attempt. Time zone restrictions control when specific cards or codes are valid.',
      },
      {
        title: 'Integration With Electric Locks',
        description: 'We integrate access control with magnetic locks, electric strikes and automatic door operators for a seamless entry experience.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Site Survey & System Design', description: 'We survey your premises, identify all controlled access points, and design a system architecture to meet your requirements.' },
      { step: 2, title: 'Hardware Supply', description: 'Controllers, readers, locks, power supplies and cabling are sourced and delivered.' },
      { step: 3, title: 'Cabling & Infrastructure', description: 'Data and power cables are run from the controller to each reader and lock position.' },
      { step: 4, title: 'Hardware Installation', description: 'Controllers, readers and locks are mounted and wired. Door strikes or magnetic locks are aligned with the door frame.' },
      { step: 5, title: 'Software Configuration & Training', description: 'Access rules, time zones and card enrollments are configured. Staff are trained on card issuance and system management.' },
    ],
    pricing: { min: 800, max: 3000, currency: 'AED', note: 'Single-door standalone system from AED 800; multi-door networked systems AED 1,500–3,000+ depending on door count and features.' },
    turnaroundTime: '1-2 days',
    faqs: [
      { question: 'Can access control be installed on an existing door without major renovation?', answer: 'Yes. Most access control installations only require surface-mounting the reader, fitting an electric strike or magnetic lock in the door frame, and running a data cable. No major construction is needed.' },
      { question: 'What happens if the power goes out?', answer: 'We install access control with battery backup units (UPS). Most systems also default to "fail-secure" or "fail-safe" mode on power loss — you specify which is appropriate for each door during the design phase.' },
      { question: 'Can I see who entered and when?', answer: 'Yes. All access events (valid entries, refused attempts, exits) are logged with timestamp and credential ID. Reports can be exported for security audits or HR purposes.' },
    ],
    supportedBrands: [],
    icon: '🔏',
    emergency: false,
  },

  // ── 26. Door Closer Installation ──────────────────────────────────────────
  {
    slug: 'door-closer-installation',
    category: 'commercial',
    title: 'Door Closer Installation',
    metaTitle: 'Door Closer Installation Dubai | Commercial & Fire Doors',
    metaDescription:
      'Door closer supply and installation in Dubai for offices, commercial buildings and fire doors. From AED 300 — +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa installs door closers for commercial, office and fire doors across Dubai from AED 300 including the unit and fitting. We supply and fit overhead door closers, concealed closers and floor spring closers for all door weights and closing speeds. Same-day installation available for most door types. Call +971 52 642 6161.',
    description:
      'Door closers are a mandatory requirement for fire doors in UAE buildings and a practical asset for any commercial door that must remain closed and self-latching. Lock Repair Satwa supplies and installs door closers for offices, retail premises, warehouses, hotels and residential buildings across Dubai.\n\nWe install three main types: standard overhead closers (surface-mounted on the door face or frame — the most common commercial type), concealed overhead closers (fitted inside the door head for a clean architectural finish) and floor spring closers (for frameless glass or heavy timber doors). All closers we supply are adjustable for closing speed, latching speed and back-check tension.\n\nFor fire doors, we specify and install closers to the appropriate standard for the fire rating of the door — a critical compliance requirement in UAE buildings. Closer selection depends on door weight, door width and the required hold-open force. Our technicians complete the installation with a full adjustment to Dubai\'s climate, where thermal expansion can cause door closer adjustment to drift seasonally.',
    benefits: [
      {
        title: 'Fire Door Compliance',
        description: 'We select and install door closers to the appropriate specification for fire-rated doors, ensuring UAE building regulation compliance.',
      },
      {
        title: 'All Door Types Covered',
        description: 'Overhead, concealed and floor spring closers for timber, aluminium, steel and glass doors in all commercial weight categories.',
      },
      {
        title: 'Climate-Tuned Adjustment',
        description: 'Closers are adjusted for Dubai\'s high-temperature environment, where thermal expansion affects door weight and frame alignment.',
      },
      {
        title: 'Existing Closer Repair & Replacement',
        description: 'We repair leaking, sluggish or incorrectly adjusted closers as well as fitting new units — a service call often costs less than a replacement.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Door Assessment', description: 'We measure door weight and width, check the frame, and confirm the appropriate closer model and installation template.' },
      { step: 2, title: 'Closer Selection & Quote', description: 'We select the correct EN size closer for your door and confirm the price before ordering or fitting.' },
      { step: 3, title: 'Mounting', description: 'Closer body is drilled and fitted to the door face or frame following the manufacturer template. Arm and shoe are installed.' },
      { step: 4, title: 'Adjustment', description: 'Closing speed, latching speed and back-check are adjusted to the correct Dubai-climate settings for smooth, positive latching.' },
      { step: 5, title: 'Function Test', description: 'Door is cycled 10 times to confirm consistent closing and latching action under real conditions.' },
    ],
    pricing: { min: 300, max: 800, currency: 'AED', note: 'Standard overhead closer supply and installation from AED 300; heavy-duty or concealed closers AED 500–800. Price includes unit and fitting.' },
    turnaroundTime: '60-120 minutes',
    faqs: [
      { question: 'Do I need a door closer on my fire door in Dubai?', answer: 'Yes. All fire-rated doors in UAE buildings must be fitted with an appropriate self-closing device. A door closer is the standard mechanism for meeting this requirement.' },
      { question: 'My existing door closer is leaking oil — is it fixable?', answer: 'A leaking closer has a failed hydraulic seal and needs replacement rather than repair. Hydraulic fluid is the core of the closer\'s speed regulation, and once it leaks, the adjustment is permanently lost.' },
      { question: 'Can you adjust my existing door closer to close faster or slower?', answer: 'Yes. All good-quality door closers have adjustment screws for closing speed and latching speed. We service and recalibrate existing closers for AED 80–150 — often extending their service life significantly.' },
    ],
    supportedBrands: [],
    icon: '🚪',
    emergency: false,
  },

  // ── 27. Push Bar Installation ─────────────────────────────────────────────
  {
    slug: 'push-bar-installation',
    category: 'commercial',
    title: 'Push Bar Installation',
    metaTitle: 'Push Bar Installation Dubai | Panic Bar & Exit Device Fitting',
    metaDescription:
      'Panic bar and push bar installation in Dubai for emergency exits, fire doors and commercial buildings. From AED 400 — +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa installs push bars (panic bars) and emergency exit devices in Dubai for fire exits, warehouses and commercial buildings from AED 400 including the unit and fitting. Push bars allow fast single-motion exit without requiring a key or handle operation — mandatory for designated emergency exits. Call +971 52 642 6161.',
    description:
      'Push bars — also called panic bars or exit devices — are a UAE building code requirement for emergency exits in commercial buildings, warehouses, cinemas, retail stores and any premises where rapid evacuation must be possible without requiring occupants to operate a conventional door handle or key.\n\nLock Repair Satwa supplies and installs push bar exit devices for single and double doors, timber and aluminium frames, and fire-rated door assemblies. We offer rim-mounted panic hardware (the most common commercial type), mortise panic hardware for heavy-duty applications, and vertical rod devices for double doors where both the top and bottom of the door must be secured.\n\nAll push bar devices we supply meet EN 1125 emergency egress requirements and are suitable for fire exit door applications. We also fit external access hardware — outside lever trim or cylinder override — allowing authorised entry from outside while maintaining the panic release function from inside. Installation includes alignment of the strike plate and adjustment of the push bar for smooth, consistent operation.',
    benefits: [
      {
        title: 'Emergency Exit Compliance',
        description: 'Push bars meet EN 1125 emergency egress standards required for fire exits and designated emergency doors in UAE commercial buildings.',
      },
      {
        title: 'Single-Motion Exit Operation',
        description: 'Push bars allow any person to exit in a single motion — essential for safe evacuation without knowledge of lock operation.',
      },
      {
        title: 'External Access Options',
        description: 'We fit outside trim (lever or cylinder) so authorised staff can enter from outside while the panic release remains fully functional from inside.',
      },
      {
        title: 'Rim, Mortise & Vertical Rod Types',
        description: 'We supply rim devices for single doors, mortise hardware for heavy-duty applications, and vertical rod devices for double door configurations.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Door Assessment', description: 'We measure the door, identify the frame material and existing hardware, and confirm the appropriate push bar type and size.' },
      { step: 2, title: 'Hardware Selection & Quote', description: 'We specify the correct device and any required outside trim, and confirm the installed price before starting.' },
      { step: 3, title: 'Existing Hardware Removal', description: 'Any existing locks or handles are removed and the door face is prepared for the push bar case.' },
      { step: 4, title: 'Push Bar Installation', description: 'Case is fitted to door face, latch bolt or vertical rods connected, and strike plate aligned to frame.' },
      { step: 5, title: 'Function Test', description: 'Push bar is tested 20 times for positive latch retraction and re-engagement. Outside trim function confirmed.' },
    ],
    pricing: { min: 400, max: 1000, currency: 'AED', note: 'Standard rim panic bar installation from AED 400; mortise or vertical rod device AED 600–1,000. Price includes hardware and installation.' },
    turnaroundTime: '60-120 minutes',
    faqs: [
      { question: 'Is a push bar required on my business\'s fire exit?', answer: 'Under UAE building codes, all designated emergency exits in commercial buildings must have unobstructed single-motion egress. A push bar (panic hardware) is the standard compliant solution.' },
      { question: 'Can a push bar be locked from the outside when the premises are closed?', answer: 'Yes. We fit cylinder override trim to the outside so the door can be secured with a key when the premises are closed, while the panic release always functions from inside.' },
      { question: 'Can you install a push bar on a glass door?', answer: 'Yes, with appropriate glass door panic hardware designed for frameless or framed glass door assemblies. We assess the glass and frame type before specifying the correct hardware.' },
    ],
    supportedBrands: [],
    icon: '🚨',
    emergency: false,
  },

  // ── 28. Car Key Maker ─────────────────────────────────────────────────────
  {
    slug: 'car-key-maker',
    category: 'automotive',
    title: 'Car Key Maker',
    metaTitle: 'Car Key Maker Dubai | New Car Keys Cut & Programmed On-Site',
    metaDescription:
      'Car key maker in Dubai — we cut and program new car keys on-site for all makes. From AED 150. Mobile service 24/7 — +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa is a professional car key maker in Dubai, cutting and programming new keys on-site for all major car brands from AED 150. We make mechanical keys, transponder keys, remote keys and smart proximity keys. Mobile service available across Dubai with average arrival in 20–45 minutes. Call +971 52 642 6161.',
    description:
      'Being your own car key maker means having the equipment, blanks and expertise to produce a working key for virtually any vehicle on-site — and that is exactly what Lock Repair Satwa does. Our fully equipped mobile workshop serves drivers across all Dubai areas, cutting and programming car keys without requiring a dealership appointment or tow truck.\n\nWe produce mechanical keys (blade-only, for older vehicles), transponder keys (blade plus immobiliser chip), remote keys (blade, chip and wireless remote buttons) and smart proximity keys (keyless entry and push-button start). Each type requires different cutting and programming methods, and we carry the professional equipment for all of them.\n\nKey cutting is performed on precision automatic and laser cutting machines. Programming is done via OBD using manufacturer-compatible tools. We carry an extensive range of key blanks for Japanese, European, American, Korean and Chinese brands sold in the UAE market, minimising situations where we need to source unusual blanks.',
    benefits: [
      {
        title: 'All Key Types Made On-Site',
        description: 'Mechanical, transponder, remote and smart proximity keys — all made at your location with no towing or dealership appointment required.',
      },
      {
        title: 'Professional Cutting & Programming Equipment',
        description: 'Precision automatic and laser key-cutting machines plus OBD programming tools — the same level of equipment used by authorised dealers.',
      },
      {
        title: 'Extensive Key Blank Stock',
        description: 'We carry blanks for Toyota, Nissan, BMW, Mercedes, Audi, Hyundai, Kia, Ford, GMC and many more UAE market vehicles.',
      },
      {
        title: 'Faster & Cheaper Than Dealerships',
        description: 'Our on-site car key making service typically costs 40–60% less than dealership pricing and is available same-day rather than 3–7 days wait.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Vehicle & Key Type Identification', description: 'We identify your car make, model, year and key technology to select the correct blank and programming method.' },
      { step: 2, title: 'Key Blank Selection', description: 'The correct OEM or compatible blank is selected from our stock.' },
      { step: 3, title: 'Blade Cutting', description: 'The blade is cut to your vehicle\'s profile using our precision cutting machine.' },
      { step: 4, title: 'Chip & Remote Programming', description: 'Transponder chip and remote buttons are programmed via OBD to your car\'s immobiliser and BCM.' },
      { step: 5, title: 'Function Test', description: 'All key functions are tested — ignition start, door lock/unlock, boot release and proximity detection.' },
    ],
    pricing: { min: 150, max: 500, currency: 'AED', note: 'Mechanical keys from AED 150; transponder keys AED 250–350; remote and smart keys AED 350–500. Price confirmed after vehicle identification.' },
    turnaroundTime: '30-60 minutes',
    faqs: [
      { question: 'Can you make a car key on the spot without going to the dealership?', answer: 'Yes. We make car keys on-site for most popular UAE vehicle brands. We come to your location equipped with cutting machines and programming tools.' },
      { question: 'How much does it cost to have a car key made in Dubai?', answer: 'Mechanical keys start from AED 150. Transponder keys with chip programming cost AED 250–350. Remote and smart proximity keys cost AED 350–500 depending on the vehicle.' },
      { question: 'Can you make a key for an older car without a transponder?', answer: 'Absolutely. For older vehicles without transponder systems, we cut a mechanical blade key only — the simplest and most affordable option.' },
    ],
    supportedBrands: [
      'Toyota', 'Nissan', 'Honda', 'Mitsubishi', 'Mazda', 'Subaru',
      'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen',
      'Ford', 'Chevrolet', 'GMC', 'Jeep',
      'Hyundai', 'Kia', 'Lexus', 'Infiniti',
      'Land Rover', 'Volvo', 'MG', 'BYD',
    ],
    icon: '🔑',
    emergency: false,
  },

  // ── 29. Automotive Lock Repair ────────────────────────────────────────────
  {
    slug: 'automotive-lock-repair',
    category: 'automotive',
    title: 'Automotive Lock Repair',
    metaTitle: 'Automotive Lock Repair Dubai | Car Door & Ignition Lock Fix',
    metaDescription:
      'Car door lock and ignition lock repair in Dubai. We fix jammed, broken or worn automotive locks on-site. From AED 200 — +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa repairs car door locks, boot locks and ignition cylinders across Dubai from AED 200. Common faults include jammed door lock cylinders, broken internal actuators, stiff or worn ignition barrels, and door handles that no longer release the lock. Mobile service with 24/7 availability. Call +971 52 642 6161.',
    description:
      'Car locks take significant punishment from Dubai\'s heat and sand — door lock cylinders corrode, actuator rods bend, springs fatigue and ignition barrels wear. Lock Repair Satwa provides on-site automotive lock repair across Dubai for all makes and models, diagnosing and fixing mechanical lock faults without requiring workshop visits or parts replacements from the dealership.\n\nCommon automotive lock repairs we handle: door lock cylinder replacement (when the cylinder no longer turns with the key), actuator repair (when the electric door lock button works but the mechanism inside doesn\'t engage), ignition lock servicing (cleaning and lubricating worn ignition barrels), boot lock repair (when the tailgate or boot release sticks or jams), and handle-to-lock rod reconnection (when a broken door handle no longer releases the latch).\n\nFor door cylinders that have been drilled, damaged by attempted break-ins, or simply worn to the point of failure, we supply and fit replacement cylinders keyed to match your existing key where possible — meaning you keep using your original key after the repair.',
    benefits: [
      {
        title: 'On-Site Repair Without Towing',
        description: 'Most automotive lock repairs are completed at your location. No towing to a workshop required for door or ignition lock faults.',
      },
      {
        title: 'Matched Replacement Cylinders',
        description: 'We supply door lock cylinders matched to your existing key profile where possible, so you keep using the same key after the repair.',
      },
      {
        title: 'Break-In Damage Repair',
        description: 'If your car lock has been drilled or damaged in an attempted break-in, we restore the door lock and advise on security upgrades.',
      },
      {
        title: 'All Automotive Lock Types Serviced',
        description: 'Door lock cylinders, boot locks, fuel cap locks, ignition cylinders and internal actuator mechanisms — we service all automotive lock types.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Fault Diagnosis', description: 'We inspect the door lock, ignition barrel or affected mechanism to identify the exact fault — mechanical wear, actuator failure, rod detachment or cylinder damage.' },
      { step: 2, title: 'Repair Quote', description: 'We explain the fault and provide a repair or replacement quote before starting any work.' },
      { step: 3, title: 'Disassembly', description: 'The door panel or relevant housing is carefully removed to access the lock mechanism.' },
      { step: 4, title: 'Repair or Replace', description: 'Worn or damaged components are repaired or replaced. Replacement cylinders are matched to your key where possible.' },
      { step: 5, title: 'Reassembly & Test', description: 'Trim is refitted, and the lock is tested from both inside and outside to confirm full function before handover.' },
    ],
    pricing: { min: 200, max: 600, currency: 'AED', note: 'Actuator repair or rod reconnection from AED 200; cylinder replacement AED 350–600 depending on vehicle and cylinder type.' },
    turnaroundTime: '45-90 minutes',
    faqs: [
      { question: 'My car door lock doesn\'t respond to the key — what is wrong?', answer: 'Usually a worn or corroded cylinder, a broken return spring, or a detached actuator rod. We diagnose on-site and advise whether cleaning, lubrication or cylinder replacement is the right fix.' },
      { question: 'Can you repair a car lock that was damaged in an attempted break-in?', answer: 'Yes. Break-in damage typically involves a drilled or forced cylinder. We replace the cylinder, repair any damaged door panel clips and restore full lock operation.' },
      { question: 'Will a replacement cylinder work with my existing car key?', answer: 'For most vehicles, we can source or rekey a replacement cylinder to match your existing key pattern, so you do not need to change all your keys.' },
    ],
    supportedBrands: [
      'Toyota', 'Nissan', 'Honda', 'Mitsubishi', 'Mazda',
      'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen',
      'Ford', 'Chevrolet', 'GMC', 'Jeep',
      'Hyundai', 'Kia', 'Lexus', 'Infiniti',
      'Land Rover', 'Volvo', 'MG',
    ],
    icon: '🔧',
    emergency: true,
  },

  // ── 30. Ignition Repair ───────────────────────────────────────────────────
  {
    slug: 'ignition-repair',
    category: 'automotive',
    title: 'Ignition Repair & Replacement',
    metaTitle: 'Ignition Repair Dubai | Stuck or Broken Ignition Fix | 24/7',
    metaDescription:
      'Ignition repair and ignition replacement in Dubai. Stuck key, worn barrel, no-start condition — mobile service 24/7. From AED 300 — +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa repairs and replaces car ignition cylinders across Dubai from AED 300. We fix stuck ignition switches, extract broken keys from the ignition barrel, replace worn ignition cylinders and reprogram the immobiliser after replacement. Mobile 24/7 service for all major vehicle brands. Call +971 52 642 6161.',
    description:
      'Ignition problems are among the most debilitating car faults — a stuck ignition key or a worn barrel that no longer recognises the key can leave you unable to start your vehicle. Lock Repair Satwa provides mobile ignition repair and replacement services across Dubai, attending to your vehicle at your location without requiring a tow.\n\nCommon ignition faults we handle include: key stuck in the ignition (often caused by a worn pin in the barrel engaging prematurely), ignition cylinder worn to the point where the key turns freely without catching (requiring barrel replacement), broken key extraction from the ignition barrel, steering column lock seizure (common in some models when the steering wheel is turned against the lock while the key is out), and ignition replacement after ECU work or security upgrades.\n\nIgnition barrel replacement involves more than a mechanical swap — the new barrel must be programmed to match the vehicle\'s transponder system so the engine starts. Lock Repair Satwa carries OBD programming tools to complete the electronic pairing in the same visit as the mechanical replacement, getting you back on the road without multiple call-outs.',
    benefits: [
      {
        title: 'Stuck Key Extraction',
        description: 'We extract keys stuck in ignition barrels using professional tools without damaging the barrel or steering column housing.',
      },
      {
        title: 'Barrel Replacement & ECU Programming in One Visit',
        description: 'Mechanical barrel replacement and electronic immobiliser programming are completed in the same visit — no second call-out needed.',
      },
      {
        title: 'Steering Column Lock Release',
        description: 'For vehicles where the steering lock has seized, we release the column lock and restore normal ignition operation.',
      },
      {
        title: '24/7 Emergency Response',
        description: 'An ignition fault can strand you at any hour. We dispatch mobile technicians 24/7 to attend ignition emergencies across Dubai.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Fault Assessment', description: 'We identify whether the ignition problem is a stuck key, worn barrel, steering lock or electronic transponder fault.' },
      { step: 2, title: 'Key Extraction (if stuck)', description: 'Stuck or broken key fragments are extracted using specialist tools without forcing or damaging the barrel.' },
      { step: 3, title: 'Barrel Service or Replacement', description: 'The barrel is serviced (lubricated and adjusted) if repairable, or replaced if worn beyond serviceable limits.' },
      { step: 4, title: 'ECU Programming', description: 'If the barrel was replaced, the new transponder interface is paired to the vehicle\'s immobiliser via OBD.' },
      { step: 5, title: 'Start Test', description: 'The vehicle is started and the ignition cycled several times to confirm consistent, reliable operation.' },
    ],
    pricing: { min: 300, max: 900, currency: 'AED', note: 'Stuck key extraction from AED 300; full ignition barrel replacement AED 500–900 depending on vehicle and key technology.' },
    turnaroundTime: '60-120 minutes',
    faqs: [
      { question: 'My key is stuck in the ignition and won\'t come out — can you help without towing?', answer: 'Yes. We attend on-site and extract the stuck key using specialist tools. The most common cause is a worn anti-rotation pin in the barrel, which we can often repair without a full barrel replacement.' },
      { question: 'If I replace the ignition cylinder, will my existing key still work?', answer: 'For mechanical-only vehicles, a rekeyed barrel can be matched to your existing key. For vehicles with transponder systems, the new barrel must be programmed to your existing key\'s chip, which we do on-site.' },
      { question: 'My car starts sometimes but not others — is this an ignition problem?', answer: 'Intermittent starting can be ignition-related (worn barrel contacts) or transponder-related (chip not being read consistently). We diagnose the root cause on-site with our OBD tools before recommending a repair.' },
    ],
    supportedBrands: [
      'Toyota', 'Nissan', 'Honda', 'Mitsubishi', 'Mazda', 'Subaru',
      'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen',
      'Ford', 'Chevrolet', 'GMC', 'Jeep',
      'Hyundai', 'Kia', 'Lexus', 'Infiniti',
      'Land Rover', 'MG',
    ],
    icon: '🔑',
    emergency: true,
  },

  // ── 31. Car Trunk Unlock ──────────────────────────────────────────────────
  {
    slug: 'car-trunk-unlock',
    category: 'automotive',
    title: 'Car Trunk Unlock',
    metaTitle: 'Car Trunk Unlock Dubai | Boot Open Without Key | 24/7',
    metaDescription:
      'Car boot and trunk unlock service in Dubai. Keys locked inside or trunk won\'t open? Mobile service 24/7, average arrival 20–40 min — +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa opens car boots and trunks across Dubai for AED 150–350 without damaging the vehicle. Whether keys are locked inside, the boot latch has jammed or the remote release has failed, our mobile locksmiths provide non-destructive trunk unlock service 24/7. Average arrival in 20–40 minutes. Call +971 52 642 6161.',
    description:
      'A car trunk or boot that won\'t open can be caused by several different faults — keys locked inside the boot itself, a failed remote release, a stuck latch actuator or a mechanical fault with the boot lock cylinder. Lock Repair Satwa diagnoses and resolves all trunk-related lockout situations across Dubai without damage to the vehicle.\n\nFor the most common scenario — keys locked inside the boot — we first attempt to access the vehicle through the doors using our car unlock service, then release the boot from the interior. For boots that are locked separately with their own cylinder (and the key is lost), we pick the cylinder or access the release cable through the vehicle interior.\n\nFor power-operated tailgates and boot lids (common on modern SUVs), we can bypass the electronic actuator to release the tailgate mechanically. For flat-battery situations where the electronic release is inoperative, we locate the emergency manual release where available.',
    benefits: [
      {
        title: 'Non-Destructive Trunk Opening',
        description: 'We use non-destructive methods — door unlock, cylinder picking or electronic bypass — before any drilling or forced entry.',
      },
      {
        title: 'Keys Recovered From Boot',
        description: 'If your keys are locked inside the boot, we unlock the car first, then release the boot from inside — the most common trunk lockout resolution.',
      },
      {
        title: 'Electronic Tailgate Bypass',
        description: 'For power tailgates on modern SUVs and crossovers, we can bypass the actuator electronically or locate the emergency manual release.',
      },
      {
        title: '24/7 Emergency Response',
        description: 'Available at any hour — including nights, weekends and UAE public holidays. Critical if valuable items are trapped inside.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Situation Assessment', description: 'We identify whether keys are locked inside, the latch is jammed, the lock cylinder has failed or the electronic release is inoperative.' },
      { step: 2, title: 'Vehicle Access (if keys inside)', description: 'If keys are inside the boot, we first access the vehicle through the door lock and then release the boot from the interior.' },
      { step: 3, title: 'Trunk Cylinder Picking (if applicable)', description: 'If the boot has its own separate lock and the key is lost, we pick the cylinder to release the latch.' },
      { step: 4, title: 'Electronic Bypass (if applicable)', description: 'For electronic tailgates with a failed actuator, we bypass the release circuit or locate the emergency cable release.' },
      { step: 5, title: 'Identity Verification & Handover', description: 'We confirm vehicle ownership before opening, then confirm all keys and contents are accounted for.' },
    ],
    pricing: { min: 150, max: 350, currency: 'AED', note: 'Boot unlock (keys locked inside) from AED 150; separate trunk cylinder picking or electronic bypass AED 250–350.' },
    turnaroundTime: '20-40 minutes',
    faqs: [
      { question: 'My car boot is stuck shut and the remote doesn\'t work — what do you do?', answer: 'First we check if the boot latch is mechanically stuck (common after a minor bump) or if the remote release circuit has failed. We diagnose on-site and use the appropriate non-destructive method — manual latch release or electronic bypass.' },
      { question: 'I locked my keys in the boot — how do you get them out?', answer: 'We unlock the car door first using our non-destructive car unlock techniques, then reach the boot release lever inside the vehicle and pop the boot. Your keys are then recovered.' },
      { question: 'Can you open the boot without scratching the car?', answer: 'Yes. All our access methods are non-destructive. We use tools that do not contact the paintwork or weather seals. We only drill as a last resort, which is extremely rare for trunk unlocks.' },
    ],
    supportedBrands: [
      'Toyota', 'Nissan', 'Honda', 'Mitsubishi', 'Mazda',
      'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen',
      'Ford', 'Chevrolet', 'GMC', 'Jeep',
      'Hyundai', 'Kia', 'Lexus', 'Infiniti',
      'Land Rover', 'MG', 'BYD',
    ],
    icon: '🚗',
    emergency: true,
  },

  // ── 32. Car Key Cover Replacement ─────────────────────────────────────────
  {
    slug: 'car-key-cover-replacement',
    category: 'automotive',
    title: 'Car Key Cover Replacement',
    metaTitle: 'Car Key Cover Replacement Dubai | Key Shell & Case Repair',
    metaDescription:
      'Car key cover and shell replacement in Dubai. Cracked or broken key fob housing replaced without full reprogramming. From AED 100 — +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa replaces broken or cracked car key covers and fob housings in Dubai from AED 100. We swap the shell while preserving your existing key blade, transponder chip and remote circuit board — no reprogramming needed in most cases. Wide range of covers for Toyota, Nissan, BMW, Mercedes, Hyundai and more. Call +971 52 642 6161.',
    description:
      'Car key covers and fob housings take constant punishment — dropped on hard surfaces, scratched in pockets and bags, and exposed to Dubai\'s heat. When the plastic shell cracks, buttons fall off, or the key fob becomes difficult to operate, Lock Repair Satwa replaces just the housing without touching the functional components inside.\n\nOur shell replacement service transfers your existing key blade (where applicable), transponder chip and remote circuit board into a new housing that looks and functions like a brand new key. Because the electronics are not disturbed, no reprogramming is required in most cases — the key continues to start your car and operate the remote functions immediately after the shell swap.\n\nWe stock key covers for the most popular UAE vehicle brands including Toyota, Nissan, Honda, BMW, Mercedes-Benz, Audi, Hyundai, Kia, Ford and Chevrolet. For less common models, we can source the correct cover within 1–2 days. We also supply upgraded key covers in carbon fibre, leather-wrapped or metal finishes for customers wanting a premium look.',
    benefits: [
      {
        title: 'Shell Replacement Without Reprogramming',
        description: 'Electronics are transferred to the new housing intact — no OBD reprogramming needed. Your key works immediately after the swap.',
      },
      {
        title: 'Wide Cover Selection In Stock',
        description: 'We carry covers for Toyota, Nissan, Honda, BMW, Mercedes, Audi, Hyundai, Kia, Ford, Chevrolet and many more popular UAE market vehicles.',
      },
      {
        title: 'Premium Upgrade Options',
        description: 'Upgrade from plastic to carbon fibre, leather-wrapped or aluminium key covers while retaining your original electronics.',
      },
      {
        title: 'Button Membrane Replacement',
        description: 'If buttons are unresponsive due to worn rubber membranes (not the circuit board), we replace just the button pad for an even more cost-effective fix.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Key Inspection', description: 'We inspect the key to confirm the electronics are intact and only the housing is damaged, and identify the correct replacement cover.' },
      { step: 2, title: 'Shell Disassembly', description: 'The damaged cover is opened carefully and all internal components (chip, circuit board, battery, blade) are removed.' },
      { step: 3, title: 'Component Transfer', description: 'All internal components are cleaned and transferred to the new housing.' },
      { step: 4, title: 'Reassembly', description: 'The new shell is assembled, the blade re-attached (if applicable), and the battery replaced with a fresh unit.' },
      { step: 5, title: 'Function Test', description: 'All remote buttons and ignition start function are tested to confirm everything operates correctly in the new housing.' },
    ],
    pricing: { min: 100, max: 300, currency: 'AED', note: 'Standard key shell replacement from AED 100; premium carbon fibre or leather covers AED 200–300. Button membrane replacement from AED 50.' },
    turnaroundTime: '20-40 minutes',
    faqs: [
      { question: 'Can I replace just the key shell without reprogramming the chip?', answer: 'Yes. Shell replacement transfers the existing electronics to a new housing. The transponder chip and remote board stay programmed to your car — no reprogram needed.' },
      { question: 'My key remote works but the buttons are hard to press — is this a shell issue?', answer: 'Usually yes — the rubber button membrane wears over time. We replace the membrane for AED 50–80, restoring responsive button feel without changing the electronics.' },
      { question: 'Do you have covers for Mercedes-Benz and BMW keys?', answer: 'Yes, we stock covers for popular BMW and Mercedes-Benz key designs. Send us a photo of your key and we confirm availability and provide a quote.' },
    ],
    supportedBrands: [
      'Toyota', 'Nissan', 'Honda', 'Mitsubishi', 'Mazda',
      'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen',
      'Ford', 'Chevrolet', 'GMC',
      'Hyundai', 'Kia', 'Lexus', 'Infiniti',
      'Land Rover', 'MG',
    ],
    icon: '🎭',
    emergency: false,
  },
]

// ── Helper utilities ──────────────────────────────────────────────────────────

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getEmergencyServices(): Service[] {
  return services.filter((s) => s.emergency)
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug)
}

export function getServicesByCategory(category: 'residential' | 'commercial' | 'automotive'): Service[] {
  return services.filter((s) => s.category === category)
}

export const RESIDENTIAL_SERVICES = services.filter((s) => s.category === 'residential')
export const COMMERCIAL_SERVICES = services.filter((s) => s.category === 'commercial')
export const AUTOMOTIVE_SERVICES = services.filter((s) => s.category === 'automotive')
