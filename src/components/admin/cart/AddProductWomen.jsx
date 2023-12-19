import React from 'react';

const AddProductWomen = () => {
    return (
        <>
            <nav className="navbar bg-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand text-start">Nữ</a>
                </div>
            </nav>
            <div>
                <div className="card card-body">
                    <div className="row">
                        <div className="col">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default AddProductWomen;