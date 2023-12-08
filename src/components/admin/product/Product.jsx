import React, { useEffect, useState } from 'react'
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
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const [pageable, setPageable] = useState(0);
  const [selectedPage, setSelectedPage] = useState(page);


  const openModal = () => {
    setIsOpenModal(true);
  };


  const openUpdateModal = (productId) => {
    console.log(productId);
    setSelectedProductId(productId);
    setIsOpenModal(true);
  };


  const closeModal = () => {
    setSelectedProductId(null);
    setIsOpenModal(false);
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

  const handleSizePageChange = (e) => {
    const newSize = parseInt(e.target.value, 10);
    if (!isNaN(newSize) && newSize > 0) {
      setSize(newSize);
      setPage(0);
    }
  };



  const handleSelectedPageChange = (e) => {
    const newSelectedPage = parseInt(e.target.value, 10);
    setSelectedPage(newSelectedPage);
  };



  useEffect(() => {
    try {
      setLoading(true);
      async function finAllProductList(search, page, size, pageable) {
        let response = await ProductService.getAllProduct(search, page, size, pageable);
        setProducts(response.data.content);
        setPageable(response.data.totalPages);
        console.log(response.data.content);
        setLoading(false);
      }
      finAllProductList(search, page, size, pageable);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    }
  }, [search, page, size, pageable]);



  const handleInput = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const handlePreviousPage = () => {
    handlePageChange(page - 1);
  };


  const handleNextPage = async () => {
    const nextPage = page + 1;
    if (nextPage < pageable) {
      try {
        const res = await ProductService.getAllProduct(search, nextPage, size);
        setProducts(res.data.content);
        setPage(nextPage);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    }
  };




  const deleteCustomerById = (productId) => {
    try {

      Swal.fire({
        title: 'Bạn muốn xóa sản phẩm này ?',
        showCancelButton: true,
        confirmButtonText: 'Xóa',
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire('Xóa!', '', 'success')
          await ProductService.deleteProducts(productId)
          setCustomer((product) => product.filter((product) => product.id !== productId))
        }
      })
    } catch (error) {

    }
  }


  return (

    <div className="container-fluid">
      <section>
        <div className="d-flex align-items-center">
          <button className="btn  btn-outline-success" onClick={openModal}>
            <i className="fa fa-plus me-3" />
            Tạo Sản Phẩm
          </button>
          {<CreateProduct isOpenModal={isOpenModal} handleClose={closeModal} products={products} setProducts={setProducts} />}

          <form className="d-flex p-2 m-2" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Tìm Kiếm..."
              aria-label="Search"
              value={search}
              onChange={(e) => handleInput(e)}
            />
            <i className="fa-solid fa-magnifying-glass" />
          </form>

        </div>
        <div>
          <label className="mb-2">
            Số sản phẩm trên mỗi trang :
            <input
              type="number"
              value={size}
              onChange={handleSizePageChange}
              style={{ width: "100px", height: "30px" }}
            />
          </label>

        </div>



      </section>
      <section className="mt-2">
        {
          loading ? <Spinner /> : (
            <div>
              <table className="table table-hover table-style" >
                <thead>
                  <tr>
                    <th scope="col-2">#</th>
                    <th scope="col-2">Mô Tả</th>
                    <th scope="col-2">Tên Sản Phẩm</th>
                    <th scope="col-2">Giá</th>
                    <th scope="col-2">Kích Cỡ</th>
                    <th scope="col-2">Tình Trạng</th>
                    <th scope="col-2">Loại</th>
                    <th scope="col-2" colSpan={3}>Hành Động</th>
                  </tr>
                </thead>
                <tbody className='text'>
                  {products && products?.length && products?.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.description}</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.size}</td>
                      <td>{product.status}</td>
                      <td>{product.category}</td>
                      <td>
                        <i role="button" className="fa fa-edit me-3 btn btn-outline-success bth-width"
                          onClick={() => openUpdateModal(product.id)}
                        />
                        {isOpenModal && selectedProductId === product.id && (
                          <UpdateProduct
                            isOpenModal={isOpenModal}
                            handleClose={closeModal}
                            productId={selectedProductId}
                            products={products} setProducts={setProducts}
                          />
                        )}
                      </td>

                      <td>
                        <button
                          className="btn btn-outline-primary btn-width"
                          onClick={openDetail}
                        >
                          <i className="fa-solid fa-magnifying-glass" />
                        </button>
                        {isDetailOpen && (
                          <DetailProduct productId={product.id} handleClose={closeDetail} />
                        )}
                      </td>
                      <td>
                        <button className='btn btn-outline-danger btn-width'

                          onClick={() => {
                            console.log("Product ID:", product.id);
                            deleteCustomerById(product.id);
                          }}

                        >
                          <i className="fa-solid fa-trash"
                          />
                        </button>


                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }


      </section >

      <section>
        <div className="d-flex justify-content-center mt-3">
          <button
            className="btn btn-outline-primary me-2"
            onClick={handlePreviousPage}
            disabled={page === 0}
          >
            Previous
          </button>




          <button
            className="btn btn-outline-primary ms-2"
            onClick={handleNextPage}
            disabled={page === pageable - 1}
          >
            Next
          </button>
        </div>

        <div>
          <label > Chọn Trang bạn muốn đến : </label>
          <select
            value={selectedPage}
            onChange={handleSelectedPageChange}
            style={{
              width: "5%"
            }}
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
            disabled={selectedPage === pageable}
          >
            Go
          </button>

        </div>
      </section>


    </div >
  )
}

export default Product