import "./style.css";
import AnimatedCursor from "react-animated-cursor";
import "../assets/fonts/font.css";
import Marquee from "react-fast-marquee";
import resume from "../assets/MartinSept1.pdf"
import { MyProject } from "./MyProject";
import { About } from "./About";
import { Request } from "./Contact";
export const HomePage = () => {
  return (
    <>
    <AnimatedCursor
          innerSize={15}
          outerSize={30}
          color='193, 11, 111'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
    
    />
      <section
        className="text-center justify-content-center align-self-center"
        style={{ background: "#000" }}
      >
        <div style={{ padding: "40px" }}>
          <div className=" ">
            <h1 className="title mx-0">
              Hi! <br />
              I’m Martin
              <br /> Frontend Developer..!
            </h1>
            <h4 className="subtitle mx-5">
              while also showcasing my creativity as a Designer.
            </h4>
          </div>
        </div>
        <div className="d-flex">
          <Marquee
            style={{
              background: " #FDA3FF 20.91%",
              padding: "30px",
              fontSize: "32px",
              fontFamily: "Gloock"
            }}
          >
            React Js, Typescript, Redux,
          </Marquee>
          <Marquee
            style={{
              background: "#D1F1FF 40.19%",
              padding: "30px",
              fontSize: "32px",
              fontFamily: "Gloock"
            }}
          >
            Material UI, Next UI, Bootstrap, Tailwind CSS,
          </Marquee>
          <Marquee
            pauseOnHover
            style={{
              background: " #C6C1FF 50.55%",
              padding: "30px",
              fontSize: "32px",
              fontFamily: "Gloock"
            }}
          >
            HTML/CSS, JavaScript,
          </Marquee>
        </div>
      </section>

      <section className="projectsec">
        <MyProject />
      </section>

      <section className="projectsec">
        <About />
      </section>
      <section className="projectsec " >
        <div className="text-center  p-4 ">
          <a href={resume} download="MyExampleDoc" target='_blank'>
            <button
              style={{
                background:
                  "linear-gradient(99deg, #FCD1D1 8.35%, #FDA3FF 20.91%, #D1F1FF 40.19%, #C6C1FF 50.55%)",
                color: "#000",
                border: "none",
                fontWeight:"700"
              }}
              className="btn"
            >
              Download My Resume
            </button>
          </a>
        </div>
      </section>

      <section className="aboutsec">
        <Request />
      </section>
    </>
  );
};
