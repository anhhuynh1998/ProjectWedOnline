import React from 'react';
import Select from 'react-select'

const AddProduct = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">Tìm kiếm sản phẩm theo mã</li>
                </ol>
            </nav>
            <Select
                isMulti
                name="colors"
                options={options}
                className="basic-multi-select custom-select-class"
                classNamePrefix="select"
            />
            
            <table className="table mt-3" style={{ position: 'relative', zIndex: 1 }}>
                <thead className="thead-dark">
                    <tr className='text-start'>
                        <th scope="col" className='text-start'>#</th>
                        <th scope="col" className='text-start'>First</th>
                        <th scope="col" className='text-start'>Last</th>
                        <th scope="col" className='text-start'>Handle</th>
                    </tr>
                </thead>
                <tbody className='bg-success'>
                    <tr>
                        <th scope="row" className='text-white'>1</th>
                        <td className='text-white'>Mark</td>
                        <td className='text-white'>Otto</td>
                        <td className='text-white'>@mdo</td>
                    </tr>
                    
                </tbody>
            </table>
        </>
    );
};

export default AddProduct;