import { styled, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import StyledButton from "../StyledButton/StyledButton";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import DownloadIcon from '@mui/icons-material/Download';

const Footer = () => {

    const StyledFooter = styled("div") (({theme}) => ({
        backgroundColor: theme.palette.primary.contrastText,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }))

    const BackToTOP = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return (
      <>
        <StyledFooter>
          <Grid container>
            <Grid size={{xs:12, md:12}}>
                <Box 
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        padding: "20px"
                    }}
                >
                    
                    <StyledButton onClick={() => window.open("https://linktr.ee/LuisGustavoAlves1214")} customColor="#000">
                        <AlternateEmailIcon />
                        <Typography>
                             Contact me
                        </Typography>
                    </StyledButton>  

                    <StyledButton onClick={BackToTOP} customColor="#000">
                    <ArrowUpwardIcon />
                        Back to top
                    </StyledButton> 


                    <StyledButton onClick={() => window.open("https://Google.com")} customColor="#000">
                        <DownloadIcon />
                        <Typography>
                            Download CV
                        </Typography>
                    </StyledButton> 
                </Box>
            </Grid>

            <Grid size={{xs:12, md:12}}>
                <Box 
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        pb: "20px"
                    }}
                >
                    <Typography>
                    © 2024 Luis Gustavo. All rights reserved.
                    </Typography>
                </Box>
            </Grid>
            
          </Grid>
        </StyledFooter>
      </>
    )
  }
  
export default Footer
  