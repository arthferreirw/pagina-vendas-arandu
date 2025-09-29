import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImg from '../assets/aplicativoarandu.png';

export function HeroSection() {
  return (
    <div className="bg-[#2ecc71] text-white relative overflow-hidden">
      {/* Background wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-24"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="rgba(255,255,255,0.1)"
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center space-x-2">
              <span className="text-3xl">🌱</span>
              <h1 className="text-2xl font-bold">Arandu</h1>
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Cultive microverdes com automação total e IA
                </h2>
                <p className="text-xl lg:text-2xl opacity-90 mb-8">
                  Nossa tecnologia une automação total e inteligência artificial para que você cultive microverdes de forma simples, divertida e altamente nutritiva.
                </p>
              </div>
              
              <a 
                href="https://wa.me/556293051961?text=Olá! Tenho interesse no sistema Arandu para cultivo de microverdes. Gostaria de saber mais informações!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#2ecc71] px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🚀 Quero cultivar melhor
              </a>
            </div>
            
            <div className="hidden lg:block">
              <ImageWithFallback
                src={heroImg}
                alt="Sistema de cultivo Arandu com automação e interface digital"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}