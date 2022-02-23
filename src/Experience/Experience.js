import "./Experience.css";
import Description from "./Description/Description";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import tdl from "./tdl-image.png";
import ef from "./EF-image.png";
import cfm from "./CFM-image.png";
import mm from "./MM-image.png";
import portfolio from "./portfolio-image.png";
import GitHubIcon from "@mui/icons-material/GitHub";

const Experience = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const description = [
    "A website app helps coffee shop staff manage drinks orders and available tables.",
    "An app that users can create their own form with different fields and viewing their forms across different platforms.",
    "A role-playing game based around building a small team of monsters to battle other monsters. These monsters are divided into types, such as earth and fire, …",
    "A responsive web app that helps the user create a list of tasks that need to be completed.",
    "A responsive web app that helps the user create a list of tasks that need to be completed.",
  ];

  const tools = [
    "ReactJS | MongoDB | Node.js",
    "ReactJS | MongoDB | Node.js",
    "C++",
    "ReactJS | MongoDB | Node.js",
    "ReactJS",
  ]

  return (
    <div className="exp-bg" id="exp">
      <div className="project-header">My Projects</div>
      <div className="crs-bg">
        <div className="crs-intro">
          <span>Let's have a look at what I've done!</span>
        </div>
        <Carousel responsive={responsive} className="crs">
          <div className="crs-card">
            <div className="crs-card_img">
              <img src={cfm} alt="first-slide"></img>
            </div>
            <div className="crs-footer">
              <Description desc={description[0]} tool = {tools[0]}></Description>
              <div className="crs-title">Coffee Management</div>
              <div className="github-icn">
                <a
                  className="github-link"
                  href="https://github.com/nghiahoang43/coffeeManagementApp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="crs-card">
            <div className="crs-card_img">
              <img src={ef} alt="second-slide"></img>
            </div>
            <div className="crs-footer">
              <Description desc={description[1]} tool = {tools[1]}></Description>
              <div className="crs-title">Expandable Form</div>
              <div className="github-icn">
                <a
                  className="github-link"
                  href="https://github.com/nghiahoang43/to-do-list"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="crs-card">
            <div className="crs-card_img">
              <img src={mm} alt="third-slide"></img>
            </div>
            <div className="crs-footer">
              <Description desc={description[2]} tool = {tools[2]}></Description>
              <div className="crs-title">MonMon</div>
              <div className="github-icn">
                <a
                  className="github-link"
                  href="https://github.com/nghiahoang43/MonMon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="crs-card">
            <div className="crs-card_img">
              <img src={tdl} alt="third-slide"></img>
            </div>
            <div className="crs-footer">
              <Description desc={description[3]} tool = {tools[3]}></Description>
              <div className="crs-title">To Do List</div>
              <div className="github-icn">
                <a
                  className="github-link"
                  href="https://github.com/nghiahoang43/to-do-list"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="crs-card">
            <div className="crs-card_img">
              <img src={portfolio} alt="third-slide"></img>
            </div>
            <div className="crs-footer">
              <Description desc={description[3]} tool = {tools[4]}></Description>
              <div className="crs-title">My Portfolio</div>
              <div className="github-icn">
                <a
                  className="github-link"
                  href="https://github.com/nghiahoang43/nghiahoang-43"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Experience;
