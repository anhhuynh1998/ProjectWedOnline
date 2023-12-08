/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AvatarUploader from "./AvatarUploader";

const createUserinfo = yup.object({
  username: yup.string().required("Tên người dùng bắt buộc").min(5).max(30),
  password: yup
    .string()
    .required("Mật khẩu bắt buộc phải nhập")
    .min(6)
    .max(20)
    .typeError("Mật khẩu không được để trống"),
  fullName: yup.string().required("Tên không được để trống"),
  email: yup.string().required("Email không được để trống").min(5).max(30),
  phone: yup
    .string()
    .required("Số điện thoại không được để trống")
    .min(9)
    .max(20),
  gender: yup.string().required("Giới tính không được để trống "),
  province: yup.string().required("Tĩnh không được để trống"),
  district: yup.string().required("Huyện không được để trống"),
  ward: yup.string().required("Phường không được để trống"),
  address: yup.string().required("Địa chỉ không được để trống"),
});
const AddUserInfo = ({ isOpen, onClose, listUserInfo, setListUserInfo }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(createUserinfo),
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [noneContent, setNoneContent] = useState(false);
  const [avatarURL, setAvatarURL] = useState("");
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
        const data = await response.json();
        setListUserInfo([...listUserInfo, data]);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "thêm mới thành công !.",
          showConfirmButton: false,
          timer: 1500,
        });

        onClose();
        reset();
        setAvatarId("");
        setAvatarURL("");
        setSelectedFile(null);
        setSelectedImage(null);
        setNoneContent(false);
      } else {
        throw new Error("Không tạo được thông tin người dùng");
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
    setError("province", null);

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

    setError("district", null);

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

    setError("ward", null);
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
          className="modal-dialog modal-dialog-centered modal-form"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-primary">Tạo người dùng</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => {
                  onClose();
                  reset();
                  setAvatarId("");
                  setAvatarURL("");
                  setSelectedFile(null);
                  setSelectedImage(null);
                  setNoneContent(false);
                }}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body modalbodyform">
              <form onSubmit={handleSubmit(handleCreate)}>
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="row">
                      <div className="form-group col-lg-6 mb-3 ">
                        <label
                          htmlFor="username"
                          className="form-label col-3 text-start"
                        >
                          Tài Khoản
                        </label>
                        <div className="col-9">
                          <input
                            type="text"
                            id="username"
                            className={`form-control ${
                              errors?.username ? "is-invalid" : ""
                            }`}
                            {...register("username")}
                            placeholder="Vui lòng nhập username"
                          />
                          {errors?.username && (
                            <span className="invalid-feedback valid-text">
                              {errors.username.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="form-group col-lg-6 mb-3 ">
                        <label
                          htmlFor="password"
                          className="form-label col-3 text-start"
                        >
                          Mật Khẩu
                        </label>
                        <div className="col-9">
                          <input
                            type="text"
                            id="password"
                            className={`form-control ${
                              errors?.password ? "is-invalid" : ""
                            }`}
                            {...register("password")}
                            placeholder="Vui lòng nhập password"
                          />
                          {errors?.password && (
                            <span className="invalid-feedback valid-text">
                              {errors.password.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-lg-6 mb-3 ">
                        <label
                          htmlFor="fullName"
                          className="form-label col-3 text-start"
                        >
                          Họ Tên
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
                            <span className="invalid-feedback valid-text">
                              {errors.fullName.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="form-group col-lg-6 mb-3 ">
                        <label
                          htmlFor="email"
                          className="form-label col-3 text-start"
                        >
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
                            <span className="invalid-feedback valid-text">
                              {errors.email.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-lg-6 mb-3 ">
                        <label
                          htmlFor="phone"
                          className="form-label col-3 text-start"
                        >
                          Số điện Thoại
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
                            <span className="invalid-feedback valid-text">
                              {errors.phone.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="form-group col-lg-6 mb-3 ">
                        <label
                          htmlFor="gender"
                          className="form-label col-3 text-start"
                        >
                          Giới tính
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
                            <option value="male">Nam </option>
                            <option value="female">Nữ</option>
                          </select>
                          {errors?.gender && (
                            <span className="invalid-feedback valid-text">
                              {errors.gender.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-lg-6 mb-3 ">
                        <label
                          htmlFor="province"
                          className="form-label col-3 text-start"
                        >
                          Thành Phố
                        </label>
                        <div className="col-9">
                          <select
                            name="province"
                            id="province"
                            className={`form-select ${
                              errors?.province?.message ? "is-invalid" : ""
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
                            <span className="invalid-feedback valid-text">
                              {errors.province.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="form-group col-lg-6 mb-3 ">
                        <label
                          htmlFor="district"
                          className="form-label col-3 text-start"
                        >
                          Quận/Huyện
                        </label>
                        <div className="col-9">
                          <select
                            name="district"
                            id="district"
                            className={`form-select ${
                              errors?.district?.message ? "is-invalid" : ""
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
                            <span className="invalid-feedback valid-text">
                              {errors.district.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-lg-6 mb-3">
                        <label
                          htmlFor="ward"
                          className="form-label col-3 text-start"
                        >
                          Phường/Xã
                        </label>
                        <div className="col-9">
                          <select
                            name="ward"
                            id="ward"
                            className={`form-select ${
                              errors?.ward?.message ? "is-invalid" : ""
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
                            <span className="invalid-feedback valid-text">
                              {errors.ward.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="form-group col-lg-6 mb-3">
                        <label
                          htmlFor="address"
                          className="form-label col-3 text-start"
                        >
                          Địa chỉ
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
                            <span className="invalid-feedback valid-text">
                              {errors.address.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <AvatarUploader
                  setAvatarId={setAvatarId}
                  setSelectedFile={setSelectedFile}
                  setSelectedImage={setSelectedImage}
                  setAvatarURL={setAvatarURL}
                  selectedFile={selectedFile}
                  selectedImage={selectedImage}
                  avatarURL={avatarURL}
                  setNoneContent={setNoneContent}
                  noneContent={noneContent}
                />
                <div className="modal-footer d-flex">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ padding: "6px 12px", margin: "4px 4px 0 5px" }}
                  >
                    Tạo tài Khoản
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      reset();
                      onClose();
                      setIsDistrictDisabled(true);
                      setIsWardDisabled(true);
                      setAvatarId("");
                      setAvatarURL("");
                      setSelectedFile(null);
                      setSelectedImage(null);
                      setNoneContent(false);
                    }}
                  >
                    Đóng
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
