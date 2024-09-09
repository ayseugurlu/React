import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFail,
//   brandsSuccess,
  fetchStart,
//   firmsSuccess,
  getStockSuccess,
} from "../features/stockSlice";
import axios from "axios";
import useAxios from "./useAxios";

const useStockCall = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const axiosWithToken = useAxios()

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
      // const { data } = await axios(
      //   `${import.meta.env.VITE_BASE_URL}${endpoint}`,
      //   {
      //     headers: {
      //       Authorization: `Token ${token}`,
      //     },
      //   }
      // );

      const {data} =await axiosWithToken.get(endpoint)

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

  const deleteStockData = async (endpoint,id) => {
    dispatch(fetchStart);
    try {
      // await  axios.delete(`${import.meta.env.VITE_BASE_URL}${endpoint}/${id}`,
      //   {
      //     headers: {
      //       Authorization: `Token ${token}`,
      //     },
      //   }
      // )
       await axiosWithToken.delete(`${endpoint}/${id}`)
      
    } catch (error) {
      console.log(error);
      dispatch(fetchFail())
      
    }finally{
      getStockData(endpoint)
    }
  }

  const postStockData = async (endpoint,info) => {
    dispatch(fetchStart);

    try {
      const {data} =await axiosWithToken.post(endpoint,info)

    
    } catch (error) {
      console.log(error);
      dispatch(fetchFail())
    }finally{
      getStockData(endpoint)
    }
  };
  const putStockData = async (endpoint,info) => {
    dispatch(fetchStart);

    try {
      const {data} =await axiosWithToken.put(`${endpoint}/${info._id}` ,info)

    
    } catch (error) {
      console.log(error);
      dispatch(fetchFail())
    }finally{
      getStockData(endpoint)
    }
  };
  return { getStockData,deleteStockData, postStockData,putStockData};
};

export default useStockCall;
