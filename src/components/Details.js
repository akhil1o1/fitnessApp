import React from "react";
import {Typography, Stack, Button} from "@mui/material";

import bodyPartImage from "../assets/icons/body-part.png";
import targetImage from "../assets/icons/target.png";
import equipmentImage from "../assets/icons/equipment.png";



function Details({exerciseDetails}){
    const {bodyPart, gifUrl, equipment, name, target} = exerciseDetails;
    const extraDetails = [
    {
        icon:bodyPartImage,
        name:bodyPart
    },
    {
        icon:targetImage,
        name:target
    },
    {
        icon:equipmentImage,
        name:equipment
    }
];

    return <Stack gap="60px" sx={{flexDirection:{lg:"row"}, p:"20px", alignItems:"center"}}>
    <img src={gifUrl} alt={name} loading="lazy" className="detail-image"/>
    <Stack sx={{gap:{lg:"35px", xs:"20px"}}}>
    <Typography variant="h3" fontWeight="bold" textTransform="capitalize">
    {name}
    </Typography>
    <Typography variant="h6" >
    Exercises keep you strong. <strong>{name}</strong> is one of the best exercise to target your <strong>{target}</strong>. It will help you improve your mood and gain energy. 
    </Typography>
    {extraDetails.map((item)=>{
        return <Stack key={item.name} gap="24px" direction="row" alignItems="center">
        <Button sx={{backgroundColor:"#fff2db", width:"100px", height:"100px", borderRadius:"50%"}}>
        <img src={item.icon} alt="icon" style={{width:"50px", height:"50px"}}/>
        </Button>
            <Typography textTransform="capitalize" variant="h5">
                {item.name}
            </Typography>
        </Stack>
    })}
    </Stack>
    </Stack>
}

export default Details;