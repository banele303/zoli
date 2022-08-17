import React from "react";
import Typography from "@mui/material/Typography";
import { Grid, Stack } from "@mui/material";
import Navbar from "../src/components/Navbar";
import AboutHeader from "../src/components/AboutHeader";
import Footer from "./../src/components/Footer";
import Head from "next/head";
const about = () => {
  return (
    <div>
      <Head>
        <title>Malunjwa Construction</title>
        <meta
          name="Your best Constraction company"
          content="malunjwa contraction company"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <AboutHeader />

      <Grid container spacing={2} justifyContent="center">
        <Grid item sm={10} md={6}>
          <Typography
            justifyContent="center"
            variant="h2"
            component="h2"
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "4rem",
              fontSize: "34px",
              fontWeight: "400",
              maxWidth: "290px",
              margin: "auto",
              borderBottom: "2px solid #D79016 ",
              paddingBottom: "1.6rem",
            }}
          >
            About Malunjwa
          </Typography>
          <Typography
            justifyContent="center"
            variant="p2"
            component="p2"
            sx={{
              display: "flex",
              justifyContent: "start",
              paddingTop: "1rem",
              fontSize: "16px",
              fontWeight: "400",
              margin: "1rem",
            }}
          >
            Malunjwa and Company (Pty) Ltd, hereafter called "M&C" is a
            multi-purpose company and is taking up operations into different
            industries or sectors and seeks to use company divisions to separate
            its operations, hence is called a “one house, many rooms”.
            <br />
            We are an established company and most of our experience has been
            gained through being hired as subcontractor by contractors to
            execute a wide array of projects and now, we have decided to create
            direct relationship with clients, to offer them a more personalized
            service and more efficient costs.
            <br /> <br />
            Through our expertise and experience we believe can provide
            solutions and value creations to our clients. We have been working
            in this concept and we have developed extensive knowledge that will
            transform our concept into a success story. We are a stablish and
            sustainable business, operating off its own cash flow. M&C technical
            teams are responsible, qualified, fully trained, experienced and
            inducted at every site. Stringent employment and medical checks are
            in place for all our technical teams including, supervisors, team
            leaders and managers. All staff are trained to comply with company
            policy, Workplace Health and Safety and safe work place methods.
            <br /> <br />
            Also, M&C collaborates with a number of specialists, such as
            qualified structural engineers, architects, building surveyors,
            designers, electricians, plumbers, gas installers and many others to
            ensure all clients’ needs are met. Moreover, we continuously look
            for new products and enhance our services to serve our customers
            better
          </Typography>
          <Typography
            justifyContent="center"
            variant="h2"
            component="h2"
            sx={{
              display: "flex",
              jusifyContent: "center",
              paddingTop: "4rem",
              fontSize: "34px",
              fontWeight: "400",
              maxWidth: "250px",
              margin: "auto",
              borderBottom: "2px solid #D79016 ",
              paddingBottom: "1.6rem",
            }}
          >
            Our Mission
          </Typography>
          <Typography
            justifyContent="center"
            variant="p2"
            component="p2"
            sx={{
              display: "flex",
              justifyContent: "start",
              paddingTop: "1rem",
              fontSize: "16px",
              fontWeight: "400",
              margin: "1rem",
            }}
          >
            M&C has a mission to improve a better everyday life for people, even
            if it meant stepping away from the comfort zone to assist clients
            with various implementations of their projects, and we have
            confidence in our ability to generate the consensus and commitments
            necessary to succeed. We are prepared to stand behind our
            recommendations and to assist our clients with obtaining appropriate
            approvals to proceed
          </Typography>
        </Grid>
        <Grid item sm={10} md={5}>
          <Stack
            justifyContent="center"
            justifyItems="center"
            sx={{
              backgroundColor: "#F1F1F1",
              marginTop: "7rem ",
            }}
          >
            <Typography
              justifyContent="center"
              variant="h2"
              component="h2"
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "2rem",
                fontSize: "34px",
                fontWeight: "400",
                maxWidth: "430px",
                margin: "auto",
                borderBottom: "2px solid #D79016 ",
                paddingBottom: "1.7rem",
              }}
            >
              Our Vision
            </Typography>
            <Typography
              justifyContent="center"
              variant="p2"
              component="p2"
              sx={{
                display: "flex",
                justifyContent: "start",
                padding: "2rem",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              To achieve 100% customer satisfaction by delivering quality
              products and services at an affordable cost. Our forward vision is
              to strive to become a company-based solution, capable of demanding
              unconditional response from the targeted niche. We also believe
              that for our scope of improvisation – sky is the limit and we are
              always ready to take our achievements to the next level. We are
              growing and would always like to remain on the growing streak.
            </Typography>
          </Stack>
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
};

export default about;
