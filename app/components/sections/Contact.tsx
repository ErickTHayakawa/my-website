export default function Contact() {
  return (
    <div
      className="w-full h-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 pt-28 pb-16 relative overflow-y-auto"
      style={{
        background: 'linear-gradient(135deg, #3b82f615 0%, transparent 50%), linear-gradient(315deg, #3b82f615 0%, transparent 50%), #0d1324b3',
        color: '#EAF2FF'
      }}
    >
      <div className="relative z-10 max-w-4xl w-full">
        {/* Title and Subtitle */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" style={{ color: '#EAF2FF' }}>
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl" style={{ color: '#3b82f6' }}>
            Let's connect and discuss opportunities
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Email */}
          <a
            href="mailto:hayakawa0508@gmail.com"
            className="flex flex-col items-center p-8 rounded-lg border transition-all hover:scale-105 group"
            style={{
              backgroundColor: 'rgba(59, 130, 246, 0.05)',
              borderColor: '#3b82f6'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.05)';
            }}
          >
            <svg 
              className="w-16 h-16 mb-4" 
              fill="none" 
              stroke="#3b82f6" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#3b82f6' }}>
              Email
            </h3>
            <p className="text-base text-center" style={{ color: '#EAF2FF' }}>
              hayakawa0508@gmail.com
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:+5512991031069"
            className="flex flex-col items-center p-8 rounded-lg border transition-all hover:scale-105 group"
            style={{
              backgroundColor: 'rgba(59, 130, 246, 0.05)',
              borderColor: '#3b82f6'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.05)';
            }}
          >
            <svg 
              className="w-16 h-16 mb-4" 
              fill="none" 
              stroke="#3b82f6" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#3b82f6' }}>
              Phone
            </h3>
            <p className="text-base text-center" style={{ color: '#EAF2FF' }}>
              +55 12 99103-1069
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/erick-hayakawa-338314179/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 rounded-lg border transition-all hover:scale-105 group"
            style={{
              backgroundColor: 'rgba(59, 130, 246, 0.05)',
              borderColor: '#3b82f6'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.05)';
            }}
          >
            <svg 
              className="w-16 h-16 mb-4" 
              fill="#3b82f6" 
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#3b82f6' }}>
              LinkedIn
            </h3>
            <p className="text-base text-center" style={{ color: '#EAF2FF' }}>
              Connect with me
            </p>
          </a>
        </div>

        {/* Additional Message */}
        <div className="text-center mt-12">
          <p className="text-lg" style={{ color: '#EAF2FF' }}>
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>
      </div>
    </div>
  );
}
