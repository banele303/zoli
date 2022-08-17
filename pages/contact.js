import React from 'react'
import AboutHeader from '../src/components/AboutHeader'
import Footer from '../src/components/Footer'
import FormTrue from '../src/components/FormTrue'
import Navbar from '../src/components/Navbar'
import {Stack} from "@mui/material"
import Head from "next/head"

const contact = () => {
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
      <Navbar/>
      <AboutHeader/>
        <Stack sx={{
          marginTop:"3rem"
        }}>
          
          <FormTrue/>
          </Stack>
        <Footer/>
    </div>
  )
}

export default contact