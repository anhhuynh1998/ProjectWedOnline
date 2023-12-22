/* eslint-disable react/prop-types */
// import { search } from "fontawesome";

import { useContext } from "react";
import { UseProduct } from "../UseContext";
import { useForm } from "react-hook-form";

const SearchProduct = () => {
    const { filter, setFilter } = useContext(UseProduct);
    const handleSearch = () => {
        const input = document.getElementById("example-search-input");
        const searchValue = input.value;
        setFilter({
            ...filter,
            search: searchValue
        })
    }
    const { handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(handleSearch)}>
            <div className="col-md-12">
                <div className="col-md-5 mx-auto">
                    <div className="small fw-light py-2">Bạn muốn tìm kiếm sản phẩm gì ?</div>
                    <div className="input-group">
                        <input
                            className="form-control border-end-0 border rounded-pill small fw-light py-2"
                            type="search"
                            id="example-search-input"
                            placeholder="tìm kiếm sản phẩm"

                        />
                        <span className="input-group-append " style={{ paddingLeft: "7px" }}>
                            <button className=" border-bottom-0 border rounded-pill ms-n5  btn btn-outline-danger"
                                type="bunmit"
                            >
                                <i className="fa fa-search" />
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </form>


    )
}
export default SearchProduct