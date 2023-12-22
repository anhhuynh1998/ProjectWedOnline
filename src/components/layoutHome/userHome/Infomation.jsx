/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { DivUser, SelectOptionUser } from "./DivUser";
import Background from "./background";
import { UseProduct } from "../UseContext";
import { NavLink } from "react-router-dom";
import UserInfoService from "../../../service/homeService/userInfoService";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { ToastSuccess } from "../../../toastify/Toast";

const Infomation = () => {
    const { showEdit, setShowEdit } = useContext(UseProduct);
    const [userInfos, setUserInfos] = useState({});

    const schemaRegister = yup.object({
        username: yup.string().required("Tên Đăng Nhập Không Được Để Trống")
            .min(5, "Tên Đăng Nhập Phải Từ 5 Đến 30 Kí Tự").max(30, "Tên Đăng Nhập Phải Từ 5 Đến 30 Kí Tự"),
        fullName: yup.string().required("Tên Đăng Nhập Không Được Để Trống")
            .min(5, "Tên Đăng Nhập Phải Từ 5 Đến 30 Kí Tự").max(30, "Tên Đăng Nhập Phải Từ 5 Đến 30 Kí Tự"),
        phone: yup.string().matches(/^(0|\+84)\d{9}$/, 'Số Điện Thoại Không Hợp Lệ'),
        // password: yup.string().required("Mật Khẩu Không Được Để Trống"),
        gender: yup.string().required("Vui Lòng Chọn Giới Tính")
    })
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        resolver: yupResolver(schemaRegister)
    });
    async function getUserInfoByEmail() {
        let respo = await UserInfoService.getUserInfoByEmail();
        setUserInfos(respo.data);
    }


    useEffect(() => {
        getUserInfoByEmail();
    }, [])

    const showEditInfo = () => {
        setShowEdit(true);
    }
    const notShowEditInfo = () => {
        setShowEdit(false);
    }

    const changeInfomation = async (data) => {
        console.log(data);
        await UserInfoService.updateUserInfo(data);
        ToastSuccess("Chỉnh Sửa Thông Tin Thành Công");
        getUserInfoByEmail();
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
                <form className="mt-4 animate__animated animate__bounceInLeft" onSubmit={handleSubmit(changeInfomation)}>
                    <DivUser title={"Họ Và Tên"} value={userInfos?.fullName}
                        register={register} errors={errors} name="fullName" />
                    <DivUser title={"Email"} value={userInfos?.email} read={true}
                        register={register} errors={errors} name="email" />
                    <DivUser title={"Số Điện Thoại"} value={userInfos?.phone}
                        register={register} errors={errors} name="phone" />
                    <DivUser title={"Tên Đăng Nhập"} value={userInfos?.username} read={true}
                        register={register} errors={errors} name="username" />
                    <SelectOptionUser title={"Giới Tính"} value={userInfos?.gender}
                        register={register} errors={errors} name="gender" />
                    <div className="mb-5 mt-3 text-center">
                        {
                            showEdit ? <>
                                <button className="btn btn-success me-3" onClick={notShowEditInfo} type="button">
                                    Quay Lại </button>
                                <button className="btn btn-primary me-3" type="submit">
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