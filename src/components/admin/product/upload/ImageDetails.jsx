
import React from 'react'
import Slider from "react-slick";



const ImageDetails = ({
    selectedFiles,
}) => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div style={{ border: "solid 1px", height: "70%" }}>
            <Slider {...settings}>
                {
                    selectedFiles && selectedFiles.map((file, index) => (
                        <div key={index} className="image-container">

                            <img
                                src={file.url}
                                alt={file}
                                className="product-image"
                                style={{
                                    width: "70%",
                                    height: "70%",
                                    margin: "5px",
                                    border: "solid 1px"
                                }}
                            />
                        </div>
                    ))
                }




            </Slider >

        </div >
    )
}

export default ImageDetails
