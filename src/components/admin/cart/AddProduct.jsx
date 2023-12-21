/* eslint-disable no-inner-declarations */
import { useEffect, useRef, useState } from 'react';
import { ProductService } from '../../../service/admin/product/productService';
import { ToastError, ToastSuccess } from '../../../toastify/Toast';


const AddProduct = () => {

    const [product, setProduct] = useState({});
    const [searchValue, setSearchValue] = useState("");
    const [addProduct, setAddProduct] = useState(JSON.parse(localStorage.getItem("cartOffline")) || []);
    const [infoProduct, setInfoProduct] = useState(JSON.parse(localStorage.getItem("cartOffline")) || []);
    const [checkOut, setCheckOut] = useState("");

    const findProductByCode = async (search) => {
        try {
            if (search == "") {
                setSearchValue("")
                setProduct({})
            }
            else {
                try {

                    let res = await ProductService.findProductByCode(search);
                    if (res.data) {
                        setProduct(res.data.name)
                        if (addProduct.filter(e => e.codeProduct === search).length > 0) {
                            ToastError("Mã sản phẩm đã tồn tại!")
                        } else {
                            setInfoProduct([...addProduct, res.data])

                        }
                        setSearchValue(res.data.name);
                        console.log(res.data.name, "rrrr");

                    }

                } catch (e) {
                    ToastError(e.response.data);
                    setSearchValue("");
                    setProduct({});
                }
            }
        } catch (error) {
            console.log("Loiiiiiii");
            ToastError("Loi")
        }
    }
    const inputRef = useRef();

    const submitProduct = async () => {
        try {
            if (addProduct.filter(e => e.codeProduct === inputRef.current.value).length > 0) {
                ToastError('Rach Rach')
                return;
            }
            localStorage.setItem('cartOffline', JSON.stringify(infoProduct))
            setSearchValue('')
            inputRef.current.value = ''
            setAddProduct(infoProduct);
            console.log(infoProduct, "adddd");
            setCheckOut(infoProduct.reduce((total, item) => item.salesPrice + total, 0));

        } catch (error) {
            console.log("Lỗi khi nhập sản phẩm");
            ToastError("Lỗi khi nhập sản phẩm")
        }
    }

    useEffect(() => {
        const input2 = document.getElementById("search2");
        if (input2) {
            input2.setAttribute("aria-label", searchValue)
        }
    }, [searchValue])

    const deletePro = async (id) => {
        const newProduct = JSON.parse(localStorage.getItem("cartOffline") || []);
        const update = newProduct.filter(e => e.id !== id);
        localStorage.setItem("cartOffline", JSON.stringify(update))
        setAddProduct(addProduct?.filter(e => e.id !== id))
        ToastError("Xoá thành công !")
        if (newProduct.length === 0) {
            localStorage.removeItem("cartOffline")

        }
    }

    const checkOutProduct = async () => {
        // const soldProduct = JSON.parse(localStorage.getItem("cartOffline") || []);
        // const update = soldProduct.filter(e => e.id !== id);
        // localStorage.setItem("cartOffline", JSON.stringify(update));
        // setAddProduct(addProduct?.filter(e => e.id !== id));
        console.log(infoProduct, "infoooo");
        ToastSuccess("Thanh toán thành công")
        // if (soldProduct.length === 0) {
        //     localStorage.removeItem("cartOffline")
        // }
        // setAddProduct
    }

    return (
        <>
            <nav aria-label="breadcrumb ">
                <ol className="breadcrumb animate__animated animate__slideInRight">
                    <li className="breadcrumb-item active" aria-current="page">Tìm kiếm sản phẩm theo mã</li>
                </ol>
            </nav>
            <nav className=" navbar-light bg-light col-5 pb-3 animate__animated animate__bounceInLeft p-0" >
                <div >
                    <form >
                        <input className="form-control rounded-0"
                            type="search"
                            ref={inputRef}
                            placeholder="Nhập mã sản phẩm (nhấn enter để tìm kiếm)" aria-label="Search"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault(); // Ngăn chặn hành vi mặc định của phím Enter
                                    findProductByCode(e.target.value);
                                }
                            }}
                            onBlur={(e) => {
                                e.preventDefault(); // Ngăn chặn hành vi mặc định của phím Enter
                                findProductByCode(e.target.value);
                            }}
                            name='searchValid'
                        />
                    </form>
                </div>
            </nav>
            <nav className=" navbar-light bg-light col-5 pb-3 animate__animated animate__bounceInUp" >
                <div >
                    <form >
                        <input className="form-control rounded-0"
                            id='search2'
                            aria-label={searchValue}
                            placeholder={searchValue} readOnly
                        />
                    </form>
                </div>
            </nav>
            <button className="btn btn-primary col-2 animate__animated animate__bounceInDown"
                type="button" disabled={addProduct.length === infoProduct.length} onClick={() => submitProduct()}>Thêm</button>

            <table className="table mt-3 " style={{ position: 'relative', zIndex: 1 }}>
                <thead className="thead-dark">
                    <tr className='text-start animate__animated animate__slideInRight'>
                        <th scope="col" className='text-start'>#</th>
                        <th scope="col" className='text-start'>Tên Sản Phẩm</th>
                        <th scope="col" className='text-start'>Size</th>
                        <th scope="col" className='text-start'>Tình Trạng</th>
                        <th scope="col" className='text-start'>Giá </th>
                        <th scope="col" className='text-start'>Mã Sản Phẩm</th>
                        <th scope="col" className='text-start'>Hành Động</th>

                    </tr>
                </thead>
                <tbody className=' animate__animated  animate__bounceInUp'>
                    {
                        addProduct && addProduct.map((item, index) => (
                            <tr key={index} className='text-dark'>
                                <th scope="row" className='text-dark'>{index + 1}</th>
                                <td className='text-dark'>{item.name}</td>
                                <td className='text-dark'>{item.size}</td>
                                <td className='text-dark'>{item.status}</td>
                                <td className='text-dark'>{item.salesPrice}</td>
                                <td className='text-dark'>{item.codeProduct}</td>
                                <i type="button" className="fa-regular fa-trash-can text-danger pt-3"
                                    id="iconDelete" onClick={() => deletePro(item.id)} ></i>

                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <ul className="list-group w-25 ">
                <li className="list-group-item bg-secondary text-white" aria-current="true">Tổng Giỏ Hàng</li>
                {/* {
                    checkOut.length && checkOut.map((check, index) => (
                        <li className="list-group-item" key={index}>Tổng tiền : {check.salesPrice}</li>
                    ))
                } */}
                <li className="list-group-item" >Tổng tiền : {checkOut}</li>
                <li className="list-group-item"></li>
                <button className="list-group-item bg-success text-white " onClick={checkOutProduct}>
                    <i className="fa-solid fa-sack-dollar fa-lg" ></i> Thanh Toán</button>
            </ul>
        </>
    );
};

export default AddProduct;