import { useState } from "react";
import Logo from "../components/header/Logo";
import SearchBar from "../components/header/SearchBar";
import SortPrice from "../components/header/SortPrice";
import PriceSlider from "../components/header/PriceSlider";
import Button from "../components/header/Button";

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
        <div className="actions">
          <Button label="S'inscrire" />
          <Button label="S'inscrire" />
          <Button label="S'inscrire" color="secondary" />
        </div>
      </header>
    </>
  );
};
export default Home;
