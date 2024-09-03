import NavBar from "../components/Navbar"; 

const PrivacyPolicy = () => {
  return (
    <div>
      <NavBar isHome={false} isOrder={false} name={"Privacy Policy"} back={"home"} />

      <div className="p-6 mt-16">
        <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          At Our Company, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose information about you when you use our website and services. By using our website, you agree to the collection and use of information in accordance with this policy.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Information Collection</h2>
        <p className="mb-4">
          We collect various types of information to provide and improve our services to you. This includes personal data you provide directly, such as your name, email address, and phone number, as well as data collected automatically, such as IP address and browsing behavior.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Use of Information</h2>
        <p className="mb-4">
          We use the collected information to operate and improve our website and services, communicate with you, and ensure the security of our platform. We may also use your information for marketing and promotional purposes with your consent.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Data Sharing</h2>
        <p className="mb-4">
          We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website and services, or when required by law.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Data Security</h2>
        <p className="mb-4">
          We take reasonable measures to protect your personal data from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at: support@ourcompany.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
