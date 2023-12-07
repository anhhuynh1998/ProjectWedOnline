import React, { useEffect, useState } from 'react';
import { CartService } from '../../../service/admin/cart/cartService';

const Sales = () => {
    const [productSold, setProductSold] = useState("");

    useEffect(() => {
        try {
            // eslint-disable-next-line no-inner-declarations
            async function soldProductOnDay() {
                let response = await CartService.soldProduct();
                setProductSold(response.data.length)
            }
            soldProductOnDay()
        } catch (error) {

        }
    })
    // const data = [
    //     {
    //         title: 'Danh Sách Sản Phẩm Hiện Có',
    //         icon: 'fa-solid fa-list-check',
    //         countToday: 10,
    //         countYesterday: 20,
    //     },
    //     {
    //         title: 'Danh Sách Sản Phẩm Hiện Có',
    //         icon: 'fa-solid fa-list-check',
    //         countToday: 10,
    //         countYesterday: 20,
    //     }
    // ]

    return (
        <div >
            <div className="row">
                <div className="col-sm-6 animate__animated animate__fadeInUp">
                    <div className="card shadow-sm bg-body " id="cardBorder" >
                        <div className="card-body">
                            <h5 className="card-title " id="ProductsSold1">Sản Phẩm Đã Bán Trong Ngày</h5>
                            <h4 className="card-text text-dark pt-2">{productSold}</h4>
                            <i className="fa-solid fa-hand-holding-dollar" id="ProductsSold"></i>
                        </div>
                        <h5 id='revenueh5'>-12%</h5>
                        <div>
                            <i className="fa-solid fa-arrow-up fa-2xs" id='arrow'></i>
                            {/* <i className="fa-solid fa-arrow-down fa-2xs" id='arrow'></i> */}
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 animate__animated animate__fadeInUp">
                    <div className="card shadow-sm bg-body" id="cardBorder" >
                        <div className="card-body">
                            <h5 className="card-title " id="arrowRevenue1">Doanh Thu Theo Quý</h5>
                            <h4 className="card-text text-dark pt-2">30</h4>
                            <i className="fa-solid fa-chart-line" id="RevenueQuarter"></i>
                        </div>
                        <h5 id='revenueh5'>-12%</h5>
                        <div>
                            <i className="fa-solid fa-arrow-up fa-2xs" id='arrowRevenue'></i>
                            {/* <i className="fa-solid fa-arrow-down fa-2xs" id='arrowRevenue'></i> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sales;