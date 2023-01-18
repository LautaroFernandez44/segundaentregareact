import Brand from "./Brand";
import ItemsListContainer from "./ItemsListContainer";
import CardWidget from "./CardWidget";


const NavBar = () => {
    return (
        <header>
            <div className="containerBrand">
            <Brand/>
            </div>
            <nav className="containerItemList">
                <ItemsListContainer 
                    itemUno = "Procesadores"
                    itemDos = "Tarjetas Gráficas"
                    itemTres = "Memorias Ram"
                    itemCuatro = "Díscos Sólidos"

                
                />

                

            </nav>

            <div className="containerCart">
                <CardWidget/>
            </div>
        </header>
    )
}

export default NavBar;