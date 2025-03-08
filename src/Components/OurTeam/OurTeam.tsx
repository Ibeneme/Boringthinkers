import React, { useEffect, useRef } from "react";
import "./OurTeam.css"; // Import the CSS file for styling

import ibenemeImage from "../../assets/images/team/me.jpeg";
//import wilsonImage from "../../assets/images/team/mudi.jpg";
import reevesImage from "../../assets/images/team/reeves.jpg";
import ernestImage from "../../assets/images/team/ernest.png";
//import bonaventureImage from "../../assets/images/team/me.jpeg";

const teamMembers = [
  {
    name: "Ibeneme",
    title: "Founder/CEO & Software Developer",
    bio: "Ibeneme Ikenna is the Founder and CEO of Boring Thinkers Limited, a software developer with over 5 years of experience specializing in Fullstack MERN (MongoDB, Express, React, Node.js), Rust, and React Native. He has a passion for building scalable applications and empowering others through technology.",
    image: ibenemeImage, // Replace with the actual image variable or path
    twitter: "https://x.com/Ibeneme_Ikenna", // Twitter URL for Ibeneme
  },
  {
    name: "Divine",
    title: "Top Brand & Graphics Designer | UI/UX Designer",
    bio: "Divine is a seasoned Brand and Graphics Designer with over 4 years of experience in creating impactful visual identities. He also brings 2 years of expertise in UI/UX design, blending design aesthetics with user-centric functionality. His work combines creativity with technology to deliver stunning, user-friendly designs.",
    image: ibenemeImage, // Replace with the actual image variable or path
    twitter: "https://x.com/madebymudi", // Twitter URL for Wilson
  },
  {
    name: "Reeves",
    title: "Python Developer | Backend Developer | Cloud Developer Lead",
    bio: "Reeves is a highly skilled Python Developer with strong expertise in backend development and cloud architecture. With a solid foundation in building scalable and efficient systems, he has taken the lead in numerous cloud projects and served as a key technical leader in the development team. He excels in creating robust backend infrastructures and optimizing cloud solutions.",
    image: reevesImage, // Replace with the actual image variable or path
  },
  {
    name: "Ernest",
    title: "Fullstack Developer | MERN Stack Specialist",
    bio: "Ernest is a skilled Fullstack Developer with 3 years of experience specializing in the MERN stack (MongoDB, Express, React, Node.js). He is passionate about building modern, efficient web applications and has a strong foundation in both frontend and backend technologies. Ernest thrives in fast-paced environments, constantly learning new technologies and frameworks to improve his skills.",
    image: ernestImage, // Replace with the actual image variable or path
  },
  //   {
  //     name: "Bonaventure",
  //     title: "Fullstack Developer | Flutter Specialist",
  //     bio: "Bonaventure is a Fullstack Developer with expertise in building robust web and mobile applications. With a strong focus on React Native, he is a seasoned React Native Developer with extensive experience in developing high-performance, cross-platform mobile apps. Bonaventure is dedicated to delivering seamless and engaging user experiences in both web and mobile spaces.",
  //     image: bonaventureImage, // Replace with the actual image variable or path
  //   },
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
                  View Twitter
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
