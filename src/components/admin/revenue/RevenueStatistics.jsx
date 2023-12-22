/* eslint-disable no-inner-declarations */
import { useEffect, useState } from "react";
import { ProductService } from "../../../service/admin/product/productService";
import 'animate.css';
import { UserService } from "../../../service/admin/user/userService";
import { CartService } from '../../../service/admin/cart/cartService';
import { ToastError } from "../../../toastify/Toast";
const RevenueStatistics = () => {
    const [percentDay, setPercentday] = useState(0);
    const [productSold, setProductSold] = useState("");

    const [userscount, setUsersCount] = useState(0);
    const [productCount, setProductCount] = useState(0);

    useEffect(() => {
        try {
            async function productList() {
                let countProduct = await ProductService.countProduct();
                console.log(countProduct)
                setProductCount(countProduct.data);

                let countUsers = await UserService.countUsers();
                setUsersCount(countUsers.data.content.length)
            }
            productList()
        } catch (error) {
            console.log(error, "Sản phẩm hoặc user bị lỗi");
        }
    }, [])

    useEffect(() => {
        try {
            // eslint-disable-next-line no-inner-declarations
            async function soldProductOnDay() {
                let soldProduct = await CartService.soldProduct();
                setProductSold(soldProduct.data.length);
            }
            soldProductOnDay()
        } catch (error) {
            console.log(error, "Lỗi");
        }
    })
    useEffect(() => {
        try {
            // eslint-disable-next-line no-inner-declarations
            async function PercentDay() {
                let percentDay = await CartService.percentTheDay();
                setPercentday(percentDay.data.totalPrice);
                console.log(percentDay.data.totalPrice, "mmmmm");
            }
            PercentDay();

        } catch (error) {
            ToastError("Doanh thu bị lỗi");
        }
    }, [])
    return (
        <div >
            <div className="row ">
                {productCount > 0 &&
                    // animate__animated  animate__fadeInDown: hiệu ứng animation
                    <div className="table animate__animated  animate__fadeInDown" >
                        <div className="card shadow-sm bg-body " id="cardBorder" >
                            <div className="card-body">
                                <h5 className="card-title text-center" id="iconRevenue1" >Danh Sách Sản Phẩm Hiện Có</h5>
                                <h4 className="card-text text-dark pt-2 text-center">{productCount}</h4>
                                <i className="fa-solid fa-list-check " id="iconRevenue"></i>
                            </div>
                        </div>
                    </div>

                }

                {/* animate__animated  animate__fadeInDown: hiệu ứng animation */}
                {
                    userscount > 0 &&
                    <div className=" animate__animated  animate__bounceInLeft">
                        <div className="card shadow-sm bg-body " id="cardBorder"  >
                            <div className="card-body">
                                <h5 className="card-title text-center" id="NumberUsers1">Số Lượng Người Dùng</h5>
                                <h4 className="card-text text-dark pt-2 text-center">{userscount}</h4>
                                <i className="fa-solid fa-users" id="NumberUsers"></i>
                            </div>
                        </div>
                    </div>
                }
                <div className=" animate__animated animate__fadeInUp">
                    <div className="card shadow-sm bg-body " id="cardBorder" >
                        <div className="card-body">
                            <h5 className="card-title text-center" id="ProductsSold1">Sản Phẩm Đã Bán Trong Ngày</h5>
                            <h4 className="card-text text-dark pt-2 text-center">{productSold}</h4>
                            <i className="fa-solid fa-hand-holding-dollar" id="ProductsSold"></i>
                        </div>
                        <h5 id='revenueh5' className={percentDay < 0 ? 'text-danger' : 'text-success'} > {percentDay.toFixed(0)}%</h5>
                        <div>
                            {percentDay < 0 ? <i className="fa-solid fa-arrow-down fa-2xs text-danger animate__animated animate__flash" id='arrow'>
                            </i> : <i className="fa-solid fa-arrow-up fa-2xs text-success animate__animated animate__flash" id='arrow'></i>}
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default RevenueStatistics;