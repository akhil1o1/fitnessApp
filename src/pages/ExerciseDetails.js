import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import {Box} from "@mui/material";
import {fetchData, exerciseOptions} from "../utils/fetchData";
import Details from "../components/Details";
import ExerciseVideos from "../components/ExerciseVideo";
import SimilarExercises from "../components/SimilarExercises";


function ExerciseDetails(){

    const [exerciseDetails, setExerciseDetails] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        const fetchExerciseData = async ()=>{
            const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com/video/related";

            const exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions);

            setExerciseDetails(exerciseData);
        }
        fetchExerciseData();
    },[id])

    return (
        <Box>
            <Details
                exerciseDetails={exerciseDetails}
            />
            <ExerciseVideos/>
            <SimilarExercises/>
        </Box>
    )
}


export default ExerciseDetails;

