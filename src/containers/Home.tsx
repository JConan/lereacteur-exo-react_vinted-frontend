import { useState } from "react";
import Logo from "../components/header/Logo";
import SearchBar from "../components/header/SearchBar";
import SortPrice from "../components/header/SortPrice";
import PriceSlider from "../components/header/PriceSlider";
import Button from "../components/header/Button";

import tear from "../assets/images/tear.svg";
import "./Header.scss";
import "./Splash.scss";

const Home = () => {
  const [sortDescending, setSortAsc] = useState(false);
  const [value, setValue] = useState<number[]>([10, 100]);

  return (
    <>
      <header>
        <Logo className="logo" />
        <div className="filters">
          <SearchBar />
          <SortPrice
            checked={sortDescending}
            onChange={(e) => setSortAsc(e.target.checked)}
          />
          <PriceSlider
            value={value}
            onChange={(event, value) => {
              Array.isArray(value) && setValue(value);
            }}
          />
        </div>
        <div className="login-action">
          <Button label="S'inscrire" />
          <Button label="Se connecter" />
        </div>
        <Button label="Vends tes articles" color="secondary" />
      </header>
      <div className="splash">
        <img src={tear} alt="tear" className="tear" />
        <div className="slogan">
          <div>
            <span>Prêts à faire du tri dans vos placards ?</span>
            <Button label="Commencer à vendre" color="secondary" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
