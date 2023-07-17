import "./App.css";
import {useState } from "react";
import shopItemsData from "./data";
import Shop from "./Shop";
import Cart from "./Cart";
import Navbar from "./Navbar";

function App() {
  const [items, setItems] = useState(shopItemsData);
  const [page, setPage] = useState("shop");
  
  // calculating cartitems and totalprice on basis of items state variable
  const cartItems = items.filter((item) => item.qty >= 1);
  function switchPage(page) {
    setPage(page);
  }

  const totalPrice = cartItems.reduce(
    (prevTotal, item) => prevTotal + item.price * item.qty,
    0
  );

  // item id,nature->add or reduce or remove
  function updateQty(id, nature, currentQty = 0) {
    let updatedQty;
    if (nature == "add") {
      updatedQty = currentQty + 1;
    } else if (nature == "reduce") {
      updatedQty = currentQty - 1;
    }
    if (nature == "remove" || updatedQty < 0) {
      updatedQty = 0;
    }

    // const itemIndex = items.findIndex((item) => item.id === id);
    // const updatedItem = { ...items[itemIndex], qty: updatedQty };
    // const updatedItems = [...items];
    // updatedItems.splice(itemIndex, 1, updatedItem);

    // because just need to update data in one item
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, qty: updatedQty } : item
    );
    setItems(updatedItems);
  }
  function clearCart() {
    setItems(shopItemsData);
  }

  return (
    <>
      <Navbar switchPage={switchPage}></Navbar>
      {page === "shop" && <Shop items={items} updateQty={updateQty}></Shop>}
      {page === "cart" && (
        <Cart
          totalPrice={totalPrice}
          clearCart={clearCart}
          cartItems={cartItems}
          updateQty={updateQty}
        ></Cart>
      )}
    </>
  );
}
export default App;
