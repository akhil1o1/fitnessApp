import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import {Box} from "@mui/material";
import {fetchData, exerciseOptions, youtubeOptions} from "../utils/fetchData";
import Details from "../components/Details";
import ExerciseVideos from "../components/ExerciseVideo";
import SimilarExercises from "../components/SimilarExercises";


function ExerciseDetails(){

    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const {id} = useParams();//it will find exercise id appended to url


    useEffect(()=>{
        const fetchExerciseData = async ()=>{

            const exerciseDetailData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);

            const exerciseVideosData = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetailData.name}`, youtubeOptions);
            setExerciseVideos(exerciseVideosData.contents);
            
        }
        fetchExerciseData();
    },[id])

    return (
        <Box>
            <Details
                exerciseDetail={exerciseDetail}
            />
            <ExerciseVideos 
                exerciseVideos={exerciseVideos}
                exerciseName={exerciseDetail.name}
            />
            <SimilarExercises/>
        </Box>
    )
}


export default ExerciseDetails;

