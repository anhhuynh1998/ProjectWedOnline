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
                            listFile?.map((image, imageIndex) => {
                                // const active = imageIndex === index ? "active" : ""
                                return (
                                    <div key={imageIndex}>
                                        <div className={`carousel-item ${imageIndex === 0 ? "active" : ""}`}
                                            data-bs-interval="4000">
                                            <img src={image} className="d-block w-100" alt="big images" />
                                            <div className="carousel-caption d-none d-md-block"> </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div >
    )
}
export default ListFile;
