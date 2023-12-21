import { useState } from 'react';
import "../layoutHome/cssHome/cssHome.css"
import Register from './Register';
import Loginn from './Login';

const LoginAndRegister = () => {
    const [activeTab, setActiveTab] = useState('login');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className="modal fade" id="exampleLogin" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog " role="document">
                    <div className="modal-content " style={{ width: "550px" }}>
                        <div className="modal-header" style={{ backgroundColor: "#e3e3e3d9" }}>
                            <ul className="nav nav-tabs " role="tablist">
                                <li className="nav-item  " onClick={() => handleTabChange('login')}>
                                    <a className={`nav-link ${activeTab === 'login' ? 'active' : ''}`} id="login-tab" data-toggle="tab" href="#login"
                                        role="tab" aria-controls="login" aria-selected={activeTab === 'login'}>Đăng Nhập</a>
                                </li>
                                <li className="nav-item " onClick={() => handleTabChange('register')}>
                                    <a className={`nav-link ${activeTab === 'register' ? 'active' : ''}`} id="register-tab" data-toggle="tab" href="#register"
                                        role="tab" aria-controls="register" aria-selected={activeTab === 'register'}>Đăng Ký </a>
                                </li>
                            </ul>
                        </div>
                        <div className="modal-body " >
                            <div className="tab-content ">
                                <Loginn activeTab={activeTab} />
                                <Register activeTab={activeTab} />
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default LoginAndRegister;
