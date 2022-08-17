import React from "react";
import classes from "./DetailedProjects.module.css";
import Image from "next/image";
import { Grid, Typography } from "@mui/material";

const DetailedProjects = ({
  title,
  image,
  desc1,
  li1,
  li2,
  li3,
  li4,
  li5,
  desc2,
  desc3,
  serv1,
  serv2,
  serv3,
  serv4,
  serv5,
}) => {
  return (
    <div className={classes.detail_page}>
      <div className={classes.image_container}>
        <Image src={image} alt={`${title}`} width={1100} height={500} />
        <Typography
          variant="h5"
          component="h5"
         className={classes.main_header}
        >
          {title}
        </Typography>
      </div>

      <div className={classes.services}>
        <Typography
          variant="h5"
          component="h5"
          className={classes.para1}
        >
          {desc1}
        </Typography>

        <Typography
          variant="h5"
          component="h5"
          sx={{
            display: "flex",
            width: "100%",
           
            color: "black",
            fontSize: "19px",
            fontFamily: "Roboto",
            paddimgTop: "4rem",
          }}
        >
          Our Work Includes
        </Typography>

        <ul className={classes.list}>
          <li>{li1}</li>
          <li>{li2}</li>
          <li>{li3}</li>
          <li>{li4}</li>
          <li>{li5}</li>
        </ul>
      </div>
      <div className={classes.services_items}>
        <Grid container>
          <Grid item md={8} sm={12}>
            <Typography
              variant="h5"
              component="h5"
              sx={{
                display: "flex",
                width: "100%",
                padding: "1rem 0rem",
                color: "black",
                fontSize: "19px",
                fontWeight: "bold",
                fontFamily: "Roboto",
                
              }}
            >
              {desc2}
            </Typography>
            <Typography
              variant="p1"
              component="p1"
              sx={{
                display: "flex",
                width: "100%",
                padding: "1rem 0rem",
                color: "black",
                fontSize: "16px",

                fontFamily: "Roboto",
              }}
            >
              {desc3}
            </Typography>
            <ul className={classes.list2}>
              <li>-{serv1}</li>
              <li>-{serv2}</li>
              <li>-{serv3}</li>
              <li>-{serv4}</li>
              <li>-{serv5}</li>
            </ul>
          </Grid>

          <Grid item md={4} sm={12}>
            <div className={classes.image2}>
            <Image src={image} alt={`${title}`} 
             width="350px"
             height="250px"
             layout="responsive" />
            </div>
            
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DetailedProjects;
