
import React from 'react'
import { Button, Typography } from '@mui/material'
import classes from "./Project.module.css"
import Image from 'next/image'
import civil from "../../public/pexel.jpg"
import Link from "next/link"



const Project = ({title, image, id}) => {
      
  return (
    <div>
 <div className={classes.project_contain}>
        <div className={classes.image_container}>
           <Image src={image} alt="/projects" width={400} height={250}/>
        </div>
        <Typography className={classes.header} variant="h2" component="h2" sx={{
            color:"black",
            fontSize:"13px",
            fontWeight:"bold"
        }}>
        {title}
        </Typography>
      

    </div>
    <Button variant="text" sx={{
            color:"#0D2240",
            fontSize:"11px"
    
        }}><Link href={`services/${id}`}>
        More datails
        </Link></Button>
    </div>
   
  )
}

export default Project