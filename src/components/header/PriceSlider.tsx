import { withStyles } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";

const StyledSlider = withStyles({
  root: {
    width: "316px",
  },
  rail: {
    height: "5px",
  },
  track: {
    height: "5px",
    color: "#09B1BA",
  },
  thumb: {
    color: "#09B1BA",
    height: "15px",
    width: "15px",
    border: "1px solid white",
    "&$focused, &$activated, &$jumped, &:hover": {
      boxShadow: "none",
    },
  },
  valueLabel: {
    top: "-24px",
    "& > span": {
      backgroundColor: "unset",
      borderRadius: "0",
      "& > span": {
        borderRadius: "4px",
        backgroundColor: "#09B1BA",
        padding: "4px",
      },
    },
  },
})(Slider);

export interface PriceSliderProps {
  min?: number;
  max?: number;
  value?: number | number[];
  onChange?: (event: React.ChangeEvent<{}>, value: number | number[]) => void;
}

export const PriceSlider = (props: PriceSliderProps) => (
  <div style={{ display: "flex", alignItems: "center", fontSize: "12px" }}>
    <span style={{ margin: "10px" }}>Prix entre:</span>
    <StyledSlider
      min={0}
      max={500}
      valueLabelDisplay="on"
      valueLabelFormat={(x) => `${x}€`}
      {...props}
    />
  </div>
);

export default PriceSlider;
