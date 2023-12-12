
import Login from "../Login";
import HomeProductPrice from "./HomeProductPrice";

const HomePage = () => {

    return (
        <div>
            <div>
                {/* Start Header Style */}
                <div className="body__overlay" />
                {/* Start Offset Wrapper */}
                <div className="offset__wrapper">
                    {/* Start Search Popap */}
                    <div className="search__area">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="search__inner">
                                        <form action="#" method="get">
                                            <input placeholder="Search here... " type="text" />
                                            <button type="submit" />
                                        </form>
                                        <div className="search__close__btn">
                                            <span className="search__close__btn_icon">
                                                <i className="zmdi zmdi-close" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="slide slider__full--screen"
                    style={{
                        background:
                            "rgba(0, 0, 0, 0) url(images/bg/thu.jpeg) no-repeat scroll center center / cover",
                        height: "500px"
                    }}
                >
                    <div className="ht__bradcaump__wrap ">
                        <div className="container ">
                            <div className="row ">
                                <div className="col-xs-12 ">
                                    <div className="bradcaump__inner text-center " style={{ paddingLeft: "530px" }}>
                                        <h2 className="bradcaump-title animate__animated  animate__flash" style={{ color: "white" }}>New Product Collection</h2>

                                        <a className="breadcrumb-item animate__animated animate__flip" style={{ color: "white" }}>
                                            Show Now
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Single Slide */}
                    </div>
                </div>
                {/* List Product */}
                <HomeProductPrice />
            </div>
            <Login />
        </div >
    )
}
export default HomePage;