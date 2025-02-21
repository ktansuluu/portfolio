import React from "react";
import "../styles/Skills.css";

const skillsLeft = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Zustand",
  "Tailwind CSS",
  "Framer Motion",
  "DOM",
  "Module Testing",
  "Performance Optimization",
  "SCSS",
  "TypeScript",
  "Python",
  "C#",
];

const skillsRight = [
  "React Native",
  "Git",
  "GitHub",
  "Linux",
  "WordPress",
  "VPS",
  "Vercel",
  "Node.js",
  ".NET Core",
  "ASP.NET Core",
  "Express.js",
  "REST API",
  "Testing",
  "JWT/OAuth",
  "SQL",
  "PostgreSQL",
  "Prisma ORM",
  "Entity Framework Core",
  "Database Modeling",
  "Stripe Payments",
];

function Skills() {
  return (
    <section>
      <div className="portfolio-container">
        <div className="skills-header">
          <h1 className="portfolio-title">МОИ НАВЫКИ</h1>
          <div className="skills-divider"></div>
        </div>
        <div className="skills-wrapper">
          <div className="skills-column">
            {skillsLeft.map((skill, index) => (
              <span key={index} className="skill-item">
                {skill}
              </span>
            ))}
          </div>
          <div className="skills-column">
            {skillsRight.map((skill, index) => (
              <span key={index} className="skill-item">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
