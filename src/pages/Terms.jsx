import React from "react";
import Footer from "../components/general/Footer";

const TermsSection = ({ number, title, content, subsections }) => (
  <li className="space-y-5">
    <div className="flex gap-2">
      <span className="text-3xl font-bold">{number}.</span>
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
    {content && <p className="text-sm font-normal">{content}</p>}
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

const Terms = () => {
  const termsData = [
    {
      title: "Acceptance of Terms",
      content:
        "By creating an account, accessing, or using the App, you acknowledge that you have read, understood, and agreed to be bound by these Terms, as well as our Privacy Policy and any other policies or guidelines we may implement. These Terms constitute a binding agreement between you and Eikon Peters.",
    },
    {
      title: "Eligibility",
      content:
        "You must be at least 18 years old to use the App. By using the App, you confirm that you are legally able to enter into this agreement and that all information you provide is truthful and accurate. If you are using the App on behalf of a business, you represent that you have the authority to bind that entity to these Terms.",
    },
    {
      title: "User Accounts",
      subsections: [
        {
          title: "3.1 Account Creation",
          content:
            "To access certain features of the App, including booking services or offering services as an artisan or merchant, you must register for an account. You agree to provide accurate, current, and complete information when creating your account, and to update this information as necessary.",
        },
        {
          title: "3.2 Account Security",
          content:
            "You are responsible for maintaining the confidentiality of your account login credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use or suspected security breach.",
        },
        {
          title: "3.3 Account Termination",
          content:
            "We reserve the right to suspend or terminate your account at our discretion, without prior notice, for any violation of these Terms or for any other reason we deem appropriate.",
        },
      ],
    },
    {
      title: "Services Provided",
      content:
        "Fix & Service Now connects users Customers with artisans and merchants Service Providers offering various repair, maintenance, and service solutions. The Company acts solely as a facilitator between Customers and Service Providers and is not directly involved in the provision of services.",
    },
    {
      title: "User Conduct",
      subsections: [
        {
          title: "5.1 Prohibited Activities",
          content:
            "You agree not to engage in any activities on the App that are unlawful, harmful, or otherwise prohibited by these Terms, including but not limited to:",
          list: [
            "Providing false or misleading information.",
            "Using the App to defraud or deceive other users.",
            "Posting or sharing content that is defamatory, obscene, or infringes on intellectual property rights.",
            "Attempting to interfere with the operation of the App or engaging in any activity that could damage the Company's reputation.",
          ],
        },
        {
          title: "5.2 User Content",
          content:
            "You are responsible for all content you upload, post, or share on the App. By submitting content, you grant Eikon Peters a non-exclusive, royalty-free, worldwide license to use, modify, distribute, and display the content.",
        },
      ],
    },
    {
      title: "Service Providers' Responsibilities",
      subsections: [
        {
          title: "6.1 Quality of Services",
          content:
            "Service Providers agree to offer services that meet or exceed industry standards and comply with all applicable laws and regulations.",
        },
        {
          title: "6.2 Licensing and Insurance",
          content:
            "Service Providers are responsible for maintaining any necessary licenses, certifications, and insurance coverage required to legally offer their services.",
        },
        {
          title: "6.3 Independence",
          content:
            "Service Providers acknowledge that they are independent contractors and not employees or agents of Eikon Peters. The Company does not control or direct the manner or means by which Service Providers perform their services",
        },
      ],
    },
    {
      title: "Payments and Fees",
      subsections: [
        {
          title: "7.1 Payment Processing",
          content:
            "All payments made through the App are processed via a third-party payment processor. The Company does not store payment information and is not responsible for payment processing issues.",
        },
        {
          title: "7.2 Service Fees",
          content:
            "The Company may charge a commission or service fee for each transaction. The applicable fees will be disclosed before a transaction is completed.",
        },
        {
          title: "7.3 Refunds and Disputes",
          content:
            "Refunds and service disputes are the responsibility of the Service Provider and the Customer. The Company is not liable for resolving payment disputes, though we may provide assistance as necessary.",
        },
      ],
    },
    {
      title: "Intellectual Property",
      subsections: [
        {
          title: "8.1 Ownership",
          content:
            "All content and materials available on the App, excluding user-generated content, are the property of Eikon Peters and are protected by copyright, trademark, and other intellectual property laws.",
        },
        {
          title: "8.2 Limited License",
          content:
            "We grant you a non-transferable, revocable license to access and use the App in accordance with these Terms. You may not use the App for any commercial purposes other than those intended by the Company.",
        },
      ],
    },
    {
      title: "Disclaimers",
      subsections: [
        {
          title: "9.1 No Warranty",
          content:
            "The App and all content are provided as is and as available without any warranties of any kind, whether express or implied. We do not guarantee that the App will be secure, error-free, or available at all times.",
        },
        {
          title: "9.2 Limitation of Liability",
          content:
            "To the fullest extent permitted by law, the Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App.",
        },
        {
          title: "9.3 No Endorsement",
          content:
            "The Company does not endorse any Service Provider, nor does it guarantee the quality, safety, or legality of the services offered through the App.",
        },
      ],
    },
    {
      title: "Indemnification",
      content:
        "You agree to indemnify and hold Eikon Peters and its affiliates, officers, directors, employees, and agents harmless from any claims, liabilities, damages, losses, and expenses arising from your use of the App, violation of these Terms, or infringement of any third-party rights.",
    },
    {
      title: "Privacy",
      content:
        "Your use of the App is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information.",
    },
    {
      title: "Third-Party Links",
      content:
        "The App may include links to third-party websites or services that are not owned or controlled by Eikon Peters. We are not responsible for the content, policies, or practices of any third-party websites.",
    },
    {
      title: "Modifications to the Terms",
      content:
        "We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting the updated Terms in the App. Your continued use of the App after the posting of any changes constitutes your acceptance of the revised Terms.",
    },
    {
      title: "Governing Law",
      content:
        "This Agreement shall be governed by and construed in accordance with English law. Disputes arising in connection with this Agreement shall be subject to the jurisdiction of the English courts. If you live in Wales, Scotland or Northern Ireland, you can also bring claims against us in the courts of the country you live in. We can also claim against you in the courts of the country you live in.",
    },
    {
      title: "Contact Information",
      content:
        "If you have any questions about these Terms, please contact us at info@eikonpeters.co.uk",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
      <header className="space-y-5">
        <span className="text-gray-600">Last Updated: October, 2024</span>
        <h1 className="text-4xl font-bold">
          Terms and Conditions for Fix & Service Now App
        </h1>
        <p className="text-gray-700">
          These Terms and Conditions govern your use of the Fix & Service Now
          mobile application operated by Eikon Peters. By accessing or using the
          App, you agree to comply with and be legally bound by these Terms. If
          you disagree with any part of these Terms, please do not use the App.
        </p>
      </header>

      <ol className="space-y-10 list-none">
        {termsData.map((section, index) => (
          <TermsSection
            key={index}
            number={index + 1}
            title={section.title}
            content={section.content}
            subsections={section.subsections}
          />
        ))}
      </ol>

      <Footer />
    </div>
  );
};

export default Terms;
