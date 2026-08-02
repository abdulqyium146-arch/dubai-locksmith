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
  title: `Privacy Policy | ${BUSINESS_NAME} — Locksmith Dubai`,
  description: `Privacy Policy for ${BUSINESS_NAME}, Dubai's professional key shop and locksmith. Learn how we collect, use, and protect your personal data. Based in Al Bada'a, Satwa, Dubai.`,
  alternates: {
    canonical: `${SITE_URL}/privacy`,
    languages: { en: `${SITE_URL}/privacy`, 'x-default': `${SITE_URL}/privacy` },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: `${SITE_URL}/privacy`,
    siteName: BUSINESS_NAME,
    title: `Privacy Policy | ${BUSINESS_NAME}`,
    description: `How ${BUSINESS_NAME} collects, uses, and protects your personal data. Locksmith & key shop in Satwa, Dubai.`,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `${BUSINESS_NAME} Privacy Policy` }],
  },
}

const breadcrumbs = [
  { name: 'Home', url: SITE_URL },
  { name: 'Privacy Policy', url: `${SITE_URL}/privacy` },
]

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}/privacy#webpage`,
  url: `${SITE_URL}/privacy`,
  name: `Privacy Policy | ${BUSINESS_NAME}`,
  description: `Privacy policy for ${BUSINESS_NAME} — locksmith and key shop in Al Bada'a, Satwa, Dubai.`,
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

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={webPageSchema} />

      <BreadcrumbNav
        items={[
          { name: 'Home', href: '/' },
          { name: 'Privacy Policy', href: '/privacy' },
        ]}
      />

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="mb-8 text-sm text-gray-500">
          Last updated: 1 August 2025 · {BUSINESS_NAME} · {ADDRESS_FULL}
        </p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700">

          <section>
            <h2 className="text-xl font-semibold text-gray-900">1. Who We Are</h2>
            <p>
              <strong>{BUSINESS_NAME}</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a
              professional locksmith and key shop located at {ADDRESS_FULL}. We operate the website at{' '}
              <Link href="/" className="text-amber-600 underline">
                locksmith-dubai.com
              </Link>{' '}
              and provide key duplication, car key programming, lock installation, and emergency locksmith
              services across Dubai.
            </p>
            <p>
              This Privacy Policy explains what personal data we collect, how we use it, and your rights
              regarding that data. By using our website or contacting us, you agree to the practices
              described here.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">2. Data We Collect</h2>
            <h3 className="mt-4 font-semibold text-gray-800">2.1 Information You Provide</h3>
            <ul className="ml-4 list-disc space-y-1">
              <li><strong>Booking &amp; enquiry forms</strong> — name, phone number, email address, service location (Dubai area), vehicle make/model (for automotive services), message.</li>
              <li><strong>WhatsApp and phone calls</strong> — contact details you share when you initiate a conversation with us.</li>
              <li><strong>Email correspondence</strong> — any information you include when emailing us at {EMAIL}.</li>
            </ul>
            <h3 className="mt-4 font-semibold text-gray-800">2.2 Automatically Collected Data</h3>
            <ul className="ml-4 list-disc space-y-1">
              <li><strong>Log data</strong> — IP address, browser type, pages visited, time and date of visit, referring URL. Collected automatically by our hosting provider (Vercel).</li>
              <li><strong>Cookies</strong> — we use essential cookies only (session management). We do not use advertising or tracking cookies.</li>
              <li><strong>Analytics</strong> — we may use privacy-respecting analytics to understand how visitors use our site. No personally identifiable information is shared with analytics providers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">3. How We Use Your Data</h2>
            <ul className="ml-4 list-disc space-y-1">
              <li>To respond to service enquiries and booking requests.</li>
              <li>To dispatch a technician to your location in Dubai.</li>
              <li>To send service confirmations or follow-up messages.</li>
              <li>To improve our website and services.</li>
              <li>To comply with legal obligations under UAE law.</li>
            </ul>
            <p className="mt-2">
              We do <strong>not</strong> sell, rent, or share your personal data with third parties for
              marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">4. Legal Basis for Processing</h2>
            <p>
              We process your data on the basis of:
            </p>
            <ul className="ml-4 list-disc space-y-1">
              <li><strong>Contract performance</strong> — to deliver the locksmith service you have requested.</li>
              <li><strong>Legitimate interests</strong> — to operate and improve our business.</li>
              <li><strong>Legal compliance</strong> — where required by UAE Federal Law No. 45 of 2021 on Personal Data Protection (PDPL) or other applicable law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">5. Data Retention</h2>
            <p>
              We retain your data only as long as necessary to fulfil the purpose for which it was
              collected or as required by law. Booking and contact records are retained for up to 2 years.
              Log data is retained for up to 90 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">6. Data Security</h2>
            <p>
              We use industry-standard security measures — including HTTPS/TLS encryption, access
              controls, and secure hosting — to protect your data from unauthorised access, alteration,
              or disclosure. No system is 100% secure; we cannot guarantee absolute security but take
              all reasonable precautions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">7. Third-Party Services</h2>
            <p>Our website may use the following third-party services, each subject to their own privacy policies:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li><strong>Vercel</strong> — hosting and edge network (vercel.com/legal/privacy-policy)</li>
              <li><strong>Google Maps</strong> — embedded map on contact page</li>
              <li><strong>WhatsApp</strong> — if you contact us via WhatsApp, Meta&apos;s privacy policy applies to that communication</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">8. Your Rights</h2>
            <p>Under applicable UAE data protection law, you have the right to:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your data (subject to legal retention requirements).</li>
              <li>Withdraw consent where processing is based on consent.</li>
              <li>Lodge a complaint with the relevant UAE authority.</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, contact us at{' '}
              <a href={`mailto:${EMAIL}`} className="text-amber-600 underline">
                {EMAIL}
              </a>{' '}
              or call <a href="tel:+971526426161" className="text-amber-600 underline">{PHONE_DISPLAY}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">9. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed at children under 18. We do not knowingly collect personal
              data from minors. If you believe a minor has submitted data to us, please contact us
              immediately and we will delete it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page
              with an updated date. Continued use of our website after changes constitutes acceptance of
              the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">11. Contact Us</h2>
            <p>For any privacy-related questions or requests:</p>
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
