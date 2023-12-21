/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { InputGender, InputRegister } from "./InputRegister";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import AuthService from "../../service/authService/AuthService";
import { ToastError, ToastSuccess } from "../../toastify/Toast";
import { useState } from "react";

const Register = ({ activeTab }) => {
    const [usernameError, setUserNameError] = useState("");
    const schemaRegister = yup.object({
        username: yup.string().required("Tên Đăng Nhập Không Được Để Trống")
            .min(5, "Tên Đăng Nhập Phải Từ 5 Đến 30 Kí Tự").max(30, "Tên Đăng Nhập Phải Từ 5 Đến 30 Kí Tự"),
        phone: yup.string().matches(/^(0|\+84)\d{9}$/, 'Số Điện Thoại Không Hợp Lệ'),
        email: yup.string().required("Email Không Được Để Trống")
            .email("Định Dạng Email Không Hợp Lệ"),
        password: yup.string().required("Mật Khẩu Không Được Để Trống"),
        gender: yup.string().required("Vui Lòng Chọn Giới Tính")
    })
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schemaRegister)
    });

    const registerForm = async (value) => {
        try {
            let response = await AuthService.register(value);
            ToastSuccess("Đăng Ký Thành Công");
            reset();
            document.getElementById('exampleLogin').click();
        } catch (error) {
            setUserNameError(error.response.data);
            ToastError(error.response.data);
        }
    }
    return (
        <div className={`tab-pane ${activeTab === 'register' ? 'show active' : ''}`}
            id="register" role="tabpanel" aria-labelledby="register-tab">
            <h6 id='headRegister' className='mb-4'>Đăng ký tài khoản</h6>
            <form id='submitRegister' onSubmit={handleSubmit(registerForm)}>
                <InputRegister
                    register={register} errors={errors} type="text" name="username" title="Tên Đăng Nhập" />
                <InputRegister
                    register={register} errors={errors} type="text" name="phone" title="Số Điện Thoại" />
                <InputRegister
                    register={register} errors={errors} type="text" name="email" title="Email" />
                <InputRegister
                    register={register} errors={errors} type="password" name="password" title="Mật Khẩu" />

                <div className='mb-3'>
                    <h6>Giới Tính</h6>
                    <InputGender
                        title="Nam" name="gender" register={register} errors={errors} id="male" />
                    <InputGender
                        title="Nữ" name="gender" register={register} errors={errors} id="female" />
                    <InputGender
                        title="Khác" name="gender" register={register} errors={errors} id="other" />

                    <span className='invalid-feedback'>{errors?.genderRegister?.message}</span>
                </div >
                <p className='text-dark'><small>Bằng cách tạo tài khoản, Quý Khách đã đồng ý với <code>Điều khoản &
                    Điều kiện và Chính sách Bảo mật  </code> của chúng tôi.</small></p>
                <div className='d-grid gap-2 d-md-flex mt-1 '>
                    <button type="submit" className="btn btn-danger mt-2" id='registerButton'
                    >Đăng Ký</button>
                </div>
            </form>
        </div>
    );
};

export default Register;