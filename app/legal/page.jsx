import { FadeIn } from "@/components/AnimateIn";

export default function Legal() {
  return (
    <div className="bg-gradient-to-b from-white to-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[var(--electric-blue)]/5 to-transparent rounded-full blur-3xl transform -translate-x-1/3 -translate-y-1/3" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <FadeIn className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-[var(--navy)] mb-4">
              Legal Information
            </h1>
            <p className="text-xl text-slate-600">
              Privacy Policy and Terms of Service
            </p>
            <p className="text-sm text-slate-500 mt-4">
              Effective date: July 30, 2026 &middot; Last updated: October 7, 2026
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          {/* ===================== PRIVACY POLICY ===================== */}
          <h2 className="text-3xl font-bold text-[var(--navy)] mb-6">Privacy Policy</h2>

          <p className="text-slate-700 leading-relaxed mb-4">
            Provines Consulting (&ldquo;Provines Consulting,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a
            California sole proprietorship operating under a registered fictitious business name (DBA),
            run by Connor Provines. We provide marketing services, including a marketing reporting and
            campaign management platform known as &ldquo;Golden Kit.&rdquo; This Privacy Policy explains what
            information we collect, how we use it, how we store and protect it, who we share it with, and
            the rights and choices available to you. It applies to our website, provinesconsulting.com,
            and to Golden Kit.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            If you have any questions, contact us at{' '}
            <a href="mailto:connor@provinesconsulting.com" className="underline text-[var(--navy)]">
              connor@provinesconsulting.com
            </a>.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">1. Who we are and what Golden Kit does</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Golden Kit is a marketing reporting and campaign management platform operated by Provines
            Consulting. Each of our clients grants us permission (&ldquo;OAuth authorization&rdquo;) to access
            <strong> their own</strong> connected marketing accounts. We use that access for two purposes only:
            to read performance data and build automated reports for that client, and, where the client asks
            us to manage their campaigns, to make changes in those accounts. Golden Kit uses an AI operator,
            software built on a third-party AI model, to analyze the data, prepare reports, and propose changes.
            We make changes <strong>only with the client&rsquo;s approval</strong>, given for the specific change
            or as part of a plan the client has approved.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">2. Information we collect</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Information you provide directly.</strong> When you contact us, request a growth audit, or
            become a client, we collect information such as your name, email address, company name, billing
            details, and any information you choose to share about your business.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Marketing platform data accessed with your authorization.</strong> When a client connects
            an account to Golden Kit, we access marketing performance data from that client&rsquo;s own accounts
            through the platform&rsquo;s official APIs. This may include:
          </p>
          <ul className="text-slate-700 leading-relaxed mb-4 list-disc pl-6 space-y-2">
            <li>
              <strong>Google</strong> &mdash; Google Ads (campaign, ad group, keyword, spend, and conversion
              metrics, and campaign settings), Google Analytics / GA4 (traffic, engagement, and conversion metrics), Google Search
              Console (search impressions, clicks, queries, and position data), and Google Business Profile
              (listing insights and performance metrics).
            </li>
            <li>
              <strong>Meta</strong> &mdash; Facebook and Instagram Page and account insights, and advertising
              performance data and campaign settings from Meta Ads (reach, impressions, spend, results, and
              related metrics) for the
              client&rsquo;s own ad accounts, Pages, and Instagram accounts.
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-4">
            We access this data through each platform&rsquo;s official API and only for accounts the client has
            explicitly connected and authorized. We request only the permissions these purposes need: read
            access for reporting and, where a client asks us to manage their campaigns, permission to make the
            changes they approve.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Automatically collected information.</strong> When you visit our website, we (and our
            hosting/analytics providers) may collect standard technical information such as IP address,
            browser type, device information, and pages viewed.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">3. How we use information</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            We use the information described above <strong>solely</strong> to provide Golden Kit to the client
            who authorized the connection; to build, generate, and maintain automated reports for that client;
            to propose changes to that client&rsquo;s campaigns and carry out the changes they approve; to
            respond to inquiries, provide requested services, and communicate about projects; and to operate,
            secure, and improve Golden Kit.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            We do <strong>not</strong> sell or rent your information or platform data to anyone; use platform
            data for advertising, ad targeting, or to build advertising or marketing profiles; use platform
            data to make credit, lending, insurance, or eligibility decisions; transfer platform data to data
            brokers or information-resale services; or use platform data for any purpose other than providing
            Golden Kit to the client who authorized it.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">4. Google API Limited Use disclosure</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Golden Kit&rsquo;s access, use, storage, and sharing of data obtained through Google APIs adheres to
            the{' '}
            <a href="https://developers.google.com/terms/api-services-user-data-policy" className="underline text-[var(--navy)]">
              Google API Services User Data Policy
            </a>, including the <strong>Limited Use</strong> requirements. Specifically:
          </p>
          <ul className="text-slate-700 leading-relaxed mb-4 list-disc pl-6 space-y-2">
            <li>
              We limit our use of data received from Google APIs to providing and improving the user-facing
              reporting and campaign management features that the connecting client requested;
            </li>
            <li>
              We do not transfer Google user data except as necessary to provide or improve those features, to
              comply with applicable law, or as part of a merger or acquisition (with continued adherence to
              this policy);
            </li>
            <li>
              We do not use or transfer Google user data for serving advertisements, and we do not sell Google
              user data;
            </li>
            <li>
              We do not use or transfer Google user data to develop, improve, or train generalized AI or
              machine-learning models; and
            </li>
            <li>
              We do not allow humans to read Google user data unless (i) we have the client&rsquo;s affirmative
              consent for specific messages, (ii) it is necessary for security purposes or to comply with
              applicable law, or (iii) our use is limited to internal operations and the data has been
              aggregated and anonymized.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">5. Meta Platform Data disclosure</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Our access to and use of data from Meta&rsquo;s platforms (Facebook, Instagram, and Meta Ads)
            complies with the Meta Platform Terms and Developer Policies. We process Meta Platform Data only to
            provide Golden Kit&rsquo;s reporting and campaign management to the client who authorized the
            connection, we do not sell it, and we do not use it for any purpose other than serving that
            client. Clients may revoke
            Golden Kit&rsquo;s access at any time (see Section 9).
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">6. How we share information &mdash; third parties and subprocessors</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            We do not sell your information. We share information only with service providers
            (&ldquo;subprocessors&rdquo;) that help us operate Golden Kit, and only to the extent
            necessary. Current categories of subprocessors include:
          </p>
          <ul className="text-slate-700 leading-relaxed mb-4 list-disc pl-6 space-y-2">
            <li><strong>Hosting / infrastructure</strong> &mdash; Vercel (website and application hosting).</li>
            <li>
              <strong>Cloud storage / database</strong> &mdash; the encrypted data store used to hold generated
              report data and connection tokens.
            </li>
            <li>
              <strong>AI model provider</strong> &mdash; the third-party AI service that powers Golden Kit&rsquo;s
              AI operator. It processes connected-account data only to perform tasks for the client who
              authorized it, and we use it only under terms that do not allow it to train its models on that
              data.
            </li>
            <li>
              <strong>Platform APIs</strong> &mdash; Google and Meta, from which authorized data is retrieved and
              through which approved changes are made.
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-4">
            We may also disclose information if required by law, to protect our legal rights, or in connection
            with a business transfer, in each case consistent with this policy and with the Google and Meta
            requirements above.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">7. Data storage and security</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Data is stored encrypted, both in transit (TLS) and at rest. Access to client data and to OAuth
            tokens is restricted to authorized personnel and to the automated systems that provide Golden Kit.
            We implement administrative, technical, and organizational safeguards appropriate to the
            sensitivity of the data.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">8. Data retention</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            We retain client marketing data only for as long as necessary to provide Golden Kit to that
            client, or as required by law. When a client ends their engagement, revokes access, or
            requests deletion, we delete the associated platform data and OAuth tokens without undue delay,
            except where retention is required for a legitimate legal or accounting purpose.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">9. Your rights, revoking access, and data deletion</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            You are always in control of your connected accounts and your data.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Revoking access.</strong> You can revoke Golden Kit&rsquo;s access to any connected account
            at any time directly in that platform&rsquo;s settings:
          </p>
          <ul className="text-slate-700 leading-relaxed mb-4 list-disc pl-6 space-y-2">
            <li>
              <strong>Google:</strong> visit{' '}
              <a href="https://myaccount.google.com/permissions" className="underline text-[var(--navy)]">
                Google Account permissions
              </a>{' '}
              and remove Provines Consulting / Golden Kit.
            </li>
            <li>
              <strong>Meta:</strong> in Facebook, go to <strong>Settings &amp; Privacy &rarr; Settings &rarr;
              Business Integrations</strong> (or <strong>Apps and Websites</strong>) and remove Provines
              Consulting / Golden Kit.
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-4">
            Revoking access immediately stops any further data collection from, and any further changes to,
            that account.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Requesting deletion.</strong> To request deletion of data we hold, email{' '}
            <a href="mailto:connor@provinesconsulting.com" className="underline text-[var(--navy)]">
              connor@provinesconsulting.com
            </a>{' '}
            with the subject line &ldquo;Data Deletion Request.&rdquo; We will delete the associated platform
            data and stored tokens without undue delay and confirm when complete. You may also request access
            to, or correction of, the personal information we hold about you at the same address.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">10. California privacy rights (CCPA / CPRA)</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            If you are a California resident, the California Consumer Privacy Act, as amended by the California
            Privacy Rights Act, gives you the right to:
          </p>
          <ul className="text-slate-700 leading-relaxed mb-4 list-disc pl-6 space-y-2">
            <li>Know what personal information we collect, use, and disclose;</li>
            <li>Request access to and a copy of that information;</li>
            <li>Request correction of inaccurate personal information;</li>
            <li>Request deletion of your personal information; and</li>
            <li>Not be discriminated against for exercising these rights.</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>We do not sell or &ldquo;share&rdquo; (as defined under the CPRA) personal information, and
            we do not process it for cross-context behavioral advertising.</strong> To exercise any of these
            rights, contact{' '}
            <a href="mailto:connor@provinesconsulting.com" className="underline text-[var(--navy)]">
              connor@provinesconsulting.com
            </a>.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">11. Children&rsquo;s privacy</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Golden Kit is a business-to-business service and is not directed to children. We do not knowingly
            collect personal information from anyone under 16.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">12. Changes to this policy</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            If we change how we use data obtained through Google or Meta APIs, we will update this policy and,
            where required, notify affected clients and obtain renewed consent before using data in a new way.
            The &ldquo;Last updated&rdquo; date at the top reflects the latest revision.
          </p>

          {/* ===================== TERMS OF SERVICE ===================== */}
          <h2 className="text-3xl font-bold text-[var(--navy)] mb-6 mt-12">Terms of Service</h2>

          <p className="text-slate-700 leading-relaxed mb-4">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the marketing
            reporting and campaign management platform known as &ldquo;Golden Kit&rdquo; and the website
            provinesconsulting.com (together,
            the &ldquo;Service&rdquo;), operated by Provines Consulting, a California sole proprietorship
            operating under a registered fictitious business name (DBA). By using the Service or authorizing
            Golden Kit to connect to your accounts, you agree to these Terms.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            If you have questions, contact us at{' '}
            <a href="mailto:connor@provinesconsulting.com" className="underline text-[var(--navy)]">
              connor@provinesconsulting.com
            </a>.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">1. The Service</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Golden Kit is a marketing reporting and campaign management platform. With your authorization, we
            connect to the marketing platforms you use, including Google (Google Ads, Google Analytics / GA4,
            Google Search Console, and Google Business Profile) and Meta (Facebook, Instagram, and Meta Ads).
            We read your marketing performance data to build automated reports for you and, where you ask us
            to manage your campaigns, make changes in those accounts with your approval. Golden Kit uses an AI
            operator, software built on a third-party AI model, to analyze your data, prepare reports, and
            propose changes.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">2. Authorization and your accounts</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            To use Golden Kit you must connect one or more marketing platform accounts and grant the requested
            permissions through the platform&rsquo;s official OAuth flow. You represent that you own
            or are authorized to connect each account and to grant us access to its data. You are responsible
            for maintaining the security of your own platform accounts and credentials. You may revoke Golden
            Kit&rsquo;s access at any time through the relevant platform&rsquo;s settings, as described in our
            Privacy Policy above. Revoking access will stop further data collection from, and any further
            changes to, that account, and may end your ability to receive reports or campaign management.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">3. Approvals and campaign changes</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            When you ask us to manage your campaigns, Golden Kit may propose changes such as new or edited
            campaigns, ads, keywords, audiences, budgets, bids, and schedules. We make changes only with your
            approval, given for the specific change or as part of a plan you have approved, and you may
            withdraw approval for future changes at any time. Ad spend resulting from approved changes is
            billed by the advertising platform to your account under your agreement with that platform, and
            you are responsible for it. We carry out approved changes with reasonable care, but the
            advertising platforms control delivery and results, and we do not guarantee any particular
            outcome.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">4. Acceptable use</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            You agree not to use the Service to violate any law or any third-party platform&rsquo;s terms
            (including Google&rsquo;s and Meta&rsquo;s), to infringe others&rsquo; rights, or to attempt to gain
            unauthorized access to the Service or its data. We may suspend or terminate access for conduct that
            we reasonably believe violates these Terms or applicable platform policies.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">5. Fees and payment</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Fees, billing frequency, and scope are set out in the individual agreement, statement of work, or
            subscription plan applicable to you. Typical arrangements are project-based or monthly retainer.
            Fees are due as stated in that agreement.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">6. Data and privacy</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Our collection, use, storage, sharing, retention, and deletion of data &mdash; including data
            obtained through the Google and Meta APIs &mdash; are described in our Privacy Policy above, which
            is incorporated into these Terms by reference. In particular, our use and transfer of information
            received from Google APIs adheres to the{' '}
            <a href="https://developers.google.com/terms/api-services-user-data-policy" className="underline text-[var(--navy)]">
              Google API Services User Data Policy
            </a>, including the Limited Use requirements, and our handling of Meta Platform Data complies with
            the Meta Platform Terms and Developer Policies.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">7. Intellectual property</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            The Service, including its software, dashboards, and design, is owned by Provines Consulting. The
            underlying marketing data belongs to you (the client). We grant you a non-exclusive right to use
            the reports and dashboards we generate for you for your own business purposes. We may use
            anonymized, aggregated results as case studies unless your agreement provides otherwise.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">8. Confidentiality</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            We treat your business information, strategies, and connected-account data as strictly confidential
            and use it only to provide the Service. A non-disclosure agreement is available on request.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">9. Service availability and third-party platforms</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            The Service depends on third-party platforms (including Google and Meta) and their APIs. We are not
            responsible for changes, outages, rate limits, or discontinuations of those platforms, or for data
            those platforms make available or withhold. We may modify or discontinue features of the Service
            with reasonable notice.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">10. Disclaimers</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            The Service is provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; To the fullest extent
            permitted by law, we disclaim all warranties, express or implied, including merchantability,
            fitness for a particular purpose, and non-infringement. Reports and recommendations are provided
            for informational purposes, and you are responsible for your own business decisions, including the
            changes you approve.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">11. Limitation of liability</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            To the fullest extent permitted by law, Provines Consulting will not be liable for any indirect,
            incidental, special, consequential, or punitive damages, or for lost profits or data, arising out
            of or related to the Service. Our total liability for any claim arising out of these Terms will not
            exceed the amounts you paid to us for the Service in the three (3) months preceding the event
            giving rise to the claim.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">12. Termination</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Either party may terminate the engagement as provided in the applicable agreement, or you may stop
            using the Service and revoke access at any time. On termination, we will delete your
            connected-account data and OAuth tokens as described in our Privacy Policy, except where retention
            is required by law.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">13. Governing law</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            These Terms are governed by the laws of the State of California, without regard to its
            conflict-of-laws rules. The exclusive venue for any dispute will be the state or federal courts
            located in California.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">14. Changes to these Terms</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            We may update these Terms from time to time. Material changes will be reflected in the &ldquo;Last
            updated&rdquo; date, and where required we will notify affected clients. Continued use of the
            Service after changes take effect constitutes acceptance of the updated Terms.
          </p>

          {/* ===================== CONTACT ===================== */}
          <h2 className="text-3xl font-bold text-[var(--navy)] mb-6 mt-12">Contact</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            For questions about these terms or our privacy practices, please contact:
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Provines Consulting<br />
            Connor Provines<br />
            Email:{' '}
            <a href="mailto:connor@provinesconsulting.com" className="underline text-[var(--navy)]">
              connor@provinesconsulting.com
            </a>
            <br />
            California, USA
          </p>

          <p className="text-sm text-slate-500 mt-12">
            Effective date: July 30, 2026 &middot; Last updated: October 7, 2026
          </p>
        </div>
      </section>
    </div>
  );
}
