import Card from "./Card";
import CartCard from "./CartCard";


function Cart({ cartItems, updateQty, clearCart, totalPrice }) {
  return (
    <>
      <div className="cart-label">
        <h3>cart</h3>
        {!cartItems.length && <div>your cart is empty</div>}
        {cartItems.length > 0 && (
          <div>
            <button onClick={clearCart}>clear cart</button>
            <div>
              <span>total : ₹{totalPrice}</span>
            </div>
          </div>
        )}
      </div>
      <div className="cart-container">
        {cartItems.map((item) => {
          const { id, name, price, desc, img, qty } = item;
          return (
            <CartCard
              key={id}
              {...item}
              cartItems={cartItems}
              updateQty={updateQty}
            ></CartCard>
          );
        })}
      </div>
    </>
  );
}
export default Cart;
