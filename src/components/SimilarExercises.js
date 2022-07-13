import React from "react";
import {Box, Stack, Typography} from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";


function SimilarExercises({similarTargetExercises, similarEquipmentExercises}){
    return <Box sx={{mt:{lg:"100px", xs:"0"}}}>
            <Typography variant="h3">
                Exercises that target the same muscle group
            </Typography>
            <Stack direction="row" sx={{p:"2", position:"relative"}}>
            {similarTargetExercises.length && <HorizontalScrollBar
                data={similarTargetExercises}
            />}
            </Stack>
    </Box>
}

export default SimilarExercises;