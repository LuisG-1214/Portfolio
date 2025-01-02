import { Container, styled, Typography, Box } from "@mui/material";
import  Grid  from '@mui/material/Grid2';
import { motion } from "framer-motion";
import Project1 from "../../../../assets/images/palette1.jpg";
import Project2 from "../../../../assets/images/capa.jpg";


const Projects = () => {
  
  const StyledProjects = styled("div") (({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    display: "flex",
  }))

  const StyledImg = styled("img") (({theme}) => ({
    width: "90%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    [theme.breakpoints.down('md')]: {
        width: "50%", 
    },
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
              Projetos
            </Typography>

            <Grid container spacing={4} py={6}> 
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
                    transition: "box-shadow 0.3s ease-in-out",
                  }}
                >
                  <Typography 
                    sx={{
                      py: 3,
                      textAlign: "center",
                      color: "#ffffff",
                    }}
                    variant="h4"  
                    textAlign="center" 
                    fontFamily="montserrat">
                      Palette Creator
                    </Typography>

                    <StyledImg src={Project1} />

                    <Typography 
                      sx={{
                        py: 6,
                        px: 3.5,
                        textAlign: "justify",
                        color: "#ffffff",
                      }}
                      variant="body1" 
                      fontFamily="montserrat">
                        Desenvolvi uma aplicação web que cria paletas de cores personalizadas com 16 tonalidades únicas. Os usuários selecionam três cores primárias, e a aplicação gera uma paleta diversificada variando aleatoriamente o tom e a saturação, mantendo a luminosidade original. Este projeto aproveita as capacidades do HTML5, CSS3 e JavaScript para oferecer uma experiência de usuário visualmente atraente e interativa.
                      </Typography>  
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
                    transition: "0.3s",
                  }} 
                >
                  <Typography 
                    sx={{
                      py: 3,
                      textAlign: "center",
                      color: "#ffffff",
                    }}
                    variant="h4"  
                    textAlign="center" 
                    fontFamily="montserrat">
                      Dev Burguer
                    </Typography>

                    <StyledImg src={Project2} />

                    <Typography 
                      sx={{
                        py: 6,
                        px: 3.5,
                        textAlign: "justify",
                        color: "#ffffff",
                      }}
                      variant="body1" 
                      fontFamily="montserrat">
                        Desenvolvido durante um curso de Tailwind CSS e JavaScript, este projeto é um sistema simulado de cardápio e carrinho de compras de uma lanchonete. Inclui funcionalidades para adicionar e remover itens do carrinho e redirecionar os usuários para o WhatsApp para finalizar seus pedidos. Tecnologias utilizadas: HTML5, Tailwind CSS e JavaScript.
                      </Typography>
                </Box>              
              </motion.div>
                
              </Grid>

              {/* <Grid size={{xs:12 , md:6}}>
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
                  <Typography 
                    sx={{
                      py: 3,
                      textAlign: "center",
                      color: "#ffffff",
                    }}
                    variant="h4"  
                    textAlign="center" 
                    fontFamily="montserrat">
                      Palette Creator
                    </Typography>

                    <StyledImg src={Project1} />

                    <Typography 
                      sx={{
                        py: 6,
                        px: 3.5,
                        textAlign: "justify",
                        color: "#ffffff",
                      }}
                      variant="body1" 
                      fontFamily="montserrat">
                        Developed a web application that creates custom color palettes of 16 unique hues. Users select three primary colors, and the application generates a diverse palette by randomly varying the hue and saturation while preserving the original luminosity. This project leverages the capabilities of HTML5, CSS3, and JavaScript to deliver a visually appealing and interactive user experience.
                      </Typography>
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
                  <Typography 
                    sx={{
                      py: 3,
                      textAlign: "center",
                      color: "#ffffff",
                    }}
                    variant="h4"  
                    textAlign="center" 
                    fontFamily="montserrat">
                      Palette Creator
                    </Typography>

                    <StyledImg src={Project1} />

                    <Typography 
                      sx={{
                        py: 6,
                        px: 3.5,
                        textAlign: "justify",
                        color: "#ffffff",
                      }}
                      variant="body1" 
                      fontFamily="montserrat">
                        Developed a web application that creates custom color palettes of 16 unique hues. Users select three primary colors, and the application generates a diverse palette by randomly varying the hue and saturation while preserving the original luminosity. This project leverages the capabilities of HTML5, CSS3, and JavaScript to deliver a visually appealing and interactive user experience.
                      </Typography>
                </Box>              
              </motion.div> 
                 */}
              {/* </Grid>*/}
            </Grid> 

          </Container>
        </StyledProjects>
      </>
    )
  }
  
  export default Projects