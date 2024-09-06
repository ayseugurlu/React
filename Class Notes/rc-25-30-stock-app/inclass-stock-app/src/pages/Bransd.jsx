import React, { useEffect } from 'react'
import useStockCall from '../hooks/useStockCall'

const Bransd = () => {

  const {getBrands,getStockData} = useStockCall()

  useEffect(()=> {
    // getBrands()
    getStockData("brands")
  })
  return (
    <div>Bransd</div>
  )
}

export default Bransd