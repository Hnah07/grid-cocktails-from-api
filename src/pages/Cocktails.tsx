import { type Drink } from "../types";
import { fetcher, slugit } from "../helpers";
import useSWR from "swr";
import { Link } from "react-router";

const Cocktails = () => {
  console.log("Rendering Cocktails component...");
  const { data, isLoading, error } = useSWR<{ drinks: Drink[] }>(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=lemon",
    fetcher
  );
  return (
    <>
      <h1>Cocktails</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {data && (
        <ul className="cocktails">
          {data &&
            data.drinks.map((drink: Drink) => (
              <li key={drink.idDrink}>
                <Link
                  to={`/cocktails/${drink.idDrink}/${slugit(drink.strDrink)}`}
                >
                  <div>
                    <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                  </div>
                </Link>
                <p>{drink.strDrink}</p>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};
export default Cocktails;
