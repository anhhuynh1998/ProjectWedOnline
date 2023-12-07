/* eslint-disable no-inner-declarations */
import { useEffect, useState } from "react";
import { ProductService } from "../../../service/admin/product/productService";
import 'animate.css';
import { UserService } from "../../../service/admin/user/userService";
const RevenueStatistics = () => {
    const [userscount, setUsersCount] = useState(0);
    const [productCount, setProductCount] = useState(0);

    useEffect(() => {
        try {
            async function productList() {
                let response = await ProductService.countProduct();
                setProductCount(response.data.content.length);
            }
            productList()
        } catch (error) {

        }
    }, [])

    useEffect(() => {
        try {
            async function usersList() {
                let respone2 = await UserService.countUsers();
                setUsersCount(respone2.data.content.length)
            }  
            usersList()
        }catch (error) {
        }
    }, [])

    
    return (
        <div>
            <div className="row ">
                {productCount > 0 &&
                    // animate__animated  animate__fadeInDown: hiệu ứng animation
                    <div className="col-sm-6 animate__animated  animate__fadeInDown" >
                        <div className="card shadow-sm bg-body " id="cardBorder" >
                            <div className="card-body">
                                <h5 className="card-title " id="iconRevenue1" >Danh Sách Sản Phẩm Hiện Có</h5>
                                <h4 className="card-text text-dark pt-2">{productCount}</h4>
                                <i className="fa-solid fa-list-check " id="iconRevenue"></i>
                            </div>
                        </div>
                    </div>

                }

                {/* animate__animated  animate__fadeInDown: hiệu ứng animation */}
                {
                    userscount > 0 &&
                    <div className="col-sm-6 animate__animated  animate__fadeInDown">
                    <div className="card shadow-sm bg-body " id="cardBorder"  >
                        <div className="card-body">
                            <h5 className="card-title " id="NumberUsers1">Số Lượng Người Dùng</h5>
                            <h4 className="card-text text-dark pt-2">{userscount}</h4>
                            <i className="fa-solid fa-users" id="NumberUsers"></i>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    );
};

export default RevenueStatistics;