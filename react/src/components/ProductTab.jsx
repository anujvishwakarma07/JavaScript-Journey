import React from 'react'
import Price from './Price'

const ProductTab = ({title, idx}) => {
  const style = {
    display : "flex",
    flexWrap : "wrap",
    justifyContent : "center",
    alignItems : "center",
  }


  const oldPrices = [3000, 5000, 6000, 1000];
  const newPrices = [10000, 20000, 40000, 50000];
  const description = [["admirable", "gorgeous"], ["ashthetic", "embarrasing"], ["panctual", "always"], ["stylish", "asynchronous"]]
  return (
    <div className='product-tab'>
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrices = {oldPrices[idx]} newPrices = {newPrices[idx]} />
    </div>
  )
}


export default ProductTab
