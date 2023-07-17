import Button from "./Button";
function CartCard({ id, name, price, img, qty, updateQty }) {
  return (
    <>
      <div className="cart-card">
        <img src={img}></img>
        <p>{name}</p>
        <p>{price}</p>
        <Button updateQty={updateQty} id={id} qty={qty}>
          +
        </Button>

        <span>{qty}</span>
        <Button updateQty={updateQty} id={id} qty={qty}>
          -
        </Button>
        <Button updateQty={updateQty} id={id} qty={qty}>
          remove
        </Button>
      </div>
    </>
  );
}
export default CartCard;
