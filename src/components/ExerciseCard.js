import React from "react";
import {Link} from "react-router-dom";
import {Button, Stack, Typography} from "@mui/material";


function ExerciseCard({exercise}){
    return (<Link to={`/exercise/${exercise.id}`}>
        <img className="exercise-card" src={exercise.gifUrl} alt="exercise-gif" loading="lazy"/>
    </Link>)
}

export default ExerciseCard;