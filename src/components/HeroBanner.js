import React from "react";
import {Box, Typography, Button} from "@mui/material";
import bodybuilderPic from "../assets/images/bodybuilderPic.png";


function HeroBanner(){
    return <Box sx={{
       mt:{lg:"212px", xs:"70px"},
       ml:{sm:"50px"},
    }} position="relative" p="20px">
        <Typography color="#61569d" fontWeight="600" fontSize="26px">
            Fitness World
        </Typography>
        <Typography fontWeight="700" sx={{
            fontSize:{lg:"44px", xs:"40px"},
            mb:"23px",mt:"30px"
        }}>
            Sweat, Smile <br/>and Repeat 
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb="10px">
            check out the most effective exercises.
        </Typography>
        <Button variant="contained" color="error" href="#exercises" sx={{
            backgroundColor:"#61569d",
            padding:"10px"
        }}>
            Explore Exercises
        </Button>
        <Box position="relative">
        <Typography  sx={{
            fontSize:{lg:"200px", xs:"100px"},
            opacity:"0.1",
            display:{lg:"block", xs:"none"}
        }} fontWeight="600" color="#61569d" mt="25px" position="absolute" zIndex="10">
            Exercises
        </Typography>
        </Box>
        <img src={bodybuilderPic} alt="banner" className="hero-banner-img"/>
    </Box>
}

export default HeroBanner;