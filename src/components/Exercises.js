import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";


function ExerciseDetails({setExercises, bodyPart, exerCises}){
    return <Box id="exercises" 
    sx={{
        mt:{lg:"110px"}}}
        mt="50px"
        p="20px">
        <Typography variant="h3" mb="46px">
        Showing results
        </Typography>
    </Box>

}

export default ExerciseDetails;