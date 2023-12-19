/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Background = ({ message, img, heigh, animateH2, animateNav }) => {
    return (
        <div>
            <div
                className="ht__bradcaump__area"
                style={{
                    background: `${img}`,
                    height: `${heigh}`
                }}
            >
                <div className="ht__bradcaump__wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="bradcaump__inner text-center">
                                    <h2 className={`bradcaump-title text-white ${animateH2}`}>{message}</h2>
                                    <nav className={`bradcaump-inner `} >
                                        <NavLink className={`breadcrumb-item text-white ${animateNav}`} to={'/home'} >
                                            Trang Chủ
                                        </NavLink>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Background;