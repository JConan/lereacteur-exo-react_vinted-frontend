import { Link, useHistory } from "react-router-dom"
import logo from "../assets/images/logo.png"
import { Input, InputAdornment, Switch, Slider } from '@material-ui/core';
import { Search, TrendingFlat } from "@material-ui/icons"
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        margin: "0 10px",
        padding: "0",
        height: "30px",
        width: "70px",
        alignItems: "center",
    },
    switchBase: {
        padding: "2px",
        '&$checked': {
            '& + $track': {
                backgroundColor: '#09B1BA',
                opacity: 1,
            },
            transform: "translateX(40px)",
        },
    },
    track: {
        backgroundColor: '#09B1BA',
        opacity: 1,
        borderRadius: "20px",
    },
    checked: {},
    focusVisible: {},
});

const Home = () => {
    const [sortAsc, setSortAsc] = useState(true)

    const ascIcon = <TrendingFlat color="primary" style={{ background: "white", border: "1px solid black", borderRadius: "50%", transform: "rotate(-90deg)" }} />;
    const descIcon = <TrendingFlat color="primary" style={{ background: "white", border: "1px solid black", borderRadius: "50%", transform: "rotate(90deg)" }} />;

    const customStyle = useStyles()

    return <>
        <header>
            <div className="logo"><img src={logo} alt="logo" /></div>
            <div className="search-inputs">
                <Input id="search" placeholder="Recherche des articles" startAdornment={
                    <InputAdornment position="start">
                        <Search />
                    </InputAdornment>
                } />
                <div>
                    <span>Trier par prix:</span>
                    <Switch disableRipple classes={{ ...customStyle }} color="primary" size="medium" checked={sortAsc} onChange={(e) => setSortAsc(e.target.checked)} icon={ascIcon} checkedIcon={descIcon} />
                </div>
                <div>

                </div>
            </div>
        </header>
        <div className=""></div>
    </>
}
export default Home;