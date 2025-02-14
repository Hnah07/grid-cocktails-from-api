import useSWR from "swr";
import { fetcher } from "../helpers";
import { type Cocktail } from "../types";
import { useParams } from "react-router";

const CocktailDetail = () => {
  const { id } = useParams();
  const {
    data: cocktail,
    // isLoading,
    // error,
  } = useSWR<Cocktail>(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
    fetcher
  );

  return (
    <>
      {cocktail && (
        <div className="cocktail-detail">
          <h1>{cocktail.drinks[0].strDrink}</h1>
          <img
            src={cocktail.drinks[0].strDrinkThumb}
            alt={cocktail.drinks[0].strDrink}
          />
        </div>
      )}
    </>
  );
};

export default CocktailDetail;
