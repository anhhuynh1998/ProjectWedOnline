/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import serviceUserInfo from "../service/serviceUserInfo";
import Swal from "sweetalert2";
import AddUserInfo from "./AddUserInfo";
import UpdateFormModal from "./EditUserInfo";
import { useLocation } from "react-router-dom";

const ListUserInfo = () => {
  const [listUserInfo, setListUserInfo] = useState([]);
  const [selectedUserInfo, setSelectedUserInfo] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [search, setSearch] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };
  const openModalEdit = (obj) => {
    setIsOpenEdit(true);
    setSelectedUserInfo(obj);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const closeModalEdit = () => {
    setIsOpenEdit(false);
  };

  useEffect(() => {
    async function getData() {
      let res = await serviceUserInfo.getAll();
      setListUserInfo(res.data);
    }
    getData();
  }, []);

  const handleDelete = async (userinfoRemove) => {
    try {
      const result = await Swal.fire({
        title: "Bạn có thực sự muốn xóa ",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Xóa",
      });

      if (!result.isConfirmed) return;

      await serviceUserInfo.delete(userinfoRemove.id);
      setListUserInfo((prevListUserInfo) =>
        prevListUserInfo.filter((item) => item.id !== userinfoRemove.id)
      );

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Xóa thành công",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid">
      <div>
        <div className="d-flex">
          <div className="col-lg-8">
            <h2 style={{ color: "primary" }}>List UserInfo</h2>
          </div>
          <div className="col-lg-4 mt-2 me-2">
            <button className="btn btn-outline-success" onClick={openModal}>
              Add New UserInfo
            </button>
            <AddUserInfo
              isOpen={isOpen}
              onClose={closeModal}
              listUserInfo={listUserInfo}
              setListUserInfo={setListUserInfo}
            />
            <form className="d-flex p-2 m-2" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                // onChange={(e) => handleInput(e)}
              />
            </form>
          </div>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col-2">ID</th>
              <th scope="col-2">FullName</th>
              <th scope="col-2">Email</th>
              <th scope="col-2">Phone</th>
              <th scope="col-2">Gender</th>
              <th scope="col-2">Province</th>
              <th scope="col-2">District</th>
              <th scope="col-2">Ward</th>
              <th scope="col-2">Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listUserInfo.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.fullName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.gender}</td>
                <td>{item.provinceName}</td>
                <td>{item.districtName}</td>
                <td>{item.wardName}</td>
                <td>{item.address}</td>
                <td>
                  <button
                    className="btn btn-outline-primary p-2 m-2 flex-fill edit"
                    onClick={() => openModalEdit(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-outline-danger p-2 m-2 delete"
                    onClick={() => handleDelete(item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isOpenEdit && (
          <UpdateFormModal
            isOpen={isOpenEdit}
            onClose={closeModalEdit}
            listUserInfo={listUserInfo}
            setListUserInfo={setListUserInfo}
            selectedUserInfo={selectedUserInfo}
          />
        )}
      </div>
    </div>
  );
};
export default ListUserInfo;
