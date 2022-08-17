import React from 'react'
import { getAllProjects, getProjectById } from "../../dummy-data.js";
import DetailedProjects from '../../src/components/DetailedProjects.js';
import Navbar from '../../src/components/Navbar.js';
import Footer from './../../src/components/Footer';

const service = (props) => {
 const detail = props.project
  return (
    <div>
      <Navbar/>
        <div className="">
          <DetailedProjects 
          title={detail.title}
           image={detail.image} desc1={detail.desc1}
           li1={detail.li1}
           li2={detail.li2}
           li3={detail.li3}
           li4={detail.li4}
           li5={detail.li5}
           desc2={detail.desc2}
           desc3={detail.desc3}
           serv1={detail.serv1}
           serv2={detail.serv2}
           serv3={detail.serv3}
           serv4={detail.serv4}
           serv5={detail.serv5}
           
          />
        </div>
        <Footer/>
    </div>
  )
}


export async function getServerSideProps(context) {
  const projectId = context.params.serviceId;
  const project = await  getProjectById(projectId);
 
  return {
    props: {
      project
    },
  };
}

export default service