import React, {useState, useEffect} from "react";
import {Box, Stack, Typography, Button, TextField} from "@mui/material";
// import { borderRadius } from "@mui/system";
import {exerciseOptions, fetchData} from "../utils/fetchData";

function SearchExercises(){

    const [search, setSearch] = useState("");

    function handleChange(event){
        const value  = event.target.value.toLowerCase();
        setSearch(value);
    }

    async function handleSearch(){
         const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions);

         console.log(exercisesData);
    }
    


    return <Stack alignItems="center" justifyContent="center" p="20px">
    <Typography 
    fontWeight="700" 
    sx={{
        fontSize:{lg:"44px", xs:"33px", mb:"50px",
        textAlign:"center"}
    }}>
        Awesome exercises <br/>you need to know
    </Typography>
    <Box position="relative">
        <TextField 
        sx={{input:{
            fontWeight:"700",
            border:"none",
            borderRadius:"4px"
        },width:{lg:"900px", xs:"350px"},
        backgroundColor:"#fff",
        borderRadius:"4px",
        mt:"30px",
        mb:"72px"
        }}
        height="76px"
        value={search}
        onChange={handleChange}
        placeholder="search exercises"
        type="text"
        />
        <Button className="search-btn" 
        onClick={handleSearch}
        sx={{
            bgcolor:"#FF2526",
            color:"#fff",
            mt:"29px",
            textTransform:"none",
            width:{lg:"175px", xs:"80px"},
            height:"56px",
            position:"absolute",
            right:"0",
            fontSize:{lg:"20px", xs:"14px"}
        }}>
            Search
        </Button>
        
    </Box>
    </Stack>
}

export default SearchExercises;