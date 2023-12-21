/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AvatarUploader from "./AvatarUploader";
import { ToastSuccess } from "../../toastify/Toast";
import SelectOption from "../CustomField/SelectOption";
import { values } from "lodash";
import Input from "../CustomField/Input";

const editUserinfo = yup.object({
  fullName: yup.string().required("tên không được để trống"),
  phone: yup
    .string()
    .required("số điện thoại không được để trống")
    .min(9)
    .max(20),
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
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editUserinfo),
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [noneContent, setNoneContent] = useState(false);
  const [avatarURL, setAvatarURL] = useState("");
  const [avatarId, setAvatarId] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [locationRegion, setLocationRegion] = useState(
    selectedUserInfo?.locationRegion || {}
  );
  const gendeOption = [
    {
      id: "male",
      name: "Nam",
    },
    {
      id: "female",
      name: "Nữ",
    },
  ];

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

  const handleUpdate = (values) => {
    try {
      const data = {
        ...values,
        avatarId: avatarId,
        provinceName: provinces.find((e) => e.id == values.provinceId)?.name,
        districtName: districts.find((e) => e.id == values.districtId)?.name,
        wardName: wards.find((e) => e.id == values.wardId)?.name,
        // address: values.address,
      };

      fetch(
        `http://localhost:8080/api/admin/userinfo/${selectedUserInfo.userId}`,
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
          ToastSuccess("Cập nhật thành công");
        } else {
          throw new Error("Không tạo được thông tin người dùng");
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (selectedUserInfo.provinceId) {
      setValue("provinceId", selectedUserInfo.provinceId);
      setValue("districtId", selectedUserInfo.districtId);
      setValue("wardId", selectedUserInfo.wardId);
    }
    if (selectedUserInfo) {
      setValue("fullName", selectedUserInfo.fullName);
      setValue("email", selectedUserInfo.email);
      setValue("phone", selectedUserInfo.phone);
      setValue("address", selectedUserInfo.address);
    }
  }, [selectedUserInfo]);

  useEffect(() => {
    getAllProvinces();
    getAllDistrictsByProvinceId(selectedUserInfo.provinceId);
    getAllWardsByDistrictId(selectedUserInfo.districtId);
  }, [selectedUserInfo]);

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
                Sửa Thông Tin Người Dùng
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
                      <Input
                        label="Họ Tên"
                        name="fullName"
                        register={register}
                        errors={errors}
                        defaultValue={selectedUserInfo.fullName}
                      />
                      <Input
                        label="Email"
                        name="email"
                        register={register}
                        errors={errors}
                        defaultValue={selectedUserInfo.email}
                      />
                    </div>
                    <div className="row">
                      <Input
                        label="Số Điện Thoại"
                        name="phone"
                        register={register}
                        errors={errors}
                        defaultValue={selectedUserInfo.phone}
                      />
                      <SelectOption
                        name="gender"
                        register={register}
                        label="Giới Tính"
                        errors={errors}
                        options={gendeOption}
                        setValue={setValue}
                        defaultValue={values.gender}
                      ></SelectOption>
                    </div>
                    <div className="row">
                      <SelectOption
                        name="provinceId"
                        register={register}
                        handleOnChange={(value) => {
                          getAllDistrictsByProvinceId(value);
                        }}
                        label="Thành Phố"
                        errors={errors}
                        options={provinces}
                        setValue={setValue}
                        defaultValue={selectedUserInfo.provinceId}
                      ></SelectOption>

                      <SelectOption
                        name="districtId"
                        register={register}
                        handleOnChange={(value) => {
                          getAllWardsByDistrictId(value);
                        }}
                        label="Quận/Huyện"
                        errors={errors}
                        options={districts}
                        setValue={setValue}
                        defaultValue={selectedUserInfo.districtId}
                      ></SelectOption>
                    </div>
                    <div className="row">
                      <SelectOption
                        name="wardId"
                        register={register}
                        label="Phường/Xã"
                        errors={errors}
                        options={wards}
                        setValue={setValue}
                        defaultValue={selectedUserInfo.wardId}
                      ></SelectOption>
                      <Input
                        label="Địa Chỉ"
                        name="address"
                        register={register}
                        errors={errors}
                        defaultValue={selectedUserInfo.address}
                      />
                    </div>
                  </div>
                </div>
                <AvatarUploader
                  setAvatarId={setAvatarId}
                  setAvatarURL={setAvatarURL}
                  avatarId={selectedUserInfo?.avatarId}
                  avatarUrl={selectedUserInfo?.avatarUrl}
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
                    Chỉnh Sửa
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
