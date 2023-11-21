
const Checkout = () => {

    return (
        <div >
            <div className="body__overlay" />
            <div className="offset__wrapper">
                <div className="search__area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="search__inner">
                                    <form action="#" method="get">
                                        <input placeholder="Search here... " type="text" />
                                        <button type="submit" />
                                    </form>
                                    <div className="search__close__btn">
                                        <span className="search__close__btn_icon">
                                            <i className="zmdi zmdi-close" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="ht__bradcaump__area"
                style={{
                    background:
                        "rgba(0, 0, 0, 0) url(images/bg/checkout.webp) no-repeat scroll center center / cover"
                }}
            >
                <div className="ht__bradcaump__wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="bradcaump__inner text-center">
                                    <h2 className="bradcaump-title text-white">Checkout</h2>
                                    <nav className="bradcaump-inner">

                                        <a className="breadcrumb-item text-white" href="index.html">
                                            Home
                                        </a>
                                        <span className="brd-separetor text-white">/</span>
                                        <span className="breadcrumb-item active text-white">Checkout</span>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="our-checkout-area ptb--120 bg__white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-8">
                            <div className="ckeckout-left-sidebar">
                                {/* Start Checkbox Area */}
                                <div className="checkout-form">
                                    <h2 className="section-title-3">Billing details</h2>
                                    <div className="checkout-form-inner">
                                        <div className="single-checkout-box">
                                            <input type="text" placeholder="Name*" />
                                            <input type="text" placeholder="Last Name*" />
                                        </div>
                                        <div className="single-checkout-box">
                                            <input type="email" placeholder="Email*" />
                                            <input type="text" placeholder="Phone*" />
                                        </div>
                                        <div className="single-checkout-box select-option ">
                                            <select>
                                                <option>Country*</option>
                                                <option>Bangladesh</option>
                                                <option>Bangladesh</option>
                                                <option>Bangladesh</option>
                                                <option>Bangladesh</option>
                                            </select>
                                            <input type="text" placeholder="Company Name*" />
                                        </div>
                                        <div className="single-checkout-box">
                                            <input type="email" placeholder="State*" />
                                            <input type="text" placeholder="Zip Code*" />
                                        </div>

                                        <div className="contact-btn mt--20">
                                            <button className="fv-btn">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="checkout-right-sidebar">
                                <div className="our-important-note">
                                    <h2 className="section-title-3">Note :</h2>
                                    <p className="note-desc">
                                        Lorem ipsum dolor sit amet, consectetur adipisici elit, sed do
                                        eiusmod tempor incididunt ut laborekf et dolore magna aliqua.
                                    </p>

                                </div>
                                <div className="puick-contact-area mt--60">
                                    <h2 className="section-title-3">Quick Contract</h2>
                                    <a href="phone:+8801722889963">0888 999999</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Checkout