import React from 'react';
import { motion } from 'framer-motion';

const Privacy: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-stone prose-lg">
            <p className="text-stone-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h3 className="text-2xl font-serif text-stone-800 mt-8 mb-4">1. Introduction</h3>
            <p className="text-stone-600 mb-4">
              Kashmir Green Fuel ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>

            <h3 className="text-2xl font-serif text-stone-800 mt-8 mb-4">2. Data We Collect</h3>
            <p className="text-stone-600 mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
            </p>
            <ul className="list-disc pl-6 mb-4 text-stone-600 space-y-2">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes email address provided via our contact forms.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
            </ul>

            <h3 className="text-2xl font-serif text-stone-800 mt-8 mb-4">3. How We Use Your Data</h3>
            <p className="text-stone-600 mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 text-stone-600 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>

            <h3 className="text-2xl font-serif text-stone-800 mt-8 mb-4">4. Data Security</h3>
            <p className="text-stone-600 mb-4">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>

            <h3 className="text-2xl font-serif text-stone-800 mt-8 mb-4">5. Contact Us</h3>
            <p className="text-stone-600 mb-4">
              If you have any questions about this privacy policy or our privacy practices, please contact us at <a href="mailto:info@kashmirgreenfuel.com" className="text-emerald-600 hover:underline">info@kashmirgreenfuel.com</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Privacy;