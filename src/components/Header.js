import React from 'react'
import Image from "next/image"

import classes from "../../styles/Header.module.css"
import {  Grid, Typography} from '@mui/material'



import header from "../../public/head.png"

const Header = () => {
  return (
    <div className={classes.header} 
    >
      <Grid container  justifyContent="center">
       <Grid item sm={10} md={6}>
        <Typography sx={{
          paddingTop:"5rem",
          fontSize:"45px",
          fontWeight:"bold",
          color:"#0D2240",
          '@media(maxWidth: 580px)' : {
            paddingTop:"1.8rem",
            fontSize:"25px",
          }
        }}>
          CONSTRUCT WITH A <br/>DIFFERENCE
        </Typography>
       </Grid>
       <Grid item sm={10} md={4}>
        <div className={classes.image}>
        <Image src={header} alt="header"/>
        </div>
      
       </Grid>
      </Grid>
     <Typography sx={{
      display:"flex",
      justifyContent:"center",
     fontWeight:"bold",
      margin:"1rem 15rem ",
       fontSize:"25px",
       color:"#0D2240",
      
     }}>
 Malunjwa Construction Puts The Focus On Exceptional Services
     </Typography>
    
    </div>
  )
}

export default Header