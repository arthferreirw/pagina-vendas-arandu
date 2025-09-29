import { ImageWithFallback } from './figma/ImageWithFallback';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ana Silva",
      location: "São Paulo, SP",
      rating: 5,
      text: "O Arandu mudou completamente como cuido da minha horta! As notificações no WhatsApp são super práticas e consegui economizar muito água. Recomendo!",
      image: "https://images.unsplash.com/photo-1608229338359-6b4c70e07af7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXQlMjBzbWlsZXxlbnwxfHx8fDE3NTgzMjgyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Carlos Mendes",
      location: "Rio de Janeiro, RJ",
      rating: 5,
      text: "Fantástico! Agora sei exatamente quando regar minhas plantas. O chatbot é muito inteligente e as dicas são certeiras. Minha produtividade aumentou 40%!",
      image: "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHNtaWxlfGVufDF8fHx8MTc1ODMyODIzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Mariana Costa",
      location: "Belo Horizonte, MG",
      rating: 5,
      text: "Simplesmente incrível! Como iniciante na agricultura urbana, o Arandu me guiou em cada passo. Hoje tenho uma horta linda e sustentável.",
      image: "https://images.unsplash.com/photo-1745434159123-4908d0b9df94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMHBlcnNvbiUyMHNtaWxlfGVufDF8fHx8MTc1ODMyODIzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-lg ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ⭐
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              O que nossos usuários dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milhares de agricultores urbanos já transformaram suas hortas com o Arandu. 
              Veja alguns depoimentos reais:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <StarRating rating={testimonial.rating} />
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={`Foto de ${testimonial.name}`}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#27ae60] text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-[#2ecc71] text-white px-6 py-3 rounded-full">
              <span className="text-2xl">⭐</span>
              <span className="font-bold">4.9/5</span>
              <span>• Mais de 500 avaliações</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}