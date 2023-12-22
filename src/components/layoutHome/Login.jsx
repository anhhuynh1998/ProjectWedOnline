/* eslint-disable react/prop-types */
import Icon from "react-icons-kit";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { UseProduct } from "./UseContext";
import axios from "axios";
import { ToastError, ToastSuccess, ToastWarning } from "../../toastify/Toast";
import AuthService from "../../service/authService/AuthService";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { useGoogleLogin } from "@react-oauth/google";
import { eye } from "react-icons-kit/feather/eye";

const Login = ({ activeTab }) => {
    const [icon, setIcon] = useState(eyeOff);
    const [type, setType] = useState('password');
    const { setLogoutIcon, backHome, setLoginEmail } = useContext(UseProduct);

    const schemaLogin = yup.object({
        username: yup.string().required("Tên Đăng Nhập Không Được Để Trống"),
        password: yup.string().required("Mật Khẩu Không Được Để Trống"),
    })
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schemaLogin)
    });



    const login = async (value) => {
        console.log(value);
        try {
            let response = await AuthService.login(value);
            document.getElementById('exampleLogin').click();
            console.log(response.data.isAdmin);
            reset();
            if (response.data.isAdmin === true) {
                backHome("/admin");
            } else {
                backHome();
            }
            ToastSuccess("Đăng Nhập Thành Công");
            setLogoutIcon((prev) => !prev);
            localStorage.setItem("jwt", response.data.jwt);
        } catch (error) {
            ToastWarning(error.response.data);
        }
    }


    const loginGoogle = useGoogleLogin({
        onSuccess: async (response) => {
            try {
                const res = await axios.get(
                    "https://www.googleapis.com/oauth2/v3/userinfo",
                    {
                        headers: { Authorization: `Bearer ${response.access_token}` }
                    }
                );
                console.log(res);
                document.getElementById('exampleLogin').click();
                ToastSuccess("Đăng Nhập Thành Công");
                backHome("/home");
                let respon = await AuthService.loginGoogle(res.data);
                localStorage.setItem("jwt", respon.data);
                setLoginEmail(res.data.email)
                setLogoutIcon((prev) => !prev)
            } catch (error) {
                ToastError("Tài Khoản Google Không Đúng")
            }
        }
    })

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }
    return (
        <div className={`tab-pane ${activeTab === 'login' ? 'show active' : ''}`} id="login" role="tabpanel" aria-labelledby="login-tab">
            <h6 style={{ marginLeft: "50px", fontWeight: "700" }} className='mb-4'>Đăng nhập tài khoản</h6>

            <form onSubmit={handleSubmit(login)} id='submitLogin' >
                <h6 style={{ fontWeight: "500" }}>Tên Đăng Nhập / số điện thoại</h6>
                <div className="input-group mb-4">
                    <input type='text'
                        className={`form-control rounded-3 border border-secondary small fw-light py-2  
                                                ${errors?.username?.message ? "is-invalid" : ""}`}
                        placeholder="Tên Đăng Nhập"
                        {...register('username')} />
                    <span className="invalid-feedback" >{errors?.username?.message}</span>
                </div>

                <h6 style={{ fontWeight: "500" }}>Mật Khẩu</h6>
                <div className="input-group mb-5">
                    <input type={type}
                        className={`form-control rounded-3 border border-secondary small fw-light py-2 icon-eyeOff 
                                                    ${errors?.password?.message ? "is-invalid" : ""}`}
                        placeholder="Mật Khẩu" {...register('password')}
                        autoComplete="current-password" />
                    <span className={`icon-eye me-3 ${errors?.password?.message ? "mb-4 " : "me-3"}`}>
                        <Icon onClick={handleToggle} className="absolute mr-10" icon={icon} size={20} />
                    </span>
                    <span className=" invalid-feedback" >{errors?.password?.message}</span>
                </div>
                <div className='d-grid gap-2 d-md-flex '>
                    <button className="btn btn-danger mt-2" id='loginButton'> Đăng Nhập</button>
                </div>
                <div className='d-grid gap-2 d-md-flex '>
                    <button type='button' className=" btn mt-4" id='cssLoginGoogle'
                        onClick={() => loginGoogle()}>
                        <img src="./image.png" alt="" className='me-3' id='iconGoogle' />
                        Đăng Nhập Bằng Tài Khoản Google
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;