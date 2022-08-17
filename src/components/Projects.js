
import React from 'react'
import Project from './Project'
import classes from "./Project.module.css"
import { Grid } from '@mui/material'



const Projects = ({projects}) => {
  

  return (
    <div className={classes.container} >
        <Grid container spacing={4}>
           
          {projects.map((project) => (
             <Grid item md={3} sm={6}  key={project.id} >
        <Project
          key={project.id}
          id={project.id}
          title={project.title}
          image={project.image}
        />
          </Grid>
      ))}
         
          
        </Grid>
       
       
    </div>
  )
}

export default Projects