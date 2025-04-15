import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Brain, MessageSquare, ShieldCheck, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div 
          className="flex flex-col space-y-4 mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-poppins font-bold"
            variants={itemVariants}
          >
            <span className="text-primary">Chi</span> Sono
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary rounded"
            variants={itemVariants}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-green-500 to-red-500" />
              <div className="relative w-full h-80 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <div className="flex items-center justify-center h-full bg-gray-300 dark:bg-gray-700">
                  <span className="text-gray-500 dark:text-gray-400">Profile Image</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-white font-poppins font-semibold">Vito Piccolini</h3>
                  <p className="text-primary-200">AI Developer</p>
                </div>
              </div>
              
              <div className="flex justify-center space-x-4 mt-6">
                <a href="#" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors duration-300">
                  <Github size={18} />
                </a>
                <a href="#" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors duration-300">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors duration-300">
                  <Twitter size={18} />
                </a>
                <a href="#" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors duration-300">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-poppins font-semibold">
              Sviluppatore IA con passione per l'innovazione
            </h3>
            <p className="leading-relaxed">
              Mi sono specializzato nella prototipazione di applicazioni basate su modelli linguistici 
              come LLaMA e Mistral, con particolare attenzione alle soluzioni di raccomandazione conversazionale.
            </p>
            <p className="leading-relaxed">
              Durante il mio tirocinio presso LACAM-SWAP (Università di Bari) ho potuto approfondire la mia 
              conoscenza nell'ambito dell'Intelligenza Artificiale e del Natural Language Processing, 
              applicando queste tecnologie a progetti concreti.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-poppins font-semibold mb-3 text-primary">Formazione</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <GraduationCap className="mt-1 mr-2 text-primary" size={16} />
                    <span>Università di Bari Aldo Moro, Informatica</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-poppins font-semibold mb-3 text-primary">Interessi</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Brain className="mt-1 mr-2 text-primary" size={16} />
                    <span>Intelligenza Artificiale</span>
                  </li>
                  <li className="flex items-start">
                    <MessageSquare className="mt-1 mr-2 text-primary" size={16} />
                    <span>Natural Language Processing</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="mt-1 mr-2 text-primary" size={16} />
                    <span>Privacy e GDPR</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
