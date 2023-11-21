
const ListFile = ({ listFile, count }) => {
    return (
        <div className="carousel-inner">
            {
                listFile?.map((image, index) => {
                    const active = index === count ? "active" : ""
                    const curren = count === 0 ? "true" : "false"
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
    )
}
export default ListFile;