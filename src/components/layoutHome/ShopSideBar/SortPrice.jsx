const SortPrice = () => {
    return(
            <>
                 <div className="htc-grid-range">
                                        <h4 className="section-title-4">FILTER BY PRICE</h4>
                                        <div className="form-row align-items-center">
                                            <label className="mr-sm-2" htmlFor="inlineFormCustomSelect"></label>
                                            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                                <option selected disabled>Choose...</option>
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