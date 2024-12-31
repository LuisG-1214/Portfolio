import { Container, styled, Typography, Box } from "@mui/material";
import  Grid  from '@mui/material/Grid2';
import { motion } from "framer-motion";


const Projects = () => {
  
  const StyledProjects = styled("div") (({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    display: "flex",
  }))

  const boxVariants = (direction: "left" | "right") => ({
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : 100, 
    },
    visible: {
      opacity: 1,
      x: 0, 
      transition: { duration: 0.6, ease: "easeOut" }, 
    },
  });

  
  return (
      <>
        <StyledProjects>
          <Container maxWidth="lg">

            <Typography 
              sx={{
                py: 6,
                textAlign: "center",
                color: "primary.contrastText"
              }}
              variant="h3"  
              textAlign="center" 
              gutterBottom 
              fontFamily="montserrat"
            >
              Projects
            </Typography>

            <Grid container spacing={4}> 
              <Grid size={{xs:12 , md:6}}>
              <motion.div
                variants={boxVariants("left")}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              > 
                <Box
                  sx={{
                    bgcolor: "primary.main.contrast",
                    border: "1px solid",
                    borderColor: "#ffffff",
                    borderRadius: 1,
                    textAlign: "center",
                    height: {xs: "30rem", md: "40rem"},
                  }}
                >

                </Box>
              </motion.div>
                
              </Grid>

              <Grid size={{xs:12 , md:6}}>
              <motion.div
                variants={boxVariants("right")}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              > 
                <Box
                  sx={{
                    bgcolor: "primary.main.contrast",
                    border: "1px solid",
                    borderColor: "#ffffff",
                    borderRadius: 1,
                    textAlign: "center",
                    height: {xs: "30rem", md: "40rem"},
                  }} 
                >

                </Box>              
              </motion.div>
                
              </Grid>

              <Grid size={{xs:12 , md:6}}>
              <motion.div
                variants={boxVariants("left")}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              > 
                <Box
                  sx={{
                    bgcolor: "primary.main.contrast",
                    border: "1px solid",
                    borderColor: "#ffffff",
                    borderRadius: 1,
                    textAlign: "center",
                    height: {xs: "30rem", md: "40rem"},
                  }}
                >

                </Box>
              </motion.div>
                
              </Grid>

              <Grid size={{xs:12 , md:6}}>
              <motion.div
                variants={boxVariants("right")}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              > 
                <Box
                  sx={{
                    bgcolor: "primary.main.contrast",
                    border: "1px solid",
                    borderColor: "#ffffff",
                    borderRadius: 1,
                    textAlign: "center",
                    height: {xs: "30rem", md: "40rem"},
                  }} 
                >

                </Box>              
              </motion.div> 
                
              </Grid>
            </Grid>

          </Container>
        </StyledProjects>
      </>
    )
  }
  
  export default Projects