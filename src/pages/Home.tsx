import { type Drink } from "../types";
import { fetcher } from "../helpers";
import useSWR from "swr";

const Home = () => {
  const { data, isLoading, error } = useSWR<{ drinks: Drink[] }>(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    fetcher
  );
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {data && (
        <div className="random-image">
          <h1>{data.drinks[0].strDrink}</h1>
          <img
            src={data.drinks[0].strDrinkThumb}
            alt={data.drinks[0].strDrink}
          />
        </div>
      )}
    </>
  );
};
export default Home;
