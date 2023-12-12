/* eslint-disable react/prop-types */

import { useContext } from "react"
import { UseProduct } from "../UseContext"

const ListFile = () => {
    const { listFile } = useContext(UseProduct);
    return (
        <div className="product-images" style={{ width: "602px" }}>
            <div className="main-image images">
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {
                            listFile?.map((image, index) => {
                                const active = index === 0 ? "active" : ""
                                const curren = index === 0 ? "true" : "false"
                                return (
                                    <>
                                        <div className="carousel-indicators" key={index} >
                                            <button type="button" data-bs-target="#carouselExampleDark"
                                                data-bs-slide-to={index} className={active}
                                                aria-current={curren}
                                                aria-label={`Slide ${index}`} >
                                            </button>
                                        </div>
                                        <div className={`carousel-item ${active}`}
                                            data-bs-interval="10000"
                                            key={index} >
                                            <img src={image} className="d-block w-100" alt="big images" />
                                            <div className="carousel-caption d-none d-md-block">
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>

    )
}
export default ListFile;