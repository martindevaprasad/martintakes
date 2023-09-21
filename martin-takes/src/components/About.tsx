
import { Typography } from "@mui/material";
import "../assets/fonts/font.css";
export const About = () => {
  return (
    <div className="text-center p-4 mt-5">
      <h4 style={{fontFamily:"Gloock",fontSize:"32px",fontWeight:"600",color:"#C6C1FF"}}>About Me</h4>
      <Typography style={{fontSize:"20px",color:"#B9B9B9"}}>
        I am a ReactJs Developer . My primary focus will be on developing user
        interface components and implementing them following well-known React.js
        workflows (such as Flux or Redux). I will ensure that these components
        and the overall application are robust and easy to maintain. I will
        coordinate with the rest of the team working on different layers of the
        infrastructure. Therefore, a commitment to collaborative problem
        solving, sophisticated design, and quality product is important.
      </Typography>
    </div>
  );
};
