import Button from "./Button";
function Card({ id, name, price, desc, img, qty, updateQty }) {
  return (
    <>
      <div className="card">
        <img src={img}></img>
        <p>{name}</p>
        <p>{price}</p>
        <p>{desc}</p>
        <Button updateQty={updateQty} id={id} qty={qty}>
          +
        </Button>
        {/* <button onClick={()=>updateQty(id,"add",qty)}>+</button> */}
        <span>{qty}</span>
        <Button updateQty={updateQty} id={id} qty={qty}>
          -
        </Button>
      </div>
    </>
  );
}
export default Card;
