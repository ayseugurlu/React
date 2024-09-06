import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
//   brandsSuccess,
  fetchStart,
//   firmsSuccess,
  getStockSuccess,
} from "../features/stockSlice";
import axios from "axios";

const useStockCall = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  // const getFirms = async () => {
  //     dispatch(fetchStart)

  //     try {
  //       const {data} =await axios(`${import.meta.env.VITE_BASE_URL}firms` , {
  //         headers : {
  //             Authorization: `Token ${token}`
  //         }
  //       })

  //       console.log(data);
  //       dispatch(firmsSuccess(data))
  //     } catch (error) {
  //       console.log(error);
  //     }

  // }

  const getStockData = async (endpoint) => {
    dispatch(fetchStart);

    try {
      const { data } = await axios(
        `${import.meta.env.VITE_BASE_URL}${endpoint}`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      console.log(data);
      dispatch(getStockSuccess({ stock: data.data, endpoint }));
    } catch (error) {
      console.log(error);
    }
  };

  // const getBrands = async () => {
  //     dispatch(fetchStart)

  //     try {
  //       const {data} =await axios(`${import.meta.env.VITE_BASE_URL}brands` , {
  //         headers : {
  //             Authorization: `Token ${token}`
  //         }
  //       })

  //       console.log(data);
  //       dispatch(brandsSuccess(data))
  //     } catch (error) {
  //       console.log(error);
  //     }

  // }

  return { getStockData };
};

export default useStockCall;
