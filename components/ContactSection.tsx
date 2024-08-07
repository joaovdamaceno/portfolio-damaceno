export default function ContactSection() {
    return (
      <section id="contact" className="flex flex-col justify-end h-auto md:h-[48vh] p-12 pb-24 relative">
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 md:bottom-14">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
        </div>
  
        <div className="flex flex-col md:flex-row justify-between items-end w-full">
          <div className="text-center md:text-left">
            <h2 className="text-5xl font-bold mt-2 md:text-6xl">Contato</h2>
            <p className="text-2xl mt-4 md:text-3xl">Entre em contato comigo através das opções abaixo:</p>
            <p className="text-xl font-semibold mt-4 flex justify-center md:justify-start items-center md:text-2xl">
              <img src="/icons/email.svg" alt="E-mail" className="w-8 h-8 mr-2" />
              <a href="mailto:damacenovitorj@gmail.com" className="">damacenovitorj@gmail.com</a>
            </p>
            <p className="text-xl font-semibold mt-3 flex justify-center md:justify-start items-center md:text-2xl">
              <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-8 h-8 mr-2" />
              <a href="https://wa.me/5545933005746" className="">+55 (45) 9 3300-5746</a>
            </p>
          </div>
  
          <div className="flex justify-center md:justify-end mt-8 md:mt-0">
            <img src="/images/contact-portfolio.png" alt="Contato" className="w-2/3 md:w-4/12 object-cover h-auto" />
          </div>
        </div>
  
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm text-gray-600 whitespace-nowrap">
          <p>Site desenvolvido por João Vitor</p>
        </div>
      </section>
    );
  }
  