import { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import AuthService from '../../service/authService/AuthService';
import { ToastSuccess, ToastWarning } from '../../toastify/Toast';
import { useContext } from 'react';
import { UseProduct } from './UseContext';
import { useForm } from 'react-hook-form';
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const Login = () => {
    const [activeTab, setActiveTab] = useState('login');
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const { setLogoutIcon } = useContext(UseProduct);

    const schema = yup.object({
        username: yup.string().required("Tên Đăng Nhập Không Được Để Trống"),
        password: yup.string().required("Mật Khẩu Không Được Để Trống")
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const login = async (value) => {
        console.log(value);
        try {
            let response = await AuthService.login(value);
            localStorage.setItem("jwt", response.data);
            document.getElementById('exampleLogin').click();
            ToastSuccess("Đăng Nhập Thành Công");
            setLogoutIcon("");
        } catch (error) {
            ToastWarning("Tên Đăng Nhập Hoặc Mật Khẩu Không Đúng");
        }
    }

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

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
        <>

            <div className="modal fade" id="exampleLogin" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog " role="document">
                    <div className="modal-content " style={{ width: "550px" }}>
                        <div className="modal-header" style={{ backgroundColor: "#e3e3e3d9" }}>
                            <ul className="nav nav-tabs " role="tablist">
                                <li className="nav-item  " onClick={() => handleTabChange('login')}>
                                    <a className={`nav-link ${activeTab === 'login' ? 'active' : ''}`} id="login-tab" data-toggle="tab" href="#login"
                                        role="tab" aria-controls="login" aria-selected={activeTab === 'login'}>Login</a>
                                </li>
                                <li className="nav-item " onClick={() => handleTabChange('register')}>
                                    <a className={`nav-link ${activeTab === 'register' ? 'active' : ''}`} id="register-tab" data-toggle="tab" href="#register"
                                        role="tab" aria-controls="register" aria-selected={activeTab === 'register'}>Register</a>
                                </li>
                            </ul>
                        </div>
                        <div className="modal-body " >
                            <div className="tab-content ">
                                <div className={`tab-pane ${activeTab === 'login' ? 'show active' : ''}`} id="login" role="tabpanel" aria-labelledby="login-tab">
                                    <h6 style={{ marginLeft: "50px", fontWeight: "700" }} className='mb-4'>Đăng nhập tài khoản</h6>

                                    <form onSubmit={handleSubmit(login)} style={{ width: "420px", marginLeft: "50px" }} >
                                        <h6 style={{ fontWeight: "500" }}>Tên Đăng Nhập</h6>
                                        <div className="input-group mb-4">
                                            <input type='text'
                                                className={`${errors?.username?.message ? "form-control rounded-3 border border-secondary small fw-light py-2 is-invalid"
                                                    : "form-control rounded-3 border border-secondary small fw-light py-2"}`}
                                                placeholder="Tên Đăng Nhập"
                                                {...register('username')} />
                                            <span className="invalid-feedback" >{errors?.username?.message}</span>
                                        </div>

                                        <h6 style={{ fontWeight: "500" }}>Mật Khẩu</h6>
                                        <div className="input-group mb-4">
                                            <div className="input-group mb-4">
                                                <input type={type}
                                                    className={`${errors?.password?.message ? "form-control rounded-3 border border-secondary small fw-light py-2 is-invalid"
                                                        : "form-control rounded-3 border border-secondary small fw-light py-2 "}`}
                                                    placeholder="Mật Khẩu"
                                                    {...register('password')}
                                                    autoComplete="current-password" style={{ position: "relative" }} />
                                                <span className={`${errors?.password?.message ? " me-3 mb-4 " : "me-3"}`} style={{ position: "absolute", right: "17px", zIndex: "99", bottom: "10px" }}>
                                                    <Icon onClick={handleToggle} class="absolute mr-10" icon={icon} size={20} />
                                                </span>
                                                <span className=" invalid-feedback" >{errors?.password?.message}</span>
                                            </div>
                                        </div>
                                        <div className='d-grid gap-2 d-md-flex '>
                                            <button
                                                className="btn btn-danger mt-2" style={{ width: "100%" }}>
                                                Đăng Nhập
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                {/* register */}
                                <div className={`tab-pane ${activeTab === 'register' ? 'show active' : ''}`} id="register" role="tabpanel" aria-labelledby="register-tab">
                                    <h6 style={{ marginLeft: "50px", fontWeight: "700" }} className='mb-4'>Đăng kí tài khoản</h6>
                                    <form style={{ width: "420px", marginLeft: "50px" }}>
                                        <div className="row g-3 mb-3">
                                            <div className="col">
                                                <h6 style={{ fontWeight: "500" }}>Tên</h6>
                                                <input type="text" className="form-control rounded-3 border border-secondary" placeholder="Tên" aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>
                                            <div className="col">
                                                <h6 style={{ fontWeight: "500" }}>SDT </h6>
                                                <input type="text" className="form-control rounded-3 border border-secondary" placeholder="SDT" aria-label="Phone" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>

                                        <div className='mb-3'>
                                            <h6>Giới Tính</h6>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                <h6 className="form-check-label" >Nữ</h6>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                <h6 className="form-check-label" >Nam</h6>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                                <h6 className="form-check-label" >Khác</h6>
                                            </div>
                                        </div >

                                        <h6 style={{ fontWeight: "500" }}>Email</h6>
                                        <div className="input-group mb-3">
                                            <input type="email" className="form-control rounded-3 border border-secondary small fw-light py-2" placeholder="Nhập địa chỉ email" aria-label="email" aria-describedby="basic-addon1" />
                                        </div>

                                        <h6 style={{ fontWeight: "500" }}>Ngày Sinh</h6>
                                        <div className="input-group mb-3">
                                            <input type="date" className="form-control rounded-3 border border-secondary small fw-light py-2" placeholder="Số Điện Thoại" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>

                                        <h6 style={{ fontWeight: "500" }}>Mật Khẩu</h6>
                                        <div className="input-group mb-3">
                                            <input type="text"
                                                className="form-control rounded-3 border border-secondary small fw-light py-2"
                                                placeholder="Mật Khẩu" aria-label="Recipient's username" aria-describedby="basic-addon2"
                                                autoComplete="current-password" style={{ position: "relative" }}
                                                {...register('passwordRegister')} />
                                            {/* <span className="flex justify-around items-center"
                                                style={{ position: "absolute", right: "17px", zIndex: "99", bottom: "10px" }}>
                                                <Icon onClick={handleToggle} className="absolute mr-10" icon={icon} size={20} />
                                            </span> */}
                                        </div>
                                        <p className='text-dark'><small>Bằng cách tạo tài khoản, Quý Khách đã đồng ý với Điều khoản &
                                            Điều kiện và Chính sách Bảo mật của chúng tôi.</small></p>

                                        <div className='d-grid gap-2 d-md-flex '>
                                            <button type="button" className="btn btn-danger mt-2" style={{ width: "100%" }}>Đăng Kí</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Login;
