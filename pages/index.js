import Image from "next/image";
import classes from "../styles/Home.module.css";
import {Button, Typography, Grid } from "@mui/material";
import Navbar from "../src/components/Navbar";
import Vision from "../src/components/Vision";
import Footer from "../src/components/Footer";
import Link from "next/link"
import services2 from "../public/serviceTwo.jpg";
import Welcome from "../src/components/Welcome";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Provider from "../src/components/Provider";
import Head from "next/head"


export default function Home() {
  
  return (
    <section>
       <Head>
        <title>Malunjwa Construction</title>
        <meta
          name='Your best Constraction company'
          content='malunjwa contraction company'
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={classes.main_service}>
        <div className={classes.image_container}>
          <Image src={services2} layout="fill" className={classes.image} />
        </div>
        <div className={classes.content}>
          <Typography
            variant="h5"
            component="h5"
           className={classes.main_h1}
          >
            Construction Services
          </Typography>
          <Typography
            variant="p5"
            component="p5"
            sx={{
              display: "flex",
              justifyContent: "flexStart",
              maxWidth: "590px",
              padding: ".8rem .4rem",
              color: "#D79016",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Malunjwa  Construction is the best when it comes to latest
            tending building and renovation solutions and we offer these
            services to Large businesses, small businesses, and individuals.
          </Typography>
          <Button variant="contained" endIcon={<ArrowRightAltIcon sx={{
            color:"#0D2240",
            width:"3rem",
            transition:".6s ease",
            "&:hover":{
              backgroundColor:" #0D2240",
            color:"#D79016",
            }
          

          }}/>} sx={{
            backgroundColor:"#D79016",
            color:"#0D2240",
            padding:"16px 29px",
            fontSize:"18px",
            marginTop:"1rem",
            transition:".6s ease",
            "&:hover":{
              backgroundColor:" #0D2240",
            color:"#D79016",
            }
          }}><Link href="/contact" >Contact Us Now</Link> </Button>
        </div>
      </div>
       
       <Welcome />
       <Vision/> 

      <Provider/>  
     <Footer/>
    </section>
  );
}
