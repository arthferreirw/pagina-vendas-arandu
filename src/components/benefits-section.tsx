export function BenefitsSection() {
  const benefits = [
    {
      icon: "🤖",
      title: "Automatização completa",
      description: "Controle de luz, solução nutritiva, umidade e temperatura sem esforço."
    },
    {
      icon: "🎮",
      title: "Produção gamificada", 
      description: "Acompanhe sua horta com um gêmeo virtual e receba apoio de um agente de IA em tempo real."
    },
    {
      icon: "🥗",
      title: "Mais saúde todos os dias",
      description: "Microverdes até 40x mais nutritivos na sua mesa."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              🚀 Cultive, jogue e se alimente melhor – tudo em um só sistema
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforme seu cultivo em uma experiência inteligente, divertida e altamente nutritiva
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-6xl mb-6 text-center">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}