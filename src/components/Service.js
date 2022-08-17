import { Container, Typography , Grid} from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Service = ({title, id, desc, imageSrc}) => {
  return (
    <div>
        <Grid container justifyContent="center" >
          <Image src={imageSrc}/>
          <Typography justifyContent="center" variant="h2" component="h2">
             {title}
          </Typography>
          <Typography justifyContent="center" variant="p" component="p">
             {desc}
          </Typography>
        </Grid>
    </div>
  )
}

export default Service