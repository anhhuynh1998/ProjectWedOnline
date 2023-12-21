import { useState, useEffect } from "react";
import serviceUserInfo from "../service/serviceUserInfo";
import AddUserInfo from "./AddUserInfo";
import UpdateFormModal from "./EditUserInfo";

const ListUserInfo = () => {
  const [listUserInfo, setListUserInfo] = useState([]);
  const [selectedUserInfo, setSelectedUserInfo] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const [pageable, setPageable] = useState(0);
  const [sortField, setSortField] = useState("id");
  const [orderByType, setOrderByType] = useState("desc");

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

  const closeModal = () => {
    setIsOpen(false);
  };

  const closeModalEdit = () => {
    setIsOpenEdit(false);
  };

  useEffect(() => {
    async function getData() {
      try {
        const res = await serviceUserInfo.getAll(
          search,
          page,
          size,
          sortField,
          orderByType
        );
        setListUserInfo(res.data.content);
        setPageable(res.data.totalPages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, [search, page, size, pageable, sortField, orderByType]);

  const handleSortChange = (field) => {
    if (field === sortField) {
      setOrderByType(orderByType === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setOrderByType("asc");
    }
  };

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
        const res = await serviceUserInfo.getAll(search, nextPage, size, sortField, orderByType);
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
          <div className=" row ">
            <div className="d-flex justify-content-between ">
              <button className="btn rounded-1 bg-primary text-white animate__animated animate__bounceInLeft" onClick={openModal}>
                <i className="fa-solid fa-user-plus "></i>
                Thêm Mới
              </button>
              <AddUserInfo
                isOpen={isOpen}
                onClose={closeModal}
                listUserInfo={listUserInfo}
                setListUserInfo={setListUserInfo}
              />
              <form className="d-flex m-2-bg-info w-75 animate__animated animate__bounceInRight" role="search">
                <i className="fa-solid fa-magnifying-glass text-danger  "></i>
                <input
                  className="form-control me-2 rounded-1 "
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
        <table className="table mt-3 animate__animated animate__bounceInUp">
          <thead className="thead-dark">
            <tr >
              <th scope="col" className="btn-danger bg-danger"
                onClick={() => handleSortChange("id")}
                disabled={sortField !== "id"}
              >
                {sortField === "id" && <i className="fa-solid fa-sort fa-xl "></i>}
              </th>
              <th scope="col" className='text-start'>Họ tên</th>
              <th scope="col" className='text-start'>Email</th>
              <th scope="col" className='text-start'>Số điện thoại</th>
              <th scope="col" className='text-start'>Giới tính</th>
              <th scope="col" className='text-start'>Thành Phố</th>
              <th scope="col" className='text-start'>Quận/Huyện</th>
              <th scope="col" className='text-start'>Phường/Xã</th>
              <th scope="col" className='text-start'>Địa chỉ</th>
              <th scope="col" className='text-start'>Hoạt Động</th>
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
                    
                    <button type="button" 
                      className="btn p-2 m-2 flex-fill edit "
                      onClick={() => openModalEdit(item.id)}
                    >
                      <i className="fa-solid fa-user-pen text-primary"></i>
                    </button>
                    {/* <button
                      className="btn btn-outline-danger p-2 m-2 delete"
                      onClick={() => handleDelete(item)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button> */}
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
        <div className="d-flex justify-content-between animate__animated animate__bounceInUp">
          <button
            className="btn btn-outline-danger me-4 rounded-1"
            onClick={handlePreviousPage}
            disabled={page === 0}
          >
            <i className="fa-solid fa-angles-left"></i>
          </button>
          <h5 style={{ margin: 0, lineHeight: "35px" }}>{page + 1} </h5>
          <button
            className="btn btn-outline-danger ms-4 rounded-1"
            onClick={handleNextPage}
            disabled={page === pageable - 1}
          >
            <i className="fa-solid fa-angles-right"></i>
          </button>
        </div>

        <div className="d-flex ">
          <label className="mb-4 animate__animated animate__bounceInUp">
            <span className="numberpage">Số hàng trên mỗi trang :</span>
            <select
              className="selectpicker rounded-1 "
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
