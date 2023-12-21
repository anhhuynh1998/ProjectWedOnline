import { useContext, useEffect, useState } from "react";
import DivUser from "./DivUser";
import Background from "./background";
import { UseProduct } from "../UseContext";
import { NavLink } from "react-router-dom";
import UserInfoService from "../../../service/homeService/userInfoService";

const Infomation = () => {
    const { showEdit, setShowEdit } = useContext(UseProduct);
    const [userInfos, setUserInfos] = useState({});

    useEffect(() => {
        async function getUserInfoByEmail() {
            let respo = await UserInfoService.getUserInfoByEmail();
            setUserInfos(respo.data);
        }
        getUserInfoByEmail();
    }, [])

    const showEditInfo = () => {
        setShowEdit(true);
    }
    const notShowEditInfo = () => {
        setShowEdit(false);
    }

    return (
        <div style={{ backgroundColor: "#f5f5f5" }}>
            <div>
                <div className="body__overlay" />
                <Background message={"Thông Tin Của Tôi"}
                    img={"rgba(0, 0, 0, 0) url(http://localhost:5173/images/bg/userinfo.jpeg) no-repeat scroll center center / cover"} />
            </div>
            <div className="container" style={{ width: "700px" }}>
                <h1 className="text-center mt-5" style={{ color: "#dc3545" }}>Thông Tin Của Tôi</h1>
                <form className="mt-4 animate__animated animate__bounceInLeft">
                    <DivUser message={"Họ Và Tên"} value={userInfos?.fullName} />
                    <DivUser message={"Email"} value={userInfos?.email} read={true} />
                    <DivUser message={"Số Điện Thoại"} value={userInfos?.phone} />
                    <DivUser message={"Giới Tính"} value={userInfos?.gender} />
                    <DivUser message={"Tên Đăng Nhập"} value={userInfos?.username} read={true} />
                    <div className="mb-5 mt-3 text-center">
                        {
                            showEdit ? <>
                                <button className="btn btn-success me-3" onClick={notShowEditInfo} type="button">
                                    Quay Lại </button>
                                <button className="btn btn-primary me-3" onClick={notShowEditInfo} type="button">
                                    Xác Nhận </button>
                            </>
                                : <>
                                    <NavLink to={"/home"} type="button" className="btn btn-danger me-3">Quay Lại</NavLink>
                                    <button className="btn btn-success " onClick={showEditInfo} type="button">
                                        Chỉnh Sửa </button>
                                </>
                        }

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Infomation;