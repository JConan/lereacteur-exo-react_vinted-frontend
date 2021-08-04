import logo from "../assets/images/logo.png";
import {
  Button,
  Input,
  InputAdornment,
  Switch,
  Slider,
} from "@material-ui/core";
import { Search, TrendingFlat } from "@material-ui/icons";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useToggleStyles = makeStyles({
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
});

const useSliderStyles = makeStyles({
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
});

const useButtonPrimaryStyles = makeStyles({
  root: {
    textTransform: "none",
    color: "#09B1BA",
  },
});

const useButtonSecondaryStyles = makeStyles({
  root: {
    textTransform: "none",
    color: "white",
    background: "#09B1BA",
  },
});

const Home = () => {
  const [sortAsc, setSortAsc] = useState(true);

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

  const customToggleStyle = useToggleStyles();
  const customSliderStyle = useSliderStyles();
  const customButtonPrimaryStyle = useButtonPrimaryStyles();
  const customButtonSecondaryStyle = useButtonSecondaryStyles();

  const [value, setValue] = useState<number[]>([10, 100]);

  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="search-inputs">
          <Input
            id="search"
            placeholder="Recherche des articles"
            startAdornment={
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            }
          />
          <div>
            <span>Trier par prix:</span>
            <Switch
              disableRipple
              classes={{ ...customToggleStyle }}
              color="primary"
              size="medium"
              checked={sortAsc}
              onChange={(e) => setSortAsc(e.target.checked)}
              icon={ascIcon}
              checkedIcon={descIcon}
            />
          </div>
          <div>
            <span>Prix entre:</span>
            <Slider
              classes={{ ...customSliderStyle }}
              value={value}
              onChange={(event, value) => {
                Array.isArray(value) && setValue(value);
              }}
              min={0}
              max={500}
              valueLabelDisplay="on"
              valueLabelFormat={(x) => `${x}€`}
            />
          </div>
        </div>
      </header>
      <div className="action">
        <Button
          classes={{ ...customButtonPrimaryStyle }}
          variant="outlined"
          disableRipple={true}
        >
          S'inscrires
        </Button>
        <Button
          classes={{ ...customButtonPrimaryStyle }}
          variant="outlined"
          disableRipple={true}
        >
          S'inscrires
        </Button>
        <Button
          classes={{ ...customButtonSecondaryStyle }}
          variant="outlined"
          disableRipple={true}
        >
          S'inscrires
        </Button>
      </div>
    </>
  );
};
export default Home;
