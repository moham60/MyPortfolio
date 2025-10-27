import dynamic from "next/dynamic";
const Title = dynamic(()=>import("../SectionTiitle/Title"));
const Education=dynamic(()=>import("./EducationCom"));
const educations = [
  {
    degree: "Diploma in Front-End Development (React & Next.js)",
    institution: "Route Academy",
    duration: "September 2023 – March 2024",
    location: "Alexandria, Egypt",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS","Saas","Redux ToolKit","Jquery"],
    description:
      "Completed an intensive diploma focused on building modern, responsive web applications using React and Next.js. Gained strong experience in UI/UX and front-end performance optimization.",
    projects: [
      "E-commerce React Project",
      "Quran App (React)",
      "Personal Portfolio Website",
    ],
  },
  {
    degree: "Full Stack (MERN) Internship",
    institution: "MAIM Company",
    duration: "July 2025 – September 2025",
    location: "Online",
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Full Stack Development",
    ],
    description:
      "Completed a professional internship focused on developing full-stack web applications using the MERN stack. Worked on backend APIs and frontend integration.",
    projects: ["Full Stack Event Management App"],
  },
  {
    degree: "Bachelor’s Degree in Computer and Data Science",
    institution: "Alexandria University",
    duration: "2022 – 2026",
    location: "Alexandria, Egypt",
    skills: ["Data Structures", "Algorithms", "Databases", "Artificial Intelligence"],
    description:
      "Studying core computer science and data science topics including algorithms, machine learning, and software engineering. Working on several academic projects and research tasks.",
    projects: ["PageRank Algorithm Simulation", "Credit Score System"],
  },
];

export default function EducationSection() {
    return (
        <section className=" px-4 py-16  sm:p-16  min-h-screen">
        <Title title={"Education Journey"} />
       
        {educations.map(education => (
            <div className="edu my-6" key={education.degree}>
             <Education  degree={education.degree}
              description={education.description}
              institution={education.institution}
              duration={education.duration}
              location={education.location}
              projects={education.projects}
              skills={education.skills}/>
            </div>
           
          
          ))}
        
    </section>
  );
}