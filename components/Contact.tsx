import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';

interface Props {
  email: string;
  address: string;
}

const Contact: React.FC<Props> = ({ email, address }) => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('submitted');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase mb-2 block">
                Get in Touch
              </span>
              <h2 className="text-4xl font-serif text-stone-900 mb-6">Reach Out to Us</h2>
              <p className="text-stone-600 mb-10">
                Interested in our sustainable fuel solutions or want to partner with us? We'd love to hear from you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-600 mb-2">Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-600 mb-2">Email</label>
                    <input 
                      required
                      type="email" 
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-600 mb-2">Message</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={formState === 'submitting' || formState === 'submitted'}
                  className={`w-full py-4 rounded-lg font-bold text-white transition-all flex items-center justify-center gap-2 ${
                    formState === 'submitted' ? 'bg-emerald-700' : 'bg-stone-900 hover:bg-stone-800'
                  }`}
                >
                  {formState === 'submitting' ? (
                    <Loader2 className="animate-spin" />
                  ) : formState === 'submitted' ? (
                    "Message Sent!"
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Info & Map */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full flex flex-col"
            >
              <div className="grid grid-cols-1 gap-6 mb-8">
                <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100 flex items-center gap-6">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">Email Us</h4>
                    <a href={`mailto:${email}`} className="text-stone-500 text-sm break-all hover:text-emerald-600 transition-colors">{email}</a>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="flex-grow w-full min-h-[300px] bg-stone-200 rounded-3xl overflow-hidden relative shadow-inner">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105619.53723388714!2d74.72106313264455!3d34.12648509170881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e185566089b00f%3A0x6758654c6019313!2sSrinagar!5e0!3m2!1sen!2sin!4v1709923456789!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KGF Location"
                ></iframe>
                
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg flex items-center gap-3">
                  <MapPin className="text-emerald-600" size={20} />
                  <div>
                    <p className="text-xs text-stone-500 font-bold uppercase">Headquarters</p>
                    <p className="text-sm font-medium text-stone-900">{address}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;