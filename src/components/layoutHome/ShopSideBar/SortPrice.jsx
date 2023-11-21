import React from "react";

const SortPrice = ({setSortPrice}) => {
    
    const handleSortChange = (event) => {
        const selectedValue = event.target.value;
        console.log(selectedValue);
        if(selectedValue == 1) {
            setSortPrice({
                min: 0,
                max: 500000
            })
        }
        else{
            if(selectedValue == 2){
                setSortPrice({
                    min: 500000,
                    max: 1000000
                })
                
            }
            else {
                setSortPrice({
                    min: 1000000,
                    max: ""
                })
            }
        }

        console.log("đây",selectedValue);
    }
    return(
            <>
                 <div className="htc-grid-range">
                                        <h4 className="section-title-4">FILTER BY PRICE</h4>
                                        <div className="form-row align-items-center">
                                            <select className="custom-select mr-sm-2" 
                                            id="inlineFormCustomSelect"
                                            onChange={handleSortChange}>
                                                <option selected disabled>Chọn Giá...</option>
                                                <option value="1">0-500k</option>
                                                <option value="2">500k-1000k</option>
                                                <option value="3">1000k</option>
                                            </select>
                                        </div>
                                    </div>
            </>
        )
}
export default SortPrice
