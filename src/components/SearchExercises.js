import React, {useState, useEffect} from "react";
import {Box, Stack, Typography, Button, TextField} from "@mui/material";
import {exerciseOptions, fetchData} from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

function SearchExercises({setExercises, bodyPart, setBodyPart}){

    const [search, setSearch] = useState("");
    const [bodyParts, setBodyParts] = useState([]);
    
    useEffect(()=>{
        const fetchExercisesData = async ()=>{
            const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions);

            setBodyParts(["all", ...bodyPartsData])
        }
        fetchExercisesData();
    },[])

    function handleChange(event){
        const value  = event.target.value.toLowerCase();
        setSearch(value);
    }

    async function handleSearch(){
        if(search){
         const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);

         const searchedExercises = exercisesData.filter((exercise)=>(
            exercise.name.toLowerCase().includes(search)
            ||exercise.bodyPart.toLowerCase().includes(search)
            ||exercise.target.toLowerCase().includes(search)
            ||exercise.equipment.toLowerCase().includes(search)
            )
         );

         setSearch("");
         setExercises(searchedExercises);
        }
    }
    


    return <Stack alignItems="center" justifyContent="center" p="20px" 
    sx={{mt:{lg:"300px"}}}>
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
        placeholder="search exercises by body part, equipment or target muscle"
        type="text"
        />
        <Button className="search-btn" 
        onClick={handleSearch}
        sx={{
            bgcolor:"#61569d",
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
    <Box sx={{position:"relative", width:"100%", p:"20px"}}>
        <HorizontalScrollBar data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            isBodyPart={true}
        />
    </Box>
    </Stack>
}

export default SearchExercises;