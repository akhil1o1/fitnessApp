import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import { TailSpin } from "react-loader-spinner";

function Exercises({ setExercises, bodyPart, exercises }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const exercisePerPage = 9;
  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  const currentExercise = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  function paginate(event, value) {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
        console.log(exercisesData);
      }

      setExercises(exercisesData);
      setLoading(false);
    };

    fetchExercisesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bodyPart]);

  return loading === false ? (
    <Box
      id="exercises"
      sx={{
        mt: { lg: "110px" },
      }}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" mb="46px" textAlign="center">
        Showing results for {bodyPart === "all" ? "all exercises" : bodyPart}
      </Typography>

      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercise.map((exercise, index) => {
          return <ExerciseCard key={index} exercise={exercise} />;
        })}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  ) : (
    <Box
      display="flex"
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <TailSpin color="#000000" height={80} width={80} />
    </Box>
  );
}

export default Exercises;
