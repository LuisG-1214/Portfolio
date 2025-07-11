import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyledButtonProps {
    children: ReactNode
    onClick: () => void
    customColor?: string
    customBorder?: string
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick, customColor, customBorder }) => {

    const StyledButton = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        border:  customBorder || `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: customColor || theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        transition: "background-color 0.5s",
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            cursor: "pointer"
        }
    }))

    return (
        <>
            <StyledButton onClick={onClick}>
                {children}
            </StyledButton>
        </>
    )
}
  
export default StyledButton
  