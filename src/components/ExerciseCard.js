import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, Stack } from "@mui/material";

function ExerciseCard({ exercise }) {
  return (
    <Link className="exercise-card-link" to={`/exercise/${exercise.id}`}>
      <Box sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
        <img
          className="exercise-card"
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
        />
        <Stack direction="row" spacing={5} pl="5%">
        <Box
          sx={{
            padding:"10px 13px",
            color: "#fff",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            backgroundColor: "#ffa9a9",
          }}
        >
          {exercise.bodyPart}
        </Box>
        <Box
          sx={{
            padding:"10px 15px",
            color: "#fff",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            backgroundColor: "#fcc757",
          }}
        >
          {exercise.target}
        </Box>
        </Stack>
        <Typography
          ml="21px"
          color="#000"
          textTransform="capitalize"
          fontSize="22px"
          fontWeight="bold"
          sx={{ width: { lg: "300px" }, mt: "11px", pb: "10px" }}
        >
          {exercise.name}
        </Typography>
      </Box>
    </Link>
  );
}

export default ExerciseCard;
