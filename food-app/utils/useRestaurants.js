import { useState, useEffect } from "react";
import { RESTAURANT_URL } from "../utils/common.js";

export const useRestro = () => {
  const [restro, setRestro] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  async function checkJsonData(jsonData) {
    let data = [];
    for (let i = 0; i < jsonData?.data?.cards.length; i++) {
      // initialize checkData for Swiggy Restaurant data
      let checkData = jsonData?.data?.cards[i]?.card?.card?.info;
      // if checkData is not undefined then return it
      if (checkData !== undefined) {
        data.push(checkData);
      }
    }
    return data;
  }

  async function fetchData() {
    try {
      const resposne = await fetch(RESTAURANT_URL);
      setTimeout(async () => {
        if (resposne) {
          const json = await resposne?.json();

          // call the checkJsonData() function which return Swiggy Restaurant data
          const resData = await checkJsonData(json);
          if (JSON.stringify(resData) !== JSON.stringify(restro)) {
            const isNotEqual = resData.every((value, index) => {
              return restro[index]?.name !== value?.name;
            });
            if (isNotEqual) {
              setRestro(resData);
            }
          }
        }
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  }

  return restro;
};
