import { useState, useEffect } from "react";
import serviceUserInfo from "../service/serviceUserInfo";
import Swal from "sweetalert2";
import AddUserInfo from "./AddUserInfo";
import UpdateFormModal from "./EditUserInfo";
import { ToastSuccess } from "../../toastify/Toast";

const ListUserInfo = () => {
  const [listUserInfo, setListUserInfo] = useState([]);
  const [selectedUserInfo, setSelectedUserInfo] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const [pageable, setPageable] = useState(0);

  const openModal = () => {
    setIsOpen(true);
  };

  const openModalEdit = (id) => {
    async function getUserById() {
      const res = await serviceUserInfo.getUserById(id);
      setSelectedUserInfo(res.data);
    }

    setIsOpenEdit(true);
    getUserById();
  };
  console.log(selectedUserInfo.avatarUrl);
  const closeModal = () => {
    setIsOpen(false);
  };

  const closeModalEdit = () => {
    setIsOpenEdit(false);
  };

  useEffect(() => {
    async function getData() {
      try {
        const res = await serviceUserInfo.getAll(search, page, size);
        setListUserInfo(res.data.content);
        setPageable(res.data.totalPages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, [search, page, size, pageable]);

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < pageable) {
      setPage(newPage);
    }
  };

  const handleSizePageChange = (e) => {
    const newSize = parseInt(e.target.value, 10);
    setSize(newSize);
    setPage(0);
  };

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
        cancelButtonText: "Hủy bỏ",
      });

      if (!result.isConfirmed) return;

      await serviceUserInfo.delete(userinfoRemove.id);
      setListUserInfo((prevListUserInfo) =>
        prevListUserInfo.filter((item) => item.id !== userinfoRemove.id)
      );

      ToastSuccess("Xóa thành công");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handlePreviousPage = () => {
    handlePageChange(page - 1);
  };

  const handleNextPage = async () => {
    const nextPage = page + 1;

    if (nextPage >= 0 && nextPage < pageable) {
      try {
        const res = await serviceUserInfo.getAll(search, nextPage, size);
        setListUserInfo(res.data.content);
        setPage(nextPage);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    }
  };

  return (
    <div className="container-fluid">
      <div>
        <div className="d-flex-right">
          <div className="col-lg-12 mt-2 me-2">
            <div className="d-flex justify-content-between">
              <button className="btn btn-outline-success" onClick={openModal}>
                <i className="fa-solid fa-user-plus"></i>
                Thêm Mới
              </button>
              <AddUserInfo
                isOpen={isOpen}
                onClose={closeModal}
                listUserInfo={listUserInfo}
                setListUserInfo={setListUserInfo}
              />
              <form className="d-flex m-2-bg-info" role="search">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Tìm Kiếm..."
                  aria-label="Search"
                  value={search}
                  onChange={(e) => handleInput(e)}
                />
              </form>
            </div>
          </div>
        </div>
        <table className="table table-hover">
          <thead>
            <tr className="col-12">
              <th scope="col-2">ID</th>
              <th scope="col-2">Họ tên</th>
              <th scope="col-2">Email</th>
              <th scope="col-2">Số điện thoại</th>
              <th scope="col-2">Giới tính</th>
              <th scope="col-2">Thành Phố</th>
              <th scope="col-2">Quận/Huyện</th>
              <th scope="col-2">Phường/Xã</th>
              <th scope="col-2">Địa chỉ</th>
              <th scope="col">Hoạt Động</th>
            </tr>
          </thead>
          <tbody>
            {listUserInfo.length > 0 &&
              listUserInfo.map((item) => (
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
                      onClick={() => openModalEdit(item.id)}
                    >
                      <i className="fa-solid fa-user-pen"></i>
                    </button>
                    <button
                      className="btn btn-outline-danger p-2 m-2 delete"
                      onClick={() => handleDelete(item)}
                    >
                      <i className="fa-solid fa-trash"></i>
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
      <div
        className="d-flex justify-content-center mt-3"
        style={{ height: "35px", lineHeight: "30px" }}
      >
        <div className="d-flex">
          <button
            className="btn btn-outline-success me-4"
            onClick={handlePreviousPage}
            disabled={page === 0}
          >
            Trang Trước
          </button>
          <h5 style={{ margin: 0, lineHeight: "35px" }}>{page + 1} </h5>
          <button
            className="btn btn-outline-success ms-4"
            onClick={handleNextPage}
            disabled={page === pageable - 1}
          >
            Trang Sau
          </button>
        </div>
        <div className="d-flex">
          <label className="mb-4">
            <span className="numberpage">Số hàng trên mỗi trang :</span>
            <select
              className="selectpicker"
              data-live-search="true"
              value={size}
              onChange={handleSizePageChange}
              style={{ width: "60px" }}
            >
              <option title="Trang 1">1</option>
              <option title="Trang 2">5</option>
              <option title="Trang 3">10</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ListUserInfo;
