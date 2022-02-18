import "./Passion.css";
import gym from "./gym.jpg";
import rm from "./real-madrid-img.jpg";

const Passion = () => {
  return (
    <div className="passion-bg">
      <div className="passion-header">Passion</div>
      <div className="passion-main">
        <div className="gym-ctn">
          <div className="gym-img">
            <img src={gym} alt="gym-img"></img>
          </div>
          <div className="gym-desc-ctn">
            <div className="gym-title">Fitness</div>
            <div className="gym-desc">
              <span>
                I've just started going to the gym 1 year ago because I was a
                little bit over-weighted at that time. But I accidentally found
                out that fitness is one of my greatest passion. I realize that
                better health can improve my productivity and my mental health.
                I love scheduling my training days and my cutting diet. Because
                it makes me feel my daily routine is more productive.
              </span>
              <br></br>
              <br></br>
              <span>
                If you want to go to the gym with me, just contact me!
              </span>
            </div>
          </div>
        </div>
        <div className="rm-ctn">
          <div className="rm-img">
            <img src={rm} alt="rm-img"></img>
          </div>
          <div className="rm-desc-ctn">
            <div className="rm-title">Real Madrid</div>
            <div className="rm-desc">
              <span>
                The very first time I watched a Real Madrid match was in 2017.
                From then, I've followed and watched every single match of them.
                With 13 Champion League sups, 34 LaLiga cups, and other
                trophies, Los Blancos is and always is the best football club in
                the world. My model football player is Marcelo Vieira. He's one
                of the best wing-backs in the world.
              </span>
              <br></br>
              <br></br>
              <span>
                My model football player is Marcelo Vieira. He's one of the best
                wing-backs in the world.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passion;
