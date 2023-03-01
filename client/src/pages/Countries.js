import { useEffect, useContext } from "react";
import { LoadingContext } from "../context/load.context";
import { Link } from "react-router-dom";

const Countries = () => {
  const { countries, getCountries, findCountry } = useContext(LoadingContext);
  const getPhoto = (code) => {
    return `https://flagpedia.net/data/flags/icon/72x54/${code.toLowerCase()}.png`;
  };

  let sort = (array) => {
    return array.sort((a, b) => a.name.common.localeCompare(b.name.common));
  };

  useEffect(() => {
    if (!countries) {
      getCountries();
    }
  }, []);

  return (
    <div>
      <div className="countries-container">
        {countries ? (
          <>
            {sort(countries).map((country) => {
              return (
                <Link
                  onClick={() => {
                    findCountry(country.alpha2Code);
                  }}
                  to={`/country/${country.alpha3Code}`}
                  key={country.alpha3Code}
                >
                  <div className="countries">
                    <img src={getPhoto(country.alpha2Code)} alt="flag" />
                    <h2>{country.name.common}</h2>
                  </div>
                </Link>
              );
            })}
          </>
        ) : (
          <h4>Loading...</h4>
        )}
      </div>
    </div>
  );
};

export default Countries;
