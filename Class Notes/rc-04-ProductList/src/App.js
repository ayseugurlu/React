import "./App.scss";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import {categories,products} from "./helper/data" 

function App() {
  // console.log(products);
  return (
    <div className="App">
      <Header categories={categories}/>
      <Products products={products}/>
    </div>
  );
}

export default App;
