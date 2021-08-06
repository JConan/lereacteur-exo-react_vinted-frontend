import MaterialButton from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";

const StyledButton = withStyles({
  root: {
    width: "115px",
    height: "30px",
  },
  outlinedPrimary: {
    textTransform: "none",
    color: "#09B1BA",
    "&$focused, &$activated, &$jumped, &:hover": {
      border: "1px solid rgba(63, 81, 181, 0.5)",
      background: "inherit",
    },
  },
  outlinedSecondary: {
    textTransform: "none",
    color: "white",
    background: "#09B1BA",
    "&$focused, &$activated, &$jumped, &:hover": {
      border: "1px solid rgba(63, 81, 181, 0.5)",
      background: "#09B1BA",
    },
  },
})(MaterialButton);

export interface ButtonProps {
  label: string;
  color?: "primary" | "secondary";
}

export const Button = (props: ButtonProps) => (
  <StyledButton
    variant="outlined"
    disableRipple={true}
    disableFocusRipple={true}
    color={props.color || "primary"}
  >
    {props.label}
  </StyledButton>
);

export default Button;
