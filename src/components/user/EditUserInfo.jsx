/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AvatarUploader from "./AvatarUploader";

const editUserinfo = yup.object({
  fullName: yup.string().required("tên không được để trống"),
  email: yup.string().required("email không được để trống").min(5).max(30),
  phone: yup
    .string()
    .required("số điện thoại không được để trống")
    .min(9)
    .max(20),
  gender: yup.string().required(" giới tính không được để trống "),
  province: yup.string().required("tĩnh không được để trống"),
  district: yup.string().required("huyện không được để trống"),
  ward: yup.string().required("phường không được để trống"),
  address: yup.string().required("địa chỉ không được để trống"),
});
const UpdateFormModal = ({
  isOpen,
  onClose,
  listUserInfo,
  setListUserInfo,
  selectedUserInfo,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editUserinfo),
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [noneContent, setNoneContent] = useState(false);
  const [avatarURL, setAvatarURL] = useState("");
  const [avatarId, setAvatarId] = useState("");
  const [provinceId, setProvinceId] = useState();
  const [districtId, setDistrictId] = useState();
  const [wardId, setWardId] = useState();
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [locationRegion, setLocationRegion] = useState(
    selectedUserInfo.locationRegion
  );

  const getAllProvinces = async () => {
    await axios
      .get("https://vapi.onedev.top/api/v1/provinces")
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

  const handleProvinceChange = (event) => {
    setProvinceId(event.target.value);
    const provinceName = event.target.options[event.target.selectedIndex].text;
    setLocationRegion((prevState) => ({
      ...prevState,
      provinceId: event.target.value,
      provinceName: provinceName,
    }));
  };

  const handleDistrictChange = (event) => {
    setDistrictId(event.target.value);
    const districtName = event.target.options[event.target.selectedIndex].text;
    setLocationRegion((prevState) => ({
      ...prevState,
      districtId: event.target.value,
      districtName: districtName,
    }));
  };

  const handleWardChange = (event) => {
    setWardId(event.target.value);
    const wardName = event.target.options[event.target.selectedIndex].text;
    setLocationRegion((prevState) => ({
      ...prevState,
      wardId: event.target.value,
      wardName: wardName,
    }));
  };

  const handleUpdate = (values) => {
    try {
      const data = {
        ...values,
        provinceId: locationRegion.provinceId,
        provinceName: locationRegion.provinceName,
        districtId: locationRegion.districtId,
        districtName: locationRegion.districtName,
        wardId: locationRegion.wardId,
        wardName: locationRegion.wardName,
        address: values.address,
        username: selectedUserInfo.username,
        password: selectedUserInfo.password,
      };

      fetch(
        `http://localhost:8080/api/admin/userinfo/edit/${selectedUserInfo.userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      ).then((response) => {
        if (response.ok) {
          const updatedUserInfo = { ...selectedUserInfo, ...data };
          listUserInfo.map((item, index) => {
            if (item.id === updatedUserInfo.id) {
              listUserInfo[index] = updatedUserInfo;
            }
          });

          setListUserInfo(listUserInfo);
          onClose();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Cập nhật thành công",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          throw new Error("Không tạo được thông tin người dùng");
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setProvinceId(selectedUserInfo.provinceId);
    setDistrictId(selectedUserInfo.districtId);
    setWardId(selectedUserInfo.wardId);
  }, [selectedUserInfo]);

  useEffect(() => {
    getAllProvinces();
  }, []);

  useEffect(() => {
    getAllDistrictsByProvinceId(provinceId);
  }, [provinceId]);

  useEffect(() => {
    getAllWardsByDistrictId(districtId);
  }, [districtId]);

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
              <h5 className="modal-title text-primary">
                Sữa Thông Tin Người Dùng
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => {
                  onClose();
                }}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body modalbodyform">
              <form onSubmit={handleSubmit(handleUpdate)}>
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="row">
                      <div className="form-group col-lg-6 mb-3 ">
                        <label htmlFor="fullName" className="form-label col-3">
                          Họ Tên
                        </label>
                        <div className="col-9">
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            className={`form-control ${
                              errors?.fullName ? "is-invalid" : ""
                            }`}
                            {...register("fullName")}
                            defaultValue={selectedUserInfo.fullName}
                          />
                          {errors?.fullName && (
                            <span className="invalid-feedback valid-text">
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
                            defaultValue={selectedUserInfo.email}
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
                        <label htmlFor="phone" className="form-label col-3">
                          Số Điện Thoại
                        </label>
                        <div className="col-9">
                          <input
                            type="text"
                            id="phone"
                            defaultValue={selectedUserInfo.phone}
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
                        <label htmlFor="gender" className="form-label col-3">
                          Giới Tính
                        </label>
                        <div className="col-9">
                          <select
                            name="gender"
                            id="gender"
                            defaultValue={selectedUserInfo.gender}
                            className={`form-select ${
                              errors?.gender ? "is-invalid" : ""
                            }`}
                            {...register("gender")}
                          >
                            <option value="male">Nam</option>
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
                        <label htmlFor="province" className="form-label col-3">
                          Thành Phố
                        </label>
                        <div className="col-9">
                          <select
                            name="province"
                            id="province"
                            value={provinceId}
                            className={`form-select ${
                              errors?.province ? "is-invalid" : ""
                            }`}
                            {...register("province")}
                            onChange={handleProvinceChange}
                          >
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
                        <label htmlFor="district" className="form-label col-3">
                          Quận/Huyện
                        </label>
                        <div className="col-9">
                          <select
                            name="district"
                            id="district"
                            value={districtId}
                            className={`form-select ${
                              errors?.district ? "is-invalid" : ""
                            }`}
                            {...register("district")}
                            onChange={handleDistrictChange}
                          >
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
                        <label htmlFor="ward" className="form-label col-3">
                          Phường/Xã
                        </label>
                        <div className="col-9">
                          <select
                            name="ward"
                            id="ward"
                            value={wardId}
                            className={`form-select ${
                              errors?.ward ? "is-invalid" : ""
                            }`}
                            {...register("ward")}
                            onChange={handleWardChange}
                          >
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
                        <label htmlFor="address" className="form-label col-3">
                          Địa Chỉ
                        </label>
                        <div className="col-9">
                          <input
                            type="text"
                            id="address"
                            defaultValue={selectedUserInfo.address}
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
                  setAvatarURL={setAvatarURL}
                  avatarId={selectedUserInfo.avatarId}
                  avatarUrl={selectedUserInfo.avatarUrl}
                  setNoneContent={setNoneContent}
                  setSelectedFile={setSelectedFile}
                  selectedFile={selectedFile}
                  setSelectedImage={setSelectedImage}
                  selectedImage={selectedImage}
                  avatarURL={avatarURL}
                  noneContent={noneContent}
                />
                <div className="modal-footer d-flex">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ padding: "6px 12px", margin: "4px 4px 0 5px" }}
                  >
                    Chĩnh Sữa
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      onClose();
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

export default UpdateFormModal;
