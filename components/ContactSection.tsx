export default function ContactSection() {
    return (
        <section id="contact" className="flex flex-col justify-end h-[60vh] p-12 pb-24 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                </div>
                <div className="flex justify-between w-full">
                <div className="text-left">
                <h2 className="text-6xl font-bold mt-[54px]">Contato</h2>
                <p className="text-2xl font-semibold mt-4">Entre em contato através do e-mail ou WhatsApp:</p>
                <p className="text-2xl mt-4 flex items-center">
                    <img src="/icons/email.svg" alt="E-mail" className="w-8 h-8 mr-2" />
                    <a href="mailto:damacenovitorj@gmail.com" className="ml-2">damacenovitorj@gmail.com</a>
                </p>
                <p className="text-2xl mt-4 flex items-center">
                    <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-8 h-8 mr-2" />
                    <a href="https://wa.me/5545933005746" className="ml-2">+55 (45) 9 3300-5746</a>
                </p>
                </div>

                <div className="flex justify-end">
                <img src="/images/contact-portfolio.png" alt="Contato" className="w-4/12 object-cover h-auto"/>
                </div>
            </div>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-sm text-gray-600">
            <p>Site desenvolvido por João Vitor</p>
            </div>
        </section>
  );
}