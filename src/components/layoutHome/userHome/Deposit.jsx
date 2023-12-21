import { useEffect, useState } from "react";
import Background from "./background";
import UserInfoService from "../../../service/homeService/userInfoService";
import formatPrice from "../formatPrice/FormatPrice";

const Deposit = () => {
    const [deposits, setDeposits] = useState([]);
    const [newDeposit, setNewDeposit] = useState([]);
    const [selectedId, setSelectedId] = useState(1);
    useEffect(() => {
        async function listDeposit() {
            let response = await UserInfoService.showProductByUser();
            console.log(response.data);
            setDeposits(response.data);
            setNewDeposit(response.data);
        }
        listDeposit();
    }, [])

    const sold = () => {
        setDeposits(newDeposit.filter(e => e.paid === true));
        setSelectedId(2);
    }
    const onsale = () => {
        setDeposits(newDeposit.filter(e => e.paid === false));
        setSelectedId(3);
    }
    const all = () => {
        setDeposits(newDeposit);
        setSelectedId(1);
    }

    return (
        <div>
            <div className="body__overlay" />
            <Background message={"Thông Tin Ký Gởi"}
                img={"rgba(0, 0, 0, 0) url(http://localhost:5173/images/bg/userinfo.jpeg) no-repeat scroll center center / cover"} />
            <div className="container mt-5">
                <div className="container">
                    <div className="product__menu">
                        <button onClick={() => all()} style={{ color: selectedId === 1 ? 'red' : '' }}>All</button>
                        <button onClick={sold} style={{ color: selectedId === 2 ? 'red' : '' }}>Đã Bán</button>
                        <button onClick={onsale} style={{ color: selectedId === 3 ? 'red' : '' }}>Đang Bán</button>
                    </div>
                </div>
                {
                    deposits?.map((item, index) => {
                        const formattedPrice = formatPrice(item.price);
                        return (
                            <div className=" card mb-3 mt-5" style={{ maxWidth: "100%" }} key={index}>
                                <div className="d-flex justify-content-between">
                                    <p className="card-text mt-4 ms-3 ">
                                        <small className="text-muted">Ngày Ký Gởi : </small>
                                    </p>
                                    <p className="text-success  mt-3 mb-3 me-3"  >
                                        <i className="fa-brands fa-shopify me-3"></i>{item.paid === false ? "Sản Phẩm Đang Bán" : "Sản Phẩm Đã Bán"}</p>
                                </div>
                                <div className="" >
                                    <div className="row justify-content-between">
                                        <div className="col-md-1 mt-1">
                                            {
                                                item.imageUrl ? <img src={item.imageUrl} style={{ height: "80px", width: "80px" }} /> :
                                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAJ1BMVEXt7e3V1dXW1tbm5ubs7Ozg4ODc3NzS0tLw8PDo6OjZ2dnj4+Pe3t5T9WAhAAAEmklEQVR4nO2ciXKsIBBFsQUB9f+/9+EuKjPEpe2X3FOVSTJlAmdaWRpUKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8Pbnh9mr4Uza+nnSpbChTTy0M/hNfKeNeXyIshW/BReaVZ4+h8zSY3lESG008rz+a30LIqFpbYDa1huxC1qovQDHAbUuG5DF3Tl8cmORdTs/Ua9VxuzUHXaA+WnsnQD90EUa1ZPlRtChoMuRobs5w0PLiGphJ5YlgNxVnGHrgeTlOuIkdD4imtx/B+qKNhzThOLF8xJE5D+4ohT2k9MLwZGD4ADG8Ghg8Aw5uB4QPINRxqdH14J9awmyG7summ5tfqJthQO1NY21wtUrKh7zJW9mqWTLLhcPDV9INYQ6XHqhXGXaqcXEM1L2/4S2k5qYbaNfP61LXEnFRDpWhJize/MIbrEAau1E6qoV75FfZKwlqmoVYmWiWmUp1ex5VpqKIQdhdkOG9/l2EcwuDYnu4UZRrq7frihSVOgYahKm2xUzw9eBNoqJy3O8Pi9CRDoqGqhv0+UQzpbKco0bAs9iEMVOeKlGeoVWpH0bnBmzxD5VMbbuhUJQUapkJI9tR5Ks+w+bBnqnRxXqr7razMx30d8gzTu4nI1nE1O8HWfkl0SDN0TXq7lKUwyYgqqrvDw9uftq1JM9RftoP57eF09PYaYYbOpNRG6vUIXLtqrH6bPk+FGX4LYdcpLripVSJbupSjMMNvISyiwZsu5sFdOlsly1Afa8Xn6Xzw9N96geTAXJShazMMi3I4WOsmejtlIMowbws4jRmbOOA2tV1dkGFoGbMMu9O0q24VZzpSSziCDKfttV8iSGOSv9wODRKjVkGGrs7Z/G0b1w/XdDy6Cz/b8rBIQYal3U7sj6j70WhoR+12AEt02CVKMdTpWVNk0TeZ4as5SgM0R8NTIYZDnTMYL7bjjpOO8uJCDFVeCKebX1Kt7tEcQ4xhXgjH/dPJgw96DCmGuyz3MdQ1pc4nj632QRRi+HXWNNJNghvz4cPwO0Uhht9nTeMfhqp+PGCf0BBimBnC8a8/fRzNdpFKhmFuCDOoZcYwa9aUyXZFXIThrTfO0qbHeN1QL+/exKbHeN1QZc6a8tnMMV431GHWdPM9s3W07/Z1Q+XKgxXfS8RZqfcN84bcP4LW6zfvG2YOuX9EGwavk9HrhvqBEEYbNt82/LTWdIFVVuptwweuwp6l23/bUD/zHJfVbsa3Df3nmcJpltP0bcPwziNR9GJaGqUbU91LG1g9BeN9w2v3GiSR0x8+9AAQSWOap4Hhzfx6Q1eNzxdiKU1F6yFshn0ILdPjcPoUCU2GLGVOeVG2p4u5aZWK68Lw/Vkavswdt/jmFDiN7A9WNB5hSf3WhoPpFKXrd9tmCi63irA8sI3mb+f2F58xvDF/n6VIwytXCFW/2Y7zyZ6TJVv3pPpnxPGzW655Ere9a+tpqLAVp2D/BNOa1TG54+1JfMXW4JDhDeCM9r5kwL+k92d4/vNFBAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4Y/wDpoY2HBKwqLIAAAAASUVORK5CYII=" alt="" />
                                            }

                                        </div>
                                        <div className="col-md-9">
                                            <div>
                                                <p className="text-dark">{item.description}</p>
                                            </div>
                                            <div className="mb-1">
                                                <small className="text-muted">X1</small>
                                                <div className="text-muted">Size : {item.size} </div>
                                            </div>
                                        </div >
                                        <div className="col-md-1 ms-3 align-self-center ">
                                            <p className="text-danger justify-content-end  me-3 ">{formattedPrice}</p>
                                        </div>
                                    </div>
                                    <hr className="mt-1 mb-1" />
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div >
    );
};

export default Deposit;
