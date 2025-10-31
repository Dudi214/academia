import { Calendar, CheckCircle,TrendingUp, Users } from 'lucide-react';
import { scale } from 'motion';
import * as motion from 'motion/react-client';
export default function WhyChooseUs() {

    const features= [
        {
            Icon: CheckCircle,
            title: "Instrutores Profissionais Certificados",
            description: "Trabalhe com profissionais  certificados que tenham anos de experiência e conhecimento."
        },

         {
            Icon: TrendingUp,
            title: "Planos de treino e dieta personalizados",
            description: "Obtenha planos personalizados adaptados aos seus objetivos específicos, nível de condicionamento físico e preferências.",
        },

         {
            Icon: Calendar,
            title: "Horários Flexíveis",
            description: "Escolha entre sessões online e off-line que se adaptam ao seu estilo de vida e agenda ocupados.",
        },

         {
            Icon: Users,
            title: "Apoio comunitário e acompanhamento do progresso",
            description: "Junte-se a uma comunidade solidária e acompanhe seu progresso com nossas ferramentas avançadas de monitoramento."
        },
    ]



    return <section id="sobre" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2 
                    initial = {{opacity:0, y:16}}
                    whileInView = {{opacity:1, y:0}}
                    viewport={{once: true}}
                    transition = {{duration:0.6, ease:"easeOut"}}
                    className="text-4xl md:text-5xl font-black font-heading mb-4 text-foreground">Por que escolher <span className="text-primary">FitPro</span> Fitness</motion.h2>
                    
                    <motion.p 
                      initial = {{opacity:0, y: 12}}
                      whileInView = {{opacity:1, y:0}}
                     viewport={{once: true}}
                     transition = {{duration:0.6, ease:"easeOut"}}
                     
                    
                      className="text-xl text-muted-foreground max-w-2xl mx-auto">
                       Oferecemos tudo o que você precisa para ter sucesso em sua jornada fitness com métodos comprovados e suporte especializado.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <motion.div className="group text-center"
                        key={feature.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.12, }}
                        whileHover={{scale: 1.04}} >
                        <motion.div className="w-16 h-16 rounded-full bg-primary/20 inline-flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 mb-6"
                         initial={{ scale: 0.9, opacity: 0 }}
                         whileInView={{scale: 1, opacity: 1 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.18 }}>
                            <feature.Icon className="w-8 h-8" />
                        </motion.div>
                        
                        <motion.h3 className="text-xl font-bold font-heading mb-4 text-foreground" 
                         initial={{opacity: 0, y: 8}}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.14 }}>
                        {feature.title}</motion.h3>
                        
                        <motion.p className="text-muted-foreground leading-relaxed"
                         initial={{opacity: 0,}}
                         whileInView={{ opacity: 1, }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.14 }}
                        >{feature.description}</motion.p>
                      </motion.div>
                ))}
             </div>

                
            </div>
           
        </section>
}
    
     