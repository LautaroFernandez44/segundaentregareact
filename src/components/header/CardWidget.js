import shop from "../../img/shop.svg"

const CardWidget=()=>{
    return(
        <div className="containerLength">
            <img src={shop} alt="card"></img>
            <span classname="cantCard">
                1
            </span>
        </div>
        
    )
}

export default CardWidget;