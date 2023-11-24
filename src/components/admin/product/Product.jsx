import React, { useEffect, useState } from 'react'
import { ProductService } from '../../../service/admin/product/productService'
import Spinner from '../layouts/Spinner';
import CreateProduct from './CreateProduct';
import UpdateProduct from './UpdateProduct';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [selectedProductId, setSelectedProductId] = useState(null);

  const openModal = () => {
    setIsOpenModal(true);
  };


  const openUpdateModal = (productId) => {
    console.log(productId);
    setSelectedProductId(productId);
    setIsOpenModal(true);
  };


  const closeModal = () => {
    console.log("11111111");
    setSelectedProductId(null);
    setIsOpenModal(false);
  };

  useEffect(() => {
    try {
      setLoading(true)
      async function finAllProductList() {
        let response = await ProductService.getAllProduct()
        setProducts(response.data)
        console.log(response);
        setLoading(false)
      }
      finAllProductList()
    } catch (error) {

    }
  }, [])
  // useEffect(() => {
  //   try {
  //     setLoading(true)
  //     async function finAllProductList(search, pageable) {
  //       let response = await ProductService.getAllProduct(search, pageable)
  //       setProducts(response.data.content)
  //       console.log(response);
  //       setLoading(false)
  //     }
  //     finAllProductList()
  //   } catch (error) {

  //   }
  // }, [])

  return (

    <div className="container">
      <section>
        <div className="d-flex align-items-center">
          <h3 className="text-warning me-3"> List</h3>
          <button className="btn  btn-outline-success" onClick={openModal}>
            <i className="fa fa-plus me-2" />
            Add Product
          </button>
          {<CreateProduct isOpenModal={isOpenModal} handleClose={closeModal} />}
        </div>
        <p className="fst-italic">Deserunt ut pariatur tempor aute incididunt Lorem esse. </p>
      </section>
      <section className="mt-2">
        {
          loading ? <Spinner /> : (
            <div>
              <table className="table table-striped table-hover">
                <thead className="table-warning">
                  <tr>
                    <th>#</th>
                    <th>Mô Tả</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Giá</th>
                    <th>Kích Cỡ</th>
                    <th>Tình Trạng</th>
                    <th>Loại</th>
                    <th colSpan={3}>Actions</th>
                  </tr>
                </thead>
                <tbody>
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
                        <i role="button" className="fa fa-edit me-3 btn btn-outline-success" style={{
                          width: "50px"
                        }}
                          onClick={() => openUpdateModal(product.id)}
                        />
                        {isOpenModal && selectedProductId === product.id && (
                          <UpdateProduct
                            isOpenModal={isOpenModal}
                            handleClose={closeModal}
                            productId={selectedProductId}
                          />
                        )}
                      </td>

                      <td>

                        <i role='button' className="fa-solid fa-arrow-right-arrow-left btn btn-outline-danger"
                          style={{
                            width: "50px"
                          }}
                        ></i>

                      </td>
                      <td>
                        <i role="button" className="fa fa-trash me-1 btn btn-outline-danger"
                          style={{
                            width: "50px"
                          }}
                        />
                        {/* onClick={() => deleteCustomerById(pro.id)} */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </nav>

      </section>


    </div>
  )
}

export default Product