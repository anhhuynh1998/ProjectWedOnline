// SearchForm.js
import React, { useState, useEffect } from 'react';

const SearchForm = ({ onSearch }) => {
    const [search, setSearch] = useState("");

    useEffect(() => {
        const delaySearch = setTimeout(() => {
            onSearch(search);
        }, 500); // Đặt thời gian debounce là 500ms

        return () => clearTimeout(delaySearch);
    }, [search, onSearch]);

    const handleInput = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    return (
        <form className="d-flex m-2-bg-info" role="search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
                className="form-control me-2"
                type="search"
                placeholder="Tìm Kiếm sản phẩm..."
                aria-label="Search"
                value={search}
                onChange={(e) => handleInput(e)}
            />
        </form>
    );
};

export default SearchForm;
