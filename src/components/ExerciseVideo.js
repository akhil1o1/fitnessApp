import React from "react";
import {Box, Stack, Typography} from "@mui/material";

function ExerciseVideos({exerciseVideos, exerciseName}){
 
    return <Box sx={{marginTop:{lg:"200px", xs:"30px"}}} p="20px">
    <Typography variant="h2" mb="33px">
    Watch <span style={{color:"#ff2526", textTransform:"capitalize"}}>{exerciseName}</span> exercise videos
    </Typography>
    <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
    sx={{flexDirection:{lg:"row", md:"row"},
    marginTop:"50px",
    gap:{lg:"30px", xs:"0"}}}>
    {exerciseVideos? exerciseVideos.slice(0, 6).map((item, index)=>(
        <a 
        key={index}
        className="exercise-video"
        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
        target="_blank"
        rel="noreferrer">
        <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
        <Box>
        <Typography variant="h5" color="#000000" fontSize="16px" fontWeight="bold" mb="6px">
            {item.video.title}
        </Typography>
        <Typography variant="h6" color="#000000" fontSize="14px" fontWeight="bold">
            {item.video.channelName}
        </Typography>
        </Box>
        </a>
    )):null}
    </Stack>
         
    </Box>
}

export default ExerciseVideos;