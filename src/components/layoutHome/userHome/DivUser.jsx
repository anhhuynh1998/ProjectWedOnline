/* eslint-disable react/prop-types */
import { useContext } from "react";
import { UseProduct } from "../UseContext";

export const DivUser = ({ register, errors, title, value, read, name }) => {
    const { showEdit } = useContext(UseProduct);
    return (
        <div className="row">
            <div className="col-lg-3 form-group mb-3 ">
                <label className="label-form mb-2">{title}</label>
            </div>
            <div className="col-lg-9 form-group mb-3 ">
                {
                    showEdit ? <>
                        <input type="text" placeholder={`${title}`}
                            className={`form-control ${errors?.[name]?.message ? "is-invalid" : ""}`}
                            value={value} readOnly={read} {...register(name)}></input>
                        <span className='invalid-feedback'>{errors?.[name]?.message} </span>
                    </>
                        : <p className="text-dark">{value}</p>
                }
            </div>
        </div>
    );
};

export const SelectOptionUser = ({ register, title, errors, name, value }) => {
    const { showEdit } = useContext(UseProduct);
    return (
        <div className="row">
            <div className="col-lg-3 form-group mb-3 ">
                <label className="label-form mb-2">{title}</label>
            </div>
            <div className="col-lg-9 form-group mb-3 ">
                {
                    showEdit ? <>
                        <select type="text" placeholder={`${title}`}
                            className={`form-control ${errors?.[name]?.message ? "is-invalid" : ""}`}
                            {...register(name)}>
                            <option value={name}>Nam</option>
                            <option value={name}>Nữ</option>
                        </select>
                        <span className='invalid-feedback'>{errors?.[name]?.message} </span>
                    </>
                        : <p className="text-dark">{value}</p>
                }
            </div>
        </div>
    )
}

