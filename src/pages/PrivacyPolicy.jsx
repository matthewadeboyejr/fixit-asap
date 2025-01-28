import React from "react";
import Footer from "../components/general/Footer";

const PrivacySection = ({ number, title, content, subsections, list }) => (
  <li className="space-y-5">
    <div className="flex gap-2">
      <span className="text-3xl font-bold">{number}.</span>
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
    {content && <p className="text-sm font-normal">{content}</p>}
    {list && (
      <ul className="list-disc list-inside text-sm font-normal ml-4 space-y-1">
        {list.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    )}
    {subsections && (
      <div className="space-y-6">
        {subsections.map((subsection, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-2xl font-bold">{subsection.title}</h3>
            <p className="text-sm font-normal">{subsection.content}</p>
            {subsection.list && (
              <ul className="list-disc list-inside text-sm font-normal ml-4 space-y-1">
                {subsection.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    )}
  </li>
);

const PrivacyPolicy = () => {
  const privacyData = [
    {
      title: "Information We Collect",
      content:
        "We collect different types of information from or about you depending on how you use the App:",
      subsections: [
        {
          title: "1.1 Personal Information",
          content:
            "We collect different types of information from or about you depending on how you use the App:",
          list: [
            "Name",
            "Email address",
            "Phone number",
            "Address or location",
            "Payment information (processed by a third-party payment processor)",
            "Profile details, such as your skills or service preferences if you are a Service Provider",
          ],
        },
        {
          title: "1.2 Usage Data",
          content:
            "We may collect information about how you access and use the App, such as:",
          list: [
            "Device information (e.g., device type, operating system, and IP address)",
            "Log data (e.g., date and time of access, features used, pages viewed)",
            "Location data (if you enable location-based services)",
          ],
        },
        {
          title: "1.3 User-Generated Content",
          content:
            "When you submit content, such as reviews, service requests, or profile information, we collect the information you provide.",
        },
        {
          title: "1.4 Third-Party Data",
          content:
            "We may receive information about you from third-party services, such as payment processors, to facilitate transactions.",
        },
      ],
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect to:",
      list: [
        "Provide and maintain the App's services, including connecting Customers with Service Providers",
        "Process transactions and manage payments",
        "Communicate with you about your account, updates, and support requests",
        "Personalize your experience on the App",
        "Analyze usage trends and improve the App's functionality",
        "Enforce our Terms and Conditions",
        "Comply with legal obligations and protect our legal rights",
      ],
    },
    {
      title: "Sharing of Your Information",
      content: "We may share your information with:",
      subsections: [
        {
          title: "3.1 Service Providers",
          content:
            "We may share your information with third-party service providers who assist us in operating the App, such as payment processors, hosting providers, and analytics services.",
        },
        {
          title: "3.2 Other Users",
          content:
            "If you are a Service Provider, certain information such as your name, profile, and location may be visible to Customers. If you are a Customer, your service requests may be visible to Service Providers.",
        },
        {
          title: "3.3 Legal Requirements",
          content:
            "We may disclose your information to comply with legal obligations, respond to lawful requests, protect our legal rights, or prevent fraud.",
        },
        {
          title: "3.4 Business Transfers",
          content:
            "In the event of a merger, acquisition, or sale of assets, your personal information may be transferred to the new owner.",
        },
      ],
    },
    {
      title: "Data Security",
      content:
        "We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
    },
    {
      title: "Your Data Rights",
      content:
        "Depending on your location, you may have the following rights regarding your personal information:",
      list: [
        "Access: Request access to the information we hold about you.",
        "Correction: Request that we correct or update your information.",
        "Deletion: Request the deletion of your personal information, subject to certain legal exceptions.",
        "Opt-Out: Opt out of certain data processing activities, such as marketing communications.",
      ],
    },
    {
      title: "Cookies and Tracking Technologies",
      content:
        "The App may use cookies and similar tracking technologies to enhance your experience, analyze usage, and support functionality. You can control the use of cookies through your device or browser settings.",
    },
    {
      title: "Third-Party Links",
      content:
        "The App may contain links to third-party websites. We are not responsible for the privacy practices or content of those third-party sites. Please review their privacy policies before sharing any information.",
    },
    {
      title: "Changes to This Privacy Policy",
      content:
        "We may update this Privacy Policy from time to time. Any changes will be effective immediately upon posting the updated Privacy Policy in the App. We encourage you to review this Privacy Policy periodically.",
    },
    {
      title: "Contact Us",
      content: (
        <>
          If you have any questions or concerns about this Privacy Policy,
          please{" "}
          <a
            href="mailto:info@eikonpeters.co.uk"
            className="text-blue-700 hover:text-blue-800 underline"
          >
            contact us
          </a>
        </>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
      <header className="space-y-5">
        <span className="text-gray-600">Last Updated: October, 2024</span>
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="text-gray-700">
          This Privacy Policy explains how Eikon Peters collects, uses,
          discloses, and protects your personal information when you access or
          use the service rendering mobile and web application. By using the
          App, you agree to the collection and use of information in accordance
          with this Privacy Policy.
        </p>
      </header>

      <ol className="space-y-10 list-none">
        {privacyData.map((section, index) => (
          <PrivacySection
            key={index}
            number={index + 1}
            title={section.title}
            content={section.content}
            subsections={section.subsections}
            list={section.list}
          />
        ))}
      </ol>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
