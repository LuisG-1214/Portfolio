import { Box, Container, Grid2, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';


const About = () => {
    const divVariants = {
      hidden: (direction: string) => ({
        opacity: 0,
        x: direction === "left" ? "-100%" : "100%",
      }),
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8 },
      },
    };

    return (
      <>
        <Box sx={{ py: 6, backgroundColor: "primary.main.contrast" }}>
            <Container maxWidth="lg">
              <Typography 
              variant="h3" 
              color="primary.main" 
              textAlign="center" 
              gutterBottom 
              fontFamily="montserrat"
              >
                About Me
              </Typography>

              <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "center", gap: 4, my: 4 }}>
                <motion.div
                  custom= "left"
                  variants={divVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount:0.5}}
                >
                  <Box sx={{
                    p:4,
                    bgcolor: "primary.main.contrast",
                    boxShadow: 2,
                    borderRadius: 2,
                    textAlign: "center",
                  }}
                  >
                    <WorkspacePremiumIcon/>
                    <Typography 
                      variant = "h6" 
                      display="flex" 
                      justifyContent="center"
                    >
                      Experience
                    </Typography>
                    
                    <Typography 
                      display="flex" 
                      justifyContent="center"
                    >
                      1+ Year 
                    </Typography>
                    
                    <Typography 
                      display="flex" 
                      justifyContent="center" 
                    >
                      Front-End Developer
                    </Typography>
                  </Box>
                </motion.div>

                <motion.div
                  custom= "right"
                  variants={divVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount:0.5}}
                >
                  <Box sx={{
                    p:4,
                    bgcolor: "primary.main.contrast",
                    boxShadow: 2,
                    borderRadius: 2,
                    textAlign: "center",
                  }}
                  >
                    <SchoolIcon/>
                    <Typography 
                      variant = "h6" 
                      display="flex" 
                      justifyContent="center"
                    >
                      Education
                    </Typography>
                    
                    <Typography 
                      display="flex" 
                      justifyContent="center"
                    >
                      Graduate 
                    </Typography>
                    
                    <Typography 
                      display="flex" 
                      justifyContent="center" 
                      mx={2}
                    >
                      Systems Analysis
                    </Typography>
                  </Box>
                </motion.div>
              </Box>

              <Box textAlign="center" my={4}>
                <Typography 
                  variant="body1" 
                  color="primary.main" 
                  fontFamily="montserrat"
                >
                  Front-end developer passionate about creating intuitive, visually appealing interfaces. Constantly seeking new technologies. I aim to apply my knowledge to projects that prioritize user experience.
                </Typography>

                <Box
                  component="hr"
                  sx={{
                    border: "none",
                    height:"1px",
                    bgcolor: "primary.main",
                    width: "100%",
                    mx: "auto",
                    mt: 2,
                  }} 
                >
                </Box>
                <Typography
                  variant="h3"
                  color="primary"
                  textAlign="center"
                  gutterBottom
                  fontFamily="montserrat"
                >
                  Skills
                </Typography>
                
                <Grid2 container spacing={3} justifyContent={"center"}>
                  {[
                    "JavaScript & TypeScript",
                    "React.js",
                    "Node.js",
                    "HTML & CSS",
                    "BootStrap & Sass",
                    "Material UI",
                    "Git & GitHub",
                    "Python",
                  ].map((skill, index) => (
                    <Grid2 size={{xs: 6, sm: 3}} key={index}>
                      <Box
                        sx={{
                          p:2,
                          bgcolor: "white",
                          boxShadow: 1,
                          borderRadius: 1,
                          textAlign: "center",
                          "&:hover": { boxShadow: 3 },
                        }}
                      >
                        <Typography variant="subtitle1">{skill}</Typography>
                      </Box>
                    </Grid2>
                  ))}
                </Grid2>
              </Box>  
            </Container>
        </Box>
      </>
    );
}

export default About;