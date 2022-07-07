import React from "react";
import {Box, Stack, Typography} from "@mui/material";

function ExerciseVideos({exerciseVideos, exerciseName}){
    console.log(exerciseVideos);
    return <Box sx={{marginTop:{lg:"200px", xs:"30px"}}} p="20px">
    <Typography variant="h2" mb="33px">
    Watch <span style={{color:"#ff2526", textTransform:"capitalize"}}>{exerciseName}</span> exercise videos
    </Typography>
    <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
    sx={{flexDirection:{lg:"row"},
    gap:{lg:"110px", xs:"0"}}}>
    {exerciseVideos?.slice(0, 3).map((item, index)=>(
        <a 
        key={index}
        className="exercise-video"
        href={`https://www.youtube.com/watch?v=${item.videoId}`}
        target="_blank"
        rel="noreferrer">
        <img src={item.thumbnails[0].url} alt={item.title}/>
        </a>
    ))}
    </Stack>
         
    </Box>
}

export default ExerciseVideos;