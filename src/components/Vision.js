import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import vision from "../../public/headerTree.jpg";
import classes from "../../styles/Vision.module.css";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

const Vision = () => {
  return (
    <div className={classes.vision}>
      <Grid className={classes.image}>
        {/* <Image src={vision} alt="visiotn" /> */}
      </Grid>
      <Grid container className={classes.content} spacing={2}>
        <Grid
          item
          sm={10}
          md={4}
          sx={{
            fontSize: "35px",
            justifyContent: "center",
            color: "#FF8F56",
            zIndex: "100",
          }}
        >
          <Typography
            variant="h3"
            component="h4"
            sx={{
              fontSize: "35px",
              justifyContent: "center",
              color: "white",
              opacity:".7",
              zIndex: "100",
            }}
          >
            OUR KEY FACTORS
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              fontSize: "20px",
              justifyContent: "center",
              color: "white",
              opacity:".7",
              paddingTop: "2rem",
            }}
          >
            GIVE US A CALL FOR A FREE QUOTATION{" "}
            <AddIcCallIcon
              sx={{
                paddingTop: "6px",
              }}
            />
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              fontSize: "20px",
              justifyContent: "center",
              color: "white",
              opacity:".7",
              paddingTop: "1rem",
            }}
          >
            B-BBE
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              fontSize: "14px",
              justifyContent: "center",
              color: "white",
              opacity:".7",
              paddingTop: ".5rem",
            }}
          >
            We are B-BBEE Level 1 Contributor: 135% Procurement Recognition. M&C
            is committed to furthering and developing Black Economic
            Empowerment. This includes complying with the Black Empowerment
            Legislation, identifying and appointing B-BBEE compliant suppliers,
            engaging in projects to transfer skills to previously disadvantaged
            individuals and partnering with emerging black providers.
          </Typography>
        </Grid>
        <Grid
          item
          sm={10}
          md={6}
          sx={{
            fontSize: "35px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            justifyContent="end"
           className={classes.main_stack}
          >
            <Typography
              variant="h6"
              component="h6"
              sx={{
                fontSize: "20px",
                justifyContent: "center",
                color: "white",
                opacity:".7",
                paddingTop: "1rem",
              }}
            >
              OUR VISION
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              sx={{
                fontSize: "14px",
                justifyContent: "center",
                color: "white",
                opacity:".7",
                paddingTop: ".5rem",
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
            <Typography
              variant="h6"
              component="h6"
              sx={{
                fontSize: "20px",
                justifyContent: "center",
                color: "white",
                opacity:".7",
                paddingTop: "1rem",
              }}
            >
              Our Mission
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              sx={{
                fontSize: "14px",
                justifyContent: "center",
                color: "white",
                opacity:".7",
                paddingTop: ".5rem",
              }}
            >
              M&C has a mission to improve a better everyday life for people,
              even if it meant stepping away from the comfort zone to assist
              clients with various implementations of their projects, and we
              have confidence in our ability to generate the consensus and
              commitments necessary to succeed. We are prepared to stand behind
              our recommendations and to assist our clients with obtaining
              appropriate approvals to proceed.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default Vision;
