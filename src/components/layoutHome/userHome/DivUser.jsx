/* eslint-disable react/prop-types */
import { useContext } from "react";
import { UseProduct } from "../UseContext";

const DivUser = ({ message, value, read }) => {
    const { showEdit } = useContext(UseProduct);
    return (
        <div className="row">
            <div className="col-lg-3 form-group mb-3 ">
                <label className="label-form mb-2">{message}</label>
            </div>
            <div className="col-lg-9 form-group mb-3 ">
                {
                    showEdit ? <input type="text" placeholder={`${message}`}
                        className={`form-control`} value={value} readOnly={read}></input>
                        : <p className="text-dark">{value}</p>
                }
            </div>
        </div>
    );
};

export default DivUser;