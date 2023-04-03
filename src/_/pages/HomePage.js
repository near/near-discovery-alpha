import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ParticleBackground from "react-particle-backgrounds";
import { ThemeContext } from "../context/ThemeContext";
import { Box, Typography, Button, alpha } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Chip from "@mui/material/Chip";

import imageSrc from "../images/home.png";
import searchSrc from "../images/search.png";

export default function HomePage() {
  const { theme } = useContext(ThemeContext);

  const handleClick = (gateway) => {
    const gateways = {
      alpha: "https://alpha.near.org/#/",
      social: "https://near.social/#/",
      bos: "https://bos.gg/#/",
    };
    window.open(gateways[gateway], "_blank", "noreferrer");
  };

  const settings = {
    particle: {
      particleCount: 150,
      color: theme?.name === "dark" ? "#e3d5d5" : theme.textColor,
      maxSize: 2,
    },
    velocity: {
      directionAngle: 180,
      directionAngleVariance: 60,
      minSpeed: 0.1,
      maxSpeed: 0.3,
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.4,
      opacityTransitionTime: 10000,
    },
  };

  return (
    <Box
      sx={{
        minHeight: "max(100vh, 700px)",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

        justifyContent: "center",
        position: "relative",
        backgroundColor: theme.backgroundColor,
        overflow: "hidden",
      }}
    >
      <ParticleBackground
        settings={settings}
        style={{
          position: "absolute",
          userSelect: "none",
        }}
      />

      <Box
        sx={{
          width: "100%",
          maxWidth: "90vw",
          flex: 1,
          gap: 2,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{ fontSize: "7rem", color: theme.textColor }}
          >
            NEARpad
          </Typography>
          <Typography
            variant="h2"
            fontWeight={500}
            textAlign="left"
            sx={{
              color: theme.textColor,
            }}
          >
            <span style={{ color: theme.textColor, fontWeight: 600 }}>
              BOS DevTools
            </span>
          </Typography>

          <Typography
            style={{
              marginTop: 30,
            }}
          >
            <span
              style={{
                color: theme.textColor,
                fontWeight: 200,
                fontSize: 26,
              }}
            >
              Create decentralized frontend widgets without limits.
            </span>
          </Typography>
          <Typography
            style={{
              marginTop: 10,
            }}
          >
            <span style={{ color: theme.textColor }}>
              We &#x2665;&nbsp;
              <Chip
                label="Discovery"
                color="info"
                onClick={(e) => handleClick("alpha")}
              />
              &nbsp;
              <Chip
                label="NEAR.social"
                color="primary"
                onClick={(e) => handleClick("social")}
              />
              &nbsp;
              <Chip
                label="BOS.gg"
                color="warning"
                onClick={(e) => handleClick("bos")}
              />
            </span>
          </Typography>
          <Typography
            style={{
              marginTop: 100,
            }}
          >
            <span style={{ color: theme.textColor }}>
              We're still working out the kinks. Want to help us get ready for
              the prime time? Join the telegram channel and ask for the private
              beta access.
            </span>
          </Typography>
          {/* <Link
            target="_blank"
            to="https://t.me/+7k9u4Pa23sUyM2Qx"
            style={{ textDecoration: "none" }}
          > */}
          <Button
            sx={{
              mt: 1,
              px: 4,
              py: 2,
              borderRadius: 1,
              fontSize: "1.25rem",
              fontWeight: 600,
              backgroundColor: theme.textColor + "0D",
              color: theme.textColor,
              "&:hover": {
                backgroundColor: theme.textColor + "1A !important",
                color: theme.buttonColor,
              },
            }}
            //to="/discover"
            onClick={(e) => window.open("https://t.me/+7k9u4Pa23sUyM2Qx")}
          >
            Join the beta
            <ArrowForwardRoundedIcon sx={{ marginLeft: 3, fontSize: "2rem" }} />
          </Button>
          {/* </Link> */}
        </Box>

        <Box sx={{ flex: 1, position: "relative", marginRight: 1 }}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 99999999999999,
              border: `1px ${theme.borderColor} solid`,
              borderRadius: 4,
              overflow: "hidden",

              position: "absolute",

              boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.1)",

              top: 200,
              left: 100,
            }}
            src={imageSrc}
            alt="home"
          />
          <img
            style={{
              width: "100%",
              objectFit: "cover",
              zIndex: 99999999999999,
              border: `1px ${theme.borderColor} solid`,
              borderRadius: 4,
              overflow: "hidden",
              marginTop: 5,
            }}
            src={searchSrc}
            alt="search"
          />
        </Box>
      </Box>
    </Box>
  );
}
