import React from 'react';
import SkeletonSelectOption from '../skeleton/SkeletonSelectOption';


const SelectOptionCategoryType = ({
    label,
    value,
    onChange,
    options,
    isLoading,
    disabled = false,
    name,
    id,
    register,
    errors
}) => {
    return (
        <div className="col-4 mb-2">
            <label className="fw-bold" htmlFor={id}>
                {label}
            </label>
            {isLoading ? (
                <SkeletonSelectOption />
            ) : (
                <select
                    className="form-control"
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    name={name}
                    id={id}
                    {...register(name)}
                    multiple={false}

                >
                    <option value=""> Chọn một danh mục</option>
                    {options.map(option => (
                        <option key={option.id} value={option.id}>{option.name}</option>
                    ))}
                </select>
            )}
            <span className="text-danger">{errors?.[name]?.message}</span>
        </div>
    );
};


export default SelectOptionCategoryType;
