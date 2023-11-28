import { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import ProductService from "../../../service/homeService/productService";

const SizeProduct = ({ setSelectedSize, setProducts, setPage }) => {
  const [selectedSize, setSelectedSizes] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function getAll() {
      let response = await ProductService.getAll();
      console.log("ooooooooooo", response.data.content);

      // Lấy tất cả các giá trị size từ API
      const sizes = response.data.content.flatMap((item) => item.size);

      // Loại bỏ các giá trị trùng lặp
      const uniqueSizes = Array.from(new Set(sizes));

      // Thêm giá trị size từ API vào mảng options
      const sizeOptions = uniqueSizes.map((size) => ({
        label: size,
        value: size,
      }));
      setOptions(sizeOptions);
    }
    getAll();
  }, []);

  const handleSizeChange = (selected) => {
    setPage(0);
    setProducts([]);
    setSelectedSizes(selected);
    setSelectedSize(selected.map(({ value }) => value));
  }

  return (
    <>
      <div className="htc__shop__cat">
        <h4 className="section-title-4">SIZE PRODUCT</h4>
        <div>
          <MultiSelect
            options={options}
            value={selectedSize}
            onChange={handleSizeChange}
            labelledBy="Select"
          />
        </div>
      </div>
    </>
  );
};

export default SizeProduct;
