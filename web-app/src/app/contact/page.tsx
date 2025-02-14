"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// Warm color palette
const colors = {
  primary: "#2c1810",
  secondary: "#5c4033", // Chocolate
  background: "#FFF5E6", // Light warm background
  text: "#4A3A2C", // Dark warm brown
};

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  out: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.6,
      ease: "easeIn",
    },
  },
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form Submitted", formData);
    // Reset form or show success message
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: colors.background,
          minHeight: "calc(100vh - 64px)",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                color: colors.primary,
                marginBottom: 6,
                fontWeight: 600,
              }}
            >
              Contact Us
            </Typography>

            <Grid container spacing={4}>
              {/* Contact Form */}
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    backgroundColor: "white",
                    borderRadius: 3,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      marginBottom: 3,
                      color: colors.secondary,
                      fontWeight: 500,
                    }}
                  >
                    Send Us a Message
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          variant="outlined"
                          required
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              "&.Mui-focused fieldset": {
                                borderColor: colors.primary,
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          variant="outlined"
                          required
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              "&.Mui-focused fieldset": {
                                borderColor: colors.primary,
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Phone (Optional)"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          variant="outlined"
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              "&.Mui-focused fieldset": {
                                borderColor: colors.primary,
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Your Message"
                          name="message"
                          multiline
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          variant="outlined"
                          required
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              "&.Mui-focused fieldset": {
                                borderColor: colors.primary,
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          sx={{
                            backgroundColor: colors.primary,
                            color: "white",
                            padding: "12px",
                            "&:hover": {
                              backgroundColor: colors.secondary,
                            },
                          }}
                          onClick={() =>
                            formData.email && formData.name && formData.message
                              ? (window.location.href =
                                  "mailto:cozythreads@gmail.com")
                              : undefined
                          }
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Paper>
              </Grid>

              {/* Contact Information */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 3,
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      marginBottom: 3,
                      color: colors.secondary,
                      fontWeight: 600,
                    }}
                  >
                    Contact Information
                  </Typography>

                  {/* Contact Details */}
                  <Box>
                    {[
                      {
                        icon: (
                          <LocalPhoneIcon
                            sx={{ color: colors.primary, mr: 2 }}
                          />
                        ),
                        primary: "Customer Support",
                        secondary: "+1 (555) 123-4567",
                      },
                      {
                        icon: (
                          <EmailIcon sx={{ color: colors.primary, mr: 2 }} />
                        ),
                        primary: "Email Us",
                        secondary: "support@cozythreads.com",
                      },
                      {
                        icon: (
                          <LocationOnIcon
                            sx={{ color: colors.primary, mr: 2 }}
                          />
                        ),
                        primary: "Our Headquarters",
                        secondary: "123 Fashion Street, Style City, ST 12345",
                      },
                    ].map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: 2,
                        }}
                      >
                        {item.icon}
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: colors.text,
                              fontWeight: 500,
                            }}
                          >
                            {item.primary}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: colors.text }}
                          >
                            {item.secondary}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>

                  {/* Business Hours */}
                  <Box sx={{ mt: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: colors.secondary,
                        marginBottom: 1,
                      }}
                    >
                      Business Hours
                    </Typography>
                    <Typography variant="body2" sx={{ color: colors.text }}>
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default ContactPage;
