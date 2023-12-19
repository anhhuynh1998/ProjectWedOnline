/* eslint-disable react/prop-types */

const Input = ({
  label,
  name,
  register,
  errors,
  defaultValue,
  placeholder,
}) => {
  return (
    <div className="form-group col-lg-6 mb-3 ">
      <label htmlFor={name} className="form-label col-3">
        {label}
      </label>
      <div className="col-9">
        <input
          type="text"
          id={name}
          name={name}
          className={`form-control ${errors?.[name] ? "is-invalid" : ""}`}
          {...register(name)}
          defaultValue={defaultValue}
          placeholder={placeholder}
        />
        {errors?.[name] && (
          <span className="invalid-feedback valid-text">
            {errors[name].message}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
