import React from "react";
import {Box, Stack, Typography} from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";


function SimilarExercises({similarTargetExercises, similarEquipmentExercises}){
    return <Box sx={{mt:{lg:"100px", xs:"0"}, p:"20px"}}>
            <Typography variant="h3" mb="30px">
                Exercises that target the same muscle group
            </Typography>
            <Stack direction="row" sx={{p:"2", position:"relative"}}>
            {similarTargetExercises.length ? <HorizontalScrollBar
                data={similarTargetExercises}
            />
            :<Loader/>}
            </Stack>
            <Typography variant="h3" sx={{mb:{lg:"30px", xs:"15px"}, mt:{lg:"70px", xs:"30px"}}}>
                Exercises that uses the same gym equipment
            </Typography>
            <Stack direction="row" sx={{p:"2", position:"relative"}}>
            {similarEquipmentExercises.length ? <HorizontalScrollBar
                data={similarEquipmentExercises}
            />
            :<Loader/>}
            </Stack>
    </Box>
}

export default SimilarExercises;