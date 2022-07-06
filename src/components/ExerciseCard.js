import React from "react";
import {Link} from "react-router-dom";
import {Button, Typography} from "@mui/material";


function ExerciseCard({exercise}){
    return (<Link className="exercise-card-link" to={`/exercise/${exercise.id}`}>
        <img className="exercise-card" src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
        <Button sx={{ml:"21px", color:"#fff", fontSize:"14px", borderRadius:"20px", textTransform:"capitalize", backgroundColor:"#ffa9a9"}}>
        {exercise.bodyPart}
        </Button>
        <Button sx={{ml:"21px", color:"#fff", fontSize:"14px", borderRadius:"20px", textTransform:"capitalize", backgroundColor:"#fcc757"}}>
        {exercise.target}
        </Button>
        <Typography ml="21px" color="#000" textTransform="capitalize" fontSize="22px" fontWeight="bold" 
        sx={{width:{lg:"400px"},mt:"11px",  pb:"10px" }}>
        {exercise.name}
        </Typography>
    </Link>)
}

export default ExerciseCard;