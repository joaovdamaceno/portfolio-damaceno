export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-white relative">
      <div className="text-2xl font-bold">
        meu portfólio 2024
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-3">
        <div className="w-2 h-2 bg-black rounded-full"></div>
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
      </div>
      <nav className="space-x-6">
        <a href="#projects" className="">projetos</a>
        <a href="#contact" className="">contato</a>
      </nav>
    </header>
  );
}
