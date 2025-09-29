import { ImageWithFallback } from './figma/ImageWithFallback';
import smartphoneControlImage from 'figma:asset/ff717251e06be544ef053daa807a7a5dabbee1cd.png';
import socialFeedbackImage from 'figma:asset/48b633881d86d223d215f8f5720d39a28e105f3e.png';

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Controle via smartphone */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
                Controle total na palma da mão
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Monitore e controle sua horta de microverdes em tempo real através do seu smartphone. 
                Receba notificações inteligentes, ajuste configurações e acompanhe o crescimento das suas plantas onde estiver.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📱</span>
                  <span className="text-lg text-gray-700">Interface intuitiva e fácil de usar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🔔</span>
                  <span className="text-lg text-gray-700">Alertas em tempo real</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📊</span>
                  <span className="text-lg text-gray-700">Monitoramento detalhado do crescimento</span>
                </div>
              </div>
            </div>
            
            <div className="order-first lg:order-last">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYXBwJTIwYWdyaWN1bHR1cmUlMjB2ZXJ0aWNhbCUyMGZhcm1pbmclMjBjb250cm9sfGVufDF8fHx8MTc1OTE1ODUwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Controle da horta via smartphone"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Comunidade e feedback */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src={socialFeedbackImage}
                alt="Feedback da comunidade nas redes sociais"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
                Compartilhe suas conquistas
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Faça parte de uma comunidade crescente de cultivadores urbanos. Compartilhe suas colheitas, 
                receba dicas de outros usuários e inspire mais pessoas a cultivarem alimentos frescos e nutritivos.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">👥</span>
                  <span className="text-lg text-gray-700">Comunidade ativa de cultivadores</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📸</span>
                  <span className="text-lg text-gray-700">Compartilhe suas colheitas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💡</span>
                  <span className="text-lg text-gray-700">Troque experiências e dicas</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}