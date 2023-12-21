
import { useState } from "react";
import HomeProductPrice from "./HomeProductPrice";
import LoginAndRegister from "../LoginAndRegister";

const HomePage = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

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
                        height: "400px"
                    }}
                >
                    <div className="ht__bradcaump__wrap ">
                        <div className="container ">
                            <div className="row ">
                                <div className="col-xs-12 ">
                                    <div className="bradcaump__inner text-center " style={{ paddingLeft: "530px" }}
                                        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                        <h1 className={`bradcaump-title animate__animated ${isHovered ? 'animate__bounceInDown' : ''}`}
                                            style={{ color: "white" }}>Chúc Mừng Giáng Sinh</h1>
                                        <br />
                                        <h1 className={`bradcaump-title animate__animated ${isHovered ? 'animate__bounceInUp' : ''}`}
                                            style={{ color: "white" }}>Giảm Đến 70%</h1>
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
            <LoginAndRegister />
        </div >
    )
}
export default HomePage;

// import styles from './YourComponent.module.css'; // Import your CSS file

