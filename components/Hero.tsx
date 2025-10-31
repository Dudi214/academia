import * as motion from "motion/react-client";
import Image from "next/image"
import { Button } from "./ui/button";
export  default  function Hero () {
    return (
    <section id="home" className="h-screen relative flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
            <Image src="/heroNew.jpg" 
             alt="Fitness Background" fill 
             className="object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div>

        <div className="relative z-10 text-white text-center px-4 max-w-4xl">
            <div>
           
            
             <motion.h1 
             initial={{opacity: 0, y: 12}} 
             animate={{opacity: 1, y: 0}}
             transition={{ duration: 0.7, ease:"easeInOut"}}
             className=" text-5xl md:text-7xl font-heading mb-6 leading-tighter">
             Transforme seu corpo, <span className="text-primary">Transforme sua vida</span>
             </motion.h1>
             
             <motion.p
             initial={{opacity: 0, y: 12}} 
             animate={{opacity: 1, y: 0}}
             transition={{ delay: 0.3, duration: 0.7 }}
             className="text-xl  md:text-2xl mb-8 font-light leading-relaxed max-w-3xl mx-auto">
               Participe de nossos programas e alcance seus objetivos com um treinador especializado e planos personalizados.

             </motion.p>

             <motion.div 
             initial={{opacity: 0, y: 12}} 
             animate={{opacity: 1, y: 0}}
             transition={{ delay: 0.4, duration: 0.7 }}
             className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                 href="https://wa.me/5524999996655?text=Quero%20começar%20meu%20teste%20gratuito" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 ><Button size="lg" className="bg-primary hover:bg-primary/90 text-lg font-semibold transition-transform duration-300 hover:scale-105 px-8">Comece o teste gratuito</Button></a>
                <a href="#preços"><Button size="lg" variant="outline" className="bg-transparent text-lg font-semibold transition-transform duration-300 hover:scale-105 px-8">Ver Planos</Button></a>
             </motion.div>
             
           

             </div>


        </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
        </div>
    </section>
    );
}