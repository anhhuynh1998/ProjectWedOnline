/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useContext, useEffect } from "react";
import { UseProduct } from "../UseContext";
import queryString from "query-string";

export const PRICE_FILTER = [{
    priceMin: 0,
    priceMax: 500_000,
},
{
    priceMin: 500_000,
    priceMax: 1_000_000,
},
{
    priceMin: 1_000_000,
    priceMax: 2_000_000
},
{
    priceMin: 2_000_000,
    priceMax: 5_000_000
}
]
export function removeFalsyFields(obj) {
    // Duyệt qua từng trường của đối tượng
    for (const key in obj) {
        // Kiểm tra nếu trường có giá trị falsy
        if (!obj[key]) {
            // Xóa trường đó khỏi đối tượng
            delete obj[key];
        }
    }
    return queryString.stringify(obj);
}
export function getParamURL(obj, searchParams, getParamsInURL) {
    // Duyệt qua từng trường của đối tượng
    for (const key in obj) {
        // Kiểm tra nếu trường có giá trị falsy
        // Xóa trường đó khỏi đối tượng
        console.log(searchParams?.get(key), key)
        getParamsInURL(searchParams?.get(key)) ?
            (obj[key] = getParamsInURL(searchParams?.get(key)))
            : obj[key] = "";

    }
}

const SortPrice = ({ setSortPrice, getParamsInURL }) => {
    const { filter, setFilter, searchParams } = useContext(UseProduct);

    const handleSortChange = (event) => {
        if (event.target.value === "") {
            const cloneFilter = { ...filter };
            delete cloneFilter.priceMax;
            delete cloneFilter.priceMin;
            setFilter(cloneFilter)
            return;
        }
        setFilter({
            ...filter,
            ...PRICE_FILTER[event.target.value]
        })
    }
    const index = PRICE_FILTER.findIndex(e => e.priceMin == searchParams.get('priceMin')
        || e.priceMax == searchParams.get('priceMax'))

    useEffect(() => {
        const priceMinParam = getParamsInURL(searchParams?.get('priceMin'));
        const priceMaxParam = getParamsInURL(searchParams?.get('priceMax'));

        if (priceMinParam && priceMaxParam) {
            const priceMinValue = parseFloat(priceMinParam);
            const priceMaxValue = parseFloat(priceMaxParam);

            setSortPrice({ min: priceMinValue, max: priceMaxValue });
        }
    }, [searchParams]);

    return (
        <>
            <div className="htc-grid-range">
                <h4 className="section-title-4">Tìm Sản Phẩm Theo Giá</h4>
                <div className="form-row align-items-center">
                    <select className="custom-select mr-sm-2"
                        id="inlineFormCustomSelect"
                        defaultValue={index}
                        onChange={handleSortChange}>
                        <option selected value="" >Chọn Giá...</option>
                        {PRICE_FILTER.map((e, index) => <option key={index + "price"} value={index}>{e.priceMin} {e.priceMax ? '-' : 'Trở lên'} {e.priceMax}</option>)}
                    </select>
                </div>
            </div>
        </>
    )
}
export default SortPrice
