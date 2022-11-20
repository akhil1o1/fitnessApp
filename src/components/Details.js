import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import { nanoid } from "nanoid";

import bodyPartImage from "../assets/icons/body-part.png";
import targetImage from "../assets/icons/target.png";
import equipmentImage from "../assets/icons/equipment.png";

function Details({ exerciseDetail }) {
  const { bodyPart, gifUrl, equipment, name, target } = exerciseDetail;
  const extraDetails = [
    {
      icon: bodyPartImage,
      name: bodyPart,
    },
    {
      icon: targetImage,
      name: target,
    },
    {
      icon: equipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img
        src={gifUrl}
        alt={name}
        loading="lazy"
        className="detail-image"
        sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3" fontWeight="bold" textTransform="capitalize">
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong.{" "}
          <span
            style={{
              color: "#61569d",
              textTransform: "capitalize",
              fontWeight: "bold",
            }}
          >
            {name}
          </span>{" "}
          is one of the best exercise to target your{" "}
          <span
            style={{
              color: "#61569d",
              textTransform: "capitalize",
              fontWeight: "bold",
            }}
          >
            {target}
          </span>
          . It will help you improve your mood and gain energy.
        </Typography>
        {extraDetails.map((item) => {
          return (
            <Stack
              key={nanoid()}
              gap="24px"
              direction="row"
              alignItems="center"
            >
              <Button
                sx={{
                  backgroundColor: "#fff2db",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                }}
              >
                <img
                  src={item.icon}
                  alt="icon"
                  style={{ width: "50px", height: "50px" }}
                />
              </Button>
              <Typography textTransform="capitalize" variant="h5">
                {item.name}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}

export default Details;
