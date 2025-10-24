import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            <em>Last updated:</em> {new Date().toLocaleDateString()}
          </p>
          <p className="text-base text-gray-500 mt-4 max-w-3xl mx-auto">
            Please read this Privacy Policy carefully before using Our Service.
          </p>
        </div>

        <div className="prose prose-lg mx-auto max-w-3xl">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Welcome to Cleet</h3>
            <p className="text-blue-800">
              Cleet ("Cleet", "we", "us", "our") provides AI-powered fleet management solutions and services ("Services"). Our platform automates fleet operations, optimizes pricing, provides intelligent support, and generates content to help you reduce costs and improve efficiency. This Privacy Policy explains how we collect, use, and protect your personal information when you use our platform.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. To Whom Does This Policy Apply</h2>
            
            <p className="text-gray-700 mb-4">
              This Privacy Policy applies to:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <ul className="text-gray-700 space-y-2">
                <li><strong>Customers:</strong> Fleet operators, transportation companies, and businesses that use our AI-powered fleet management Services.</li>
                <li><strong>Site Visitors:</strong> Visitors to our website, including those who may opt-in to receive communications from Cleet.</li>
                <li><strong>End Users:</strong> Drivers, fleet managers, dispatchers, and other personnel whose data is processed through our platform on behalf of our Customers.</li>
                <li><strong>Event Attendees:</strong> Individuals who attend Cleet-sponsored events, webinars, or fleet management conferences.</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">Children's Privacy</h3>
              <p className="text-yellow-800">
                Cleet does not knowingly collect information from children under the age of 16. If you are under 16, please do not submit any personal data through our platform.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Information We Collect</h2>
            
            <p className="text-gray-700 mb-6">
              What personal information we collect and process depends on how and why you use our platform. Generally, we process personal information that we receive:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Directly from you</strong> when you provide it to us, such as in connection with our Services</li>
                <li>• <strong>Indirectly</strong>, through automated technologies such as cookies, or from third parties</li>
                <li>• <strong>On behalf of our Customers</strong>, when we process the personal data of their drivers and fleet personnel</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Information We Collect Directly From You</h3>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Account Information</h4>
                <p className="text-blue-800 mb-3">When you register for a Cleet account, we collect:</p>
                <ul className="text-blue-800 space-y-1">
                  <li>• Email address and username</li>
                  <li>• Name, company name, and location (optional)</li>
                  <li>• Profile picture (optional)</li>
                  <li>• Fleet details and vehicle information</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Payment Information</h4>
                <p className="text-green-800 mb-3">For paid subscriptions, we collect billing information through PCI-compliant processors:</p>
                <ul className="text-green-800 space-y-1">
                  <li>• Billing address and payment method</li>
                  <li>• Transaction history and subscription details</li>
                  <li>• Tax information for business accounts</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">Fleet and Driver Data</h4>
                <p className="text-purple-800 mb-3">To provide AI-powered fleet management services, we collect:</p>
                <ul className="text-purple-800 space-y-1">
                  <li>• Driver information and credentials</li>
                  <li>• Vehicle specifications and maintenance records</li>
                  <li>• Route data and driving behavior for AI optimization</li>
                  <li>• Performance metrics and analytics for pricing optimization</li>
                  <li>• Customer support interactions for AI training</li>
                  <li>• Content generation preferences and brand voice data</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">Information We Collect Indirectly</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Device and Usage Information</h4>
              <p className="text-gray-700 mb-3">We automatically collect information about your use of our platform:</p>
              <ul className="text-gray-700 space-y-1">
                <li>• Device information (browser, operating system, IP address)</li>
                <li>• Usage patterns and interaction data</li>
                <li>• Location data (with permission) for fleet tracking</li>
                <li>• Log data, crash reports, and performance metrics</li>
                <li>• Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. How We Use Your Information</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">AI-Powered Fleet Management</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• AI pricing optimization for fleet services</li>
                  <li>• Automated ticket agent for customer support</li>
                  <li>• Website and social media content generation</li>
                  <li>• Intelligent chat support agent</li>
                  <li>• Advanced analytics dashboard</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Service Improvement</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• AI model training and optimization</li>
                  <li>• Feature development and enhancement</li>
                  <li>• Customer support and 24/7 priority support</li>
                  <li>• Security monitoring and compliance</li>
                  <li>• Custom AI model training for your business</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Information Sharing</h2>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">We Do NOT Sell Your Data</h3>
              <p className="text-yellow-800">
                We never sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </div>

            <p className="text-gray-700 mb-4">We may share your information only in these limited circumstances:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With trusted service providers (under strict confidentiality agreements)</li>
              <li>In case of business transfers (with notice)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Data Security</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Encryption</h3>
                <p className="text-sm text-gray-600">End-to-end encryption for all data transmission</p>
              </div>
              
              <div className="text-center p-4">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Access Control</h3>
                <p className="text-sm text-gray-600">Role-based access with multi-factor authentication</p>
              </div>
              
              <div className="text-center p-4">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Secure Storage</h3>
                <p className="text-sm text-gray-600">Data stored in SOC 2 compliant facilities</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Your Rights</h2>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">You Have Control</h3>
              <p className="text-green-800">
                You can access, update, or delete your personal information at any time through your account settings.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Access & Portability</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• View your personal data</li>
                  <li>• Download your data</li>
                  <li>• Transfer data to other services</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Control & Deletion</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Update your information</li>
                  <li>• Delete your account</li>
                  <li>• Opt-out of communications</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Cookies and Tracking</h2>
            
            <p className="text-gray-700 mb-4">
              We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Cookie Types</h3>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Essential:</strong> Required for basic website functionality</li>
                <li><strong>Analytics:</strong> Help us understand how you use our service</li>
                <li><strong>Preference:</strong> Remember your settings and choices</li>
                <li><strong>Marketing:</strong> Deliver relevant content and advertisements</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. International Transfers</h2>
            
            <p className="text-gray-700 mb-4">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data during international transfers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Changes to This Privacy Policy</h2>
            
            <p className="text-gray-700 mb-4">
              We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
            </p>
            
            <p className="text-gray-700 mb-4">
              We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
            </p>
            
            <p className="text-gray-700 mb-4">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <p className="text-gray-600 text-sm">
              This Privacy Policy is effective as of {new Date().toLocaleDateString()} and will remain in effect except with respect to any changes in its provisions in the future.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
