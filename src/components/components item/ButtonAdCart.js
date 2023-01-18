import CartViolet from "../../img/cart-violet.svg"

const ButtonAddCart = () =>{
    return(
        <button id="AddCart">
            <img src={CartViolet} alt="add"></img>
        </button>
    )
}

export default ButtonAddCart;