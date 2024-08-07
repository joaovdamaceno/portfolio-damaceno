export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-6 bg-white">
      <div className="text-2xl font-bold">
        meu portfólio 2024
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-3 top-52 md:top-10">
        <div className="w-2 h-2 bg-black rounded-full"></div>
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
      </div>
      <nav className="space-x-6 mt-4 md:mt-0">
        <a href="#projects" className="">Projetos</a>
        <a href="#contact" className="">Contato</a>
      </nav>
    </header>
  );
}
