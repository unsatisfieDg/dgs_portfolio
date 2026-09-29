import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowLeft } from 'lucide-react';

export default function AllCertifications() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const certifications = [
    {
      title: "Diploma in Bachelor of Science in Information Technology",
      issuer: "University of Northern Philippines",
      credentialUrl: "DIPLOMA.jpeg"
    },
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM",
      credentialUrl: "https://www.credly.com/badges/8a53c407-0b12-427d-ae49-68418f79b9b5/public_url"
    },
    {
      title: "AWS Generative AI for Developers",
      issuer: "Amazon Web Services (AWS)",
      credentialUrl: "https://coursera.org/share/b3af5b8ba6f634d85640172fff0f490c"
    },
    {
      title: "Generative AI for Software Development",
      issuer: "DeepLearning.AI",
      credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/KFDK60RB3DZU"
    },
    {
      title: "HTML/CSS",
      issuer: "TestDome",
      credentialUrl: "https://www.testdome.com/certificates/b052b5ff6ec7479dbc129558fa036bcb"
    },
    {
      title: "JAVASCRIPT AND NODE.JS",
      issuer: "TestDome",
      credentialUrl: "https://www.testdome.com/certificates/e40ead02cda94b78aa78f7549d5faa71"
    },
    {
      title: "PHP",
      issuer: "TestDome",
      credentialUrl: "https://www.testdome.com/certificates/a67e84cd55f246f0b41b6d2a38c67743"
    },
    {
      title: "PYTHON",
      issuer: "TestDome",
      credentialUrl: "https://www.testdome.com/certificates/95d5a4c46215412eaaa261f5ff729321"
    },
    {
      title: "Software Engineering",
      issuer: "TestDome",
      credentialUrl: "https://www.testdome.com/certificates/3997290858964ab6a7a260f9238f77eb"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50/70 dark:bg-gray-950 transition-colors text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16 pb-12">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-4"
          >
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            🎓 All Certifications
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            A complete list of my professional certifications and achievements
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.credentialUrl.startsWith('http') ? cert.credentialUrl : `${import.meta.env.BASE_URL}${cert.credentialUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-5 md:p-6 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all cursor-pointer group active:scale-[0.98]"
            >
              <div className="flex items-start justify-between gap-2 sm:gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white mb-1.5 sm:mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-words">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {cert.issuer}
                  </p>
                </div>
                <ExternalLink 
                  size={18} 
                  className="flex-shrink-0 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors sm:w-5 sm:h-5"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

