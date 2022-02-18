import "./Intro.css";
import { useState, useEffect } from "react";
const Intro = () => {
  const [isHidden, setIsHidden] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="intro-bg" id="intro">
      <h1 className={isHidden ? "intro-line hidden" : "intro-line"}>
        <span>H</span>
        <span>i</span>
        <span className="space">,</span>
        <span>I</span>
        <span>'</span>
        <span>m</span>
        <br></br>
        <span>N</span>
        <span>g</span>
        <span>h</span>
        <span>i</span>
        <span className="space">a</span>
        <span>H</span>
        <span>o</span>
        <span>a</span>
        <span>n</span>
        <span>g</span>
        <br></br>
        <div className="welcome-line-ctn">
          <span className="welcome-line">
            <span>Welcome to my website</span>
            <span className="welcome-heart">&#128155;</span>
          </span>
        </div>
      </h1>
    </div>
  );
};

export default Intro;
