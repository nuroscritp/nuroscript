import Footer from "@/components/Footer";

export default function Policy() {
  return (
    <>

      <div className="px-10 lg:px-20 my-10 flex flex-col gap-5">

        <div className="flex flex-col gap-2 lg:flex-row items-center justify-between mb-5">
          <h1 className="text-white text-xl lg:text-2xl font-medium">Privacy Policy</h1>
          <p className="text-white/80 text-sm">Last updated: [01/01/2026]</p>
        </div>

        <p className="text-white/80">At <span className="text-white font-medium">nuroscript</span>, we respect your privacy and are committed to protecting the personal information of our website visitors, clients, and partners. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>

        <hr className="border-t border-gray-300 my-6" />

        <ol className="text-white list-decimal flex flex-col gap-10">

          <li>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">Information We Collect</h1>
              <p className="text-white/80">We may collect the following types of information:</p>
              <p className="text-white text-xl font-medium ">a) Personal Information</p>
              <ul className="list-disc pl-7 flex flex-col gap-4">
                <li className="text-white/80">Name</li>
                <li className="text-white/80">Email address</li>
                <li className="text-white/80">Phone number</li>
                <li className="text-white/80">Company name</li>
                <li className="text-white/80">Project or service-related details</li>
              </ul>

              <p className="text-white text-xl font-medium mt-4 ">b) Technical Information</p>
              <ul className="list-disc pl-7 flex flex-col gap-4">
                <li className="text-white/80">IP address</li>
                <li className="text-white/80">Browser type</li>
                <li className="text-white/80">Device information</li>
                <li className="text-white/80">Pages visited and usage data</li>
              </ul>

              <p className="text-white text-xl font-medium mt-4 ">c) Client Project Data</p>
              <p className="text-white/80">Any data, content, or materials shared by clients for development purposes will be treated as confidential and used only to deliver the agreed services.</p>
            </div>
          </li>

          <li>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">How We Use Your Information</h1>
              <p className="text-white/80">We use the collected information to:</p>
              <ul className="list-disc pl-6 flex flex-col gap-4">
                <li className="text-white/80">Communicate with you regarding inquiries or services</li>
                <li className="text-white/80">Provide, manage, and improve our services</li>
                <li className="text-white/80">Send project updates, invoices, or support messages</li>
                <li className="text-white/80">Maintain security and prevent fraudulent activity</li>
                <li className="text-white/80">Comply with legal and regulatory obligations</li>
              </ul>
            </div>
          </li>

          <li>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">Data Sharing and Disclosure</h1>
              <p className="text-white/80">We do <span className="text-white font-medium">not sell, trade, or rent</span> personal information.</p>
              <p className="text-white/80">Information may be shared only:</p>
              <ul className="list-disc pl-6 flex flex-col gap-4">
                <li className="text-white/80">With trusted third-party tools or service providers required to deliver services</li>
                <li className="text-white/80">To comply with legal requirements or law enforcement requests</li>
                <li className="text-white/80">To protect the rights, safety, or property of Nuroscript or its clients</li>
              </ul>
            </div>
          </li>

          <li>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">Third-Party Services</h1>
              <p className="text-white/80">Our services may involve third-party platforms such as hosting providers, payment gateways, APIs, analytics tools, or cloud services. These third parties have their own privacy policies, and Nuroscript is not responsible for their practices.</p>
            </div>
          </li>

          <li>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">Data Security</h1>
              <p className="text-white/80">We implement reasonable technical and organizational security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>
            </div>
          </li>

          <li>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">Data Retention</h1>
              <p className="text-white/80">We retain personal and client data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.</p>
            </div>
          </li>

          <li>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">Cookies and Tracking Technologies</h1>
              <p className="text-white/80">Our website may use cookies or similar technologies to enhance user experience and analyze website performance. You can choose to disable cookies through your browser settings.</p>
            </div>
          </li>

          <li>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">Client Confidentiality</h1>
              <p className="text-white/80">All client-related information, credentials, source code, and business data shared with Nuroscript are kept confidential and are not disclosed to unauthorized parties.</p>
            </div>
          </li>

          <li>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">Your Rights</h1>
              <p className="text-white/80">Depending on applicable laws, you may have the right to:</p>
              <ul className="list-disc pl-6 flex flex-col gap-4">
                <li className="text-white/80">Access the personal information we hold about you</li>
                <li className="text-white/80">Request correction or deletion of your data</li>
                <li className="text-white/80">Withdraw consent for data processing</li>
              </ul>
              <p className="text-white/80">To exercise these rights, please contact us using the details below.</p>
            </div>
          </li>

          <li>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">Children’s Privacy</h1>
              <p className="text-white/80">nuroscript does not knowingly collect personal information from individuals under the age of 18. If such information is discovered, it will be promptly deleted.</p>
            </div>
          </li>

          <li>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">Changes to This Privacy Policy</h1>
              <p className="text-white/80">We may update this Privacy Policy from time to time. Changes will be effective immediately upon posting on this page.</p>
            </div>
          </li>

        </ol>

        <hr className="border-t border-gray-300 my-6" />

        <div className="flex flex-col gap-4">
          <h1 className="text-white lg:text-xl font-medium">Contact Us</h1>
          <p className="text-white/80">If you have any questions or concerns about this Privacy Policy, please contact:</p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-white lg:text-xl font-medium">nuroscript</h1>
          <p className="text-white/80">Email: nuroscript@gmail.com</p>
        </div>

      </div>

      <Footer />

    </>
  );
}
