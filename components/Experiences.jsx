import int2 from "../public/assets/images/iimlogo.png"
import Image from "next/image";
const Experiences = () => {
    const experiences = [
      {
        title: "Student",
        company: "IIM Digital School",
        logo: int2,
        period: "2023 - present",
        description:
          "Experience in designing and developing web and software applications while adopting agile methodologies for effective project management. Ability to design modern architectures, optimize user experience, and ensure application security. Skilled in project management, continuous integration, and collaboration within multidisciplinary teams.",
        skills: [
          "Website Audits & Recommendations",
          "CSS: Responsive Design & Mobile-First Approach",
          "Web Integration with Preprocessors",
          "Frontend Development with Modern Tools",
          "Web Project Architecture: CMS",
          "User Experience (UX) Design",
          "Relational Database Modeling",
          "UI Design",
          "Wireframing & Prototyping",
          "Algorithm Design & Problem Solving",
          "Backend Development with Frameworks",
          "Version Control & Git Workflow",
          "Object-Oriented Architecture",
          "IoT & Connected Device Development",
          "Web Security & Data Protection",
          "Project Management",
          "Testing & Quality Assurance",
          "Full-Stack Project Architecture",
          "Creative Technology & Innovation",
        ],
      },

      {
        title: "Developer Backend",
        company: "Basket Game",
        logo: int2,
        period: "October - December 2024",
        description:
          "Created a responsive website for small businesses, integrating a WooCommerce store with a custom WordPress theme. Developed and implemented a design based on a provided mockup, ensuring seamless user experience and functionality. Collaborated with a multidisciplinary team of developers, designers, and project managers to enhance e-commerce features, optimize performance, and align with client requirements.",
        skills: [
          "PHP",
          "HTML",
          "JavaScript",
          "Wordpress",
          "CSS",
          "Github",
          "Woocommerce",
        ],
      },
    ];
  
    return (
      <section id="experiences" className="experiencesSection">
        <h2 className="green_gradient">Experiences</h2>
        <div className="experiencesContainer">
          {experiences.map((exp, index) => (
            <div key={index} className="experienceItem">
              <div className="logoContainer">
                <Image src={exp.logo} alt={`${exp.company} logo`} className="logo" />
              </div>
              <div className="content">
                <h3 className="red_gradient">{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p className="period">{exp.period}</p>
                <p className="description">{exp.description}</p>
                <div className="skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  export default Experiences;