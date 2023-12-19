/* eslint-disable react/prop-types */
// import { search } from "fontawesome";

const SearchProductAdmin = ({ setSearch, setPage, setProducts }) => {
    const handleSearch = () => {
        const input = document.getElementById("example-search-input");
        const searchValue = input.value;
        setPage(0);
        setProducts([]);
        setSearch(searchValue);
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    }

    return (
        <div className="col-md-12">
            <div className="col-md-5 mx-auto">
                <div className="input-group">
                    <input
                        className="form-control border-end-0 border rounded-pill small fw-light py-2"
                        type="search"
                        id="example-search-input"
                        placeholder="tìm kiếm sản phẩm"
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
                </div>
            </div>
        </div>
    )
}
export default SearchProductAdmin