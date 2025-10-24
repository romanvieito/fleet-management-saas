import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600">
            <em>Last updated:</em> {new Date().toLocaleDateString()}
          </p>
          <p className="text-base text-gray-500 mt-4 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using Our Service.
          </p>
        </div>

        <div className="prose prose-lg mx-auto max-w-3xl">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Cleet Terms of Service</h3>
            <p className="text-blue-800">
              Cleet ("Cleet", "we", "us", "our") provides access to the Cleet platform, including AI-powered fleet management services, automated business tools, APIs, and related services ("Services"). Our platform automates fleet operations with AI pricing optimization, automated ticket agents, content generation, and intelligent support. By using the Services, you agree to be bound by these Terms of Service ("Agreement"). If you are using the Services on behalf of a company, you must have the authority to bind that company to this Agreement.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Age and Eligibility</h2>
            
            <p className="text-gray-700 mb-4">
              You must be at least 16 years old to use the Services. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">Account Responsibility</h3>
              <p className="text-yellow-800">
                You are responsible for all activities that occur under your account, including any violations of these terms by users you authorize to access your account.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Your Content</h2>
            
            <p className="text-gray-700 mb-4">
              You are responsible for the content you upload to the Services. By posting content, you grant Cleet a license to use, modify, and distribute your content in connection with the Services. Cleet can remove content at any time.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Content License</h3>
              <p className="text-gray-700 mb-3">By uploading content to our platform, you grant us the right to:</p>
              <ul className="text-gray-700 space-y-1">
                <li>• Use your content to provide fleet management services</li>
                <li>• Process and analyze your data for service improvement</li>
                <li>• Store and backup your content securely</li>
                <li>• Remove content that violates our terms</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Description of Service</h2>
            
            <p className="text-gray-700 mb-6">
              Cleet provides an AI-powered fleet management platform that includes:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">AI-Powered Features</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• AI Pricing Optimizer for fleet services</li>
                  <li>• Automated Ticket Agent for customer support</li>
                  <li>• Website & Social Media Content Generator</li>
                  <li>• AI Chat Support Agent</li>
                  <li>• Advanced Analytics Dashboard</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Business Tools</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Custom AI Model Training</li>
                  <li>• 24/7 Priority Support</li>
                  <li>• Enterprise Security (SOC 2 compliance)</li>
                  <li>• API integrations</li>
                  <li>• Instant setup with plug-and-play tools</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Free Plan</h2>
            
            <p className="text-gray-700 mb-4">
              Cleet offers a free plan but may change the terms or discontinue it at any time. Projects on the free plan may be removed without notice.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">Free Plan Limitations</h3>
              <p className="text-yellow-800">
                Free plans are subject to usage limitations and may be terminated at our discretion. We reserve the right to remove free accounts that violate our terms or create an unreasonable burden on our infrastructure.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. User Accounts</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Account Creation</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>You must provide accurate and complete information</li>
              <li>You are responsible for maintaining account security</li>
              <li>You must be at least 18 years old to create an account</li>
              <li>One account per person or organization</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Account Responsibilities</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Keep your login credentials secure</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>You are responsible for all activities under your account</li>
              <li>Maintain accurate contact information</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Fair Use</h2>
            
            <p className="text-gray-700 mb-4">
              Cleet will provide reasonable bandwidth and storage for all plan levels but may shut down projects or accounts that create an unreasonable burden on infrastructure.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Usage Guidelines</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Use AI tools reasonably for fleet management and business operations</li>
                <li>• Avoid excessive API calls or AI model requests</li>
                <li>• Do not attempt to circumvent usage limitations or rate limits</li>
                <li>• Report any unusual usage patterns or AI model issues to our support team</li>
                <li>• Respect the 24/7 priority support guidelines for enterprise customers</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Acceptable Use</h2>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Permitted Uses</h3>
              <ul className="text-green-800 space-y-2">
                <li>• AI-powered fleet operations automation</li>
                <li>• Pricing optimization for fleet services</li>
                <li>• Automated customer support and ticket handling</li>
                <li>• Content generation for marketing and social media</li>
                <li>• Business analytics and performance monitoring</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">Prohibited Uses</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Illegal activities or violations of law</li>
                <li>• Harassment or discrimination</li>
                <li>• Attempting to gain unauthorized access</li>
                <li>• Interfering with service operations</li>
                <li>• Reverse engineering or copying our software</li>
                <li>• Spam or unsolicited communications</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Security</h2>
            
            <p className="text-gray-700 mb-4">
              Cleet takes measures to protect your content but is not liable for unauthorized access or data loss.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Security Measures</h3>
              <p className="text-blue-800">
                We implement industry-standard security measures including encryption, access controls, and regular security audits. However, no system is 100% secure, and you use our services at your own risk.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Payment Terms</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Pricing Model</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• $30/month per vehicle</li>
                  <li>• 14-day free trial (no credit card required)</li>
                  <li>• Automatic renewal unless cancelled</li>
                  <li>• All fees are non-refundable</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Billing Terms</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• 30 days notice for price increases</li>
                  <li>• Current customers protected from increases</li>
                  <li>• Custom AI model training may have additional costs</li>
                  <li>• Enterprise features available upon request</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Usage Restrictions</h2>
            
            <p className="text-gray-700 mb-4">
              You may not sublicense, reverse engineer, or commercially exploit the Services. You must comply with all laws and Cleet policies.
            </p>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">Prohibited Activities</h3>
              <ul className="text-red-800 space-y-1">
                <li>• Reverse engineering or attempting to extract source code</li>
                <li>• Creating derivative works based on our platform</li>
                <li>• Using our services for competitive purposes</li>
                <li>• Violating any applicable laws or regulations</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Electronic Communications</h2>
            
            <p className="text-gray-700 mb-4">
              By using the Services, you consent to receiving electronic communications from Cleet.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Data and Privacy</h2>
            
            <p className="text-gray-700 mb-4">
              Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Data Ownership</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• You retain ownership of your data</li>
                <li>• We may use aggregated, anonymized data for service improvement</li>
                <li>• You can export your data at any time</li>
                <li>• Data is deleted upon account termination</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">13. Representations and Warranties</h2>
            
            <p className="text-gray-700 mb-4">
              You represent that you own or have the necessary rights to your content and that your use of the Services complies with laws and Cleet policies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">14. Indemnification</h2>
            
            <p className="text-gray-700 mb-4">
              You agree to indemnify Cleet against any claims arising from your use of the Services or your content.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">15. Confidentiality</h2>
            
            <p className="text-gray-700 mb-4">
              Both parties will protect each other's confidential information and use it only for purposes related to the Services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">16. Service Availability</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Uptime</h3>
                <p className="text-sm text-gray-600">99.9% service availability target</p>
              </div>
              
              <div className="text-center p-4">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Maintenance</h3>
                <p className="text-sm text-gray-600">Scheduled maintenance with advance notice</p>
              </div>
              
              <div className="text-center p-4">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Support</h3>
                <p className="text-sm text-gray-600">24/7 technical support available</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">17. Intellectual Property</h2>
            
            <p className="text-gray-700 mb-4">
              The Cleet platform, including all software, designs, and content, is protected by intellectual property laws. You may not:
            </p>
            
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Copy, modify, or distribute our software</li>
              <li>Reverse engineer or attempt to extract source code</li>
              <li>Use our trademarks without permission</li>
              <li>Create derivative works based on our platform</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">18. Limitation of Liability</h2>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">Important Legal Notice</h3>
              <p className="text-yellow-800">
                Our liability is limited to the maximum extent permitted by law. We are not responsible for indirect, incidental, or consequential damages.
              </p>
            </div>
            
            <p className="text-gray-700 mb-4">
              To the fullest extent permitted by law, Cleet shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">19. Term and Termination</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">By You</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Cancel anytime through your account</li>
                  <li>• 30-day notice for annual plans</li>
                  <li>• Immediate cancellation for monthly plans</li>
                  <li>• Data export available before termination</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">By Us</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• For violation of these terms</li>
                  <li>• For non-payment of fees</li>
                  <li>• For illegal or harmful activities</li>
                  <li>• With 30 days written notice</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">20. Disclaimer</h2>
            
            <p className="text-gray-700 mb-4">
              The Services are provided "as is" without warranties of any kind.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">21. Governing Law and Disputes</h2>
            
            <p className="text-gray-700 mb-4">
              This Agreement is governed by the laws of California. Disputes will be resolved by binding arbitration, not in court, except for certain intellectual property disputes. There is a class action waiver.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">22. Privacy</h2>
            
            <p className="text-gray-700 mb-4">
              Please refer to the Privacy Policy at <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline">/privacy</a> for information on how Cleet collects and uses personal data.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">23. Changes to These Terms and Conditions</h2>
            
            <p className="text-gray-700 mb-4">
              We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
            </p>
            
            <p className="text-gray-700 mb-4">
              By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
            </p>
          </section>

          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <p className="text-gray-600 text-sm">
              These Terms of Service are effective as of {new Date().toLocaleDateString()} and will remain in effect except with respect to any changes in its provisions in the future.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
