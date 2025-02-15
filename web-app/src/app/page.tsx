"use client";
import React from "react";
import {
  backgroundVariants,
  buttonVariants,
  heroVariants,
} from "@/mockData/variants";
import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Image with Motion */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
          variants={backgroundVariants}
          initial="initial"
          whileHover="hover"
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: 'url("/images/cozy-threads-bg.png")', // Replace with your hero image
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.6)", // Darken the image slightly
            }}
          />
        </motion.div>

        {/* Hero Content */}
        <Container
          maxWidth="md"
          sx={{
            textAlign: "center",
            top: 0,
            color: "white",
            zIndex: 10,
            px: 4,
          }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                letterSpacing: "0.05em",
                marginBottom: 2,
                color: "white",
                textShadow: "0 4px 6px rgba(0,0,0,0.4)",
              }}
            >
              Discover Your Style
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 300,
                marginBottom: 4,
                color: "white",
                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              Elevate Your Wardrobe with Cozy Threads
            </Typography>

            {/* Shop Now Button */}
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                component={Link}
                href="/shop"
                variant="contained"
                sx={{
                  backgroundColor: "#333333",
                  color: "white",
                  padding: "15px 30px",
                  fontSize: "1.1rem",
                  borderRadius: "10px",
                  boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
                  "&:hover": {
                    backgroundColor: "#444444",
                  },
                }}
              >
                Shop Now
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* Featured Categories Section */}
      <Box sx={{ py: 10, backgroundColor: "#FFF5E6", backgroundImage: 'linear-gradient(45deg, #f0e5db 0%, #fff2d1 100%)' }}>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              marginBottom: 6,
              fontWeight: 600,
              color: "#333",
            }}
          >
            Featured Categories
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 5,
              flexWrap: "wrap",
            }}
          >
            {[
              {
                name: "Womens",
                filter: "womens",
                image: "/images/womens-clothing.png",
              },
              {
                name: "Mens",
                filter: "mens",
                image: "/images/mens-clothing.png",
              },
              {
                name: "Accessories",
                filter: "accessories",
                image: "/images/accessories.png",
              },
            ].map((category) => (
              <motion.div
                key={category.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => router.push(`/shop?filter=${category.filter}`)}
                >
                  <Box
                    sx={{
                      width: 300,
                      height: 400,
                      position: "relative",
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundImage: `url(${category.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        filter: "brightness(0.7)",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        padding: 2,
                        backgroundColor: "rgba(0,0,0,0.5)",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      <Typography variant="h5" sx={{ fontWeight: 500 }}>
                        {category.name}
                      </Typography>
                    </Box>
                  </Box>
                </Button>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Testimonial Section */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="md">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={heroVariants}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                marginBottom: 4,
                fontWeight: 600,
                color: "#333",
              }}
            >
              What Our Customers Say
            </Typography>

            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                fontStyle: "italic",
                color: "#666",
                lineHeight: 1.6,
              }}
            >
              "Cozy Threads has transformed my wardrobe. The quality, comfort,
              and style are unmatched. I've never felt more confident in my
              clothing."
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",
                marginTop: 2,
                color: "#888",
              }}
            >
              - Sarah M., Verified Customer
            </Typography>
          </motion.div>
        </Container>
      </Box>
    </>
  );
}
