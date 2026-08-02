import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbNav } from '@/components/sections/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import {
  BUSINESS_NAME,
  SITE_URL,
  DEFAULT_OG_IMAGE,
  EMAIL,
  PHONE_DISPLAY,
  ADDRESS_FULL,
} from '@/lib/constants'

export const metadata: Metadata = {
  title: `Terms of Service | ${BUSINESS_NAME} — Locksmith Dubai`,
  description: `Terms of Service for ${BUSINESS_NAME}, professional key shop and locksmith in Al Bada'a, Satwa, Dubai. Key duplication, car key programming, lock repair — service terms and conditions.`,
  alternates: {
    canonical: `${SITE_URL}/terms`,
    languages: { en: `${SITE_URL}/terms`, 'x-default': `${SITE_URL}/terms` },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: `${SITE_URL}/terms`,
    siteName: BUSINESS_NAME,
    title: `Terms of Service | ${BUSINESS_NAME}`,
    description: `Service terms and conditions for ${BUSINESS_NAME} — locksmith and key shop in Satwa, Dubai.`,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `${BUSINESS_NAME} Terms of Service` }],
  },
}

const breadcrumbs = [
  { name: 'Home', url: SITE_URL },
  { name: 'Terms of Service', url: `${SITE_URL}/terms` },
]

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}/terms#webpage`,
  url: `${SITE_URL}/terms`,
  name: `Terms of Service | ${BUSINESS_NAME}`,
  description: `Terms and conditions for locksmith and key shop services by ${BUSINESS_NAME}, Al Bada'a, Satwa, Dubai.`,
  inLanguage: 'en',
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#lock-repair-satwa` },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      item: b.url,
    })),
  },
}

export default function TermsPage() {
  return (
    <>
      <JsonLd data={webPageSchema} />

      <BreadcrumbNav
        items={[
          { name: 'Home', href: '/' },
          { name: 'Terms of Service', href: '/terms' },
        ]}
      />

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">Terms of Service</h1>
        <p className="mb-8 text-sm text-gray-500">
          Last updated: 1 August 2025 · {BUSINESS_NAME} · {ADDRESS_FULL}
        </p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700">

          <section>
            <h2 className="text-xl font-semibold text-gray-900">1. About These Terms</h2>
            <p>
              These Terms of Service govern your use of this website and any locksmith, key cutting,
              or security services provided by <strong>{BUSINESS_NAME}</strong> (&ldquo;we&rdquo;,
              &ldquo;us&rdquo;, &ldquo;our&rdquo;), a professional key shop and locksmith based at{' '}
              {ADDRESS_FULL}, Dubai, UAE.
            </p>
            <p>
              By using our website, booking a service, or accepting a quote, you agree to these terms.
              If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">2. Services We Provide</h2>
            <p>We provide the following services in Dubai and surrounding areas:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Key duplication and key cutting (door keys, car keys, all types)</li>
              <li>Car key programming, transponder cloning, and smart key service</li>
              <li>Car key replacement (lost key scenarios)</li>
              <li>Door lock repair, body change, and installation</li>
              <li>Smart lock and electronic lock supply and installation</li>
              <li>Safe box opening and servicing</li>
              <li>Emergency car unlock and home lockout service</li>
              <li>Access control and commercial locksmith services</li>
            </ul>
            <p className="mt-2">
              Service availability depends on technician availability, vehicle make/model compatibility,
              and access to necessary parts. We reserve the right to decline a job we determine is
              outside our technical capability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">3. Quotes and Pricing</h2>
            <ul className="ml-4 list-disc space-y-1">
              <li>All prices are quoted in UAE Dirhams (AED) and are confirmed with the customer before work begins.</li>
              <li>Phone and WhatsApp quotes are estimates; a final price is given on-site after inspection.</li>
              <li>We do not charge call-out fees for services within Dubai.</li>
              <li>Additional charges may apply for specialist parts, luxury vehicles, or high-security products — these are disclosed before the job proceeds.</li>
              <li>Prices shown on our website are indicative starting prices. Exact pricing depends on the specific vehicle, lock, or product required.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">4. Payment</h2>
            <ul className="ml-4 list-disc space-y-1">
              <li>Payment is due on completion of the service.</li>
              <li>We accept cash, credit/debit card, and bank transfer (for commercial clients with prior arrangement).</li>
              <li>For parts ordered in advance (e.g., specialist car key blanks), a deposit may be required.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">5. Customer Responsibilities</h2>
            <p>By booking our services, you confirm that:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>You are the legal owner or an authorised user of the vehicle, property, or lock you are requesting service for.</li>
              <li>You have valid identification if requested by our technician (standard practice for security verification).</li>
              <li>You will provide accurate location details and remain reachable during the technician&apos;s journey.</li>
              <li>You understand that providing false information to obtain locksmith services may constitute a criminal offence under UAE law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">6. Verification of Ownership</h2>
            <p>
              For emergency lockouts and key replacements, our technician may request proof of ownership
              or authorisation (e.g., vehicle registration card, tenancy agreement, employee ID). We
              reserve the right to refuse service if we have reasonable grounds to doubt authorisation.
              This is a security measure to protect both our customers and the community.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">7. Warranty and Workmanship</h2>
            <ul className="ml-4 list-disc space-y-1">
              <li><strong>Key duplication:</strong> If a duplicated key fails to work within 7 days of cutting due to a cutting error, we will re-cut it at no charge. The original key must be returned for inspection.</li>
              <li><strong>Lock installation:</strong> 30-day workmanship warranty on installation labour. Product warranty is as per the manufacturer.</li>
              <li><strong>Car key programming:</strong> 7-day warranty on transponder programming. Vehicle ECU issues or battery problems are outside this warranty.</li>
              <li>Warranty does not cover misuse, physical damage, or tampering after service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by UAE law, {BUSINESS_NAME}&apos;s liability for any claim
              arising from our services is limited to the amount paid for the specific service in
              question. We are not liable for:
            </p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Indirect or consequential losses (e.g., lost business, data, or time).</li>
              <li>Pre-existing damage to locks, doors, or vehicles not caused by our technician.</li>
              <li>Losses arising from events outside our control (force majeure).</li>
              <li>Incompatibility of third-party smart home systems with installed locks.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">9. Cancellation</h2>
            <ul className="ml-4 list-disc space-y-1">
              <li>You may cancel a booking at any time before a technician has departed.</li>
              <li>If a technician is already en route and you cancel without reasonable cause, a nominal call-out charge (AED 50–100) may apply.</li>
              <li>We reserve the right to reschedule if a technician is unavailable due to emergency or unforeseen circumstances.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">10. Website Use</h2>
            <ul className="ml-4 list-disc space-y-1">
              <li>Content on locksmith-dubai.com is for information purposes only and is subject to change without notice.</li>
              <li>You may not copy, reproduce, or redistribute website content without our prior written consent.</li>
              <li>We are not responsible for the content of external websites linked from our site.</li>
              <li>We reserve the right to modify or discontinue any part of our website at any time.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">11. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the United Arab Emirates and the Emirate of Dubai.
              Any disputes shall be subject to the exclusive jurisdiction of the Dubai courts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">12. Changes to These Terms</h2>
            <p>
              We may update these Terms of Service at any time. The updated version will be posted on
              this page with a revised date. Continued use of our website or services constitutes
              acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">13. Contact Us</h2>
            <p>For questions about these Terms:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li><strong>Email:</strong> <a href={`mailto:${EMAIL}`} className="text-amber-600 underline">{EMAIL}</a></li>
              <li><strong>Phone:</strong> <a href="tel:+971526426161" className="text-amber-600 underline">{PHONE_DISPLAY}</a></li>
              <li><strong>Address:</strong> {ADDRESS_FULL}</li>
            </ul>
          </section>

        </div>

        <div className="mt-12 rounded-lg border border-amber-100 bg-amber-50 p-6 text-center">
          <p className="text-sm text-gray-600">
            Need locksmith help in Dubai?{' '}
            <Link href="/contact" className="font-semibold text-amber-600 underline">
              Contact us
            </Link>{' '}
            or call{' '}
            <a href="tel:+971526426161" className="font-semibold text-amber-600 underline">
              {PHONE_DISPLAY}
            </a>{' '}
            — available 24/7.
          </p>
        </div>
      </main>
    </>
  )
}
