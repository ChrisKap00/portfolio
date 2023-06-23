import { Box, Button, CircularProgress, Container, Stack, TextareaAutosize } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import React, { useState } from "react";
import MotionWrapper from "../MotionWrapper/MotionWrapper";
import ReactLogoCanvas from "./ReactLogo/ReactLogo";
import emailjs from "@emailjs/browser";

const MyTextField = styled("div")(({ theme }) => ({
  position: "relative",
  paddingBlock: "2px",
  borderRadius: "10px",
  backgroundColor: alpha(theme.palette.common.white, 0.07),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.15),
  },
  marginTop: "10px",
  width: "100%",
  height: "fit-content",
}));

const StyledInputBase = styled(TextareaAutosize)(({ theme }) => ({
  color: "inherit",
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  resize: "none",
  font: "inherit",
  overflow: "hidden",
  height: "fit-content",
  display: "flex",
  alignItems: "center",
  wordBreak: "break-word",
  minWidth: "100%",
}));

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    {
      from_name: formData.name,
      to_name: process.env.REACT_APP_NAME,
      from_email: formData.email,
      message: formData.message,
    },
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: process.env.REACT_APP_NAME,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong :(");
        }
      );
  };

  return (
    <Container maxWidth="xl">
      <Stack direction={{ xs: "column", lg: "row" }} gap={2} mt={2} mb={5}>
        <Box flex={1} sx={{ overflow: "hidden" }}>
          <MotionWrapper
            styles={{
              backgroundColor: "#150A30",
              borderRadius: "10px",
              padding: "10px 20px 25px 20px",
              position: "relative",
              pointerEvents: loading ? "none" : "auto",
            }}
            variants={{
              hidden: {
                x: "-100%",
              },
              visible: {
                x: 0,
              },
            }}
            transition={{
              type: "tween",
              delay: 0.2,
              duration: 1,
              ease: "easeOut",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                borderRadius: "10px",
                zIndex: 1,
                pointerEvents: loading ? "none" : "auto",
                display: loading ? "flex" : "none",
                justifyContent: "center",
                alignItems: "center",
                // pointerEvents: "none",
              }}
            >
              <CircularProgress size="50px" color="secondary" thickness={5} />
            </div>
            <h1 style={{ fontSize: "2rem", marginBottom: "40px" }}>Contact me</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Your name</label>
                <MyTextField>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0.5rem 1rem",
                    }}
                  >
                    <input
                      type="name"
                      name="name"
                      required
                      style={{
                        color: "inherit",
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                        resize: "none",
                        font: "inherit",
                        overflow: "hidden",
                        height: "fit-content",
                        display: "flex",
                        alignItems: "center",
                        wordBreak: "break-word",
                        minWidth: "100%",
                      }}
                      onChange={handleChange}
                    ></input>
                  </Box>
                </MyTextField>
              </div>
              <div style={{ marginTop: "30px" }}>
                <label>Your email</label>
                <MyTextField typeof="email">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0.5rem 1rem",
                    }}
                  >
                    <input
                      type="email"
                      name="email"
                      required
                      style={{
                        color: "inherit",
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                        resize: "none",
                        font: "inherit",
                        overflow: "hidden",
                        height: "fit-content",
                        display: "flex",
                        alignItems: "center",
                        wordBreak: "break-word",
                        minWidth: "100%",
                      }}
                      onChange={handleChange}
                    ></input>
                  </Box>
                </MyTextField>
              </div>
              <div style={{ marginTop: "30px" }}>
                <label>Your message</label>
                <MyTextField>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0.5rem 1rem",
                    }}
                  >
                    <StyledInputBase minRows={7} name="message" onChange={handleChange} />
                  </Box>
                </MyTextField>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  marginTop: "20px",
                }}
              >
                <Button
                  type="submit"
                  id="submiteContactForm"
                  sx={{
                    border: "none",
                    padding: "9px 25px",
                    backgroundColor: "#261B3F",
                    color: "white",
                    fontFamily: "inherit",
                    fontSize: "1.1rem",
                    borderRadius: "10px",
                    textTransform: "capitalize",
                    "&:hover": { backgroundColor: "#3c2e5c" },
                  }}
                >
                  Send
                </Button>
              </div>
            </form>
          </MotionWrapper>
        </Box>
        <Box flex={1} sx={{ overflow: "hidden" }}>
          <MotionWrapper
            variants={{
              hidden: {
                x: "100%",
              },
              visible: {
                x: 0,
              },
            }}
            transition={{
              type: "tween",
              delay: 0.2,
              duration: 1,
              ease: "easeOut",
            }}
            styles={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ReactLogoCanvas />
          </MotionWrapper>
        </Box>
      </Stack>
    </Container>
  );
};

export default Contact;
