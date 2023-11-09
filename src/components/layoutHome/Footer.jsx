const Footer = () => {
    return(
        <footer
       
        style={{
            background:
                "rgba(0, 0, 0, 0) url(images/bg/6.jpg) no-repeat scroll center center / cover",

        }}
    >
        <div className="container">
            <div className="row">
                <div className="footer__container clearfix">
                    {/* Start Single Footer Widget */}
                    <div className="col-md-3 col-lg-3 col-sm-6">
                        <div className="ft__widget">
                            <div className="ft__logo">
                                <a href="index.html">
                                    <img src="images/logo/uniqlo.png" alt="footer logo" />
                                </a>
                            </div>
                            <div className="footer__details">
                                <p>
                                    Giảm 10% hoá đơn nếu bạn đăng kí thành viên của cửa hàng. 😍
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* End Single Footer Widget */}
                    {/* Start Single Footer Widget */}
                    <div className="col-md-3 col-lg-3 col-lg-offset-1 col-sm-6 smb-30 xmt-30">
                        <div className="ft__widget">
                            <h2 className="ft__title">Phản Hồi</h2>
                            <div className="newsletter__form">
                                <div className="input__box">
                                    <div id="mc_embed_signup">
                                        <form
                                            action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"
                                            method="post"
                                            id="mc-embedded-subscribe-form"
                                            name="mc-embedded-subscribe-form"
                                            className="validate"
                                            target="_blank"
                                            noValidate=""
                                        >
                                            <div
                                                id="mc_embed_signup_scroll"
                                                className="htc__news__inner"
                                            >
                                                <div className="news__input">
                                                    <input
                                                        type="email"
                                                        defaultValue=""
                                                        name="EMAIL"
                                                        className="email"
                                                        id="mce-EMAIL"
                                                        placeholder="Địa chỉ Email"
                                                        required=""
                                                    />
                                                </div>
                                                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                                                <div
                                                    style={{ position: "absolute", left: "-5000px" }}
                                                    aria-hidden="true"
                                                >
                                                    <input
                                                        type="text"
                                                        name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
                                                        tabIndex={-1}
                                                        defaultValue=""
                                                    />
                                                </div>
                                                <div className="clearfix subscribe__btn">
                                                    <input
                                                        type="submit"
                                                        defaultValue="Send"
                                                        name="subscribe"
                                                        id="mc-embedded-subscribe"
                                                        className="bst__btn btn--white__color"
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Single Footer Widget */}
                    {/* Start Single Footer Widget */}
                    <div className="col-md-3 col-lg-3 col-sm-6 smt-30 xmt-30">
                        <div className="ft__widget contact__us">
                            <h2 className="ft__title">Liên Hệ </h2>
                            <div className="footer__inner">
                                <p>
                                    28 Nguyễn Tri Phương, 
                                    <br />
                                    Phường Phú Hội, Huế
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* End Single Footer Widget */}
                    {/* Start Single Footer Widget */}
                    <div className="col-md-3 col-lg-2 col-sm-6 smt-30 xmt-30">
                        <div className="ft__widget">
                            <h2 className="ft__title">Theo Dõi Ngay</h2>
                            <ul className="social__icon">
                                <li>
                                    <a href="https://twitter.com/devitemsllc" target="_blank" rel="noreferrer">
                                        <i className="zmdi zmdi-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/devitems/"
                                        target="_blank" rel="noreferrer"
                                    >
                                        <i className="zmdi zmdi-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.facebook.com/devitems/?ref=bookmarks"
                                        target="_blank" rel="noreferrer"
                                    >
                                        <i className="zmdi zmdi-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://plus.google.com/" target="_blank" rel="noreferrer">
                                        <i className="zmdi zmdi-google-plus" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* End Single Footer Widget */}
                </div>
            </div>

            {/* End Copyright Area */}
        </div>
    </footer>
        )
}
export default Footer