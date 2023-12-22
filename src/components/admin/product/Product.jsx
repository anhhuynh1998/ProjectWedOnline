/* eslint-disable no-inner-declarations */
import React, { useEffect, useRef, useState } from 'react'
import { ProductService } from '../../../service/admin/product/productService'
import Spinner from '../layouts/Spinner';
import CreateProduct from './CreateProduct';
import UpdateProduct from './UpdateProduct';
import Swal from 'sweetalert2';
import DetailProduct from './DetailProduct';
import { ToastError } from '../../../toastify/Toast';
import TableHeader from './componentResue/TableHeader';
import SearchForm from './componentResue/SearchForm';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false)
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const [pageable, setPageable] = useState(0);
  const [selectedPage, setSelectedPage] = useState(page);
  const [isFirstPage, setIsFirstPage] = useState()
  const [isLastPage, setIsLastPage] = useState()
  const [sortField, setSortField] = useState("id");
  const [orderByType, setOrderByType] = useState("desc");
  const [search, setSearch] = useState("");


  const openModal = () => {
    setIsOpenModal(true);
  };


  const openUpdateModal = (productId) => {
    console.log(productId);
    setSelectedProductId(productId);
    setIsOpenModalUpdate(true);
  };


  const closeModal = () => {
    setSelectedProductId(null);
    setIsOpenModal(false);
  };
  const closeModalUpdate = () => {
    setSelectedProductId(null);
    setIsOpenModalUpdate(false);
  };

  const openDetail = () => {
    setIsDetailOpen(true);
  };

  const closeDetail = () => {
    setIsDetailOpen(false);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < pageable) {
      setPage(newPage);
    }
  };

  const handlePageChangeSelect = () => {
    if (selectedPage >= 1 && selectedPage <= pageable) {
      setPage(selectedPage - 1);
    }
  };

  const sizeOptions = [1, 5, 10, 15, 25];

  const handleSizePageChange = (e) => {
    const newSize = parseInt(e.target.value, 10);
    if (!isNaN(newSize) && newSize > 0 && newSize !== size) {
      setSize(newSize);
      setPage(0);
    }
  };


  const scrollToRef = useRef(null);
  useEffect(() => {
    if (scrollToRef.current) {

      scrollToRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  }, [products]);



  const handleSelectedPageChange = (e) => {
    const newSelectedPage = parseInt(e.target.value, 10);
    setSelectedPage(newSelectedPage);
  };


  function truncateStr(str, maxCharacter) {
    if (str.length > maxCharacter) {
      let truncatedStr = str.substring(0, maxCharacter);
      let lastSpace = truncatedStr.lastIndexOf(' ');
      return truncatedStr.substring(0, lastSpace) + " ...";
    } else {
      return str;
    }
  }


  useEffect(() => {
    try {
      setLoading(true);
      console.log(orderByType)
      async function finAllProductList() {
        try {
          const response = await ProductService.getAllProduct(search, page, size, sortField,
            orderByType);
          setProducts(response.data.content);
          setPageable(response.data.totalPages);
          setLoading(false);
          setIsFirstPage(page === 0);
          setIsLastPage(page === response.data.totalPages - 1);

        } catch (error) {
          ToastError("Lỗi khi lấy dữ liệu !")
          setLoading(false);
        }
      }
      finAllProductList();
    } catch (error) {
      ToastError("Lỗi khi lấy dữ liệu !")

    }
  }, [search, page, size, sortField, orderByType]);


  const handleSearch = (value) => {
    setSearch(value);
    // Thực hiện các bước tìm kiếm khác nếu cần
  };

  const handlePreviousPage = () => {
    handlePageChange(page - 1);
    console.log("page - 1=======");
    console.log(page - 1);
  };

  const handleNextPage = async () => {
    const nextPage = page + 1;

    const pageNumber = 0;
    if (nextPage < pageable && nextPage > pageNumber) {
      try {
        const res = await ProductService.getAllProduct(search, nextPage, size, sortField,
          orderByType);
        setProducts(res.data.content);
        setPage(nextPage);
      } catch (error) {
        ToastError("Lỗi khi lấy dữ liệu !")

      }
    }
  };

  const formatCurrencyVND = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(amount);
  };


  return (

    <div className="container-fluid">
      <section className="d-flex justify-content-between align-items-left">
        <div className="d-flex align-items-left">
          <button className="btn bg-primary text-white 
          animate__animated animate__bounceInLeft rounded-1" onClick={openModal}>
            <i className="fa fa-plus me-3" />
            Tạo Sản Phẩm
          </button>
          {<CreateProduct isOpenModal={isOpenModal} handleClose={closeModal} products={products} setProducts={setProducts} />}
        </div>
        <SearchForm onSearch={handleSearch} />

      </section>

      <section className="mt-2 ">
        {
          loading ? <Spinner /> : (
            <div>
              <table className="table table-hover " >
                <thead className='thead-dark'>
                  <tr>
                    <TableHeader field="id" label="ID" setSortField={setSortField} setOrderByType={setOrderByType} orderByType={orderByType} sortField={sortField} />
                    <TableHeader field="name" label="Tên Sản Phẩm" setSortField={setSortField} setOrderByType={setOrderByType} orderByType={orderByType} sortField={sortField} />
                    <TableHeader field="description" label="Mô tả" setSortField={setSortField} setOrderByType={setOrderByType} orderByType={orderByType} sortField={sortField} />
                    <TableHeader field="price" label="Giá ký gửi" setSortField={setSortField} setOrderByType={setOrderByType} orderByType={orderByType} sortField={sortField} />
                    <TableHeader field="salesPrice" label="Giá bán ra" setSortField={setSortField} setOrderByType={setOrderByType} orderByType={orderByType} sortField={sortField} />
                    <TableHeader field="size" label="Kích cỡ" setSortField={setSortField} setOrderByType={setOrderByType} orderByType={orderByType} sortField={sortField} />
                    <TableHeader field="status" label="Tình trạng" setSortField={setSortField} setOrderByType={setOrderByType} orderByType={orderByType} sortField={sortField} />
                    <TableHeader field="category" label="Loại" setSortField={setSortField} setOrderByType={setOrderByType} orderByType={orderByType} sortField={sortField} />
                    <TableHeader field="userInfo" label="Người ký gửi" setSortField={setSortField} setOrderByType={setOrderByType} orderByType={orderByType} sortField={sortField} />
                    <TableHeader field="depositDate" label="Ngày ký gửi" setSortField={setSortField} setOrderByType={setOrderByType} orderByType={orderByType} sortField={sortField} />
                    <TableHeader field="paid" label="Trạng thái" setSortField={setSortField} setOrderByType={setOrderByType} orderByType={orderByType} sortField={sortField} />
                    <TableHeader field="codeProduct" label="Mã sản phẩm" setSortField={setSortField} setOrderByType={setOrderByType} orderByType={orderByType} sortField={sortField} />
                    <th scope="col-2" colSpan={2}>Hành Động</th>
                  </tr>
                </thead>
                <tbody>
                  {products && products?.length && products?.map((product) => (
                    <tr key={product.id} ref={scrollToRef}>
                      <td>{product.id}</td>
                      <td title={product.name}>{truncateStr(product.name, 20)}</td>
                      <td title={product.description}>{truncateStr(product.description, 20)}</td>
                      <td>{formatCurrencyVND(product.price)}</td>
                      <td>{formatCurrencyVND(product.salesPrice)}</td>
                      <td>{product.size}</td>
                      <td>{product.status}</td>
                      <td>{product.category}</td>
                      <td>{product.fullName !== null ? product.fullName : 'N/A'}</td>

                      <td>{new Date(product.depositDate).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</td>

                      <td className={product.paid === true ? ' sold' : 'not-sold'}>
                        {product.paid === true ? 'đã bán' : 'chưa bán'}
                      </td>
                      <td>{product.codeProduct}</td>
                      <td>
                        <i role="button" className="fa fa-edit me-3 btn btn-outline-success bth-width"
                          onClick={() => openUpdateModal(product.id)}
                        />
                        {isOpenModalUpdate && selectedProductId === product.id && (
                          <UpdateProduct
                            isOpenModal={isOpenModalUpdate}
                            handleClose={closeModalUpdate}
                            productId={selectedProductId}
                            products={products} setProducts={setProducts}
                          />
                        )}
                      </td>
                     

                      {/* <td>
                        <button
                          className="btn btn-outline-primary btn-width"
                          onClick={openDetail}
                        >
                          <i className="fa-solid fa-magnifying-glass" />
                        </button>
                        {isDetailOpen && (
                          <DetailProduct productId={product.id} handleClose={closeDetail} />
                        )}
                      </td> */}

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }


      </section >

      <section>
        <div className="d-flex mt-3">
          {/* <div className='div-layout'>
            <label>Chọn Trang bạn muốn đến:</label>
            <select
              value={selectedPage}
              onChange={handleSelectedPageChange}
              className="form-select"
              style={{ width: "18%" }}
            >
              {Array.from({ length: pageable }, (_, index) => index + 1).map((pageNumber) => (
                <option key={pageNumber} value={pageNumber}>
                  {pageNumber}
                </option>
              ))}
            </select>
            <button
              className="btn btn-outline-primary ms-2"
              onClick={handlePageChangeSelect}
              disabled={selectedPage > pageable}
            >
              Tới
            </button>
          </div> */}
          <div className="ms-auto d-flex align-items-center">
            <label style={{ marginBottom: '17px', marginRight: '10px', marginTop: "10px" }}>
              Số hàng :
            </label>
            <select
              value={size}
              onChange={handleSizePageChange}
              className='form-control'
              style={{ marginBottom: '5px', width: '35%' }}
            >
              {sizeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="h-flex">
            <h5>
              {page * size + 1} - {Math.min((page + 1) * size, (pageable * size))} của {pageable * size}
            </h5>
          </div>
          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-primary me-2"
              onClick={handlePreviousPage}
              disabled={isFirstPage}
            // style={{ display: isFirstPage ? 'none' : "block" }}
            >
              <i className="fa-solid fa-angles-left"></i>
            </button>

            <button
              className="btn btn-outline-primary ms-2"
              onClick={handleNextPage}
              disabled={isLastPage}
            // style={{ display: isLastPage ? 'none' : 'block' }}
            >
              <i className="fa-solid fa-angles-right"></i>
            </button>
          </div>
        </div>


      </section>

    </div >
  )
}

export default Product