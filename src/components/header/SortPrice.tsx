import Switch from "@material-ui/core/Switch";
import TrendingFlat from "@material-ui/icons/TrendingFlat";
import withStyles from "@material-ui/core/styles/withStyles";

const StyledSwitch = withStyles({
  root: {
    margin: "0 10px",
    padding: "0",
    height: "30px",
    width: "63px",
    alignItems: "center",
    transform: "scale(0.666667)",
  },
  switchBase: {
    padding: "2px",
    "&$checked": {
      "& + $track": {
        backgroundColor: "#09B1BA",
        opacity: 1,
      },
      transform: "translateX(33px)",
    },
  },
  track: {
    backgroundColor: "#09B1BA",
    opacity: 1,
    borderRadius: "20px",
  },
  checked: {},
})(Switch);

const ascIcon = (
  <TrendingFlat
    color="primary"
    style={{
      background: "white",
      border: "1px solid black",
      borderRadius: "50%",
      transform: "rotate(-90deg)",
    }}
  />
);
const descIcon = (
  <TrendingFlat
    color="primary"
    style={{
      background: "white",
      border: "1px solid black",
      borderRadius: "50%",
      transform: "rotate(90deg)",
    }}
  />
);

export interface SortPriceProps {
  checked?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
}

export const SortPrice = (props: SortPriceProps) => (
  <div style={{ display: "flex", alignItems: "center", fontSize: "12px" }}>
    <span>Trier par prix:</span>
    <StyledSwitch
      {...props}
      disableRipple
      color="primary"
      icon={ascIcon}
      checkedIcon={descIcon}
    />
  </div>
);

export default SortPrice;
