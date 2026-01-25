import ExperienceCard from '../ui/ExperienceCard';

type Experience = {
  logo: string;
  title: string;
  startDate: string;
  endDate: string;
  address: string;
  activities: string[];
  technologies: string[];
  color: string;
};

const experiences: Experience[] = [
  {
    logo: '/tata.png',
    title: 'Full Stack Developer',
    startDate: 'May 2022',
    endDate: 'Present',
    address: 'Tata Consultancy Services, Mumbai, Índia',
    activities: [
      'Worked on internal applications based on AI and LLMs systems',
      'Implementing efficiency improvement projects based on AI technologies',
      'Developing systems to integrate LLMs with business applications',
      'Collaborating with cross-functional teams to deploy internal AI solutions',
    ],
    technologies: ['Langflow', 'Langgraph', 'DeepAgentes', 'Python', 'Next.js'],
    color: '#ff1dce'
  },
  {
    logo: '/exago.jpg',
    title: 'Full Stack Developer',
    startDate: 'May 2022',
    endDate: 'Aug 2025',
    address: 'Exago, São José dos Campos, SP',
    activities: [
      'Worked on multiple web application projects as a Full Stack Developer',
      'Implemented new features and improvements',
      'Troubleshot issues and fixed bugs',
      'Reviewed code and maintained code quality',
      'Distributed tasks and helped other developers'
    ],
    technologies: ['React', 'Java', 'JavaScript', 'TypeScript', '.NET', 'Laravel'],
    color: '#ff1dce'
  },
  {
    logo: '/LogSmart.jpg',
    title: 'Full Stack Developer',
    startDate: 'Jan 2022',
    endDate: 'May 2022',
    address: 'Log Smart, São José dos Campos, SP',
    activities: [
      'Worked as a Full Stack Developer using PHP and Laravel',
      'Defined scope and requirements for tasks',
      'Performed code reviews to ensure quality',
      'Assisted developers and the Customer Support team',
      'Developed fixes and new core features for the system'
    ],
    technologies: ['PHP', 'Laravel', 'OracleSQL'],
    color: '#ff1dce'
  },
  {
    logo: '/LogSmart.jpg',
    title: 'Junior Developer',
    startDate: 'Jun 2021',
    endDate: 'Jan 2022',
    address: 'Log Smart, São José dos Campos, SP',
    activities: [
      'Worked as a Junior Full Stack Developer using PHP and Laravel',
      'Supported other developers and the Customer Support team',
      'Developed bug fixes and improvements',
      'Built and delivered new features for the system'
    ],
    technologies: ['PHP', 'Laravel', 'OracleSQL'],
    color: '#ff1dce'
  },
  {
    logo: '/LogSmart.jpg',
    title: 'Internship',
    startDate: 'Feb 2021',
    endDate: 'Jun 2021',
    address: 'Log Smart, São José dos Campos, SP',
    activities: [
      'Worked with a logistics-focused WMS using Laravel (PHP)',
      'Provided customer support for system users',
      'Fixed bugs and issues in the platform',
      'Developed basic features for the system'
    ],
    technologies: ['PHP', 'Laravel', 'OracleSQL'],
    color: '#ff1dce'
  }
];

export default function Experiences() {
  return (
    <div
      className="w-full h-full flex flex-col items-center p-8 pt-28 pb-16 relative overflow-y-auto"
      style={{
        background: 'linear-gradient(135deg, #ff1dce15 0%, transparent 50%), linear-gradient(315deg, #ff1dce15 0%, transparent 50%), #0d1324b3',
        color: '#EAF2FF'
      }}
    >
      {/* Title and Subtitle */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#EAF2FF' }}>
          Experiences
        </h2>
        <p className="text-lg md:text-xl" style={{ color: '#999' }}>
          Explore my professional journey and experiences
        </p>
      </div>

      {/* Experience Cards */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            logo={exp.logo}
            title={exp.title}
            startDate={exp.startDate}
            endDate={exp.endDate}
            address={exp.address}
            activities={exp.activities}
            technologies={exp.technologies}
            color={exp.color}
          />
        ))}
      </div>
    </div>
  );
}
