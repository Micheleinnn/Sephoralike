import React, { useContext, useState } from "react";
import axios from "axios";

// syntax
export const SephoraContext = React.createContext(null);

// predani klicu z api portalu + nastaveni hlavni url + vytvoreni clienta
const client = axios.create({
  baseURL: "https://sephora.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": import.meta.env.X_RapidAPI_Key,
    "X-RapidAPI-Host": import.meta.env.X_RapidAPI_Host,
  },
});
// xkn3gqgpxa.execute-api.eu-central-1.amazonaws.com/categories
// xkn3gqgpxa.execute-api.eu-central-1.amazonaws.com/products
// xkn3gqgpxa.execute-api.eu-central-1.amazonaws.com/products
// xkn3gqgpxa.execute-api.eu-central-1.amazonaws.com/products/42762

export const SephoraProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  //nastaveni usestatu settrem setTracks do promenne tracks
  const [cosmetic, setCosmetic] = useState({});
  const [brands, setBrands] = useState({});

  //api call. na clientovi se zavolala funkce get , jejiz parametr je endpoint url, druhy parametr je config, ktery obsahuje objekt params, coz jsou povinne props, aby tento endpoint mohl byt definovany, je to povinne z rapid api
  const getCosmetic = async () => {
    const responseCosmetic = await client.get("products/v2/list", {
      params: {
        number: "1",
        size: "1000",
        country: "SG",
        language: "en-SG",
        sort: "sales",
      },
    });
    console.log(responseCosmetic, "responseCosmetic");
    setCosmetic(responseCosmetic.data);
  };
  // vytvoreni asynchronni funkce, tuto funkci sme vytvorili kvuli tomu, protoze UseEffect neumi pracovat s funkci async-await
  const searchCosmetic = async () => {
    await getCosmetic();
  };
  const searchBrands = async () => {
    const responseBrands = await client.get("brands/v2/list", {
      params: {
        number: "1",
        size: "1000",
        country: "SG",
        language: "en-SG",
        sort: "sales",
      },
    });
    console.log(responseBrands, "responseBrands");
    setBrands(responseBrands.data);
  };

  return (
    <SephoraContext.Provider
      value={{
        searchCosmetic,
        getCosmetic,
        searchBrands,
        cosmetic,
        brands,
      }}
    >
      {children}
    </SephoraContext.Provider>
  );
};
//custom hook s funkci na odhaleni zapomenuti providera
export const useSephoraContext = () => {
  const context = useContext(SephoraContext);
  if (!context) {
    throw Error("Unable to init context: SephoraContext");
  }
  return context;
};
