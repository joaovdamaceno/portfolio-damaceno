export default function MainSection() {
  return (
    <section id="home" className="flex flex-col justify-end h-[80vh] md:h-[80vh] p-12 pb-24">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="text-center md:text-left">
          <h1 className="text-4xl">Olá, me chamo</h1>
          <h2 className="text-5xl md:text-9xl font-bold mt-2 whitespace-normal md:whitespace-nowrap">João Vitor</h2>
          <h3 className="text-3xl md:text-7xl font-bold mt-1">Designer Gráfico</h3>
          <p className="text-xl md:text-4xl mt-4">Social media e websites.</p>
        </div>
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <img src="/images/logo-portfolio.png" alt="Logo" className="w-2/3 md:w-5/12 object-cover" />
        </div>
      </div>
    </section>
  );
}
