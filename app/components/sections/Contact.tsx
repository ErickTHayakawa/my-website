import ParticleBackground from "../effects/ParticleBackground";

export default function Contact() {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center p-8 pt-16 relative"
      style={{
        background: 'linear-gradient(135deg, #3b82f615 0%, transparent 50%), linear-gradient(315deg, #3b82f615 0%, transparent 50%), #0d1324b3',
        color: '#EAF2FF'
      }}
    >
      <ParticleBackground color="59, 130, 246" />
      <div className="relative z-10">
        <h2 className="text-4xl font-semibold mb-4" style={{ color: '#EAF2FF' }}>
          Contact
        </h2>
        <p className="text-xl" style={{ color: '#EAF2FF' }}>
          Get in touch with me
        </p>
      </div>
    </div>
  );
}
