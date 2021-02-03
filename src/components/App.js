import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [darkOrLightMode, setDarkOrLightMode] = useState(false)

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  function handleClick(){
    setDarkOrLightMode(!darkOrLightMode)
  }

  return (
    <div className={"App " + (darkOrLightMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{darkOrLightMode ? "Dark" : "Light"} Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
