import { useEffect } from 'react';
import { CartService } from '../../../service/admin/cart/cartService';

const Search = ({ setSearch, search, setListCart }) => {

  useEffect(() => {
    try {
      // eslint-disable-next-line no-inner-declarations
      async function searchNameAndPhone(search) {
        let response = await CartService.searchNameAndPhone(search);
        console.log(response.data.content, "tim kiem");
        setListCart(response.data.content);
      }
      searchNameAndPhone(search);
    } catch (error) {
      console.log(error, "loi");
    }
  }, [search])


  const handleSearch = () => {
    const input = document.getElementById("searchNameAndPhone");
    const searchValue = input.value;
    console.log(searchValue, "miiiiiiiii");
    setSearch(searchValue);
    // searchNameAndPhone(search);
    clearTimeout(timeOut);
    const timeOut = setTimeout(() =>{
      // searchNameAndPhone(searchValue);
    }, 1500)
  }

  return (
    <div className="p-1 shadow-sm mb-4 border-end-0 border rounded  ">
      <div className="input-group">
        <input
          type="search"
          placeholder="Nhập từ bạn cần tìm?"
          aria-describedby="button-addon1"
          className="form-control border-0 bg-light"
          id='searchNameAndPhone'
          onChange={handleSearch}
        />
        <span className="input-group-append " style={{ paddingLeft: "7px" }}>
          <button
            className="
                              border rounded-pill ms-n5  btn btn-outline-danger"
            type="button"
          >
            <i className="fa fa-search" />
          </button>
        </span>
      </div>
    </div>

  );
};

export default Search;