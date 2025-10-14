import React from "react";
import { Box } from "@mui/material";

const TestimonialSection = (props) => {
  const { videoUrl, poster, videoTitle } = props;

  const isMp4 = videoUrl.endsWith(".mp4");
  const isYouTube =
    videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");
  const isVimeo = videoUrl.includes("vimeo.com");
  const isGoogleDrive =
    videoUrl.includes("drive.google.com") || /^[\w-]{25,}$/.test(videoUrl);

  // Extraer ID para Google Drive
  const getDriveId = (url) => {
    if (/^[\w-]{25,}$/.test(url)) return url; // si solo es el ID
    const match = url.match(/\/d\/([a-zA-Z0-9_-]{25,})/);
    return match ? match[1] : null;
  };

  const renderPlayer = () => {
    if (isMp4) {
      return (
        <video
          controls
          muted
          loop
          playsInline
          poster={poster}
          style={{
            borderRadius: "8px",
            width: "100%",
            maxWidth: "300px",
            height: "600px",
          }}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      );
    } else if (isYouTube) {
      const videoId = videoUrl.includes("shorts/")
        ? videoUrl.split("shorts/")[1].split("?")[0]
        : videoUrl.split("v=")[1]?.split("&")[0];
      return (
        <Box
          component="iframe"
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          sx={{
            border: 0,
            borderRadius: "8px",
            width: "100%",
            maxWidth: "300px",
            height: "600px",
            marginRight: { xs: "3rem" },
          }}
        />
      );
    } else if (isVimeo) {
      const vimeoId = videoUrl.split("vimeo.com/")[1];
      return (
        <Box
          component="iframe"
          src={`https://player.vimeo.com/video/${vimeoId}`}
          allow="autoplay; fullscreen"
          allowFullScreen
          sx={{
            border: 0,
            borderRadius: "8px",
            width: "100%",
            maxWidth: "300px",
            height: "600px",
            marginRight: { xs: "3.7rem" },
          }}
        />
      );
    } else if (isGoogleDrive) {
      const id = getDriveId(videoUrl);
      return (
        <Box
          component="iframe"
          src={`https://drive.google.com/file/d/${id}/preview`}
          allow="autoplay"
          sx={{
            border: 0,
            borderRadius: "8px",
            width: "100%",
            maxWidth: "300px",
            height: "200px",
          }}
        />
      );
    } else {
      return <p>Formato de video no soportado</p>;
    }
  };

  return (
    <Box
      id="testimonial"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {renderPlayer()}
      {videoTitle && (
        <Box sx={{ mt: 1, color: "#fff", fontWeight: "bold" }}>
          {videoTitle}
        </Box>
      )}
    </Box>
  );
};

export default TestimonialSection;
