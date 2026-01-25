import Image from "next/image";
import { useState } from "react";
import Card from "../ui/Card";

type HomeProps = {
  onMenuClick?: (section: string) => void;
};

export default function Home({ onMenuClick }: HomeProps) {
  const [mainImage, setMainImage] = useState("/guy.png");
  const [smallImage, setSmallImage] = useState("/my-photo.jpg");

  const handleImageSwap = () => {
    const temp = mainImage;
    setMainImage(smallImage);
    setSmallImage(temp);
  };

  return (
    <div
      className="w-full h-full flex flex-col pt-16 relative overflow-y-auto overflow-x-hidden"
      style={{
        background: 'linear-gradient(135deg, #6bff6b15 0%, transparent 50%), linear-gradient(315deg, #6bff6b15 0%, transparent 50%), #0d1324b3',
        color: '#EAF2FF'
      }}
    >
      {/* Top Section - Full Page */}
      <div className="w-full flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-8 sm:py-12 md:py-16 lg:py-20 relative z-10 overflow-visible" style={{ minHeight: '75vh' }}>
        <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 md:gap-12 lg:gap-20 xl:gap-32 overflow-visible max-w-7xl">
          {/* Image */}
          <div className="flex-shrink-0 flex items-center justify-center overflow-visible">
            <div className="relative overflow-visible w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-110 xl:h-110">
              <div className="rounded-full w-full h-full border-4 border-green-400 absolute z-1" />
                <Image
                  src={mainImage}
                  alt="Profile"
                  width={300}
                  height={300}
                  className="w-full h-full object-contain absolute z-2" 
                  style={{ objectPosition: 'center 30%'}}
                />
              <div className="rounded-full w-full h-full border-4 border-green-400 absolute z-3" style={{ clipPath: 'inset(0 0 50% 0)' }}/>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="flex-1 px-4 sm:px-6 md:px-8 lg:px-12 text-center md:text-left max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8" style={{ color: '#EAF2FF' }}>
              Welcome! I'm Erick Hayakawa!
            </h1>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 md:mb-8 lg:mb-10" style={{ color: '#6bff6b' }}>
              Full Stack Developer
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 sm:mb-8 md:mb-10 lg:mb-12" style={{ color: '#EAF2FF' }}>
              Building clean, maintainable web applications. From Development to Deployment and Support.
              Focusing on delivering value through new features, bug fixes, and reliable solutions.
              Always eager to learn and embrace new challenges!
            </p>
            <button
              onClick={() => onMenuClick?.("about")}
              className="inline-block px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 lg:px-12 lg:py-5 rounded-lg font-semibold group text-sm sm:text-base md:text-lg lg:text-xl"
              style={{ 
                border: '2px solid #6bff6b',
                backgroundColor: 'transparent',
                color: '#6bff6b'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#6bff6b';
                e.currentTarget.style.color = '#0d1324';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#6bff6b';
              }}
            >
              Learn More About Me
            </button>
          </div>
        </div>
      </div>

      {/* Gradient separator line */}
      <div className="w-full flex items-center justify-center py-0 relative z-10">
        <div 
          className="w-full h-1 max-w-7xl"
          style={{
            background: 'linear-gradient(to right, transparent, #6bff6b, transparent)',
          }}
        />
      </div>

      {/* Experiences Section - Full Page */}
      <div className="w-full flex flex-col items-center justify-center pr-6 pl-6 md:pr-16 md:pl-16 lg:pr-24 lg:pl-24 relative z-10">
        {/* Main Stats */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-10 w-full max-w-8xl mt-8 md:mt-10 xl:mt-12">
          <div className="flex items-center justify-center gap-2 md:gap-3">
            <svg className="w-6 h-6 md:w-7 md:h-7 xl:w-10 xl:h-10" fill="#6bff6b" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM7 12h5v5H7z"/>
            </svg>
            <p className="text-sm md:text-base xl:text-xl font-bold whitespace-nowrap"><span style={{ color: '#6bff6b' }}>5 years</span> <span style={{ color: '#EAF2FF' }}>Experience</span></p>
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-3">
            <svg className="w-6 h-6 md:w-7 md:h-7 xl:w-10 xl:h-10" fill="#6bff6b" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
            </svg>
            <p className="text-sm md:text-base xl:text-xl font-bold whitespace-nowrap"><span style={{ color: '#6bff6b' }}>Computer Science</span> <span style={{ color: '#EAF2FF' }}>Degree</span></p>
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-3">
            <svg className="w-6 h-6 md:w-7 md:h-7 xl:w-10 xl:h-10" fill="#6bff6b" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
            </svg>
            <p className="text-sm md:text-base xl:text-xl font-bold whitespace-nowrap" style={{ color: '#EAF2FF' }}>Next.js - Node.js - React - TypeScript</p>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12 w-full max-w-4xl">
          <div className="flex-1 h-1" style={{ background: 'linear-gradient(to right, transparent, #6bff6b)' }} />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">Projects</h2>
          <div className="flex-1 h-1" style={{ background: 'linear-gradient(to left, transparent, #6bff6b)' }} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-8xl w-full">
            <Card 
              title="Robotics Team (FRC)"
              company="Brazilian Storm"
              description="Designed and built competition robots for the FIRST Robotics Competition (FRC). Contributed to programming and marketing, including video editing, uniform design, robot fairing, and software development."
              size="large"
              images={[
                "/Brazilian-Storm.jpg",
                "/Brazilian-Storm-2.jpg",
                "/Brazilian-Storm-3.jpg",
                "/Brazilian-Storm-4.jpg"
              ]}
            />
            
            <Card 
              title="Pokemon Card Collector"
              company="Personal Project"
              description="An in-progress web + mobile app to manage a Pokémon card collection anywhere. Main feature: scan a card and identify the correct card and set, even when different sets share the same illustration."
              size="large"
              images={[
                "/pokemon-image.png",
              ]}
              finished={false}
            />
          </div>
      </div>

      {/* Gradient separator line */}
      <div className="w-full flex items-center justify-center py-8 md:py-12 relative z-10">
        <div 
          className="w-full h-1 max-w-7xl"
          style={{
            background: 'linear-gradient(to right, transparent, #6bff6b, transparent)',
          }}
        />
      </div>

      {/* Let's Talk Tech Section */}
      <div className="w-full flex flex-col items-center justify-center pr-6 pl-6 pb-6 md:pr-16 md:pl-16 md:pb-12 lg:pr-24 lg:pl-24 lg:pb-12 relative z-10">
        <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12 w-full max-w-4xl">
          <div className="flex-1 h-1" style={{ background: 'linear-gradient(to right, transparent, #6bff6b)' }} />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">Let's Talk Tech!</h2>
          <div className="flex-1 h-1" style={{ background: 'linear-gradient(to left, transparent, #6bff6b)' }} />
        </div>
        <p className="text-base md:text-lg lg:text-xl text-center max-w-3xl mb-8 md:mb-10" style={{ color: '#EAF2FF' }}>
          I'm always learning and sharing ideas. If you want to chat about web development, projects, or technology in general, send me a message.
        </p>
        <button
          onClick={() => onMenuClick?.("contact")}
          className="inline-block px-8 py-3 md:px-10 md:py-4 lg:px-12 lg:py-5 rounded-lg font-semibold text-base md:text-lg lg:text-xl"
          style={{ 
            border: '2px solid #6bff6b',
            backgroundColor: 'transparent',
            color: '#6bff6b'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#6bff6b';
            e.currentTarget.style.color = '#0d1324';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#6bff6b';
          }}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
}
