import React, {useState, useEffect} from "react";
import {Box, Stack, Typography, Button, TextField} from "@mui/material";
import { borderRadius } from "@mui/system";

function SearchExercises(){
    return <Stack alignItems="center" justifyContent="center" p="20px">
    <Typography 
    fontWeight="700" 
    sx={{
        fontSize:{lg:"44px", xs:"33px", mb:"50px",
        textAlign:"center"}
    }}>
        Awesome exercises <br/>you need to know
    </Typography>
    <Box position="relative" mb="72px">
        <TextField 
        sx={{input:{
            fontWeight:"700",
            border:"none",
            borderRadius:"4px"
        },width:{lg:"1170px", xs:"350px"},
        backgroundColor:"#fff",
        borderRadius:"40px",
        mt:"30px"
        }}
        height="76px"
        // value=""
        onChange={(e)=>{}}
        placeholder="search exercises"
        type="text"
        >
        
        </TextField>
    </Box>
    </Stack>
}

export default SearchExercises;