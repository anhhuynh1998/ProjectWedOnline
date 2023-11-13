
import ProductList from "./ProductList";

const HomeProductPrice = () => {

    return (
        <section className="htc__product__area ptb--30 bg__white">
            <div className="container">
                <div className="htc__product__container">
                    {/* Start Product MEnu */}
                   
                    {/* End Product MEnu */}
                    <div className="row">
                        <ProductList />
                        {/* End Single Product */}
                    </div>
                </div>
            </div>
        </section >
    )
}



export default HomeProductPrice