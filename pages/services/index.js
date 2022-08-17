import { Typography} from "@mui/material";
import Image from "next/image";
import Head from "next/head";
import React from "react";
 import servicesI from "../../public/serviceOne.jpg";
import classes from "../../styles/servicess.module.css";
import Navbar from "../../src/components/Navbar";

import Footer from "../../src/components/Footer";
import FormTrue from "../../src/components/FormTrue";
import Projects from "../../src/components/Projects";

import { getAllProjects } from "../../dummy-data.js";

const index = ({events}) => {
  return (
    <div>

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
      <Typography variant="h3" component="h3" className={classes.project_header2}>
           COMMECIAL/INDUSTRIAL AND RESIDENSIAL SERVICES AND LOBOUR HIRE
      </Typography>
      <Typography variant="h3" component="h3" sx={{
          display:"flex",
          justifyContent:"center",
          padding:"2rem 3rem",
          color:"#0D2240",
          fontSize:"17px",
          
          paddingLeft:"2rem"
        }}>
          Whether you are considering of sourcing materials, services or goods,
           or a significant structural alteration, extending or refurbishing a property, 
           a planned maintenance schedule or a reactive call out, we have the people and
            processes in place to ensure that every project is 
          completed expertly, efficiently and to your satisfaction. <br/><br/>
          M&C, also collaborate with a number of specialists, such as qualified structural engineers, architects, building surveyors, designers, electricians, plumbers, gas installers and many others to ensure all your needs are met. We cover all critical aspects of the project delivery from conception to completion, including objective setting, feasibility studies, planning, design development, construction, builders work, mechanical and electrical services, commissioning, aftercare and on-going facilities management and maintenance.
      </Typography>
      
     <Projects projects={events}/>
   <FormTrue/>
     <Footer/>
    </div>
  );

};

export async function getStaticProps() {
  const events = await getAllProjects();

  return {
    props: {
      events: events,
    },
    revalidate: 60
  };
}

export default index;
