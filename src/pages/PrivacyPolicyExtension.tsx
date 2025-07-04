
import { Link } from 'react-router';

const PrivacyPolicy = () => {
  return (
    <div className="py-8 px-4 sm:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-center text-sm text-gray-600 mb-8">Last updated: April 22, 2025</p>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">1. Introduction</h2>
            <p className="text-gray-700">
              This Privacy Policy explains how the Resume Builder Chrome Extension ("we", "our", or "the Extension") handles user information. 
              This extension is designed to simplify access to the Resume Builder platform available at 
              <Link to="https://resume.manideepanasuri.shop" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                 resume.manideepanasuri.shop
              </Link>. We respect your privacy and do not collect any personal data through the extension itself.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">2. Data Collection and Usage</h2>
            <p className="text-gray-700">
              The Chrome Extension does not collect, store, or transmit any personal data. When you click the extension button, it simply opens 
              the Resume Builder website in a new tab. All data entered, generated, or processed is managed through the website, which may have 
              its own privacy policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">3. Website Interaction</h2>
            <p className="text-gray-700">
              Once redirected to our website, any data you submit (such as personal details, resume content, or files) is subject to the 
              privacy policy of <a href="https://resume.manideepanasuri.shop" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                resume.manideepanasuri.shop
              </a>. The extension itself does not handle or interact with that data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">4. Permissions</h2>
            <p className="text-gray-700">
              The Extension uses minimal permissions:
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>tabs</strong>: to open a new tab pointing to our website.</li>
                <li><strong>clipboardWrite</strong>: to allow functionality for copying content.</li>
              </ul>
              These permissions are used solely to enhance user experience and are not used to track or store information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">5. Data Sharing</h2>
            <p className="text-gray-700">
              We do not share any data because the extension does not collect any. Any data sharing from the website is governed by the site’s privacy policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">6. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy to reflect changes in our practices or services. Users are encouraged to review this policy periodically.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">7. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, you can contact us at:
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Email:</strong> <a href="mailto:manideepanasuri@gmail.com" className="text-blue-600">manideepanasuri@gmail.com</a></li>
                <li><strong>Website:</strong> <a href="https://resume.manideepanasuri.shop" target="_blank" rel="noopener noreferrer" className="text-blue-600">resume.manideepanasuri.shop</a></li>
              </ul>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
