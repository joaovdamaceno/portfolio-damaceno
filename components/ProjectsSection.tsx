const projects = [
    { src: '/images/art1.png', alt: 'Arte 1', type: 'image' },
    { src: '/videos/art2.mp4', alt: 'Arte 2', type: 'video' },
    { src: '/videos/art3.mp4', alt: 'Arte 3', type: 'video' },
    { src: '/videos/art4.mp4', alt: 'Arte 4', type: 'video' },
    { src: '/images/art5.png', alt: 'Arte 5', type: 'image' },
    { src: '/images/art6.png', alt: 'Arte 6', type: 'image' },
    { src: '/images/art7.png', alt: 'Arte 7', type: 'image' },
    { src: '/images/art8.png', alt: 'Arte 8', type: 'image' },
    { src: '/images/art9.jpg', alt: 'Arte 9', type: 'image' },
    { src: '/images/art10.png', alt: 'Arte 10', type: 'image' },
  ];
  
  export default function ProjectsSection() {
    return (
      <section id="projects" className="py-48 px-8">
        <h2 className="text-4xl font-bold mb-8 text-center" data-aos="fade-up">Meus Projetos</h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="mb-8 break-inside-avoid"
              data-aos="fade-up"
            >
              <div className="transform transition-transform duration-300 hover:scale-105">
                {project.type === 'image' ? (
                  <img
                    src={project.src}
                    alt={project.alt}
                    className="w-full mb-4 object-cover"
                  />
                ) : (
                  <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    className="w-full mb-4 object-cover"
                  >
                    <source src={project.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  