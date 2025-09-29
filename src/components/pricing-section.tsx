import { Card } from './ui/card';

export function PricingSection() {
  const plans = [
    {
      name: "Simples",
      description: "Para quem está começando",
      price: "R$ 299",
      period: "pagamento único",
      features: [
        "Câmara de Crescimento completa",
        "Manual de cultivo básico",
        "Suporte via WhatsApp",
        "Garantia de 1 ano"
      ],
      popular: false,
      buttonText: "Começar agora",
      color: "border-gray-200"
    },
    {
      name: "Plus",
      description: "Mais conveniência no cultivo",
      price: "R$ 399",
      period: "+ R$ 49/mês",
      features: [
        "Câmara de Crescimento completa",
        "Reposição mensal de insumos",
        "Sementes premium selecionadas",
        "Nutrientes balanceados",
        "Suporte prioritário"
      ],
      popular: true,
      buttonText: "Mais popular",
      color: "border-[#2ecc71]"
    },
    {
      name: "Premium",
      description: "Experiência completa com IA",
      price: "R$ 599",
      period: "| R$ 99/mês",
      features: [
        "Câmara de Crescimento completa",
        "Reposição mensal de insumos",
        "Assistente de IA Inteligente",
        "Monitoramento 24/7",
        "Dicas personalizadas em tempo real",
        "Análise preditiva de crescimento",
        "Suporte VIP"
      ],
      popular: false,
      buttonText: "Experiência completa",
      color: "border-gray-200"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Escolha seu plano de cultivo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comece sua jornada na agricultura urbana com a solução ideal para você
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${plan.color} ${plan.popular ? 'ring-2 ring-[#2ecc71] scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#2ecc71] text-white px-4 py-2 rounded-full text-sm font-bold">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-800">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-[#2ecc71] rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href={`https://wa.me/556293051961?text=Olá! Tenho interesse no plano ${plan.name} do sistema Arandu. Gostaria de saber mais informações e valores!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-center ${
                    plan.popular 
                      ? 'bg-[#2ecc71] hover:bg-[#27ae60] text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  {plan.buttonText}
                </a>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              🚛 Frete grátis para todo o Brasil | 🔄 30 dias para devolução | 🛡️ Garantia total
            </p>
            <p className="text-sm text-gray-500">
              * Assinatura mensal pode ser cancelada a qualquer momento
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}