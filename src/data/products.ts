// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Products Data
// ─────────────────────────────────────────────────────────────────────────────
import type { Product } from '@/types'

export const products: Product[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // LOCKS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: 'deadbolt-locks',
    title: 'Deadbolt Locks',
    category: 'locks',
    metaTitle: 'Deadbolt Locks Dubai | Supply & Installation | Lock Repair Satwa',
    metaDescription:
      'Deadbolt locks for Dubai homes and offices. Single and double cylinder deadbolts supplied and installed. From AED 150. Call +971 52 642 6161.',
    description:
      'Deadbolt locks are the most reliable mechanical locking solution for residential and light commercial doors in Dubai. Unlike spring latches, a deadbolt extends a solid steel bolt into the door frame, providing resistance to kick-in attacks and forced entry that no latch lock can match. Lock Repair Satwa supplies and installs single cylinder deadbolts (key outside, thumb-turn inside), double cylinder deadbolts (key both sides) and horizontal rim deadbolts for a wide range of Dubai door types.\n\nWe stock deadbolts from quality brands tested for durability in Dubai\'s climate, where summer heat and humidity accelerate corrosion in lesser products. All deadbolts we supply are ANSI Grade 1 or equivalent rated — the highest residential security classification. Lock Repair Satwa installs the deadbolt and supplies keys in the same visit, with optional rekeying to match an existing key if you prefer fewer keys on your ring.',
    features: [
      'ANSI Grade 1 or equivalent security rating',
      'Single and double cylinder options available',
      'Anti-pick, anti-drill and anti-bump models in stock',
      'Compatible with standard 60 mm and 70 mm UAE door preparations',
      'Stainless steel and satin nickel finishes for corrosion resistance in Dubai climate',
      'Supplied and installed in the same visit',
      'Optional rekeying to match existing door keys',
    ],
    pricing: { min: 150, max: 500, currency: 'AED', note: 'Basic single cylinder deadbolt from AED 150 supplied and installed; high-security anti-pick models AED 350–500.' },
    faqs: [
      { question: 'What is the difference between a single and double cylinder deadbolt?', answer: 'A single cylinder has a key slot outside and a thumb-turn inside — faster for emergency exit. A double cylinder requires a key from both sides — better where the door has glass panels that could be broken to reach a thumb-turn.' },
      { question: 'Can a deadbolt be fitted to my Dubai apartment door?', answer: 'Yes, most UAE apartment doors have a standard 60 mm backset that accepts deadbolts. Our technician confirms compatibility on-site before fitting.' },
      { question: 'Can my deadbolt be rekeyed to match my existing house key?', answer: 'In most cases yes — we rekey the deadbolt cylinder to match your existing key pattern, so you carry fewer keys.' },
    ],
    icon: '🔒',
  },

  {
    slug: 'mortise-locks',
    title: 'Mortise Locks',
    category: 'locks',
    metaTitle: 'Mortise Locks Dubai | Supply & Fitting | Lock Repair Satwa',
    metaDescription:
      'Mortise lock supply and installation in Dubai for villas and commercial doors. All sizes and finishes. From AED 200 — +971 52 642 6161.',
    description:
      'Mortise locks are the standard locking solution for most Dubai villa and commercial doors — installed inside a mortised cavity in the door edge, making them considerably more secure than surface-mounted locks. Lock Repair Satwa supplies and installs mortise locksets, cylinder mortise locks and lever-handle mortise locks for residential villas, offices and commercial premises across Dubai.\n\nOur mortise lock range covers standard UAE door preparations (60 mm and 70 mm backsets) as well as custom specifications for thicker or non-standard door leaves. We supply complete mortise lock sets including the lock body, cylinder, strike plate and handles, or individual components for upgrading an existing installation. All fittings are stainless steel or brass-finished for resistance to Dubai\'s high humidity.',
    features: [
      'Complete mortise lock sets including body, cylinder, handles and strike plate',
      'Lever-handle and knob-handle variants available',
      'Standard 60 mm and 70 mm backset options',
      'Suitable for timber, aluminium and steel doors',
      'Anti-corrosion stainless steel hardware',
      'Deadlocking latch for enhanced security',
      'Supplied and installed with key duplication in the same visit',
    ],
    pricing: { min: 200, max: 700, currency: 'AED', note: 'Standard mortise lockset from AED 200 supplied and installed; premium lever-handle sets AED 400–700.' },
    faqs: [
      { question: 'My mortise lock is stiff — can it be repaired instead of replaced?', answer: 'Often yes. Stiffness is usually due to lack of lubrication or worn springs. We service and lubricate mortise locks before recommending replacement.' },
      { question: 'Can you supply a mortise lock that matches my existing handle finish?', answer: 'We carry satin nickel, polished chrome, antique brass and matte black finishes. Bring a photo and we match as closely as possible.' },
      { question: 'Do mortise locks work with master key systems?', answer: 'Yes. We supply master key-compatible mortise cylinders for commercial installations requiring a key hierarchy.' },
    ],
    icon: '🔐',
  },

  {
    slug: 'high-security-locks',
    title: 'High Security Locks',
    category: 'locks',
    metaTitle: 'High Security Locks Dubai | Anti-Pick & Restricted Key Locks',
    metaDescription:
      'High security locks for Dubai villas and offices. Anti-pick, anti-drill, anti-bump cylinders with restricted key profiles. From AED 400 — +971 52 642 6161.',
    description:
      'Standard pin-tumbler locks can be picked, bumped or drilled by a skilled intruder in seconds. High security locks add multiple layers of mechanical resistance — security pins that defeat picking, hardened steel inserts that defeat drilling, and patented key profiles that cannot be duplicated without authorisation. Lock Repair Satwa supplies and installs high security lock cylinders and complete locksets for Dubai residences and commercial premises requiring maximum mechanical security.\n\nOur high security range includes brands with grade certifications for pick resistance, bump resistance and cylinder attack resistance. Restricted key systems prevent unauthorised key copies being cut at any locksmith or key cutting shop without a documented authorisation card — ensuring your key hierarchy remains under your control.',
    features: [
      'Anti-pick security pins (spools, serrated, mushroom) defeating standard picking',
      'Hardened steel anti-drill pins protecting against drill attacks',
      'Anti-bump design with sidebar or false gates defeating bump key attacks',
      'Restricted key profiles requiring owner card for duplication authorisation',
      'High cycle-count rating (100,000+ operations) for heavy commercial use',
      'Available in cylinder-only or complete mortise/deadbolt sets',
      'Suitable for residential villas, offices and high-value commercial premises',
    ],
    pricing: { min: 400, max: 1200, currency: 'AED', note: 'Anti-pick cylinder upgrade from AED 400; full restricted key high security system AED 700–1,200.' },
    faqs: [
      { question: 'What makes a high security lock better than a standard lock?', answer: 'High security locks combine security pins (defeating picking), hardened steel inserts (defeating drilling), and anti-bump design (defeating bump keys) — multiple independent layers that significantly increase attack time.' },
      { question: 'Can a restricted key be cut at any locksmith?', answer: 'No. Restricted key profiles are patented and only cut by authorised dealers. Duplication requires the owner to present an authorisation card — preventing unauthorised copies.' },
      { question: 'Is a high security lock worth the extra cost in Dubai?', answer: 'For villa owners and commercial premises, yes. The cost of a high security cylinder is a fraction of the potential loss from a burglary that a standard lock failed to prevent.' },
    ],
    icon: '🛡️',
  },

  {
    slug: 'lock-cylinders',
    title: 'Lock Cylinders',
    category: 'locks',
    metaTitle: 'Lock Cylinders Dubai | Euro, Oval & Rim Cylinders',
    metaDescription:
      'Lock cylinder supply and replacement in Dubai. Euro profile, oval and rim cylinders for all door types. From AED 100 — +971 52 642 6161.',
    description:
      'The lock cylinder is the heart of any pin-tumbler lock — the component that reads the key and allows or prevents rotation. When a cylinder wears out, is damaged, or needs rekeying after a key loss, replacing just the cylinder is far more economical than replacing the entire lock. Lock Repair Satwa supplies lock cylinders for all common UAE door lock formats.\n\nWe stock euro profile cylinders (the most common format in modern UAE villa and apartment doors), oval cylinders (common in older Dubai buildings and some mortise locks), rim cylinders (for surface-mounted rim locks and nightlatches), and cam cylinders for cabinet and mailbox locks. All cylinders are supplied with the appropriate number of keys and can be rekeyed on the spot to match your existing key.',
    features: [
      'Euro profile double cylinders for standard UAE apartment and villa doors',
      'Oval cylinders for older lock body formats',
      'Rim cylinders for nightlatches and surface-mounted locks',
      'Cam cylinders for cabinets, mailboxes and locker applications',
      'Available in security grades from standard to anti-pick',
      'Supplied with 2–5 keys as standard',
      'Rekeying to match existing keys available on request',
    ],
    pricing: { min: 100, max: 350, currency: 'AED', note: 'Standard euro cylinder from AED 100 supplied and fitted; security-grade cylinders AED 200–350.' },
    faqs: [
      { question: 'How do I know what cylinder my lock uses?', answer: 'Bring us your key or a photo of the lock face. We identify the cylinder format and size in minutes. Euro, oval and rim cylinders each have distinctive appearances.' },
      { question: 'Can you rekey my cylinder to match my front door key?', answer: 'Yes. We rekey cylinders to match existing key patterns so you can operate multiple locks with a single key.' },
      { question: 'How long does a cylinder last before it needs replacing?', answer: 'Quality cylinders typically last 10–15 years with normal use. Signs it needs replacing: key is stiff, requires lifting or jiggling, or the cylinder rotates slightly before catching.' },
    ],
    icon: '⚙️',
  },

  {
    slug: 'door-knob-locks',
    title: 'Door Knob Locks',
    category: 'locks',
    metaTitle: 'Door Knob Locks Dubai | Interior & Exterior Door Knob Sets',
    metaDescription:
      'Door knob locks supplied and installed in Dubai for interior and exterior doors. All finishes. From AED 150 — +971 52 642 6161.',
    description:
      'Door knob locks combine a latch and keyed cylinder in a single handle unit, making them one of the most economical locking solutions for interior and light exterior doors in Dubai residential and commercial properties. Lock Repair Satwa supplies and fits door knob lock sets for bedroom doors, bathroom doors, office interiors and utility room doors across Dubai.\n\nOur range includes passage knob sets (no lock, lever only), privacy knob sets (push-button interior lock for bathrooms), and keyed entry knob sets for exterior or security doors. We carry finishes in satin nickel, polished chrome, antique bronze and matte black to match your existing interior hardware.',
    features: [
      'Passage, privacy and keyed entry configurations',
      'Suitable for 35–45 mm door thicknesses standard in UAE construction',
      'Satin nickel, polished chrome, antique bronze and matte black finishes',
      'Standard 60 mm and 70 mm backset options',
      'Simple installation requiring minimal tooling',
      'Compatible with standard UAE door bore sizes',
      'Supplied and installed in the same visit',
    ],
    pricing: { min: 150, max: 400, currency: 'AED', note: 'Interior passage or privacy knob from AED 150 supplied and fitted; keyed exterior knob sets AED 250–400.' },
    faqs: [
      { question: 'Are door knob locks suitable for exterior doors in Dubai?', answer: 'Keyed entry knob sets can be used on light exterior doors but are not recommended as the sole security on main entrance doors — a deadbolt should be added. We advise the right combination for your specific door.' },
      { question: 'Can I replace just the knob without changing the lock mechanism?', answer: 'In many cases yes — replacement knobs can be fitted to existing lock bodies of the same brand series. We assess compatibility on-site.' },
      { question: 'Do you match existing hardware finishes?', answer: 'We carry all standard finishes and can help match your existing interior hardware as closely as possible.' },
    ],
    icon: '🚪',
  },

  {
    slug: 'lever-handle-locks',
    title: 'Lever Handle Locks',
    category: 'locks',
    metaTitle: 'Lever Handle Locks Dubai | Office & Commercial Door Handles',
    metaDescription:
      'Lever handle lock sets for Dubai offices and commercial premises. Passage, privacy and keyed lever sets from AED 200 — +971 52 642 6161.',
    description:
      'Lever handle locks are the preferred choice for commercial and high-traffic doors in Dubai — the lever action is easier to operate than a knob, making them accessible and practical for offices, hotels, hospitals and retail premises. Lock Repair Satwa supplies and installs lever handle lock sets for all commercial and residential applications across Dubai.\n\nOur range covers mortise lever sets (lever handle attached to a mortise lock body), tubular lever sets (lever handle with integrated latch for standard door bore), and lever-on-backplate sets (architectural lever handles on an escutcheon plate). We stock ADA-compliant lever designs suitable for buildings requiring accessibility compliance.',
    features: [
      'Passage, privacy and keyed entry configurations',
      'Mortise and tubular body options for different door preparations',
      'ADA-compliant lever designs available',
      'Commercial-grade models rated for 250,000+ operation cycles',
      'Solid brass, stainless steel and zinc alloy bodies',
      'Multiple finish options including satin stainless, polished brass and matte black',
      'Suitable for use with master key systems',
    ],
    pricing: { min: 200, max: 600, currency: 'AED', note: 'Standard tubular lever set from AED 200 supplied and installed; commercial-grade mortise lever sets AED 400–600.' },
    faqs: [
      { question: 'Are lever handles suitable for fire doors?', answer: 'Yes — lever handles are the standard hardware for fire doors as they can be operated quickly under panic conditions. We supply fire-door-rated lever sets.' },
      { question: 'Can lever handle locks be fitted to my existing mortise lock body?', answer: 'Yes, if the lever set matches the spindle size and spacing of your existing mortise body. We assess compatibility before ordering.' },
      { question: 'Do you supply matching exterior and interior lever handles?', answer: 'Yes. We source matching external and internal levers in the same finish for a consistent appearance on entry and exit sides of commercial doors.' },
    ],
    icon: '🔧',
  },

  {
    slug: 'glass-door-lock',
    title: 'Glass Door Lock',
    category: 'locks',
    metaTitle: 'Glass Door Lock Dubai | Frameless & Framed Glass Door Locks',
    metaDescription:
      'Glass door locks for Dubai offices and retail premises. Frameless glass, patch fitting and aluminium frame glass doors. From AED 300 — +971 52 642 6161.',
    description:
      'Glass doors are a design staple of Dubai\'s modern commercial and residential interiors — requiring specialist locking hardware that is both secure and aesthetically appropriate for transparent door surfaces. Lock Repair Satwa supplies and installs glass door locks for frameless glass doors, patch-fitting glass doors and aluminium-framed glass doors across Dubai offices, retail premises and residential lobbies.\n\nOur glass door lock range includes patch fitting deadbolts (mortised directly into the glass edge at the manufacturer\'s specified patch location), glass door rim locks (surface-mounted on the glass face using adhesive bonding hardware), floor locks (spring-loaded floor bolts for glass and frameless door applications) and electrified glass door locks for access control integration.',
    features: [
      'Patch fitting deadbolts for frameless 10–12 mm toughened glass',
      'Rim locks for framed and semi-framed glass doors',
      'Floor and ceiling bolt options for double glass doors',
      'Electrified models for access control integration',
      'Stainless steel and chrome finishes for clean aesthetic',
      'Compatible with glass door panic hardware for emergency exits',
      'Professional fitting by experienced glass door lock technicians',
    ],
    pricing: { min: 300, max: 800, currency: 'AED', note: 'Glass door rim lock from AED 300 supplied and fitted; patch-fitting frameless glass lock AED 500–800.' },
    faqs: [
      { question: 'Can a lock be fitted to an existing frameless glass door without drilling?', answer: 'Patch fitting requires a pre-drilled hole in the glass — this must be factory-drilled before tempering. For existing glass without a patch hole, we fit surface-mounted rim locks that attach to the glass face or frame.' },
      { question: 'Is a glass door secure against forced entry?', answer: 'The glass itself is the weakest point regardless of lock quality. We recommend toughened or laminated safety glass for any secure entrance application, and can advise on glass specifications alongside lock selection.' },
      { question: 'Can a glass door lock be connected to an access control system?', answer: 'Yes. We supply electrified glass door strikes and magnetic locks suitable for access control integration, allowing electronic control of glass door entry.' },
    ],
    icon: '🪟',
  },

  {
    slug: 'magnetic-locks',
    title: 'Magnetic Locks',
    category: 'locks',
    metaTitle: 'Magnetic Locks Dubai | Electromagnetic Lock Supply & Install',
    metaDescription:
      'Magnetic lock (magloc) supply and installation in Dubai for access-controlled doors. From AED 400 — +971 52 642 6161.',
    description:
      'Magnetic locks (electromagnetic locks or maglocks) use an electromagnetic force to hold a door closed — when energised, the magnet holds a steel armature plate on the door face with hundreds of kilograms of force, providing a secure, keyless locking solution for access-controlled doors. Lock Repair Satwa supplies and installs magnetic locks for commercial doors, office entrances, server rooms and residential access control systems across Dubai.\n\nMagnetic locks have no mechanical moving parts, making them extremely durable and low-maintenance. They release immediately when power is removed — inherently fail-safe for emergency egress, making them suitable for fire exit applications where doors must open on alarm activation. We install single-door and double-door magnetic locks in surface-mount and armature configurations, including weatherproof models for exterior gate and entrance applications.',
    features: [
      '280 kg to 600 kg holding force models available',
      'Fail-safe operation — unlocks on power loss for emergency egress',
      'No mechanical moving parts — minimal maintenance required',
      'Compatible with all standard access control systems',
      'Surface-mount and recessed installation options',
      'Weatherproof models for external gate and entrance applications',
      'LED status indicator showing lock state',
    ],
    pricing: { min: 400, max: 1000, currency: 'AED', note: 'Single door magnetic lock supply and installation from AED 400; 600 kg heavy-duty or weatherproof external models AED 700–1,000.' },
    faqs: [
      { question: 'What happens to a magnetic lock during a power cut?', answer: 'Magnetic locks are inherently fail-safe — they release on power loss, allowing free egress. If you need fail-secure operation (door stays locked on power loss), an electric strike is a better choice.' },
      { question: 'Can a magnetic lock be integrated with an alarm system?', answer: 'Yes. Magnetic lock power supplies include relay outputs that can be triggered by alarm systems, fire panels or access control systems to release the door on activation.' },
      { question: 'Is a magnetic lock strong enough to resist forced entry?', answer: 'A 280 kg magnetic lock cannot be pulled open by hand. However, a magnetic lock can be defeated if the door is not properly aligned or the armature plate is damaged. We fit magnetic locks with proper door alignment and anti-tamper features.' },
    ],
    icon: '🧲',
  },

  {
    slug: 'cam-locks',
    title: 'Cam Locks',
    category: 'locks',
    metaTitle: 'Cam Locks Dubai | Cabinet, Mailbox & Locker Locks',
    metaDescription:
      'Cam locks for cabinets, mailboxes, lockers and vending machines in Dubai. All sizes from AED 50 — +971 52 642 6161.',
    description:
      'Cam locks are the most versatile and widely used small lock format in Dubai commercial and residential settings — found in filing cabinets, office drawers, mailboxes, lockers, electrical panels, vending machines and display cases. Lock Repair Satwa supplies cam locks in all standard sizes (16 mm, 19 mm, 22 mm, 25 mm and 30 mm) in cylinder-and-cam configurations to suit virtually any application.\n\nWe supply cam locks in standard keyed-different format (each lock has a unique key) or keyed-alike sets (multiple locks operated by a single key) — ideal for office environments where one key opening all pedestal drawers is more practical. We also stock high-security cam locks with stainless steel bodies for damp environments such as pool lockers and outdoor storage applications.',
    features: [
      'Available in 16 mm, 19 mm, 22 mm, 25 mm and 30 mm flange diameters',
      'Standard keyed-different or keyed-alike sets',
      'Chrome, zinc alloy and stainless steel bodies',
      'Straight, offset and swing cams in various lengths',
      'Quarter-turn and 90-degree operation options',
      'Compatible with standard Australian standard panel thicknesses',
      'Bulk supply available for office and commercial fit-outs',
    ],
    pricing: { min: 50, max: 200, currency: 'AED', note: 'Standard cam lock from AED 50 per unit; keyed-alike sets and stainless steel models AED 80–200 per unit.' },
    faqs: [
      { question: 'What size cam lock do I need for my filing cabinet?', answer: 'Most office filing cabinets in Dubai use 16 mm or 19 mm cam locks. Remove the lock and measure the diameter of the hole, or bring the existing lock and we match it.' },
      { question: 'Can all my cabinet locks be opened by one key?', answer: 'Yes — we supply keyed-alike cam lock sets where all locks in the set are operated by the same key. Ideal for reducing key quantities in office environments.' },
      { question: 'Do you have cam locks for outdoor lockers in UAE conditions?', answer: 'Yes. We stock marine-grade stainless steel cam locks with corrosion-resistant finishes appropriate for Dubai\'s humidity and pool environments.' },
    ],
    icon: '🔩',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ELECTRONIC LOCKS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: 'smart-door-locks-buy',
    title: 'Smart Door Locks',
    category: 'electronic-locks',
    metaTitle: 'Smart Door Locks Dubai | Buy & Install | Lock Repair Satwa',
    metaDescription:
      'Smart door locks for Dubai homes and offices. Fingerprint, PIN, RFID and app-controlled models supplied and installed from AED 500 — +971 52 642 6161.',
    description:
      'Smart door locks replace traditional key entry with electronic credentials — fingerprint biometrics, PIN codes, RFID cards, or smartphone apps — providing convenience, audit trails and remote access control that physical keys cannot offer. Lock Repair Satwa supplies and installs smart door locks for apartments, villas, offices and commercial premises across Dubai, selecting models proven to perform reliably in Dubai\'s high-temperature, high-humidity environment.\n\nOur smart lock range covers all major entry methods: fingerprint biometric locks (recognition in under 0.5 seconds, up to 100 stored fingerprints), PIN keypad locks (multiple user codes, time-limited access), RFID card locks (compatible with common UAE building access cards), and WiFi/Bluetooth app-controlled locks (remote access via iOS and Android). Many models combine all four methods on a single unit for maximum flexibility.',
    features: [
      'Fingerprint recognition in under 0.5 seconds with 0.001% false acceptance rate',
      'PIN code entry with anti-peep scramble pad technology',
      'RFID card access compatible with standard UAE building cards',
      'WiFi and Bluetooth remote access via iOS and Android apps',
      'Physical key backup on all models for emergency access',
      'Low battery warning and external 9V emergency power terminal',
      'Installation and programming included in supply price',
    ],
    pricing: { min: 500, max: 2000, currency: 'AED', note: 'Basic PIN/RFID smart lock from AED 500 installed; fingerprint + WiFi app models AED 900–2,000 installed.' },
    faqs: [
      { question: 'What smart lock brands do you supply in Dubai?', answer: 'We source smart locks from several tested manufacturers including Samsung, Igloohome, Philips and selected OEM brands that meet our Dubai-climate performance requirements. We recommend the best option for your door type and budget.' },
      { question: 'Can smart locks be installed on my existing door without modification?', answer: 'Most apartments and villas have standard 60 mm or 70 mm backset doors that accept smart locks directly. Our technician measures your door before confirming. Minor mortise adjustments may be needed for some installations.' },
      { question: 'What is the maximum number of users a smart lock can support?', answer: 'Depends on the model. Most support 10–100 fingerprints and 10–50 PIN codes. WiFi models with cloud management can support unlimited virtual keys with expiry dates.' },
    ],
    icon: '📱',
  },

  {
    slug: 'fingerprint-door-locks',
    title: 'Fingerprint Door Locks',
    category: 'electronic-locks',
    metaTitle: 'Fingerprint Door Locks Dubai | Biometric Entry System',
    metaDescription:
      'Fingerprint door locks for Dubai homes and offices. Fast biometric recognition, supplied and installed from AED 600 — +971 52 642 6161.',
    description:
      'Fingerprint door locks provide the fastest and most convenient keyless entry — simply place your registered finger on the sensor and the door unlocks in under a second, with no keys to carry, no PIN to remember and no card to lose. Lock Repair Satwa supplies and installs fingerprint door locks for residential and commercial properties across Dubai, using models with capacitive sensors proven to perform in Dubai\'s hot and humid conditions where optical sensors can fail.\n\nOur fingerprint lock range supports multiple enrolled fingerprints (typically 20–100 depending on model), allowing an entire household or office team to gain access without sharing a code. Fingerprints can be deleted individually — when a housekeeper leaves, only their fingerprint is removed, with no need to change locks or redistribute codes.',
    features: [
      'Capacitive fingerprint sensor — reliable in Dubai heat and humidity',
      'Recognition time under 0.5 seconds from touch to door open',
      '20–100 fingerprint storage capacity depending on model',
      'Individual fingerprint deletion without affecting other enrolled users',
      'Physical key override for emergency access',
      'Anti-tamper alarm on repeated failed recognition attempts',
      'Low battery indicator with external power terminal',
    ],
    pricing: { min: 600, max: 1500, currency: 'AED', note: 'Entry-level fingerprint lock from AED 600 installed; high-capacity commercial-grade fingerprint locks AED 1,000–1,500 installed.' },
    faqs: [
      { question: 'Do fingerprint locks work with wet or dirty fingers?', answer: 'Quality capacitive sensors we supply work with most finger conditions, but heavily wet fingers or bandaged fingers may require a backup method. All our fingerprint locks include PIN or RFID backup.' },
      { question: 'Can fingerprint locks be used in Dubai\'s summer heat?', answer: 'Yes — we specifically source fingerprint locks with operating temperature ratings up to 60°C to handle direct sun exposure on Dubai exterior doors.' },
      { question: 'What happens if the fingerprint sensor fails?', answer: 'All models we supply include physical key override. If the biometric sensor malfunctions, the door can always be opened with the emergency key.' },
    ],
    icon: '👆',
  },

  {
    slug: 'keyless-door-locks',
    title: 'Keyless Door Locks',
    category: 'electronic-locks',
    metaTitle: 'Keyless Door Locks Dubai | Code Entry & Remote Access',
    metaDescription:
      'Keyless door locks for Dubai residential and commercial properties. PIN code, RFID and app access. From AED 400 installed — +971 52 642 6161.',
    description:
      'Keyless door locks eliminate the risk and inconvenience of physical keys — no lost keys, no lockouts, no key cutting costs. Lock Repair Satwa supplies and installs keyless entry systems for Dubai homes and businesses, including PIN keypad locks, RFID card/fob locks, Bluetooth smartphone locks and remote-control locks for gate and garage applications.\n\nKeyless systems are particularly practical for Dubai properties with multiple regular visitors — housekeepers, drivers, delivery services — who can each be given a unique code or credential that can be deleted instantly when no longer needed. Time-limited codes provide access only during specified hours, ideal for Airbnb hosts and short-term rental properties across Dubai.',
    features: [
      'PIN code entry with anti-peep keypad (scrambled number display)',
      'RFID card and fob compatibility for multiple users',
      'Bluetooth unlock via smartphone within 5 metre range',
      'Time-limited code creation for guests and temporary access',
      'Activity log showing each entry event with timestamp',
      'Auto-lock after configurable delay from 1–60 seconds',
      'Physical key override emergency backup',
    ],
    pricing: { min: 400, max: 1200, currency: 'AED', note: 'Basic PIN keypad lock from AED 400 installed; multi-method Bluetooth app locks AED 800–1,200 installed.' },
    faqs: [
      { question: 'Can I give a temporary code to a guest staying in my Dubai apartment?', answer: 'Yes — keyless locks with time-limited code functionality allow you to create codes that expire after a set time or date. Ideal for holiday rentals and short-term guests.' },
      { question: 'Can I see who accessed my property and when?', answer: 'WiFi-connected models maintain an activity log accessible from your smartphone app, showing each entry event with the credential used and timestamp.' },
      { question: 'What if I forget the code?', answer: 'All our keyless locks include a physical key override. Most also allow code reset via the internal keypad using a master reset code set during installation.' },
    ],
    icon: '📟',
  },

  {
    slug: 'keypad-locks',
    title: 'Keypad Locks',
    category: 'electronic-locks',
    metaTitle: 'Keypad Locks Dubai | PIN Entry Door Locks | Supply & Install',
    metaDescription:
      'Keypad door locks for Dubai homes and offices. Mechanical and electronic PIN entry. From AED 300 installed — +971 52 642 6161.',
    description:
      'Keypad locks provide secure, keyless access via a PIN code — one of the most practical electronic lock options for Dubai properties. Lock Repair Satwa supplies and installs electronic keypad locks for residential and commercial doors, including battery-powered electronic keypads, mechanical combination keypads (no battery required), and backlit keypad models suitable for use in low-light building entrance areas.\n\nElectronic keypad locks offer multi-user PIN management, auto-lock functionality and anti-tamper alarms for repeated wrong entries. Mechanical keypad locks (also known as combination locks) require no power at all — ideal for gates, storage areas and outdoor applications where battery maintenance is inconvenient.',
    features: [
      'Electronic and mechanical keypad options',
      'Multi-user PIN management with master and user code hierarchy',
      'Backlit keypad for use in dim lobbies and building entrances',
      'Anti-peep scramble display randomising number positions',
      'Anti-tamper alarm activating after multiple wrong entries',
      'Auto-lock after configurable time delay',
      'Weatherproof models rated for outdoor Dubai applications',
    ],
    pricing: { min: 300, max: 900, currency: 'AED', note: 'Mechanical combination keypad from AED 300 installed; electronic multi-user keypad locks AED 500–900 installed.' },
    faqs: [
      { question: 'What is the difference between a mechanical and electronic keypad lock?', answer: 'Mechanical keypads use spring-loaded buttons requiring no power — durable and maintenance-free for outdoor or low-usage applications. Electronic keypads offer more features (multiple codes, auto-lock, logging) but require battery replacement.' },
      { question: 'How often does a keypad lock battery need replacing?', answer: 'Quality electronic keypad locks use 4 AA batteries lasting 6–12 months with normal use. Low battery warnings appear well before the battery is fully discharged.' },
      { question: 'Can I change the PIN myself after installation?', answer: 'Yes. We configure the lock during installation and provide full instructions for changing the PIN using the master code. No locksmith visit required for code changes.' },
    ],
    icon: '🔢',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SAFES
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: 'depository-safes',
    title: 'Depository Safes',
    category: 'safes',
    metaTitle: 'Depository Safes Dubai | Cash & Document Drop Safes',
    metaDescription:
      'Depository safes for Dubai retail and commercial businesses. Drop slot and cash deposit safes from AED 500 — +971 52 642 6161.',
    description:
      'Depository safes allow cash, envelopes and small items to be deposited through a slot or hopper without unlocking the main safe body — making them the standard cash security solution for Dubai retail outlets, restaurants, petrol stations and businesses that handle daily cash takings. Lock Repair Satwa supplies and installs depository safes for commercial premises across Dubai, from compact under-counter models to large floor-mounted units for high-volume cash handling.\n\nOur depository safe range includes front-drop (slot in the door face), top-drop (slot in the lid) and rotary hopper models (allows bulkier items like cassettes and bags to be deposited). All models can be bolted to the floor or wall for immobilisation. Installation includes anchor bolting and electronic lock programming with a master and user code.',
    features: [
      'Front-drop slot for envelopes and flat cash deposits',
      'Rotary hopper for bulky bags and cassette deposits',
      'Electronic combination lock with master and user code',
      'Floor and wall anchor bolting included',
      'Anti-fish slot design preventing deposit retrieval from outside',
      'Internal capacity from 20 to 200 litres',
      'Fire-resistant inner lining on premium models',
    ],
    pricing: { min: 500, max: 3000, currency: 'AED', note: 'Compact under-counter depository safe from AED 500 installed; large commercial floor models AED 1,500–3,000 installed.' },
    faqs: [
      { question: 'Can someone reach through the deposit slot and remove the contents?', answer: 'No. All our depository safes use anti-fish designs — baffles and drop boxes that prevent anything being extracted back through the slot once deposited.' },
      { question: 'Can a depository safe be used for coin bags?', answer: 'Yes, with a rotary hopper model. The hopper accepts bags and bulkier items. Front-drop slots are best for envelopes, notes and small flat items only.' },
      { question: 'Do you install the safe or just supply it?', answer: 'We supply and install — the price includes delivery to your Dubai premises, floor or wall anchor bolting, and electronic lock programming.' },
    ],
    icon: '💰',
  },

  {
    slug: 'gun-safes',
    title: 'Gun Safes',
    category: 'safes',
    metaTitle: 'Gun Safes Dubai | Firearm & Weapon Storage Safes',
    metaDescription:
      'Gun safes for secure firearm storage in Dubai. Quick-access pistol safes and long-gun rifle safes. From AED 800 — +971 52 642 6161.',
    description:
      'Secure firearm storage is a legal and ethical requirement for any gun owner in Dubai and the UAE. Lock Repair Satwa supplies gun safes for authorised firearms licence holders — from compact quick-access pistol safes to full-length rifle and long-gun safes. All gun safes we supply meet the UAE Interior Ministry\'s recommended standards for firearm storage security.\n\nOur range includes biometric quick-access pistol safes (open in under 2 seconds), key-operated pistol lockboxes, and full-size rifle safes with multi-gun racking and ammunition storage compartments. All safes can be floor or wall anchored. We advise on the correct safe size for your licensed firearm collection and ensure the safe meets all documentation requirements under your firearms licence.',
    features: [
      'Biometric quick-access models for authorised pistol holders',
      'Full-size long-gun safes with rifle racks',
      'Separate ammunition storage compartments',
      'Heavy-gauge steel construction resisting pry attacks',
      'Floor and wall anchor points included',
      'Interior foam lining preventing firearm scratching',
      'Supplied with purchase and ownership documentation for licence compliance',
    ],
    pricing: { min: 800, max: 4000, currency: 'AED', note: 'Quick-access pistol safe from AED 800 installed; full-size rifle safe AED 2,000–4,000 installed.' },
    faqs: [
      { question: 'Is a gun safe required by law for firearms licence holders in the UAE?', answer: 'UAE firearms regulations require licenced holders to store firearms securely when not in use. A locked gun safe is the standard recommended storage method.' },
      { question: 'How quickly can a biometric gun safe be opened?', answer: 'Quality biometric pistol safes open in 0.5–1.5 seconds from fingerprint contact to door open. We supply and configure the safe during installation, enrolling your fingerprints.' },
      { question: 'Can a gun safe be fitted into a wardrobe or closet?', answer: 'Yes. We fit gun safes in wardrobe floors, walk-in closet walls and under-bed positions. All installations include floor or wall anchoring to prevent removal.' },
    ],
    icon: '🔒',
  },

  {
    slug: 'fireproof-safes',
    title: 'Fireproof Safes',
    category: 'safes',
    metaTitle: 'Fireproof Safes Dubai | Document & Data Protection Safes',
    metaDescription:
      'Fireproof safes for Dubai homes and offices. UL and EN rated fire protection for documents and media. From AED 600 — +971 52 642 6161.',
    description:
      'Important documents — passports, contracts, property deeds, will, insurance policies — are irreplaceable. A fireproof safe provides critical protection during building fires, maintaining internal temperatures below 177°C (the paper charring threshold) for a defined period, typically 30, 60 or 120 minutes. Lock Repair Satwa supplies fireproof safes for Dubai homes and offices, rated to UL or EN 1047 fire testing standards.\n\nOur fireproof range includes document safes (protecting paper documents and banknotes), media safes (lower internal temperature limit protecting hard drives, USB drives and optical media at below 52°C), and combined fireproof and waterproof safes for dual protection. All safes are supplied with a burglary-resistant lock in addition to fire protection, as standalone fireproof safes are typically thin-walled and easily forced.',
    features: [
      'UL or EN 1047 rated fire protection for 30, 60 or 120 minute durations',
      'Internal temperature maintained below 177°C for document protection',
      'Media safes with below 52°C internal limit for electronic storage',
      'Combined fire and waterproof models for comprehensive protection',
      'Electronic combination lock with key override',
      'Floor anchor bolting included',
      'Available from 10-litre personal safe to 200-litre office model',
    ],
    pricing: { min: 600, max: 3500, currency: 'AED', note: 'Small fireproof document safe (30 min) from AED 600 installed; large office fireproof safe (120 min) AED 2,000–3,500 installed.' },
    faqs: [
      { question: 'How long does a fireproof safe protect documents?', answer: 'Our range covers 30, 60 and 120-minute fire ratings. For residential homes, 60 minutes provides excellent protection covering the typical response time of Dubai Civil Defence.' },
      { question: 'Can a fireproof safe protect USB drives and hard drives?', answer: 'Standard document safes maintain below 177°C — hot enough to damage electronic media (which fails above 52°C). You need a media-rated safe with a lower internal temperature specification for digital storage.' },
      { question: 'Is a fireproof safe also burglary resistant?', answer: 'Fireproof safes have thin steel walls due to insulation requirements and are not burglary-resistant on their own. We recommend a fireproof safe bolted to the floor inside a locked room for combined protection.' },
    ],
    icon: '🔥',
  },

  {
    slug: 'floor-safes',
    title: 'Floor Safes',
    category: 'safes',
    metaTitle: 'Floor Safes Dubai | In-Floor Concealed Safe Supply & Install',
    metaDescription:
      'Floor safes installed into concrete and tile floors in Dubai villas and offices. Concealed, high-security storage from AED 700 — +971 52 642 6161.',
    description:
      'Floor safes are installed into the concrete structure of your floor, making them both extremely difficult to remove and virtually invisible when covered with a mat, tile or concealment panel. Lock Repair Satwa supplies and installs floor safes for Dubai villas, apartments and commercial premises — cutting the floor, setting the safe in concrete, and restoring the floor finish around it.\n\nFloor safes provide the highest level of physical security against theft because their removal would require breaking up the entire floor structure. They are ideal for storing passports, contracts, cash, jewellery and other valuables that need secure but accessible storage. Most floor safe models use a combination dial or electronic keypad lock, with the entire top surface flush with or slightly below the finished floor level.',
    features: [
      'Installed into concrete floor structure for maximum security',
      'Concealed under tile, mat or wooden floor panel',
      'Combination dial or electronic keypad lock options',
      'Internal capacity from 5 to 30 litres',
      'Stainless steel or epoxy-coated carbon steel body',
      'Waterproof gasket on premium models',
      'Installation includes concrete cutting, setting and surface restoration',
    ],
    pricing: { min: 700, max: 3000, currency: 'AED', note: 'Standard floor safe supply and installation from AED 700; large floor vault with concrete surround AED 1,500–3,000.' },
    faqs: [
      { question: 'Can a floor safe be installed in an apartment with a tile floor?', answer: 'Yes, with concrete below the tiles. We core-drill the tile and concrete, set the safe in fresh concrete surround, and restore or cut a matching tile lid over the safe top.' },
      { question: 'Is a floor safe waterproof?', answer: 'Premium models have a rubber gasket seal. In areas with groundwater risk (basement floors), we recommend a waterproof model specifically. We advise on the right model for your floor type and level.' },
      { question: 'How long does floor safe installation take?', answer: 'The installation itself takes 2–3 hours including concrete cutting and setting. The concrete needs 24 hours to cure before the safe is loaded — we schedule accordingly.' },
    ],
    icon: '🏗️',
  },

  {
    slug: 'wall-safes',
    title: 'Wall Safes',
    category: 'safes',
    metaTitle: 'Wall Safes Dubai | Concealed In-Wall Safe Installation',
    metaDescription:
      'Wall safes installed into masonry and stud walls in Dubai homes and offices. Concealed behind mirrors and artwork. From AED 500 — +971 52 642 6161.',
    description:
      'Wall safes are recessed into the wall structure, sitting flush with or behind the surface and hidden behind artwork, mirrors or panels. Lock Repair Satwa supplies and installs wall safes for Dubai villas, apartments and offices in both masonry (block and concrete) and stud-framed partition walls.\n\nMasonry installation provides the highest security as the safe is embedded in solid concrete or block — virtually impossible to extract without significant structural damage. Stud-wall installation is suitable for interior partitions and provides concealment with a lighter-duty security level. We cut the wall opening, set the safe, and restore the wall finish around it.',
    features: [
      'Flush-mount installation concealed behind mirror, artwork or panel',
      'Masonry and stud-wall installation options',
      'Electronic combination lock or key lock models',
      'Internal capacity from 10 to 60 litres',
      'Adjustable shelving inside larger models',
      'Reinforced door with anti-pry flanges',
      'Installation includes wall cutting and surface restoration',
    ],
    pricing: { min: 500, max: 2500, currency: 'AED', note: 'Stud-wall safe supply and installation from AED 500; masonry-embedded large wall safe AED 1,200–2,500.' },
    faqs: [
      { question: 'Can a wall safe be installed without visible damage to my walls?', answer: 'Yes. We cut the opening neatly, set the safe, and the surrounding area is restored. The safe door sits flush with the wall face, hidden by a mirror or picture panel.' },
      { question: 'Is a stud-wall safe as secure as a masonry-embedded safe?', answer: 'Stud-wall safes can be removed by cutting away the surrounding drywall — security depends more on concealment and the time available to an intruder. Masonry installation offers significantly higher security.' },
      { question: 'What size wall safe do I need?', answer: 'Most residential wall safes are 10–30 litres — enough for passports, documents, cash and a few valuables. We can bring sample sizes or discuss your storage requirements before confirming the model.' },
    ],
    icon: '🧱',
  },

  {
    slug: 'hotel-safes',
    title: 'Hotel Safes',
    category: 'safes',
    metaTitle: 'Hotel Safes Dubai | In-Room Guest Safe Supply & Service',
    metaDescription:
      'Hotel room safes for Dubai hotels and serviced apartments. Supply, installation and maintenance. From AED 400 — +971 52 642 6161.',
    description:
      'Hotel room safes are a standard guest amenity in Dubai\'s hotel and serviced apartment sector, providing guests with secure storage for valuables, electronics and passports during their stay. Lock Repair Satwa supplies, installs and services hotel room safes for properties of all sizes across Dubai — from small boutique hotels to large resort properties.\n\nOur hotel safe range is designed specifically for hospitality applications: easy guest programming via electronic keypad, a manager override code for checkout retrieval, and a shelf design accommodating modern laptops and tablets. Safes are supplied in standard configurations sized to fit standard hotel wardrobe shelves and can be anchored to the shelf or wardrobe floor for security.',
    features: [
      'Guest-programmable electronic keypad with 3–8 digit code',
      'Manager override code for forgotten code and checkout access',
      'Laptop-friendly interior with shelf accommodating up to 15-inch laptops',
      'Low battery warning and emergency battery terminal',
      'Wardrobe shelf anchoring hardware included',
      'Anti-tamper alarm activating on repeated wrong code attempts',
      'Audit trail on premium models showing last 50 access events',
    ],
    pricing: { min: 400, max: 1500, currency: 'AED', note: 'Standard single-door hotel safe from AED 400 installed; laptop-size safe with audit trail AED 800–1,500 installed.' },
    faqs: [
      { question: 'Can hotel safes be opened by management when a guest forgets the code?', answer: 'Yes. All hotel safes have a manager override code set during installation. We provide the manager code documentation separately for hotel security management.' },
      { question: 'Do you service existing hotel safes that have failed?', answer: 'Yes. We open, repair and reset hotel safes with forgotten codes, dead batteries, jammed bolts or faulty keypads. We work with Dubai hotels directly for maintenance contracts.' },
      { question: 'Can hotel safes fit laptops?', answer: 'Our laptop-size hotel safe models accommodate laptops up to 15 inches. We specify the interior dimensions clearly so you can confirm suitability for your property\'s guest electronics.' },
    ],
    icon: '🏨',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // COMMERCIAL DOOR HARDWARE
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: 'commercial-locks',
    title: 'Commercial Locks',
    category: 'commercial-door-hardware',
    metaTitle: 'Commercial Locks Dubai | Heavy-Duty Office & Industrial Locks',
    metaDescription:
      'Commercial-grade locks for Dubai offices, warehouses and industrial premises. High cycle-count, heavy-duty hardware from AED 300 — +971 52 642 6161.',
    description:
      'Commercial locks are built to handle higher cycle counts, heavier doors and more demanding environments than residential hardware — rated for 250,000 to 1,000,000 operation cycles and tested for resistance to forced entry at commercial security standards. Lock Repair Satwa supplies commercial-grade deadbolts, mortise locks, rim locks and multipoint locking systems for Dubai offices, warehouses, retail premises and industrial facilities.\n\nWe specify the correct lock grade for each application — Grade 2 for light commercial use, Grade 1 for heavy-traffic commercial doors, and certified high-security hardware for server rooms, data centres and sensitive commercial premises. All commercial hardware is sourced from brands with established UAE market presence and local warranty support.',
    features: [
      '250,000 to 1,000,000 cycle ratings for heavy-traffic commercial applications',
      'ANSI Grade 1 and 2 commercial lock sets',
      'Multi-point locking for large commercial and industrial doors',
      'Anti-corrosion finishes for Dubai coastal and industrial environments',
      'Master key system compatibility for building-wide access management',
      'Emergency egress compliance for fire exit applications',
      'Installation and commissioning included',
    ],
    pricing: { min: 300, max: 1200, currency: 'AED', note: 'Commercial Grade 2 lock from AED 300 installed; Grade 1 heavy-duty commercial mortise sets AED 600–1,200 installed.' },
    faqs: [
      { question: 'What is the difference between Grade 1 and Grade 2 commercial locks?', answer: 'ANSI Grade 1 locks are rated for heavy commercial use (500,000+ cycles, higher forced-entry resistance). Grade 2 covers moderate commercial traffic. We specify the appropriate grade for your door\'s expected use.' },
      { question: 'Can commercial locks be integrated into a master key system?', answer: 'Yes. Commercial locks using interchangeable core or masterkeyed cylinders can be incorporated into any master key hierarchy.' },
      { question: 'Do you supply commercial locks for industrial roller shutter doors?', answer: 'Yes. We supply padlock hasps, T-handle locks and central locking bars for industrial roller shutter and sectional overhead doors.' },
    ],
    icon: '🏢',
  },

  {
    slug: 'commercial-magnetic-locks',
    title: 'Magnetic Locks (Commercial)',
    category: 'commercial-door-hardware',
    metaTitle: 'Commercial Magnetic Locks Dubai | High-Force Electromagnetic Locks',
    metaDescription:
      'Commercial magnetic locks for Dubai offices and buildings. 280 kg to 1,200 kg holding force. Supply and installation — +971 52 642 6161.',
    description:
      'Commercial magnetic locks provide fail-safe electronic locking for high-traffic access-controlled doors in Dubai commercial buildings — holding forces from 280 kg to 1,200 kg for single and double door applications. Lock Repair Satwa supplies and installs commercial magnetic locks for office entrance doors, server room doors, fire exit doors and building lobby doors as part of comprehensive access control systems.\n\nCommercial magnetic locks are particularly suitable for high-frequency access applications — they have no mechanical parts to wear, operate silently and provide instant release for emergency egress. We supply both indoor and weatherproof outdoor models, as well as mini magnetic locks for gates and lighter interior doors.',
    features: [
      '280 kg, 600 kg and 1,200 kg holding force models',
      'Double door models for lobby and entrance door pairs',
      'Fail-safe operation — releases on power loss for emergency egress',
      'Weatherproof outdoor models for gate applications',
      'LED status indicator (locked / unlocked)',
      'Timer relay built into power supply for automatic timed release',
      'Integration with access control and fire alarm systems',
    ],
    pricing: { min: 600, max: 2000, currency: 'AED', note: '280 kg magnetic lock supply and installation from AED 600; 1,200 kg double door model AED 1,500–2,000 installed.' },
    faqs: [
      { question: 'Can magnetic locks be used on fire exit doors?', answer: 'Yes — magnetic locks are fail-safe (release on power loss), making them compliant for fire exit applications where doors must open on alarm activation. We ensure integration with the fire alarm system during installation.' },
      { question: 'Can a commercial magloc withstand aggressive pulling?', answer: 'A 600 kg magloc cannot be pulled open by hand. However, lateral or twisting force on the armature plate can reduce effective holding. We align and install maglocs to ensure the full rated force is achieved.' },
      { question: 'How is a magnetic lock powered?', answer: 'Via a 12V or 24V DC power supply with battery backup. We supply the complete power unit with the lock. Battery backup maintains locking during power outages for security-critical applications.' },
    ],
    icon: '🧲',
  },

  {
    slug: 'electric-door-strikes',
    title: 'Electric Door Strikes',
    category: 'commercial-door-hardware',
    metaTitle: 'Electric Door Strikes Dubai | Fail-Safe & Fail-Secure Models',
    metaDescription:
      'Electric door strike supply and installation in Dubai. Fail-safe and fail-secure models for access control integration. From AED 400 — +971 52 642 6161.',
    description:
      'Electric door strikes replace the static strike plate in a door frame with an electrically controlled latch keeper — allowing the latch bolt to be electrically released from a remote location, providing access without a key. Lock Repair Satwa supplies and installs electric door strikes for Dubai offices, residential buildings, access control systems and intercom entry systems.\n\nWe supply fail-safe models (which release when power is removed — appropriate for fire exit applications) and fail-secure models (which stay locked when power is removed — appropriate for server rooms and security areas). Electric strikes are the most common hardware used with video intercom entry systems in Dubai apartment buildings, allowing the front desk or residents to remotely release the main entrance door.',
    features: [
      'Fail-safe and fail-secure models for different security requirements',
      'Compatible with all standard mortise and rim latches',
      'Single voltage (12V/24V switchable) for installation flexibility',
      'Surface-mount and mortised installation options',
      'Strike plate matching all standard door frame finishes',
      'Monitored models with tamper and door position sensing',
      'Integration with video intercom, access control and alarm systems',
    ],
    pricing: { min: 400, max: 1200, currency: 'AED', note: 'Standard electric strike supply and installation from AED 400; monitored commercial fail-secure models AED 800–1,200 installed.' },
    faqs: [
      { question: 'What is the difference between fail-safe and fail-secure electric strikes?', answer: 'Fail-safe releases when power is lost (door can be opened) — use for fire exits. Fail-secure locks when power is lost (door stays locked) — use for server rooms and secure areas.' },
      { question: 'Can an electric strike be used with my existing deadbolt?', answer: 'Electric strikes work with latch bolts (spring latches), not deadbolts. For access control on a deadbolted door, a magnetic lock or electric bolt is more appropriate.' },
      { question: 'Can the electric strike be activated from a mobile phone?', answer: 'Yes, when integrated with a GSM or WiFi intercom or access control system. Resident apps for Dubai building management systems commonly use this configuration.' },
    ],
    icon: '⚡',
  },

  {
    slug: 'panic-bars',
    title: 'Panic Bars',
    category: 'commercial-door-hardware',
    metaTitle: 'Panic Bars Dubai | Emergency Exit Bar Supply & Installation',
    metaDescription:
      'Panic bar and exit device supply and installation in Dubai. EN 1125 emergency egress hardware for fire exits and commercial doors. From AED 500 — +971 52 642 6161.',
    description:
      'Panic bars (also called crash bars or push bars) are mandatory on emergency exit doors in UAE commercial buildings — allowing rapid single-motion exit by anyone without knowledge of lock operation. Lock Repair Satwa supplies and installs panic bar exit devices for commercial properties across Dubai, covering rim-mounted, mortise and vertical rod configurations for single and double doors.\n\nAll panic bars we supply meet EN 1125 emergency escape hardware requirements. We offer standard push-bar devices for single doors, co-ordinator and flush bolt kits for double doors, and alarm-equipped panic bars that trigger an audible alarm when the emergency exit is used outside normal hours. External access options (cylinder trim or lever outside) allow authorised re-entry from outside while maintaining panic release from inside.',
    features: [
      'EN 1125 certified emergency egress hardware',
      'Rim, mortise and vertical rod configurations',
      'Double door co-ordinator kits for pairs of doors',
      'Alarm-equipped models for monitored emergency exits',
      'External lever or cylinder trim for authorised re-entry',
      'Suitable for timber, aluminium and hollow metal doors',
      'Fire door rated versions for emergency fire exit compliance',
    ],
    pricing: { min: 500, max: 1500, currency: 'AED', note: 'Standard rim panic bar from AED 500 installed; vertical rod double door device with external trim AED 1,000–1,500 installed.' },
    faqs: [
      { question: 'Are panic bars required on all commercial doors in Dubai?', answer: 'Panic bars are required on designated emergency exits in commercial buildings. UAE building codes specify which doors require emergency egress hardware based on occupancy type and exit path.' },
      { question: 'Can the panic bar sound an alarm when used after hours?', answer: 'Yes — alarm-equipped panic bars include an internal sounder that activates when the bar is pushed, deterring non-emergency use of fire exits after hours.' },
      { question: 'What is the difference between a rim and mortise panic bar?', answer: 'Rim devices surface-mount on the door and engage a surface-mounted strike — easiest to fit. Mortise devices use an internal lock case engaging a mortised strike — higher security. We specify the correct type for your door and security level.' },
    ],
    icon: '🚨',
  },

  {
    slug: 'door-closers',
    title: 'Door Closers',
    category: 'commercial-door-hardware',
    metaTitle: 'Door Closers Dubai | Commercial Door Closer Supply & Install',
    metaDescription:
      'Door closer supply and installation in Dubai for commercial and fire doors. Overhead and floor spring closers. From AED 200 — +971 52 642 6161.',
    description:
      'Door closers ensure commercial and fire doors return to the closed position after each use — a mandatory requirement for fire doors in UAE buildings and a practical necessity for any secure or controlled-environment door. Lock Repair Satwa supplies and installs overhead door closers, concealed door closers and floor spring closers for commercial properties across Dubai.\n\nOur commercial door closer range is sized by EN or ISO closing force grade, matched to door weight and width for consistent positive latching. We adjust all closers to Dubai-climate specifications, compensating for thermal expansion that can cause misalignment in the UAE summer. We also service and repair existing closers — recalibrating speed adjustment valves and replacing hydraulic seals on leaking units.',
    features: [
      'EN grade 1–6 closing force options covering all commercial door sizes',
      'Overhead, concealed and floor spring configurations',
      'Backcheck function to prevent door slamming in high-wind areas',
      'Adjustable closing and latching speed valves',
      'Hold-open models for areas requiring hands-free doors',
      'Fire door certified closing force models',
      'Climate-adjusted installation for Dubai thermal conditions',
    ],
    pricing: { min: 200, max: 800, currency: 'AED', note: 'Standard EN3 overhead closer from AED 200 installed; heavy-duty floor spring or concealed closer AED 500–800 installed.' },
    faqs: [
      { question: 'What EN grade door closer do I need?', answer: 'EN grade is based on door size and weight. EN3 covers most standard commercial doors up to 950 mm wide and 80 kg. Wider or heavier doors need EN4 or EN5. We assess your door and specify correctly.' },
      { question: 'Can I replace my existing door closer myself?', answer: 'It is possible but the adjustment is critical for consistent latching. Incorrect adjustment is the most common cause of doors not latching. We recommend professional fitting and adjustment for reliable operation.' },
      { question: 'My door closer arm is bent — can it be replaced separately?', answer: 'Yes. Closer arms and shoes are available as spare parts for most commercial closer brands. We replace damaged arms without needing to replace the entire closer unit.' },
    ],
    icon: '🚪',
  },

  {
    slug: 'door-operators',
    title: 'Door Operators',
    category: 'commercial-door-hardware',
    metaTitle: 'Door Operators Dubai | Automatic Door Opener Installation',
    metaDescription:
      'Automatic door operator supply and installation in Dubai for swing and sliding doors. From AED 800 — +971 52 642 6161.',
    description:
      'Door operators (automatic door openers) provide hands-free or push-plate activated automatic door opening for Dubai commercial buildings, hospitals, hotels, retail premises and accessibility-compliant facilities. Lock Repair Satwa supplies and installs door operators for swing doors (low-energy and full-power models), sliding entrance doors, and fold-back automatic door systems.\n\nLow-energy swing door operators allow a door to be opened by a light push or push-plate activation — suitable for accessibility applications where manual door opening is impractical. Full-power automatic swing door operators open and close the door entirely automatically using motion detection, push plates or access control activation. All door operator systems include a manual override mode allowing doors to be used conventionally if the operator loses power.',
    features: [
      'Low-energy and full-power automatic swing door operators',
      'Sliding door operators for entrance vestibule applications',
      'Motion detection, push plate and access control activation options',
      'Manual override mode for power failure or maintenance',
      'Adjustable opening speed, delay and closing speed',
      'ADA and DDA accessibility compliance',
      'Integration with access control for secure automated entry',
    ],
    pricing: { min: 800, max: 3000, currency: 'AED', note: 'Low-energy swing door operator from AED 800 installed; full-power automatic door system AED 1,500–3,000 installed.' },
    faqs: [
      { question: 'What is the difference between low-energy and full-power door operators?', answer: 'Low-energy operators assist manual opening — you push the door and the motor takes over. Full-power operators open the door entirely automatically without any manual push, typically using sensors or activation buttons.' },
      { question: 'Can a door operator be fitted to my existing door without major renovation?', answer: 'Most installations use surface-mounted operators fitted to the door head. For swing doors, the operator is mounted on the door frame above the hinge side. Installation typically requires half a day and no structural work.' },
      { question: 'Can the automatic door be locked after hours?', answer: 'Yes. Door operators integrate with access control and timed relay systems to lock automatically after hours. Electric strikes or magnetic locks on the same door provide the after-hours security.' },
    ],
    icon: '⚙️',
  },
]

// ── Helper utilities ──────────────────────────────────────────────────────────

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug)
}

export function getProductsByCategory(
  category: 'locks' | 'electronic-locks' | 'safes' | 'commercial-door-hardware',
): Product[] {
  return products.filter((p) => p.category === category)
}

export const LOCK_PRODUCTS = products.filter((p) => p.category === 'locks')
export const ELECTRONIC_LOCK_PRODUCTS = products.filter((p) => p.category === 'electronic-locks')
export const SAFE_PRODUCTS = products.filter((p) => p.category === 'safes')
export const COMMERCIAL_HARDWARE_PRODUCTS = products.filter(
  (p) => p.category === 'commercial-door-hardware',
)

export const PRODUCT_CATEGORY_LABELS: Record<Product['category'], string> = {
  'locks': 'Locks',
  'electronic-locks': 'Electronic Locks',
  'safes': 'Safes',
  'commercial-door-hardware': 'Commercial Door Hardware',
}
