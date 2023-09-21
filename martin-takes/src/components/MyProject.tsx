import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import campu from "../assets/campuzonesign.png";
import Fick from "../assets/Fickle.png";
import Prelo from "../assets/prelo.png";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));
export const MyProject = () => {

    const data = [
        {   letter:"C",
            name:"CAMPUZONE",
            date:"ReactJs, Typescript, MUI",
            image:campu,
            content:"Campuzone is completely related to education management system. Campuzone enables institutes to automate and simplify all regular activities such as curriculum management, attendance records, administrative tasks, information handling, fee management, and assignments. School ERP software is a robust, time-tested educational ERP system with advanced modules that enable teachers and educators to digitize educational institutions' regular work processes."
        },
        {letter:"F",
            name:"FICKLE",
            date:"ReactJs, Typescript, MUI",
            image:Fick,
            content:"About the Fickle Project, This is one of the website builders, for example, if anyone needs a new website. They will create their own website using fickle without any technical knowledge."
        },
        {letter:"P",
            name:"PRELO",
            date:"ReactJs, Typescript, NextUI",
            image:Prelo,
            content:"This is a LOFI music player where new lofi songs will be added to the player by LOFI ARTISTS and the users can listen with additional effects like rain,forest , storm"
        },
    ]
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mt-5 ">
      <div className="text-center mb-4">
        <h4
          style={{
            fontFamily: "Gloock",
            fontSize: "32px",
            fontWeight: "600",
            color: "#C6C1FF"
          }}
        >
          Projects
        </h4>
      </div>
      <div className="d-flex ">
        {data.map((item,index)=>(
        <Card key={index} className="mx-3" sx={{ maxWidth: 345, background: "#000", color: "#FDA3FF" }}>
          <CardHeader  sx={{color: "#FDA3FF", "& .css-83ijpv-MuiTypography-root":{
            color:"#FDA3FF"
          } }}
            avatar={
              <Avatar sx={{ bgcolor: "#FDA3FF"}} aria-label="recipe">
                {item.letter}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={item.name}
            subheader={item.date}
          />
          <CardMedia component="img" height="194" image={item.image} />
         
          <CardActions disableSpacing>
            
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon color="secondary" />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography sx={{color:"#C6C1FF"}} paragraph>
               {item.content}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        ))}
      </div>
    </div>
  );
};
