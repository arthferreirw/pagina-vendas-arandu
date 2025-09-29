import { useState } from 'react';

export function CaptureForm() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'whatsapp') {
      // Máscara para WhatsApp (XX) XXXXX-XXXX
      const cleaned = value.replace(/\D/g, '');
      const formatted = cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      setFormData(prev => ({ ...prev, [name]: formatted }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria integrada a lógica de envio do formulário
    console.log('Form submitted:', formData);
    alert('Obrigado! Entraremos em contato em breve.');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Pronto para cultivar melhor?
            </h2>
            <p className="text-xl text-gray-600">
              Deixe seus dados e nossa equipe entrará em contato para apresentar a solução ideal para você
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ecc71] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="whatsapp" className="block text-gray-700 mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  placeholder="(11) 99999-9999"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ecc71] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#2ecc71] text-white py-4 rounded-lg hover:bg-[#27ae60] transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              >
                💬 Quero conversar com um especialista
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}