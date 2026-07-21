// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Services Data
// ─────────────────────────────────────────────────────────────────────────────
import type { Service } from '@/types'

export const services: Service[] = [
  // ── 1. Car Key Duplication ─────────────────────────────────────────────────
  {
    slug: 'car-key-duplication',
    title: 'Car Key Duplication',
    metaTitle: 'Car Key Duplication Dubai | AED 150–350',
    metaDescription:
      'Fast car key duplication in Dubai. We copy mechanical, transponder and remote keys for all makes. Mobile service across Dubai — call +971 52 642 6161.',
    directAnswerOpener:
      'Car key duplication in Dubai costs between AED 150 and AED 350 depending on key type. Lock Repair Satwa duplicates mechanical, transponder and remote car keys for all major brands. Our mobile technician arrives within 30 minutes and cuts your spare key on-site using professional key-cutting machines.',
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
    icon: '🔑',
    emergency: false,
  },

  // ── 2. Car Key Replacement ─────────────────────────────────────────────────
  {
    slug: 'car-key-replacement',
    title: 'Car Key Replacement',
    metaTitle: 'Car Key Replacement Dubai | Lost Key Experts',
    metaDescription:
      'Lost your only car key in Dubai? We replace car keys on-site without needing the original. All makes covered. mobile service, open daily 7 AM-11:30 PM — +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa replaces lost or damaged car keys in Dubai without requiring a dealership visit. Using OBD programming tools and VIN-based key cutting, we make a fully functional replacement key on-site. Pricing ranges from AED 300 to AED 900 depending on vehicle and key technology. Service available daily 7 AM-11:30 PM across all Dubai areas.',
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
          'available daily 7 AM-11:30 PM. Most replacements are completed the same day you call, eliminating the 3–7 day dealership lead time.',
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
    icon: '🗝️',
    emergency: true,
  },

  // ── 3. Remote / Smart Key Programming ─────────────────────────────────────
  {
    slug: 'remote-smart-key-programming',
    title: 'Remote & Smart Key Programming',
    metaTitle: 'Remote & Smart Key Programming Dubai | AED 400–900',
    metaDescription:
      'Expert remote and smart key programming for all car brands in Dubai. Keyless entry, push-start, proximity keys. Mobile service daily, 7 AM-11:30 PM — +971 52 642 6161.',
    directAnswerOpener:
      'Remote and smart key programming in Dubai costs AED 400–900 depending on make and key technology. Lock Repair Satwa programs OEM and aftermarket remote keys, keyless entry fobs and proximity push-start keys using manufacturer-level OBD tools. Mobile service available daily 7 AM-11:30 PM; most programming jobs completed in 30–60 minutes at your location.',
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
    icon: '📡',
    emergency: false,
  },

  // ── 4. Transponder Keys ────────────────────────────────────────────────────
  {
    slug: 'transponder-keys',
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
    icon: '📟',
    emergency: true,
  },

  // ── 5. Emergency Unlock ────────────────────────────────────────────────────
  {
    slug: 'emergency-car-unlock',
    title: 'Emergency Car Unlock',
    metaTitle: 'Emergency Car Unlock Dubai | daily, 7 AM-11:30 PM — AED 200–500',
    metaDescription:
      'Locked out of your car in Dubai? Our mobile locksmith opens any vehicle in 20–45 minutes. daily 7 AM-11:30 PM service, no damage — +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa provides daily 7 AM-11:30 PM car unlock service across Dubai for AED 200–500. A certified mobile locksmith reaches most Dubai locations within 20–45 minutes and opens your vehicle using non-destructive lock-pick, wedge or OBD unlock methods. No damage to door seals, windows or lock cylinders guaranteed.',
    description:
      'Being locked out of your car is one of the most stressful roadside situations in Dubai — especially in summer when cabin temperatures can exceed 60°C within minutes. If a child or pet is trapped inside, every second counts. Lock Repair Satwa operates daily from 7 AM to 11:30 PM, 365 days a year, with fast-response mobile locksmiths positioned across Dubai to reach you as quickly as possible.\n\nOur technicians are trained in non-destructive vehicle entry techniques: air wedge and long-reach tools for vehicles with manual door controls, and OBD-based electronic unlock for modern keyless vehicles. We never break windows unless you explicitly request it or an emergency involving a child or animal inside the car makes it absolutely necessary — in which case the fastest method takes priority.\n\nCommon scenarios we handle: keys locked inside the car, key broken in the door lock, remote key battery dead with no manual unlock option, electronic door failure due to a flat car battery, and smart key malfunction.\n\nWe cover all Dubai areas including Motor City, Dubai Hills, International City and other locations further from our Al Bada\'a base. Emergency unlocks at peak traffic times carry a small surcharge for travel. All pricing is confirmed before the technician departs.',
    benefits: [
      {
        title: 'Open Daily 7 AM–11:30 PM Including Public Holidays',
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
    icon: '🚗',
    emergency: true,
  },

  // ── 6. Lost / Broken Keys ──────────────────────────────────────────────────
  {
    slug: 'lost-broken-car-keys',
    title: 'Lost & Broken Car Key Service',
    metaTitle: 'Lost or Broken Car Key Dubai | Fast Replacement',
    metaDescription:
      'Lost or snapped your car key in Dubai? We replace and extract broken keys on-site. daily, 7 AM-11:30 PM service for all makes. Call +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa handles lost and broken car key situations across Dubai daily, 7 AM-11:30 PM. We extract broken key fragments from ignition barrels and door locks, then cut and program a full replacement key on-site. Service costs AED 200–700 depending on vehicle and key type. No tow truck or dealership visit required.',
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
        title: 'daily 7 AM-11:30 PM availability',
        description:
          'Broken keys don\'t happen at convenient times. We are available daily 7 AM–11:30 PM, including weekends and UAE public holidays.',
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
    icon: '🔨',
    emergency: true,
  },

  // ── 7. Flip Keys ──────────────────────────────────────────────────────────
  {
    slug: 'flip-keys',
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
    icon: '🔄',
    emergency: false,
  },

  // ── 8. Smart Door Locks ───────────────────────────────────────────────────
  {
    slug: 'smart-door-locks',
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
    icon: '🏠',
    emergency: false,
  },

  // ── 9. Safe Boxes ─────────────────────────────────────────────────────────
  {
    slug: 'safe-box-services',
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
    title: 'Car Battery Replacement Dubai',
    metaTitle: 'Car Battery Replacement Dubai | AED 250–600',
    metaDescription:
      'Mobile car battery replacement in Dubai. We test, supply and fit batteries for all car makes. daily, 7 AM-11:30 PM service, no towing needed — +971 52 642 6161.',
    directAnswerOpener:
      'Lock Repair Satwa provides mobile car battery replacement across Dubai for AED 250–600, including the battery and fitting. We carry batteries for Japanese, European, American and Korean vehicles. A technician tests your current battery on-site using a digital load tester, then fits a new battery and resets any ECU memory codes. available daily 7 AM-11:30 PM.',
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
