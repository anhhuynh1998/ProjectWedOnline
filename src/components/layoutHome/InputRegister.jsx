/* eslint-disable react/prop-types */

export const InputRegister = ({ title, errors, name, register, className, type }) => {
    return (
        <div className=" mb-3">
            <h6>{title}</h6>
            <input type={type} className={`form-control rounded-3 border border-secondary ${className}
                 ${errors?.[name]?.message ? "is-invalid" : ""}`}
                placeholder={title} aria-label={name} aria-describedby="basic-addon1"
                {...register(name)} />
            <span className='invalid-feedback'>{errors?.[name]?.message} </span>
        </div>
    );
};

export const InputGender = ({ errors, register, name, title, id }) => {
    return (
        <div className="form-check form-check-inline">
            <h6 className="form-check-label me-3" >{title}</h6>
            <input className={`form-check-input 
             ${errors?.[name]?.message ? "is-invalid" : ""}`}
                type="radio" name={name}
                id={id} value={title} {...register(name)} />
        </div>
    )
}
{/* <div className="form-check form-check-inline">
                        <h6 className="form-check-label me-3" >Khác</h6>
                        <input className={`form-check-input 
                                                ${errors?.genderRegister?.message ? "is-invalid" : ""}`}
                            type="radio" name="gender"
                            id="other" value="Khác" {...register("gender")} />
                    </div> */}