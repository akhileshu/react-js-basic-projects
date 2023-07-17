function Button({ children, updateQty, id, qty }) {
  function handleClick() {
    if (children === "+") updateQty(id, "add", qty);
    else if (children === "-") updateQty(id, "reduce", qty);
    else updateQty(id, "remove");
  }
  return <button onClick={handleClick}>{children}</button>;
}
export default Button;
