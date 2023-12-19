// InputField.js
import React, { useState } from 'react';
import formatPrice from '../../../layoutHome/formatPrice/formatPrice';

const InputField = ({ label, name, register, errors, placeholder }) => {

    return (
        <div className="col-4 mb-2">
            <label className="fw-bold" htmlFor={name}>
                {label}
            </label>
            <>
                <input type="text"
                    className="form-control"
                    name={name}
                    {...register(name)}
                    placeholder={placeholder}
                // onChange={handleInputChange}
                />
                <span className="text-danger">{errors?.[name]?.message}</span>
            </>

        </div>
    );
};

export default InputField;
