import React from 'react'
import {Grid} from "@mui/material";
import building from "../../public/building.png"
import electrical from "../../public/electrical2.png";
import generalWork from "../../public/generalW.png"
import pumps from "../../public/pump.png";
import water from "../../public/water.png";
import streetLights from "../../public/streetLights.png";
import ServiceThree from "../../src/components/ServiceThree";
import civil from "../../public/civil.png"



const ServicesIcon = () => {
  return (
    <div className="service_iconss">
         <Grid container spacing={2} 
      justifyContent="center"
     sx={{
      display:"flex",
      alignItems:"center",
     }}

      >
        <Grid  item sm={5} md={4} lg={4} justifyContent="center">
          <ServiceThree title="Civil Works" work ={civil} 
          desc1="Plumbing Installation and Maintanance"
          desc2="Erection works(reinforced concrete panels)"
          desc3="Construction of utilities(sewage, water supply, heating"
          />
        </Grid>
        <Grid item sm={5} md={4} lg={4} justifyContent="center">
          <ServiceThree title="Mechanical" work={generalWork} 
           desc1="Supply, delivery, installation and Comminssioning"
           desc2="Repair and Maintance"
           desc3="Suply of equipment and Spares"
          />
        </Grid>
        <Grid item sm={5} md={4} lg={4}>
          <ServiceThree title="Wet Services & Plumbing" work ={water}  desc1="Supply, delivery, installation and Comminssioning"
            desc2="Repair and Maintance"
            desc3="Suply of equipment and Spares"/>
         
        </Grid>
        <Grid item sm={5} md={4} lg={4}>
          <ServiceThree title="Pumps and valves" work ={pumps } 
           desc1="Supply, delivery, installation and Comminssioning"
           desc2="Repair and Maintance"
           desc3="Suply of equipment and Spares"
          />
        </Grid>
        <Grid item sm={5}md={4} lg={4}>
          <ServiceThree title="Street Light " work ={streetLights} 
           desc1="Supply, delivery, installation and Comminssioning"
           desc2="Repair and Maintance"
           desc3="Suply of equipment and Spares"
          />
        </Grid>
        <Grid item sm={5} md={4} lg={4}>
          <ServiceThree title="Mechanical Services" work ={generalWork} 
            desc1="Supply, delivery, installation and Comminssioning"
            desc2="Repair and Maintance"
            desc3="Suply of equipment and Spares"
          />
        </Grid>
        <Grid item sm={5} md={4} lg={4}>
          <ServiceThree title="Electrical Services" work ={electrical} 
          desc1="Supply, deliverry, Installation and commissioning."
          desc2="Repairs and maintance."
          desc3="supply of equipment"
         />
        </Grid>
        <Grid item sm={5} md={4} lg={4}>
          <ServiceThree title="General Building" work ={building} desc1="Each project
            communication."/>
        </Grid>
        <Grid item sm={5} md={4} lg={4}>
          <ServiceThree title="General Building" work ={building} 
            desc1="Construction, maintance and Repairs(new structures or
               alterations to an extisting structure)"
            desc2="Roof repairs and maintenances, any changes to the roof of an extisngstructure"
            desc3="Constructionor alteration of driveways"
            desc4="The erection of temporary structures, walls or fancing"
            />
        </Grid>
       
        </Grid>
    </div>
  )
}

export default ServicesIcon