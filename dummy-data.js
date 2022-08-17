import electrical from "./public/img8.jpg";
import building from "./public/imgb2.jpg";
import civil from "./public/img3.jpg";
import construction from "./public/imgxx53.jpg";
import plumbing from "./public/plumbing.jpg";
import street1 from "./public/street2.jpg";
import general from "./public/img6.jpg";
import pumps from "./public/plumbing2.jpg";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Electrical Works",
    desc1:
      "Whether you’re struggling with an electrical fault in a domestic property or a full-scale power outage in a large commercial premise, our team offers a quick, professional diagnostic and fault repair service.We provide a variety of electrical installation options and our expert team of electricians work to the highest of standards. We also provide our customers with regular preventive maintenance services",
    image: electrical,
    li1: " Installations, maintenance and inspection of new and old buildings",
    li2: "	Residential, Commercial and Industrial installations",
    li3: "	Generator supply and installation",
    li4: "One year warrantee on all workmanship",
    li5: "	Warrantee on all material carried by approved suppliers",
    desc2: "	Commercial /Industrial Electrical Services",
    desc3:
      "Our electricians conduct a series of checks and tests within a property, making recommendations and avoiding any unnecessary downtime.Every job, no matter the size and complexity are carried out in a safe and professional manner. M&C employed fully qualified electricians capable of all electrical works forming an integral and permanent part of buildings and/or structure. ",
    serv1:
      " Electrical, installations,maintenance and inspection of new and old buildings",
    serv2:
      "		Wiring of domestic buildings / or properties as well as installing entirely new electrical systems to commercial buildings.",
    serv3:
      "		Certificate Of Compliance (COC), New Light and Plug Points, Db Boards, Lights Tripping, etc.",
    serv4:
      "	Electrical power generation, transmission, control and distribution equipment & systems",
    serv5:
      "		Installing the most up to date technology in your home or office including home networking, home entertainment systems, intelligent lighting, integrated audio systems, and plasma screens and commercial or domestic network cabling.",
  },
  {
    id: "e7",
    title: "GENERAL SERVICES",
    desc1:
      " M&C offer a host of general work and home services that cover most tasks that you require at home. If you do not see the required work listed below, please call and speak with the team about your needs.",
    image: general,
    li2: "Labour Hire – General ",
    li3: " Repairs and Maintenance – building",
    li4: "	Repairs and maintenance steel	∕	Plumbing ",
    li5: "Painting and Tiling	∕	Welding and Boiler-making",
    desc2: "General services include the following",
    desc3:"Solar street lights are outdoor light devices that are activated through the photovoltaic or PV panels. They have a rechargeable battery that can be loaded with electrical power when detecting light from a source such as the Sun. ",
    serv1:
      "Fencing and Gates	∕	Soldering Services, Equipment and Consumables ",
    serv2:
      "Street Light Materials",
    serv3:
      "	Welding Services, Equipment and Supplies		Transport Services",
    serv4:
      "Signage and Billboards	∕	Cleaning services",
    serv5:
      "Lighting in Parks and on Pedestrian and Bicycle Paths",
  },
  {
    id: "e2",
    title: "MECHANICAL SERVICES ",
    desc1:
      "Most infrastructure developments require mechanical services such as Heating, Ventilation, Air-Conditioning (HVAC), Refrigeration, Fire Detection, Hot Water Installations, Steam Generation and Distribution Installations and Mechanical Sewer Handling.M&C has in its employ qualified personnel to install, repair and maintain such services or installations. In instances where our resources are not adequate or are not available, we then engage competent subcontractors, from our subcontractor pool, that we have developed and maintained relationships with over the years.",
    image: building,
    li1: "  Installations, maintenance and inspection of new and old buildings",
    li2: "	Residential, Commercial and Industrial installations",
    li3: "		Heat recovery installations",
    li4: "Heating, ventilation and air conditioning systems (HVAC)",
    li5: "Check equipment and operating systems and correct wherever necessary",
    desc2: "16.1.2.1	Commercial & Industrial Mechanical Services",
    desc3:
      "M&C has in its employ qualified personnel to install, repair and maintain such services or installations. In instances where our resources are not adequate or are not available, we then engage competent subcontractors, from our subcontractor pool, that we have developed and maintained relationships with over the years.",
    serv1:
      " Kitchen installations and extract systems",
    serv2:
      "		Wiring of domestic buildings / or properties as well as installing entirely new electrical systems to commercial buildings.",
    serv3:
      "		Certificate Of Compliance (COC), New Light and Plug Points, Db Boards, Lights Tripping, etc.",
    serv4:
      "	All material manufactured to SABS specifications",
    serv5:
      "		Generator Installation, Maintenance and Refueling",
  },
  {
    id: "e3",
    title: "CIVIL WORKS SERVICES",
    desc1:
      "Our Civil works are often referred to as general contracting; while a building company is referred to as a general contractor. It is convenient and cost-effective to engage the same company in general contracting since in this way the customer fully entrusts the construction to a responsible builder, saving his/her time and money!As for erection works, we perform using finished parts of prefabricated structures, usually made of metal. Moreover, erection works are a full range of facade, finishing, insulating and roofing works, i.e., measures aimed at the development of the finished building before its commissioning.",
    image: civil,
    li1: "  Excavation or zero cycle works",
    li2: "	Concrete works (foundations, walls, columns, slabs, floors);",
    li3: "		Erection works (reinforced concrete panels, steel structures, sandwich panels)",
    li4: "	Construction of utilities (sewerage, water supply, heating)",
    li5: "	Plumbing Installation and Maintenance",
    desc2: "CIVIL WORKS SERVICES",
    desc3:
      "As for erection works, we perform using finished parts of prefabricated structures, usually made of metal. Moreover, erection works are a full range of facade, finishing, insulating and roofing works, i.e., measures aimed at the development of the finished building before its commissioning.Our site management teams are dynamic, skilled and have very good experience in civil works. We take pride in delivering successful projects on time, within budget and to the highest quality standards.",
    serv1:
      " Masonry works (Art of building a structure in either stones or bricks",
    serv2:
      "		Electrical works",
    serv3:
      "Mechanical works",
    serv4:
      "		Pumps, Valves and Pipes",
    serv5:
      "	Welding works",
  },
  {
    id: "e4",
    title: "GENERAL BUILDING AND MAINTENANCE SERVICES",
    desc1:
      " If you want experienced builders to undertake your next building construction project, then contact Malunjwa and Company (Pty) Ltd today. With years of experience in the building trade, we have a team of professionals who specialise in all aspects of building work. For all property maintenance and repairs, we are here to provide you with top-quality services at affordable prices.      ",
    image: construction,
    li1: "  Construction of new structures",
    li2: "	Construction or demolition of part or all of an existing structure;",
    li3: "			Construction or extensions to a retaining wall whether this be dry stack or otherwise;",
    li4: "		Paving Supplies, Installation and Maintenance  ",
    li5: "		Roofing, any changes to the roof of an existing structure whether this be an extension of floor area ratio or Coverage and shall include the roofing of patios and of awning whether permanent or temporary",
    desc2: "	Building Maintenance",
    desc3:
      "Our building maintenance service covers everything that makes a building work and keeps its occupant’s content and productive. With some of our clients, we have come to know individual and corporate culture so well that we can actually anticipate their requirements. We can provide a full maintenance service to ensure the absolute minimum of downtime and the optimum working and/or living conditions.",
    serv1:
      "Building Maintenance ",
    serv2:
      "Repairs and renovations of old dilapidated buildings",
    serv3:
      "Roof Repairs and Maintenance",
    serv4:
      "Construction, Maintenance and Repairs",
    serv5:
      "Plumbing Installation and Maintenance",
  },
  {
    id: "e5",
    title: "	WET / PLUMBING SERVICES",
    desc1:
      " We have experienced and highly skilled teams of plumbers, bathroom fitters and heating engineers. We can help you choose the right central heating system for your property, budget and lifestyle, taking into account the importance that you place on water pressure, hot water storage, efficiency, installation costs, running costs and the use of space.",
    image: plumbing,
    li1: " Cold water storage tanks & pumps",
    li2: "Internal hot & cold-water supply to buildings",
    li3: "Solar hot water generation",
    li4: "Electric Geysers (installing, relocating, repairing burst/faulty geysers   ",
    li5: "Commercial only - Clearing blocked sewer and storm water drains",
    desc2: "wet services include",
    desc3:
      "We have experienced and highly skilled teams of plumbers, bathroom fitters and heating engineers. We can help you choose the right central heating system for your property, budget and lifestyle, taking into account the importance that you place on water pressure, hot water storage, efficiency, installation costs, running costs and the use of space.",
    serv1:
      "	Unblocking sinks/toilets ",
    serv2:
      " Blocked drains",
    serv3:
      "Commercial/Residential Construction - Plumbing (building from the ground up)",
    serv4:
      "Commercial only - Pumps, valve repairs and maintenance",
    serv5:
      "Waste pipes (leaking)",
  },
  {
    id: "e6",
    title: "STREET LIGHTING SERVICES",
    desc1:
      " Solar street lights and other solar products have grown in popularity over the years. Unlike traditional sources of light, solar lights don’t harm the environment. This is the reason why a lot of people are switching to this technology for their lighting needs. Moreover, solar lights do not rely on electricity providers; thus, you become spared from hefty electric bills.",
    image: street1,
    li2: "Street Lighting on Major Roads and at Intersections",
    li3: "Lighting in Parks and on Pedestrian and Bicycle Paths",
    li4: "Lighting in Community Title Schemes  ",
    li5: "Street and main road lighting",
    desc2: "STREET LIGHTING SERVICES",
    desc3:"Solar street lights are outdoor light devices that are activated through the photovoltaic or PV panels. They have a rechargeable battery that can be loaded with electrical power when detecting light from a source such as the Sun. ",
    serv1:
      "Street Light Luminaires ",
    serv2:
      "Street Light Materials",
    serv3:
      "Street Lighting on Major Roads and at Intersections",
    serv4:
      "Street and main road lighting",
    serv5:
      "Lighting in Parks and on Pedestrian and Bicycle Paths",
  },
 
   { id: "e8",
    title: "	PUMPS AND VALVES – SUPPLY & REPAIRS SERVICES",
    desc1:
      " We’ve specifically chosen to associate ourselves with industry-leading pump and valve brands. This ensures we can source, supply and deliver on all brands of pumps and valves to OEM specifications, and repair services.",
    image: pumps,
    li1: "De-Watering pumps ",
    li2: "Supply and installation of industrial valves",
    li3: " RSlurry pumps",
    li4: "	Centrifugal pumps",
    li5: "Vertical spindle pumps",
    desc2: "General services include the following",
    desc3:"We supply/repair pumps for all applications and in a wide range of configurations, such as:",
    serv1:
      "	Supply and installation of industrial valves",
    serv2:
      "Supply and distribution of valve parts and accessories",
    serv3:
      "		Valve refurbishment services",
    serv4:
      "Valve repair and maintenance services",
    serv5:
      "Valve pressure testing services",
  },
];

export function getAllProjects() {
  return DUMMY_EVENTS;
}

export function getProjectById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
