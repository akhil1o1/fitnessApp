import React from "react";
import {Stack, Typography} from "@mui/material";
import Icon from "../assets/icons/gym.png";



function BodyPartCard({item, bodyPart, setBodyPart}){
    return <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
        borderTop: bodyPart=== item ? "4px solid #61569d" : "" ,
        backgroundColor:"#fff",
        borderBottomLeftRadius:"20px",
        width:"270px",
        height:"280px",
        cursor:"pointer",
        gap:"47px",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
    }}
    onClick={()=>{setBodyPart(item);
    window.scrollTo({top:1800, left:100, behavior:"smooth"})
    }}>
        <img src={Icon} alt="dumbBell" style={{width:"40px", height:"40px"}}/>
        <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">
            {item}
        </Typography>
    </Stack>
}

export default BodyPartCard;
