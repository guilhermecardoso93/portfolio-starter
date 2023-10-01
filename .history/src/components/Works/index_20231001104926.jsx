import "./styles.css";

export function Works() {
  return (
    <div className="works-wrapper">
      <div className="works-left">
        <div className="awesome">
          <span>My Awesome App</span>
          <span>Services</span>
          <span>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printing
          </span>
          <a href={Resume} download>
            <button className="button s-button">Download CV</button>
          </a>
          <div className="blur s-blur1" style={{ background: "#63bcf2" }}></div>
          <div className="blur s-blur2" style={{ background: "#63bcf2" }}></div>
        </div>
      </div>
      <div className="work-right"></div>
    </div>
  );
}
