/* eslint-disable react/prop-types */

import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const SelectOption = ({
  register,
  errors,
  handleOnChange,
  name,
  label,
  options,
  defaultValue,
  setValue,
}) => {
  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
      console.log(options);
    }
  }, [defaultValue, options]);
  return (
    <div className="form-group col-lg-6 mb-3 ">
      <label htmlFor="province" className="form-label col-3">
        {label}
      </label>
      <div className="col-9">
        <select
          name="provinceId"
          id="province"
          className={`form-select ${
            errors && errors[name] ? "is-invalid" : ""
          }`}
          {...register(name)}
          defaultValue={defaultValue}
          onChange={(e) => handleOnChange && handleOnChange(e.target.value)}
        >
          <option value="">Vui lòng chọn</option>
          {options &&
            options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
        </select>
        {errors && errors[name] && (
          <span className="invalid-feedback valid-text">
            {errors[name].message}
          </span>
        )}
      </div>
    </div>
  );
};

export default SelectOption;
