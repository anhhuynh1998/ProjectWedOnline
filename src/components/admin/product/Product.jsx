import React, { useEffect, useState } from 'react'
import { ProductService } from '../../../service/admin/product/productService'
import Spinner from '../layouts/Spinner';
import { NavLink, Outlet } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    try {
      setLoading(true)
      async function finAllProductList(search, pageable) {
        let response = await ProductService.getAllProduct(search, pageable)
        setProducts(response.data.content)
        setLoading(false)
      }
      finAllProductList()
    } catch (error) {

    }
  }, [])

  return (

    <div className="container">
      <section>
        <div className="d-flex align-items-center">
          <h3 className="text-warning me-3"> List</h3>
          <button className="btn  btn-outline-success">
            <NavLink to={`/admin/product/add`}>
              <i className="fa fa-plus me-2" />
              Add Product
            </NavLink>
          </button>
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
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products && products?.length && products?.map((pro) => (
                    <tr key={pro.id}>
                      <td>{pro.id}</td>
                      <td>{pro.description}</td>
                      <td>{pro.name}</td>
                      <td>{pro.price}</td>
                      <td>{pro.size}</td>
                      <td>{pro.status}</td>
                      <td>{pro.category}</td>
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
      <Outlet />

    </div>
  )
}

export default Product