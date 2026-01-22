type CardProps = {
  title: string;
  company: string;
  date?: string;
  description: string;
};

export default function Card({ title, company, date, description }: CardProps) {
  return (
    <div 
      className="p-3 rounded-lg border transition-all duration-300 hover:scale-105"
      style={{
        backgroundColor: 'rgba(107, 255, 107, 0.05)',
        borderColor: '#6bff6b50'
      }}
    >
      <h3 className="text-sm font-semibold" style={{ color: '#6bff6b' }}>{title}</h3>
      <p className="text-xs font-medium mt-1" style={{ color: '#EAF2FF' }}>{company}</p>
      {date && <p className="text-xs mt-1" style={{ color: '#999' }}>{date}</p>}
      <p className="text-xs mt-2" style={{ color: '#EAF2FF' }}>
        {description}
      </p>
    </div>
  );
}
