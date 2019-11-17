import React from "react";
import Button from "@material-ui/core/Button";
import { createStyles, Theme, withStyles } from "@material-ui/core";

interface ButtonProps {
    onClick: () => void;
    startIcon?: React.ReactNode;
}

const StyledButton = withStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.background.default,
            borderRadius: 0,
            borderWidth: "2px",
            "&:hover": {
                borderWidth: "2px"
            }
        }
    })
)(Button);

const OutlinedButton: React.FC<ButtonProps> = (props) => {
    return (
        <StyledButton variant="outlined" color="primary" onClick={props.onClick} {...props}>
            {props.children}
        </StyledButton>
    );
};

export default OutlinedButton;
