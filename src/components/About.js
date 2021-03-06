import BioPic from "./images/bioPic.jpg";
const About = () => {
  return (
    <div className="about">
      <h2>I'm Reginald Mace....</h2>

      <div>
        <img className="profile-pic" src={BioPic} alt="bio-picture" />
      </div>
      <div>
        <p className="bio-desc">
          I am a 22 year Army Veteran making the transition from Soldier to a
          new career as full stack web developer. I am currently working as
          software project lead for a DoD program. I am interested in creating
          things and solving problems. I have sought ways to improve existing
          skills and develop new skills by any means available that will
          accommodate a busy schedule. I am a proud father and grandfather. I am
          originally from Charleston SC. I like listening to music and staying
          fit, which I find gets harder to do as you get older! Below is a
          sample of the work that I've done while a student at John Hopkins Full
          Stack BootCamp. Please take a look!
        </p>
      </div>
    </div>
  );
};

export default About;
