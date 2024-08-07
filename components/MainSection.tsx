export default function MainSection() {
  return (
    <section id="home" className="flex flex-col justify-end h-[80vh] p-12 pb-24">
      <div className="flex justify-between items-center w-full">
        <div>
          <h1 className="text-4xl">Olá! Eu me chamo</h1>
          <h2 className="text-9xl font-bold mt-1 whitespace-nowrap">João Vitor</h2>
          <h3 className="text-7xl font-bold mt-1">Designer Gráfico</h3>
          <p className="text-4xl mt-4">Social media e websites.</p>
        </div>
        <div className="flex justify-end">
          <img src="/images/logo-portfolio.png" alt="Logo" className="w-5/12 object-cover" />
        </div>
      </div>
    </section>
  );
}
