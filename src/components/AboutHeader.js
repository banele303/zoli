import { Typography} from "@mui/material";
import Image from "next/image";
import React from "react";
 import servicesI from "../../public/serviceOne.jpg";
import classes from "../../styles/AboutH.module.css";


const AboutHeader = () => {
  return (
    <div>
        <div className={classes.image_container}>
          <Image src={servicesI} layout="fill" className={classes.image} />
        </div>
        <div className={classes.content}>
        <Typography variant="h5" component="h5" sx={{
          display:"flex",
          justifyContent:"center",
          width:"100%",
          padding:"2rem 4rem",
          
          color:"#0D2240",
          fontSize:"43px",
          
          fontWeight:"bold"

        }}>
Do You Have A Construction Project We Can Help With?
        </Typography>
        </div>
      

    </div>
  )
}

export default AboutHeader