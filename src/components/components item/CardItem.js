import "../../styles/cardItem.css"
import Image from "./Image";
import Description from "./Description";
import Buttondetalles from "./Buttondetalles";
import ButtonAddCart from "./ButtonAdCart";
import ImgPrueba from "../../img/prueba.svg"

const CardItem = () => {
    return(
        <div className="cardItem">
            <Image imagen={ImgPrueba} />
            <Description 
                title="Tarjeta Gráfica RX 6700xt ROG STRIX" 
                cantidad= {5}
                precio={178300}
                />
            <div className="buttons">
                <Buttondetalles/>
                <ButtonAddCart/>
            </div>

        </div>
    )
}

export default CardItem;