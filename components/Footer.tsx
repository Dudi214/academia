import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() { 
    return(
    <footer id="contatos" className="bg-secondary dark:bg-secondary/20 text-neutral-100 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand*/}
                <div className="col-span-1 md:cols-span-2 ">
                    <h3 className="text-3-l font-black font-heading text-primary mb-4">FitPro Fitness</h3>
                    <p className="mb-6 leading-relaxed max-w-md">Transforme sua vida com nossos programas abrangentes de condicionamento físico,treinadores especializados e comunidade de apoio.</p>

                    <div className="flex space-x-4">
                        <Link href="/" className="w-10 h-10 bg-secondary/40 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                        <Instagram className="w-5 h-5"/>
                        </Link>

                        <Link href="/" className="w-10 h-10 bg-secondary/40 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                        <Youtube className="w-5 h-5"/>
                        </Link>

                        <Link href="/" className="w-10 h-10 bg-secondary/40 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                        <Facebook className="w-5 h-5"/>
                        </Link>
                    </div>
                </div>

                {/* Links */}

                <div>
                    <h4 className="text-lg font-bold font-heading mb-4">
                        Links rápidos
                    </h4>
                 <ul className="space-y-2">
                       {[
                       { name: "Home", href: "#home" },
                       { name: "Sobre", href: "#sobre" },
                       { name: "Programas", href: "#programas" },
                       { name: "Preços", href: "#precos" },
                       { name: "Contato", href: "#contatos" }
                       ].map((item) => (
                      <li key={item.name}>
                      <Link 
                      href={item.href} 
                     className="hover:text-primary transition-colors duration-300"
                     >
                     {item.name}
                      </Link>
                     </li>
                     ))}
                     </ul>

                </div>

                {/* Contact */}

                <div>
                    <h4 className="text-lg font-bold font-heading mb-4">
                       Informações de contato
                    </h4>
                    <div className="space-y-3">
                        <p>
                            <strong>Telefone:</strong>
                            <br/>
                            (555) 123-4567
                        </p>
                        <p className="mt-4">
                            <strong>Email:</strong>
                            <br/>
                            Info@fitprofiness.example
                        </p>

                        <p>
                            <strong>Location:</strong>
                            <br/>
                            123 Fitness Ave
                            <br/>
                            Wellness City, HW 45678
                        </p>
                    </div>
                   
                </div>
            </div>
            <div className="border-t border-secondary/40 pt-18 text-center text-neutral-400">
            <p>
                &copy; {new Date().getFullYear()} FitPro Fitness. Todos os direitos reservados. Transforme seu corpo, transforme sua vida.
            </p>

            </div>
        </div>
    </footer>
  )
}