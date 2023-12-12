import { useEffect, useState } from 'react';
import { CartService } from '../../../service/admin/cart/cartService';


const PercentTheDay = () => {
    // const [percentDay, setPercentday] = useState(0);
    // const [productSold, setProductSold] = useState("");

    // useEffect(() => {
    //     try {
    //         // eslint-disable-next-line no-inner-declarations
    //         async function soldProductOnDay() {
    //             let soldProduct = await CartService.soldProduct();
    //             setProductSold(soldProduct.data.length);

    //         }
    //         soldProductOnDay()
    //     } catch (error) {
    //         console.log(error, "Lỗi");
    //     }
    // })
    // useEffect(() => {
    //     try {
    //         // eslint-disable-next-line no-inner-declarations
    //         async function PercentDay() {
    //             let percentDay = await CartService.percentTheDay();
    //             setPercentday(percentDay.data.totalPrice);
    //             console.log(percentDay.data.totalPrice, "mmmmm");
    //         }
    //         PercentDay();

    //     } catch (error) {
    //         console.log(error, "doanh thu ngay");
    //     }
    // }, [])


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
    // console.log(percentDay, "");
    return (
        <div >
            {/* <div className="row">
                <div className="col-sm-6 animate__animated animate__fadeInUp">
                    <div className="card shadow-sm bg-body " id="cardBorder" >
                        <div className="card-body">
                            <h5 className="card-title " id="ProductsSold1">Sản Phẩm Đã Bán Trong Ngày</h5>
                            <h4 className="card-text text-dark pt-2">{productSold}</h4>
                            <i className="fa-solid fa-hand-holding-dollar" id="ProductsSold"></i>
                        </div>
                        <h5 id='revenueh5' className={percentDay < 0 ? 'text-danger' : 'text-success'} > {percentDay.toFixed(0)}%</h5>
                        <div>
                            {percentDay < 0 ? <i className="fa-solid fa-arrow-down fa-2xs text-danger" id='arrow'></i> : <i className="fa-solid fa-arrow-up fa-2xs text-success" id='arrow'></i>}
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default PercentTheDay;