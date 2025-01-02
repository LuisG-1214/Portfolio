import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"


const NavBar = () => {
    const StyledToobar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly",
        transition: "background-color 0.5s",   
    }))

    return (
        <>
            <AppBar position="absolute">
                <StyledToobar>
                    <MenuItem component="a" href="#sobre">Sobre</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Projetos</MenuItem>
                </StyledToobar>
            </AppBar>
        </>
    )
}

export default NavBar