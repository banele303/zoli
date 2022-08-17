import { Grid, ListItem, Paper } from '@mui/material'
import React from 'react'

import Image from "next/image";
import { Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const ServiceThree = ({work, desc1, desc2,desc3,  title}) => {
  return (
    <div className='service_two'>
        <Image src={work} alt="img" className="small_icons"/>
        <Typography variant="h3" component="h3" sx={{
          
          padding:".6rem .3rem",
          color:"#0D2240",
          fontSize:"23px",
          fontWeight:"bold",
          
        }}>
          {title}
      </Typography>
        <Grid container sx={{
          display:"flex",
          flexDirection:"column",
        }}>
          <Grid item>
          <CheckIcon sx={{
             color:"#D79016",
             paddingTop:"13px",
             "&hover":{
             }
           }}/><Typography variant="p3" component="p3">{desc1}</Typography>
          </Grid>
          
        <Grid>
        <CheckIcon sx={{
             color:"#D79016",
             paddingTop:"13px",
             "&hover":{
             }
           }}/><Typography variant="p3" component="p3">{desc2}</Typography>
         
        </Grid>
        <Grid>
        <CheckIcon sx={{
             color:"#D79016",
             paddingTop:"13px",
             "&hover":{
             }
           }}/><Typography variant="p3" component="p3">{desc3}</Typography>
          
        </Grid>
        <Grid>

        </Grid>
        {/* <Grid>
        <CheckIcon sx={{
             color:"#D79016",
             paddingTop:"13px",
             "&hover":{
             }
           }}/><Typography variant="p3" component="p3">{desc1}</Typography>
        
        </Grid>
        <Grid>
        <CheckIcon sx={{
             color:"#D79016",
             paddingTop:"13px",
             "&hover":{
             }
           }}/><Typography variant="p3" component="p3">{desc1}</Typography>
          
        </Grid>
        <Grid>
        <CheckIcon sx={{
             color:"#D79016",
             paddingTop:"13px",
             "&hover":{
             }
           }}/><Typography variant="p3" component="p3">{desc1}</Typography>
          
        </Grid>
        <Grid>
        <CheckIcon sx={{
             color:"#D79016",
             paddingTop:"13px",
             "&hover":{
             }
           }}/><Typography variant="p3" component="p3">{desc1}</Typography>
        
        </Grid>
         
           
          
          
            */}
           
          
        </Grid>
    </div>
  )
}

export default ServiceThree