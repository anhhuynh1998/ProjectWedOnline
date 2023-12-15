// SelectField.js
import React from 'react';
import SkeletonSelectOption from '../skeleton/SkeletonSelectOption';

const SelectField = ({ label, id, name, options, register, errors, isLoading }) => {
    return (
        <div className="col-4 mb-2">
            <label htmlFor={id}>{label}</label>
            {isLoading ? (
                <SkeletonSelectOption />
            ) : (
                <>
                    <select className="form-control"
                        id={id}
                        name={name}
                        {...register(name)} >
                        <option value="">Chọn một danh mục</option>
                        {options.map((value, index) => (
                            <option key={index} value={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                    <span className="text-danger">{errors?.[name]?.message}</span>
                </>
            )}
        </div>
    );
};

export default SelectField;
