import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <>

      <div className=" px-10 lg:px-20 my-10 flex flex-col gap-5">

        <div className="flex flex-col gap-2 lg:flex-row items-center justify-between mb-5">
          <h1 className="text-white text-xl lg:text-2xl font-medium">Terms and Conditions</h1>
          <p className="text-white/80 text-sm">Last updated: [01/01/2026]</p>
        </div>

        <h2 className="text-white/80 lg:text-xl">Welcome to <span className="text-white"> nuroscript</span></h2>

        <p className="text-white/80">nuroscript is a software development company that provides services including, but not limited to, web development, mobile application development, software solutions, maintenance, and related IT services.</p>
        <p className="text-white/80">By accessing our website or engaging our services, you agree to be bound by these Terms and Conditions (“Terms”). If you do not agree, please do not use our website or services.</p>

        <hr className="border-t border-gray-300 my-6" />

        <ol className="text-white list-decimal flex flex-col gap-10">

          <li>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">Scope of Services</h1>
              <p className="text-white/80">nuroscript provides custom software development services based on client requirements. The exact scope, deliverables, timelines, and pricing will be defined and agreed upon separately through proposals, quotations, emails, or written agreements.</p>
              <p className="text-white/80">Any additional work beyond the agreed scope may require extra charges and revised timelines.</p>
            </div>
          </li>

          <li>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">Client Responsibilities</h1>
              <p className="text-white/80">Clients agree to:</p>
              <ul className="list-disc pl-6 flex flex-col gap-4">
                <li className="text-white/80">Provide accurate and complete project requirements</li>
                <li className="text-white/80">Share necessary content, assets, and approvals on time</li>
                <li className="text-white/80">Respond promptly to communications to avoid project delays</li>
                <li className="text-white/80">Ensure they have legal rights to any content, images, data, or materials provided to nuroscript</li>
              </ul>
              <p className="text-white/80">nuroscript shall not be responsible for delays caused due to incomplete or delayed inputs from the client.</p>
            </div>
          </li>

          <li>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">Payments and Billing</h1>
              <ul className="list-disc pl-6 flex flex-col gap-4">
                <li className="text-white/80">All payments must be made as per the agreed payment schedule</li>
                <li className="text-white/80">Advance payments, if any, are <span className="text-white font-medium">non-refundable</span> unless explicitly stated</li>
                <li className="text-white/80">Delayed payments may result in project suspension or termination</li>
                <li className="text-white/80">Final deliverables may be withheld until full payment is received</li>
              </ul>
              <p className="text-white/80">All prices are exclusive of applicable taxes unless stated otherwise.</p>
            </div>
          </li>

          <li>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">Intellectual Property Rights</h1>
              <ul className="list-disc pl-6 flex flex-col gap-4">
                <li className="text-white/80">Upon<span className="text-white font-medium"> full payment</span>, ownership of the final developed product will be transferred to the client unless otherwise agreed</li>
                <li className="text-white/80">nuroscript retains the right to reuse general code components, frameworks, libraries, and non-confidential techniques</li>
                <li className="text-white/80">nuroscript may showcase completed projects in its portfolio unless restricted by a written agreement</li>
              </ul>
              <p className="text-white/80">Third-party tools, plugins, or licenses used in the project remain subject to their respective terms.</p>
            </div>
          </li>

          <li>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">Revisions and Modifications</h1>
              <p className="text-white/80">Reasonable revisions within the agreed scope are included. Major changes or new features requested after approval may be treated as a new scope and charged separately.</p>
            </div>
          </li>

          <li>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">Confidentiality</h1>
              <p className="text-white/80">Both nuroscript and the client agree to keep confidential any sensitive or proprietary information shared during the course of the project, unless disclosure is required by law.</p>
            </div>
          </li>

          <li>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">Project Timelines</h1>
              <p className="text-white/80">Project timelines are estimates and depend on timely client feedback and approvals. nuroscript will not be liable for delays caused by external factors, third-party services, hosting providers, or client-side delays.</p>
            </div>
          </li>

          <li>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">Third-Party Services</h1>
              <p className="text-white/80">nuroscript may integrate third-party services such as hosting, APIs, payment gateways, or libraries. nuroscript is not responsible for downtime, failures, or policy changes of such third-party services.</p>
            </div>
          </li>

          <li>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">Limitation of Liability</h1>
              <p className="text-white/80">To the maximum extent permitted by law, nuroscript shall not be liable for:</p>
              <ul className="list-disc pl-6 flex flex-col gap-4">
                <li className="text-white/80">Loss of profits, data, or business</li>
                <li className="text-white/80">Indirect or consequential damages</li>
                <li className="text-white/80">Issues arising from misuse or modification of the software by the client or third parties</li>
              </ul>
              <p className="text-white/80">Our total liability shall not exceed the amount paid by the client for the specific service.</p>
            </div>
          </li>


          <li>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">Warranty Disclaimer</h1>
              <p className="text-white/80">All services and deliverables are provided on an “AS IS” basis unless otherwise stated. nuroscript does not guarantee that the software will be completely error-free or uninterrupted.</p>
            </div>
          </li>

          <li>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">Termination</h1>
              <p className="text-white/80">Either party may terminate the engagement with written notice. In such cases:</p>
              <ul className="list-disc pl-6 flex flex-col gap-4">
                <li className="text-white/80">The client must pay for work completed up to the termination date</li>
                <li className="text-white/80">No refunds will be issued for completed milestones</li>
              </ul>
            </div>
          </li>

          <li>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">Governing Law and Jurisdiction</h1>
              <p className="text-white/80">These Terms shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of Indian courts.</p>
            </div>
          </li>

          <li>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">Changes to These Terms</h1>
              <p className="text-white/80">nuroscript reserves the right to update or modify these Terms at any time. Changes will be effective immediately upon posting on this page.</p>
            </div>
          </li>

        </ol>

        <hr className="border-t border-gray-300 my-6" />

        <div className="flex flex-col gap-4">
          <h1 className="text-white text-xl font-medium">Contact Us</h1>
          <p className="text-white/80">For any questions regarding these Terms and Conditions, please contact:</p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-white text-xl font-medium">nuroscript</h1>
          <p className="text-white/80">Email: nuroscript@gmail.com</p>
        </div>

      </div>

      <Footer />


    </>
  );
}
