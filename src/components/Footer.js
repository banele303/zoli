import {
  Grid,
  Button,
 
  Typography,
} from "@mui/material";
import React from "react";
import logo from "../../public/Imagelo.png"
import classes from "../../styles/Footer.module.css";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import FaxIcon from "@mui/icons-material/Fax";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Grid container justifyContent="center">
        <Grid item sm={10} md={3} lg={3}>
          <div className={classes.logo}>
            <Image src={logo} alt="imag" />
           
          </div>
        </Grid>
        
        <Grid item sm={10} md={4} lg={4}>
          <div className={classes.links}>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontSize: "22px",
                diplay: "flex",
                textAlign: "center",
                fontWeight: "500",
                cursor: "pointer",
                paddingBottom:"1rem",
                color:"#D79016"
              }}
            >
              Services
            </Typography>
            <Button variant="text" startIcon={<ArrowRightIcon />} sx={{
                color:"#D79016",
                "&:hover":{
                    color:"#F77E21"
                }
            }}>Construction</Button>
            <Button variant="text" startIcon={<ArrowRightIcon />} sx={{
                color:"#D79016",
                "&:hover":{
                    color:"#F77E21"
                }
            }}>Renovation</Button>
            <Button variant="text" startIcon={<ArrowRightIcon />} sx={{
                color:"#D79016",
                "&:hover":{
                    color:"#F77E21"
                }
            }}>Pumps & Valves</Button>
            <Button variant="text" startIcon={<ArrowRightIcon/>} sx={{
                color:"#D79016",
                "&:hover":{
                    color:"#F77E21"
                }
            }}>Street Lights</Button>
            
          </div>
        </Grid>
        <Grid item sm={10} md={4} lg={4}>
          <div className={classes.links}>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontSize: "22px",
                diplay: "flex",
                textAlign: "center",
                fontWeight: "500",
                cursor: "pointer",
                paddingBottom:"1rem",
                color:"#D79016"
              }}
            >
              Contact Us
            </Typography>
            <Button variant="text" startIcon={<EmailIcon />} sx={{
                color:"#D79016",
                "&:hover":{
                    color:"#F77E21"
                }
            }}>malunjwa@gmail.com</Button>
            <Button variant="text" startIcon={<EditLocationIcon />} sx={{
                color:"#D79016",
                "&:hover":{
                    color:"#F77E21"
                }
            }}>43 amanda avenue</Button>
            <Button variant="text" startIcon={<PhoneMissedIcon />} sx={{
                color:"#D79016",
                "&:hover":{
                    color:"#F77E21"
                }
            }}>+27 834 667 675</Button>
            <Button variant="text" startIcon={<FaxIcon />} sx={{
                color:"#D79016",
                "&:hover":{
                    color:"#F77E21"
                }
            }}>+27 884 448 616</Button>
            
          </div>
        </Grid>
      </Grid>
      
      <hr style={{
        color:"#D79016",
      }}/>
      <Typography variant="h1" component="h1" sx={{
        display:"flex",
        justifyContent:"end",
        fontSize:"16px",
        color:"#D79016",
        paddingRight:"4rem",
        paddingBottom:"3rem",
        paddingTop:"2rem",
        paddingLeft:"2rem"
      }}>
      Copyright © 2022 Malunjwa. Developed by Banele Media. All Rights Reserved
      </Typography>
      
     
    </div>
  );
};

export default Footer;
