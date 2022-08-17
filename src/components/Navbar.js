import React, { useState } from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
import Button from '@mui/material/Button';
import Image from "next/image";
import Logo from "../../public/Imagelo.png"
import Link from "next/link"
import Divider from '@mui/material/Divider';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import Stack from '@mui/material/Stack';
import TwitterIcon from '@mui/icons-material/Twitter';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gradient__bg">
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <Image src={Logo} alt="logo"/>
          </div>
          <div className="gpt3__navbar-links_container">
            <p>
              <Link href="/">HOME</Link>
            </p>
            <p>
              <Link href="/services">SERVICES</Link>
            </p>
            <p>
              <Link href="/about">ABOUT</Link>
            </p>
            
            {/* <p>
              <Link href="#blog">PROPERTIES</Link>
            </p> */}
          </div>
          <div className="additional_icons"> 
          <Button variant="outlined" sx={{
          color:"#BC8726",
          backgroundColor:"#0D2240",
          paddingRight:"2rem",
          transition:" .5s ease",
          "&:hover":{
            backgroundColor:"#BC8726",
            color:"#0D2240"
          }
        }}> <Link href="/contact">CONTACT</Link></Button>
        </div>
        <Stack direction="row" 
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2} 
        sx={{
       paddingLeft:"2rem"
        }} className="additional_icons">
        <FacebookOutlinedIcon sx={{
          color:"#0D2240",
          cursor:"pointer",
          "&:hover":{
            color:"gray",
           
          }
        }} />
        <InstagramIcon sx={{
          color:"#0D2240",
          cursor:"pointer",
          "&:hover":{
            color:"gray",
           
          }
        }}/>
          <TwitterIcon sx={{
          color:"#0D2240",
          cursor:"pointer",
          "&:hover":{
            color:"gray",
            transition:".8s ease"
          }
        }} />
        </Stack>
          </div>
        <div  >
        
        </div>
      
        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            <CloseIcon
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <DensityMediumIcon
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <p>
                  <Link href="/">Home</Link>
                </p>
                <p>
                  <Link href="/services">Services</Link>
                </p>
                <p>
                  <Link href="/about">About</Link>
                </p>
               
              </div>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
