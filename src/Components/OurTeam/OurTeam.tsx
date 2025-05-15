import React, { useEffect, useRef } from "react";
import "./OurTeam.css"; // Import the CSS file for styling

import ibenemeImage from "../../assets/images/team/me.jpeg";
import divineImage from "../../assets/images/team/divine.jpg";
//import main from "../../assets/images/main.jpg";
import reevesImage from "../../assets/images/team/reeves.jpg";
import ernestImage from "../../assets/images/team/ernest.png";
//import bonaventureImage from "../../assets/images/team/me.jpeg";
import wilson from "../../assets/images/team/mudi.jpg";
const teamMembers = [
  {
    name: "Ibeneme Ikenna",
    title: "Founder/CEO & Software Developer || Mobile App Develop",
    bio: "Ibeneme Ikenna is the Founder and CEO of Boring Thinkers Limited, a software developer with over 5 years of experience specializing in Mobile applications as well as Fullstack MERN (MongoDB, Express, React, Node.js) websites and applications in React Native. He has a passion for building scalable applications and empowering others through technology.",
    image: ibenemeImage, // Replace with the actual image variable or path
    twitter: "https://x.com/Ibeneme_Ikenna", // Twitter URL for Ibeneme
  },

  {
    twitter: "https://www.linkedin.com/in/reeves-akwa-97ab5b165/",
    name: "Reeves Akwa",
    title:
      "Co-Founder | Python Developer | Backend Developer | Cloud Developer Lead",
    bio: "Reeves is a highly skilled Python Developer with strong expertise in backend development and cloud architecture. With a solid foundation in building scalable and efficient systems, he has taken the lead in numerous cloud projects and served as a key technical leader in the development team. He excels in creating robust backend infrastructures and optimizing cloud solutions.",
    image: reevesImage, // Replace with the actual image variable or path
  },
  {
    name: "Wilson Ofiavwe",
    title: "Sales and Marketing Specialist",
    bio: "Wilson Ofiavwe is an accomplished Sales and Marketing Specialist with over 4 years of experience in crafting compelling brand identities and driving impactful marketing strategies. His expertise spans across both creative design and marketing, blending innovative visuals with data-driven strategies to elevate brand presence. With an additional 2 years of experience in UI/UX design, Wilson focuses on user-centric design while ensuring that his work not only stands out but also resonates with target audiences for maximum engagement and growth.",
    image: wilson, // Replace with the actual image variable or path
    twitter: "https://x.com/madebymudi", // Twitter URL for Wilson
  },
  {
    name: "Ernest Nwankwo",
    title: "Fullstack Developer | MERN Stack Specialist",
    bio: "Ernest is a skilled Fullstack Developer with 3 years of experience specializing in the MERN stack (MongoDB, Express, React, Node.js). He is passionate about building modern, efficient web applications and has a strong foundation in both frontend and backend technologies. Ernest thrives in fast-paced environments, constantly learning new technologies and frameworks to improve his skills.",
    image: ernestImage, // Replace with the actual image variable or path
  },
  {
    name: "Divine Chibueze",
    title: "Top Brand & Graphics Designer | UI/UX Designer",
    bio: "Divine is a seasoned Brand and Graphics Designer with over 4 years of experience in creating impactful visual identities. He also brings 2 years of expertise in UI/UX design, blending design aesthetics with user-centric functionality. His work combines creativity with technology to deliver stunning, user-friendly designs.",
    image: divineImage, // Replace with the actual image variable or path
    twitter: "https://www.behance.net/divinechibueze", // Twitter URL for Wilson
  },
  // {
  //   name: "Divine Chris-Korie",
  //   title: "Top UI Designer & AI Prompt Engineer",
  //   bio: "Divine is a seasoned Brand and Graphics Designer with over 4 years of experience in creating impactful visual identities. He also brings 2 years of expertise in UI/UX design and AI Prompt Engineering, seamlessly blending design aesthetics with user-centric functionality and cutting-edge AI technologies. His work combines creativity, design thinking, and AI-driven solutions to deliver stunning, user-friendly designs that enhance interaction with intelligent systems.",
  //   image: main, 
  //   twitter: "https://www.behance.net/divinechibueze", // Twitter URL for Wilson
  // },
];

const OurTeam: React.FC = () => {
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-content");
          } else {
            entry.target.classList.remove("show-content");
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the item is in view
    );

    overlayRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      overlayRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="our-team">
      <h2 className="section-header-teams">Our Team</h2>
      <p className="section-paragraph-teams">Profiles of Key Team Members</p>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div
            className="team-member"
            key={index}
            // ref={(el) => (overlayRefs.current[index] = el)}
          >
            <div className="team-member-image">
              <img src={member.image} alt={member.name} />
              <div className="team-member-bio">
                <p>{member.bio}</p>
              </div>
            </div>
            <div className="team-member-info">
              <h3>{member.name}</h3>
              <p>{member.title}</p>

              {member.twitter && (
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#000",
                    color: "#C4D92E",
                    padding: `4px 12px`,
                  }}
                >
                  Get to Know
                </a>
              )}

              <p>{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default OurTeam;
