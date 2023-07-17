import { useState, useEffect } from "react";
import Card from "./Card";


function Shop({ items, updateQty }) {
  const [searchInput, setSearchInput] = useState(""); // New state to store the search input
  const [showItems, setShowItems] = useState(items);  // New state to store the searched items

  function showSearch(input) {
    setSearchInput(input); // Update the search input state
  }

  // Reset showItems to the original items whenever the 'items' prop or search input changes
  useEffect(() => {
    if (searchInput === "") {
      setShowItems(items);
    } else {
      const filteredItems = items.filter((item) => item.name.toLowerCase().startsWith(searchInput.toLowerCase()));
      setShowItems(filteredItems);
    }
  }, [items, searchInput]);

  return (
    <>
      <h3 className="shop-title">shop</h3>
      <input type="text" placeholder="search here" onChange={(e) => showSearch(e.target.value)} />
      <div className="shop-container">
        {showItems.map((item) => (
          <Card key={item.id} {...item} items={items} updateQty={updateQty} />
        ))}
      </div>
    </>
  );
}

export default Shop;
