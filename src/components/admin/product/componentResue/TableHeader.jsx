import { useState } from "react";

const TableHeader = ({ field, label, orderByType, setOrderByType, setSortField, sortField }) => {
    const [hovered, setHovered] = useState(false);
    const handleSortChange = (field) => {
        if (field === sortField) {
            setOrderByType(orderByType === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setOrderByType("asc");
        }
    };

    return (
        <th
            scope="col-2"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {label}
            {hovered && (
                <i
                    className={`fa-solid fa-arrow-${orderByType === 'asc' ? 'up' : 'down'}`}
                    onClick={() => handleSortChange(field)}
                    style={{ cursor: 'pointer', margin: "5px" }}
                />
            )}
        </th>
    );
};
export default TableHeader;