'use client'
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
}));

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function About() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#FFF5E6', // Warm, cozy background color
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(45deg, #f0e5db 0%, #fff2d1 100%)',
        pt: 8,
        pb: 12,
      }}
    >
      <Container maxWidth="lg">
        <MotionBox
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          {/* Hero Section */}
          <MotionTypography
            variant="h2"
            sx={{
              textAlign: 'center',
              color: '#2c1810', // Warm brown
              fontWeight: 700,
              mb: 6,
            }}
            variants={fadeInUp}
          >
            Our Story
          </MotionTypography>

          {/* Mission Statement */}
          <Grid container spacing={6} sx={{ mb: 12 }}>
            <Grid item xs={12} md={6}>
              <MotionBox
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <StyledPaper>
                  <Typography variant="h4" sx={{ color: '#6b4423', mb: 3 }}>
                    Our Mission
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#5c4033', lineHeight: 1.8 }}>
                    At Cozy Threads, we believe in creating spaces and moments that feel like a warm embrace. 
                    Our carefully curated collection of apparel and home essentials is designed to bring comfort 
                    and style to every aspect of your life.
                  </Typography>
                </StyledPaper>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionBox
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <StyledPaper>
                  <Typography variant="h4" sx={{ color: '#6b4423', mb: 3 }}>
                    Our Values
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#5c4033', lineHeight: 1.8 }}>
                    We're committed to sustainability, quality craftsmanship, and creating products 
                    that stand the test of time. Every item is thoughtfully sourced and designed 
                    with both comfort and consciousness in mind.
                  </Typography>
                </StyledPaper>
              </MotionBox>
            </Grid>
          </Grid>

          {/* Features Section */}
          <MotionBox
            variants={fadeInUp}
            sx={{ mb: 12 }}
          >
            <StyledPaper>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h3" sx={{ color: '#6b4423', mb: 6, textAlign: 'center' }}>
                    What Sets Us Apart
                  </Typography>
                </Grid>
                {[
                  {
                    title: "Sustainable Materials",
                    description: "We use eco-friendly materials that are kind to both you and the planet."
                  },
                  {
                    title: "Artisan Crafted",
                    description: "Each piece is crafted with attention to detail and quality."
                  },
                  {
                    title: "Timeless Design",
                    description: "Our products are designed to be both trendy and timeless."
                  }
                ].map((feature, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <MotionBox
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      sx={{ textAlign: 'center' }}
                    >
                      <Typography variant="h5" sx={{ color: '#6b4423', mb: 2 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#5c4033' }}>
                        {feature.description}
                      </Typography>
                    </MotionBox>
                  </Grid>
                ))}
              </Grid>
            </StyledPaper>
          </MotionBox>

          {/* Team Section */}
          <MotionBox
            variants={fadeInUp}
          >
            <StyledPaper>
              <Typography variant="h3" sx={{ color: '#6b4423', mb: 6, textAlign: 'center' }}>
                Our Team
              </Typography>
              <Typography variant="body1" sx={{ color: '#5c4033', textAlign: 'center', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
                Our diverse team of designers, craftspeople, and curators work together to bring you 
                the finest selection of apparel and home goods. We're united by our passion for 
                creating products that make your everyday life more comfortable and beautiful.
              </Typography>
            </StyledPaper>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
}