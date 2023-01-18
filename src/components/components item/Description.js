const Description = (props) =>{
    return(
        <div className="cardDescription">
            <h3 className="Title">
                {props.title}
            </h3>

            <div className="description">
                <span className="descriptionTitle">Descripción</span>
                <p className="parrafo">
                    {props.parrafo}
                </p>
            </div>

            <span className="cant">
                Cantidad: {props.cantidad}
            </span>

            <div className="precio">
                ${props.precio}
            </div>

        </div>
    )
}   

export default Description;