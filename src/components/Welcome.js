import React from 'react'
import Image from "next/image"

import classes from "../../styles/Header.module.css"
import { Grid, Typography,List, ListItem} from '@mui/material'


import databse from "../../public/img3.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow";



const Welcome = () => {
  return (
    <div>
         <Grid>
         <Typography variant="h3" component="h3" className={classes.welcome_header}>
           COMMECIAL/INDUSTRIAL AND RESIDENSIAL SERVICES AND LOBOUR HIRE
      </Typography>
      <Typography variant="h3" component="h3" className={classes.main_para1}>
          Whether you are considering of sourcing materials, services or goods,
           or a significant structural alteration, extending or refurbishing a property, 
           a planned maintenance schedule or a reactive call out, we have the people and
            processes in place to ensure that every project is 
          completed expertly, efficiently and to your satisfaction. <br/><br/>
          M&C, also collaborate with a number of specialists, such as qualified structural engineers, architects, building surveyors, designers, electricians, plumbers, gas installers and many others to ensure all your needs are met. We cover all critical aspects of the project delivery from conception to completion, including objective setting, feasibility studies, planning, design development, construction, builders work, mechanical and electrical services, commissioning, aftercare and on-going facilities management and maintenance.
      </Typography>
        <Typography
          variant="h4"
          justifyContent="center"
          component="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            width: "center",
            paddingTop: "5rem",
            paddingBottom: "3rem",
          }}
        >
          Welcome to Malunjwa is a registered <br /> electrical contracting
          company.
        </Typography>
      </Grid>
      <Grid container spacing={2} justifyContent="center"
      sx={{
        paddingBottom:"4rem"
      }}>
        <Grid item sm={8} md={5}>
          <Image src={databse} alt="banner" />
        </Grid>
        <Grid item sm={10} md={5}>
          <Typography
            variant="h4"
            component="h4"
            sx={{
              paddingLeft: "5rem",
              display: "flex",
              width: "center",
              fontSize: "19px",
              paddingBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            WHY CHOOSING MALUNJWA FOR YOUR <br /> BUSINESS
          </Typography>
          <List
            sx={{
              paddingLeft: "5rem",
            }}
          >
            <ListItem>
              <AccessTimeIcon
                sx={{
                  color: "#FF8F56",
                  fontSize: "40px",
                  paddingRight: "1rem",
                }}
              />
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                Time efficient{" "}
              </Typography>
            </ListItem>
            <ListItem>
              <AnalyticsIcon
                sx={{
                  color: "#FF8F56",
                  fontSize: "40px",
                  paddingRight: "1rem",
                }}
              />
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                Experienced
              </Typography>
            </ListItem>
            <ListItem>
              <BrightnessLowIcon
                sx={{
                  color: "#FF8F56",
                  fontSize: "40px",
                  paddingRight: "1rem",
                }}
              />
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                Competitive pricing
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  )
}

export default Welcome