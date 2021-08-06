import { useState } from "react";
import Logo from "../components/header/Logo";
import SearchBar from "../components/header/SearchBar";
import SortPrice from "../components/header/SortPrice";
import PriceSlider from "../components/header/PriceSlider";
import Button from "../components/header/Button";

import "./Header.scss";

const Home = () => {
  const [sortAsc, setSortAsc] = useState(true);

  const [value, setValue] = useState<number[]>([10, 100]);

  return (
    <>
      <header>
        <Logo className="logo" />
        <div className="filters">
          <SearchBar />
          <SortPrice
            checked={sortAsc}
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
    </>
  );
};
export default Home;
