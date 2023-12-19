/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import ProductService from "../../../service/homeService/productService";
import { UseProduct } from "../UseContext";

const SizeProduct = ({ getParamsInURL }) => {
  const { searchParams, filter, setFilter } = useContext(UseProduct);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function getAll() {
      let response = await ProductService.getAll();
      // Lấy tất cả các giá trị size từ API
      const sizes = response.data.content.flatMap((item) => item.size);
      // Loại bỏ các giá trị trùng lặp
      const uniqueSizes = Array.from(new Set(sizes.filter(size => size !== null)));
      // Thêm giá trị size từ API vào mảng options
      const sizeOptions = uniqueSizes.map((size) => ({
        label: size,
        value: size,
      }));
      setOptions(sizeOptions);
    }
    getAll();
  }, []);

  useEffect(() => {
    const sizeParam = getParamsInURL(searchParams?.get('size'));
    if (sizeParam) {
      const selectedSizesFromParams = sizeParam.split(',').map(size => ({ label: size, value: size }));
      setSelectedSizes(selectedSizesFromParams);
    }
  }, [searchParams]);

  const handleSizeChange = (selected) => {
    setSelectedSizes([...selected])
    setFilter({
      ...filter,
      size: selected.map(e => e.value).join(",")
    })
  }

  return (
    <>
      <div className="htc__shop__cat">
        <h4 className="section-title-4">SIZE PRODUCT</h4>
        <div>
          <MultiSelect
            options={options}
            value={selectedSizes}
            onChange={handleSizeChange}
            labelledBy="Select"
          />
        </div>
      </div>
    </>
  );
};

export default SizeProduct;
