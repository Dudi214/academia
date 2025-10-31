import { navItems } from '../lib/constants';
import MobileNavegation from './MobileNavegation';
import ThemeToggle from './ThemeToggle';
import { Button } from './ui/button';


export default function Navbar() { 
    return ( 
     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div>
                    <h1 className="text-2xl font-black font-heading text-primary">FitPro</h1>
                </div>

                {/* Desktop navigation */}
                <div className="hidden md:block">
                    <div className="flex items-baseline space-x-8">
                     {navItems.map((item) => (
                       <a 
                        className="text-foreground hover:text-primary px-3 py-2 text-xl font-medium transition-colors duration-300" 
                        key={item.name} 
                         href={item.href}
                         >
                          {item.name}
                         </a>
                            ))}
                    </div>

                </div>
                
                {/* CTA */}
                <div className="hidden md:flex items-center space-x-4">
                    <ThemeToggle />
                      <a 
                      href="https://wa.me/5524999996655?text=Olá,%20quero%20fazer%20minha%20inscrição%20na%20academia!" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       >
                      <Button className='font-semibold'>
                       Junte-se agora
                     </Button>
                     </a>
                </div>

                {/* Mobile navigation */}

                <div className="md:hidden">
                    <MobileNavegation />

                </div>
            </div>
        </div>
     </nav>
    );
 };