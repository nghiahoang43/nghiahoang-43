import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import aboutIMG from "./about-img.jpg";
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import MailIcon from "@mui/icons-material/Mail";
import resume from "./Nghia_Hoang_Resume.pdf";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="about-bg" id="about">
      <div data-aos="fade-right" className="about-ctn">
        <div className="about-img">
          <img src={aboutIMG} alt="about-img"></img>
        </div>
        <div className="about-desc">
          <h1>About me</h1>
          <span>Hello, I'm Nghia Hoang. You can call me Marcus as well.</span>
          <br></br>
          <br></br>
          <span>
            I'm currently a second-year Computer Science student at the
            University of Adelaide.
          </span>
          <br></br>
          <br></br>
          <span>
            I've always been passionate about math and programming since I was
            in high school. I enjoy solving problems and creating new things.
            I've taught myself Python and full-stack web development (MERN
            Stack). I always try to learn new technology and implement it until
            I fully understand it. I also have been reading papers about Machine
            Learning.
          </span>
          <br></br>
          <br></br>
          <span>
            For more information:
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              className="contact"
            >
              <Grid item xs={6}>
                <a
                  className="contact-icon resume-icn"
                  href={resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ArticleIcon /> Resume
                </a>
              </Grid>
              <Grid item xs={6}>
                <a
                  className="contact-icon gh-icn"
                  href="https://github.com/nghiahoang43"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon /> GitHub
                </a>
              </Grid>
              <Grid item xs={6}>
                <a
                  className="contact-icon linkedin-icn"
                  href="https://www.linkedin.com/in/nghia-hoang-488637226/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon /> Linkedin
                </a>
              </Grid>
              <Grid item xs={6}>
                <a
                  className="contact-icon gmail-icn"
                  href="mailto: hoangnghia0403@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MailIcon /> Gmail
                </a>
              </Grid>
            </Grid>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
