import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from "axios";

const ContactPage = () => {
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "subject" && value.split(" ").length > 50) {
      setSnackbarMessage("Subject cannot be more than 50 words");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    if (name === "message" && value.split(" ").length > 200) {
      setSnackbarMessage("Message cannot be more than 200 words");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name) {
      setSnackbarMessage("Name is required");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    if (!formData.email || !emailPattern.test(formData.email)) {
      setSnackbarMessage("Please enter a valid email address");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    if (formData.subject.split(" ").length > 50) {
      setSnackbarMessage("Subject cannot be more than 50 words");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    if (formData.message.split(" ").length > 200) {
      setSnackbarMessage("Message cannot be more than 200 words");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        "https://api.burntbrains.com/contact",
        formData
      );
      setSnackbarMessage(res.data.message);
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSnackbarMessage(error.response?.data?.message || "An error occurred");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Box
        sx={{
          maxHeight: "100%",
          maxWidth: "100%",
          padding: "1rem",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography variant="h3" textAlign="center" pb={3} color="black">
          <span style={{ color: "#FF5722", fontWeight: "bold" }}>Contact</span>{" "}
          Us
        </Typography>
        <Grid container spacing={5} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                backgroundColor: "#222222",
                color: "#fff",
                padding: "24px",
                borderRadius: "10px 10px 50px 10px",
                height: "18rem",
                transition: "transform 2s ease",
                transform: animate ? "translateX(0)" : "translateX(-75%)",
              }}
            >
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Address:
              </Typography>
              <Typography variant="body2">
                4th floor, Building # 171, Sector C, CCA-1 Phase 6 DHA, Lahore,
                54000, Pakistan
              </Typography>

              <Typography variant="h6" fontWeight="bold" gutterBottom mt={2}>
                Phone:
              </Typography>
              <Typography variant="body2">+92 370 4707378</Typography>

              <Typography variant="h6" fontWeight="bold" gutterBottom mt={2}>
                Email:
              </Typography>
              <Typography variant="body2">hr@burntbrains.com</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                backgroundColor: "#f9f9f9",
                borderRadius: "15px",
                transition: "transform 2s ease",
                transform: animate ? "translateX(0)" : "translateX(45%)",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    InputProps={{
                      style: {
                        borderRadius: "10px",
                        backgroundColor: "#f2f2f2",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    InputProps={{
                      style: {
                        borderRadius: "10px",
                        backgroundColor: "#f2f2f2",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Subject"
                    variant="outlined"
                    fullWidth
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    InputProps={{
                      style: {
                        borderRadius: "10px",
                        backgroundColor: "#f2f2f2",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Write Your Message"
                    variant="outlined"
                    multiline
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    fullWidth
                    InputProps={{
                      style: {
                        borderRadius: "10px",
                        backgroundColor: "#f2f2f2",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="flex-start">
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={loading}
                    sx={{
                      backgroundColor: "#ff6b5b",
                      color: "#fff",
                      padding: "10px 20px",
                      borderRadius: "25px",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#ff4b3b",
                      },
                    }}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactPage;
