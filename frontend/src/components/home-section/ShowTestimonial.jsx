import React from "react";
import TestimonialSection from "./TestimonialSection";
import { Box, Typography } from "@mui/material";

const ShowTestimonial = (props) => {
  return (
    <>
      <Box
        sx={{
          flexWrap: "wrap",
          textAlign: { xs: "center" },
          bgcolor: "primary.dark",
          minHeight: { md: "100vh" }, // ✅ altura mínima
          marginTop: { md: "-12rem" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            marginTop: { md: "3rem", xs: "-5rem" },
            paddingTop: { md: "2rem", xs: "7rem" },
            color: "#FFF",
          }}
        >
          Testimonios de nuestros clientes
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap", // ✅ permite que se acomoden en filas
            justifyContent: { md: "center", xs: "center" }, // ✅ centra horizontalmente
            gap: { md: "3.5rem", xs: "2.5rem" }, // ✅ separación entre videos
            width: "100%",
            padding: { md: "2rem", xs: "2rem" },
            paddingBottom: { md: "5rem", xs: "5rem" },
            bgcolor: "primary.dark",
            margin: { xs: " auto", md: "0 auto" },
          }}
        >
          <TestimonialSection
            videoUrl="https://vimeo.com/1105917129"
            // videoTitle="Don Ruben"
            poster="https://res.cloudinary.com/diwwjzmsh/image/upload/v1750976061/ruben-portrait_zovfng.png"
          />
          <TestimonialSection
            videoUrl="https://vimeo.com/1105923630"
            // videoTitle="GiraldSalud"
            poster="https://res.cloudinary.com/diwwjzmsh/image/upload/v1750976061/health-portrait_qa1exj.png"
          />
          <TestimonialSection
            videoUrl="https://vimeo.com/1105916930"
            // videoTitle="Familia en Caucasia"
            poster="https://res.cloudinary.com/diwwjzmsh/image/upload/v1752960034/Screenshot_from_2025-07-19_16-20-14_tbewbu.png"
          />
        </Box>
      </Box>
    </>
  );
};

export default ShowTestimonial;
