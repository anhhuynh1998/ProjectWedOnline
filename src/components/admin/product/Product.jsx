/* eslint-disable no-inner-declarations */
import React, { useEffect, useRef, useState } from 'react'
import { ProductService } from '../../../service/admin/product/productService'
import Spinner from '../layouts/Spinner';
import CreateProduct from './CreateProduct';
import UpdateProduct from './UpdateProduct';
import Swal from 'sweetalert2';
import DetailProduct from './DetailProduct';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false)
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const [pageable, setPageable] = useState(0);
  const [selectedPage, setSelectedPage] = useState(page);
  const [isFirstPage, setIsFirstPage] = useState()
  const [isLastPage, setIsLastPage] = useState()
  const [sortType, setSortType] = useState('id');

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

  const sizeOptions = [5, 10, 15, 25, 50, 100];

  const handleSizePageChange = (e) => {
    const newSize = parseInt(e.target.value, 10);
    if (!isNaN(newSize) && newSize > 0 && newSize !== size) {
      setSize(newSize);
      setPage(0);
    }
  };


  const scrollToRef = useRef(null);

  // Effect để cuộn tới phần tử sản phẩm mới khi danh sách sản phẩm thay đổi
  useEffect(() => {
    if (scrollToRef.current) {
      // Sử dụng smooth scroll để có hiệu ứng cuộn mượt mà
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
      let isMounted = true;

      async function finAllProductList(search, page, size, pageable) {
        try {
          const response = await ProductService.getAllProduct(search, page, size, pageable);
          if (isMounted) {
            setProducts(response.data.content);
            setPageable(response.data.totalPages);

            setLoading(false);
            // console.log(response.data);
            setIsFirstPage(page === 0);
            setIsLastPage(page === response.data.totalPages - 1)
          }
        } catch (error) {
          console.error("Lỗi khi lấy dữ liệu:", error);
          setLoading(false);
        }
      }

      finAllProductList(search, page, size, pageable);


      return () => {
        isMounted = false;
      };
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    }
  }, [search, page, size, pageable]);




  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  }


  const handleSearch = () => {
    const input = document.getElementById("example-search-input");
    const searchValue = input.value;
    setPage(0);
    setProducts([]);
    setSearch(searchValue);
  }

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
        const res = await ProductService.getAllProduct(search, nextPage, size, pageable);
        setProducts(res.data.content);
        setPageable(res.data.pageable.pageNumber);
        setPage(nextPage);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
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
      <section className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-success" onClick={openModal}>
            <i className="fa fa-plus me-3" />
            Tạo Sản Phẩm
          </button>
          {<CreateProduct isOpenModal={isOpenModal} handleClose={closeModal} products={products} setProducts={setProducts} />}
        </div>
        <form className="d-flex p-2 m-2 flex-grow-1" id="search" role="search">
          {/* <i className="fa-solid fa-magnifying-glass" id="search-icon" style={{ position: 'absolute', top: '50%', left: '10%', transform: 'translateY(-50%)', zIndex: '1' }} /> */}
          <input
            className="form-control me-2 pl-5 flex-grow-1"
            type="search"
            placeholder="Tìm Kiếm sản phẩm..."
            aria-label="Search"
            id="example-search-input"
            value={search}
            onKeyDown={handleKeyPress}
          />
          <span className="input-group-append " style={{ paddingLeft: "7px" }}>
            <button
              className="
                             border-bottom-0 border rounded-pill ms-n5  btn btn-outline-danger"
              type="button"
              onClick={handleSearch}
            >
              <i className="fa fa-search" />
            </button>
          </span>
        </form>
        <div className="d-flex flex-column align-items-end">
          <label style={{ marginBottom: "17px" }}>
            Số sản phẩm trên mỗi trang:
            <select
              value={size}
              onChange={handleSizePageChange}
              className="form-select"
              style={{ marginBottom: '5px' }}
            >
              {sizeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>


      <section className="mt-2">
        {
          loading ? <Spinner /> : (
            <div>
              <table className="table table-hover " >
                <thead>
                  <tr >
                    <th scope="col-2" >#</th>
                    <th scope="col-2" >Tên Sản Phẩm</th>
                    <th scope="col-2" >Mô Tả</th>
                    <th scope="col-2" >Giá ký gửi(Đồng)</th>
                    <th scope="col-2" >Giá giá bán ra(Đồng)</th>
                    <th scope="col-2" >Kích Cỡ</th>
                    <th scope="col-2" >Tình Trạng</th>
                    <th scope="col-2" >Loại</th>
                    <th scope="col-2" colSpan={3}>Hành Động</th>
                  </tr>
                </thead>
                <tbody>
                  {products && products?.length && products?.map((product) => (
                    <tr key={product.id} ref={scrollToRef}>
                      <td>{product.id}</td>
                      <td title={product.name}>{truncateStr(product.name, 20)}</td>
                      <td title={product.description}>{truncateStr(product.description, 20)}</td>
                      <td>{formatCurrencyVND(product.price)}</td>
                      <td>{product.size}</td>
                      <td>{product.status}</td>
                      <td>{product.category}</td>
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
        <div className="d-flex justify-content-between mt-3">
          <div className="mt-2">
            <h5>
              {page * size + 1} - {Math.min((page + 1) * size, (pageable * size))} của {pageable * size}
            </h5>
          </div>

          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-primary me-2"
              onClick={handlePreviousPage}
              disabled={isFirstPage}
              style={{ display: isFirstPage ? 'none' : "block" }}
            >
              <i className="fa-solid fa-angles-left"></i>
            </button>

            <button
              className="btn btn-outline-primary ms-2"
              onClick={handleNextPage}
              disabled={isLastPage}
              style={{ display: isLastPage ? 'none' : 'block' }}
            >
              <i className="fa-solid fa-angles-right"></i>
            </button>
          </div>
        </div>
      </section>



      <section >
        <div className='div-layout'>
          <label>Chọn Trang bạn muốn đến:</label>
          <select
            value={selectedPage}
            onChange={handleSelectedPageChange}
            className="form-select"
            style={{ width: "8%" }}
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
        </div>


      </section>



    </div >
  )
}

export default Product