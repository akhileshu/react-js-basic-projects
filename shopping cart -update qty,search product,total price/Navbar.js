function Navbar({switchPage}){
return(
    <div className="navbar-container">
    <button onClick={() => switchPage('shop')}>shop</button>
    <button onClick={() => switchPage('cart')}>cart</button>
  </div>
)
}
export default Navbar