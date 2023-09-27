import "./style.css";

import "../assets/fonts/font.css";
import Marquee from "react-fast-marquee";


import { MyProject } from "./MyProject";
import { About } from "./About";
import { Request } from "./Contact";
export const HomePage = () => {
  return (
    <>
      <section
        className="text-center justify-content-center align-self-center"
        style={{ background: "#000" }}
      >
        <div style={{ padding: "50px" }}>
          <div className=" ">
            <h1 className="title mx-5">
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
      <section>
      <div className="text-center mb-4">
        <h4
          style={{
            fontFamily: "Gloock",
            fontSize: "32px",
            fontWeight: "600",
            color: "#C6C1FF"
          }}
        >
          Download My Resume
        </h4>
      </div>
      </section>

      <section className="aboutsec">
       <Request/>
      </section>
    </>
  );
};
