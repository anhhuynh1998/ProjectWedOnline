import { useState } from "react";
import { MultiSelect } from "react-multi-select-component"

const options = [
    { label: "Xl", value: "xl" },
    { label: "L", value: "l" },
    { label: "M", value: "m" },
    { label: "S", value: "s" },
    // { label: "Strawberry 🍓", value: "strawberry", disabled: true },
];

const SizeProduct = () => {
    const [selected, setSelected] = useState([]);
    return (
        <>
            <div className="htc__shop__cat">
                <h4 className="section-title-4">SIZE PRODUCT</h4>
                <div>
                    <MultiSelect
                        options={options}
                        value={selected}
                        onChange={setSelected}
                        labelledBy="Select"
                    />
                </div>
            </div>
        </>
    )
}
export default SizeProduct