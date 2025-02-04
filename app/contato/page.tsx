import WhatsAppButton from "../components/WhatsApp";

export default function Contato() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 text-gray-900 px-10 py-40">
      <h1 className="text-4xl text-center font-bold text-blue-800 mb-8">
        Entre em Contato
      </h1>
      <div className="bg-white p-12 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-4 bg-blue-50 rounded-lg transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">WhatsApp</h2>
            <a
              href="https://wa.me/553130268850" // Substitua pelo número correto
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
            >
              Conversar no WhatsApp
            </a>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Telefone</h2>
            <a 
              href="tel:+553130268850" 
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              (31) 3026-8850
            </a>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Email</h2>
            <a
              href="mailto:contato@ataspublicasmg.com.br"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              contato@ataspublicasmg.com.br
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
