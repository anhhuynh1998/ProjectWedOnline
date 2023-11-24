/* eslint-disable react/prop-types */
// import Swal from "sweetalert2";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AvatarUploader from "./AvatarUploader";

const createUserinfo = yup.object({
  username: yup.string().required("userName can't be empty").min(5).max(30),
  password: yup
    .string()
    .required("password can't be empty")
    .min(6)
    .max(20)
    .typeError("Invalid Age"),
  fullName: yup.string().required("FullName can't be empty"),
  email: yup.string().required("Email can't be empty").min(5).max(30),
  phone: yup.string().required("Phone can't be empty").min(9).max(20),
  gender: yup.string().required("Gender can't be empty"),
  province: yup.string().required("Province can't be empty"),
  district: yup.string().required("District can't be empty"),
  ward: yup.string().required("Ward can't be empty"),
  address: yup.string().required("Address can't be empty"),
});
const AddUserInfo = ({ isOpen, onClose, listUserInfo, setListUserInfo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(createUserinfo),
  });
  const [avatarId, setAvatarId] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [locationRegion, setLocationRegion] = useState({
    provinceId: 0,
    provinceName: "",
    districtId: 0,
    districtName: "",
    wardId: 0,
    wardName: "",
  });
  const [isDistrictDisabled, setIsDistrictDisabled] = useState(true);
  const [isWardDisabled, setIsWardDisabled] = useState(true);

  const handleCreate = async (values) => {
    try {
      const data = {
        ...values,
        avatarId: avatarId,
        provinceId: locationRegion.provinceId,
        provinceName: locationRegion.provinceName,
        districtId: locationRegion.districtId,
        districtName: locationRegion.districtName,
        wardId: locationRegion.wardId,
        wardName: locationRegion.wardName,
        address: values.address,
      };
      const response = await fetch(
        "http://localhost:8080/api/admin/userinfo/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        console.log(response);
        const data = await response.json();
        setListUserInfo([...listUserInfo, data]);
        // swal("Good job!", "Thêm mới thành công !!!", "success");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "thêm mới thành công !.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        throw new Error("Failed to create userInfo");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllProvinces();
  }, []);

  const getAllProvinces = async () => {
    await axios
      .get("https://vapi.onedev.top/api/v1/provinces/")
      .then((response) => {
        const provincesData = response.data;
        setProvinces(
          provincesData.map((province) => ({
            id: province.id,
            name: province.name,
          }))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleProvinceChange = (event) => {
    const provinceId = event.target.value;
    const provinceName = event.target.options[event.target.selectedIndex].text;

    setLocationRegion((prevState) => ({
      ...prevState,
      provinceId: provinceId,
      provinceName: provinceName,
    }));

    getAllDistrictsByProvinceId(provinceId);
    setIsDistrictDisabled(false);
  };

  const getAllDistrictsByProvinceId = async (provinceId) => {
    await axios
      .get(`https://vapi.onedev.top/api/v1/districts/${provinceId}`)
      .then((response) => {
        const districtsData = response.data;
        setDistricts(
          districtsData.map((district) => ({
            id: district.id,
            name: district.name,
          }))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDistrictChange = (event) => {
    const districtId = event.target.value;
    const districtName = event.target.options[event.target.selectedIndex].text;

    setLocationRegion((prevState) => ({
      ...prevState,
      districtId: districtId,
      districtName: districtName,
    }));

    getAllWardsByDistrictId(districtId);
    setIsWardDisabled(false);
  };

  const getAllWardsByDistrictId = async (districtId) => {
    await axios
      .get(`https://vapi.onedev.top/api/v1/wards/${districtId}`)
      .then((response) => {
        const wardsData = response.data;
        setWards(
          wardsData.map((ward) => ({
            id: ward.id,
            name: ward.name,
          }))
        );

        if (locationRegion.wardId && locationRegion.wardName) {
          setLocationRegion((prevState) => ({
            ...prevState,
          }));
        } else {
          setLocationRegion((prevState) => ({
            ...prevState,
            wardId: 0,
            wardName: "",
          }));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleWardChange = (event) => {
    const wardId = event.target.value;
    const wardName = event.target.options[event.target.selectedIndex].text;

    setLocationRegion((prevState) => ({
      ...prevState,
      wardId: wardId,
      wardName: wardName,
    }));
  };

  return (
    <>
      <div
        className={`modal ${isOpen ? "d-block" : ""}`}
        tabIndex="-1"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-xl"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-primary">Create User</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => {
                  onClose();
                  reset();
                }}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(handleCreate)}>
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="row">
                      <div className="form-group col-lg-6 mb-3 ">
                        <label htmlFor="username" className="form-label col-3">
                          UserName
                        </label>
                        <div className="col-9">
                          <input
                            type="text"
                            id="username"
                            className={`form-control ${
                              errors?.userName ? "is-invalid" : ""
                            }`}
                            {...register("username")}
                            placeholder="Vui lòng nhập username"
                          />
                          {errors?.username && (
                            <span className="invalid-feedback">
                              {errors.username.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="form-group col-lg-6 mb-3 ">
                        <label htmlFor="password" className="form-label col-3">
                          Password
                        </label>
                        <div className="col-9">
                          <input
                            type="text"
                            id="password"
                            className={`form-control ${
                              errors?.phone ? "is-invalid" : ""
                            }`}
                            {...register("password")}
                            placeholder="Vui lòng nhập password"
                          />
                          {errors?.password && (
                            <span className="invalid-feedback">
                              {errors.password.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-lg-6 mb-3 ">
                        <label htmlFor="fullName" className="form-label col-3">
                          Full Name
                        </label>
                        <div className="col-9">
                          <input
                            type="text"
                            id="fullName"
                            className={`form-control ${
                              errors?.fullName ? "is-invalid" : ""
                            }`}
                            {...register("fullName")}
                            placeholder="Vui lòng nhập tên"
                          />
                          {errors?.fullName && (
                            <span className="invalid-feedback">
                              {errors.fullName.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="form-group col-lg-6 mb-3 ">
                        <label htmlFor="email" className="form-label col-3">
                          Email
                        </label>
                        <div className="col-9">
                          <input
                            type="email"
                            id="email"
                            className={`form-control ${
                              errors?.email ? "is-invalid" : ""
                            }`}
                            {...register("email")}
                            placeholder="Vui lòng nhập email"
                          />
                          {errors?.email && (
                            <span className="invalid-feedback">
                              {errors.email.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-lg-6 mb-3 ">
                        <label htmlFor="phone" className="form-label col-3">
                          Phone
                        </label>
                        <div className="col-9">
                          <input
                            type="text"
                            id="phone"
                            className={`form-control ${
                              errors?.phone ? "is-invalid" : ""
                            }`}
                            {...register("phone")}
                            placeholder="Vui lòng nhập số điện thoại"
                          />
                          {errors?.phone && (
                            <span className="invalid-feedback">
                              {errors.phone.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="form-group col-lg-6 mb-3 ">
                        <label htmlFor="gender" className="form-label col-3">
                          Gender
                        </label>
                        <div className="col-9">
                          <select
                            name="gender"
                            id="gender"
                            className={`form-select ${
                              errors?.gender ? "is-invalid" : ""
                            }`}
                            {...register("gender")}
                          >
                            <option value="">Vui lòng chọn giới tính</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                          </select>
                          {errors?.gender && (
                            <span className="invalid-feedback">
                              {errors.gender.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-lg-6 mb-3 ">
                        <label htmlFor="province" className="form-label col-3">
                          Province
                        </label>
                        <div className="col-9">
                          <select
                            name="province"
                            id="province"
                            className={`form-select ${
                              errors?.province ? "is-invalid" : ""
                            }`}
                            {...register("province")}
                            onChange={handleProvinceChange}
                          >
                            <option value="">
                              Vui lòng chọn tỉnh/thành phố
                            </option>
                            {provinces &&
                              provinces.map((province) => (
                                <option key={province.id} value={province.id}>
                                  {province.name}
                                </option>
                              ))}
                          </select>
                          {errors?.province && (
                            <span className="invalid-feedback">
                              {errors.province.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="form-group col-lg-6 mb-3 ">
                        <label htmlFor="district" className="form-label col-3">
                          District
                        </label>
                        <div className="col-9">
                          <select
                            name="district"
                            id="district"
                            className={`form-select ${
                              errors?.district ? "is-invalid" : ""
                            }`}
                            {...register("district")}
                            onChange={handleDistrictChange}
                            disabled={isDistrictDisabled}
                          >
                            <option value="">Vui lòng chọn quận/huyện</option>
                            {districts &&
                              districts.map((district) => (
                                <option key={district.id} value={district.id}>
                                  {district.name}
                                </option>
                              ))}
                          </select>
                          {errors?.district && (
                            <span className="invalid-feedback">
                              {errors.district.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-lg-6 mb-3">
                        <label htmlFor="ward" className="form-label col-3">
                          Ward
                        </label>
                        <div className="col-9">
                          <select
                            name="ward"
                            id="ward"
                            className={`form-select ${
                              errors?.ward ? "is-invalid" : ""
                            }`}
                            {...register("ward")}
                            onChange={handleWardChange}
                            disabled={isWardDisabled}
                          >
                            <option value="">Vui lòng chọn phường/xã</option>
                            {wards &&
                              wards.map((ward) => (
                                <option key={ward.id} value={ward.id}>
                                  {ward.name}
                                </option>
                              ))}
                          </select>
                          {errors?.ward && (
                            <span className="invalid-feedback">
                              {errors.ward.message}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="form-group col-lg-6 mb-3">
                        <label htmlFor="address" className="form-label col-3">
                          Address
                        </label>
                        <div className="col-9">
                          <input
                            type="text"
                            id="address"
                            className={`form-control ${
                              errors?.address ? "is-invalid" : ""
                            }`}
                            {...register("address")}
                            placeholder="Vui lòng nhập địa chỉ"
                          />
                          {errors?.address && (
                            <span className="invalid-feedback">
                              {errors.address.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <AvatarUploader setAvatarId={setAvatarId} />

                <div className="modal-footer d-flex">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ padding: "6px 12px", margin: "4px 4px 0 5px" }}
                  >
                    Create
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      reset();
                      onClose();
                      setIsDistrictDisabled(true);
                      setIsWardDisabled(true);
                    }}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUserInfo;
