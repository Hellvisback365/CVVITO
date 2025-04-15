import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Project {
  title: string;
  description: string;
  category: string;
  tags: string[];
  imageUrl?: string;
}

const projects: Project[] = [
  {
    title: "BeFluent",
    description: "Web app per l'assistenza ai bambini dislessici nell'apprendimento, con interfaccia adattiva e strumenti personalizzati per migliorare l'esperienza educativa.",
    category: "Web App",
    tags: ["Node.js", "MongoDB", "React"],
    imageUrl: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "POSD System",
    description: "Soluzione privacy-oriented conforme al GDPR, focalizzata sulla protezione dei dati personali e sulla trasparenza dei processi di gestione delle informazioni sensibili.",
    category: "Privacy System",
    tags: ["Java", "GDPR", "Sicurezza"],
    imageUrl: "https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "AI Recommender",
    description: "Sistema di raccomandazione conversazionale basato su modelli LLM, in grado di fornire suggerimenti personalizzati attraverso un'interfaccia di conversazione naturale.",
    category: "AI Model",
    tags: ["Python", "LLaMA", "LangChain"],
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

export const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div 
          className="flex flex-col space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold">
            <span className="text-primary">Progetti</span> Principali
          </h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
          <p className="max-w-2xl">Una selezione dei progetti a cui ho lavorato, dalla prototipazione di modelli IA alle applicazioni web orientate alla privacy.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-800">
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">Project Image</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4">
                      <Badge className="bg-primary text-white border-none">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <h3 className="text-xl font-poppins font-semibold text-gray-800 dark:text-gray-100">{project.title}</h3>
                </CardHeader>
                
                <CardContent className="py-2 flex-grow">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <a href="#" className="inline-flex items-center text-primary hover:text-primary/80 dark:hover:text-primary/90 font-medium transition-colors duration-300">
                    Esplora progetto
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
