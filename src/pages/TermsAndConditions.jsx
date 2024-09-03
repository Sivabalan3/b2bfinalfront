/* eslint-disable react/no-unescaped-entities */
import NavBar from "../components/Navbar"; 
const TermsAndConditions = () => {
  return (
    <div>
      <NavBar isHome={false} isOrder={false} name={"Terms and Conditions"} back={"home"}/>

      <div className="p-6 mt-16">
        <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
        <p className="mb-4">
          Welcome to Our Company. These Terms and Conditions outline the rules and regulations for the use of Our Company's Website and Services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing and using our website, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Changes to Terms</h2>
        <p className="mb-4">
          We may update our Terms and Conditions from time to time. We will notify you of any changes by posting the new Terms and Conditions on our website. You are advised to review these Terms periodically for any changes.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">User Responsibilities</h2>
        <p className="mb-4">
          You are responsible for your use of our website and services. You agree not to use the website for any unlawful purpose or in any way that could damage, disable, or impair the website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Intellectual Property</h2>
        <p className="mb-4">
          All content on our website, including text, graphics, logos, and images, is the property of Our Company or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or otherwise use any content without our prior written consent.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
        <p className="mb-4">
          Our Company will not be liable for any damages arising from your use of our website or services. This includes, but is not limited to, direct, indirect, incidental, and consequential damages.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Governing Law</h2>
        <p className="mb-4">
          These Terms and Conditions are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from these Terms will be resolved in the courts of [Your Jurisdiction].
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about these Terms and Conditions, please contact us at: support@ourcompany.com.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
