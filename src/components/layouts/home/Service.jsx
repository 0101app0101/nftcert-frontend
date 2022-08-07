import { Link } from "react-router-dom"
const Service = () => {
    return (
        <section className="tf-section create-item pd-top-0 mg-t-40">
            <div className="container">
                <div style={{margin:"6% 0 3% 0"}} className="content-left">
                    <div className="inner">
                        <h3>Our Service</h3>
                        <p className="desc">Want to integrate it with your edu-tech platform/metaverse (or) just curious about our product?</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div style={{ border: "2px solid var(--border-color-1)", borderRadius: "20px" }} className="form-create-item">
                            <div className="sc-heading">
                                <h3>Create Item</h3>
                                <p className="desc">
                                    Most popular gaming digital nft market place{" "}
                                </p>
                            </div>
                            <form
                                id="create-item-1"
                                action="#"
                                method="GET"
                                acceptCharset="utf-8"
                            >
                                <div className="input-group">
                                    <input
                                        type="text"
                                        id="name"
                                        className="tb-my-input"
                                        name="name"
                                        tabIndex="1"
                                        placeholder="Your Name"
                                        aria-required="true"
                                        required
                                        style={{marginRight:"0px"}}
                                    />
                                </div>
                                <div className="input-group">
                                    <input
                                        type="email"
                                        id="email"
                                        className="tb-my-input"
                                        name="email"
                                        tabIndex="2"
                                        placeholder="Email Address"
                                        aria-required="true"
                                        required
                                        style={{marginRight:"0px"}}
                                    />
                                </div>
                                <label className="uploadFile">
                                    <span className="filename">Choose Item</span>
                                    <input
                                        type="file"
                                        className="inputfile form-control"
                                        name="file"
                                    />
                                    <span className="icon">
                                        <i className="far fa-cloud-upload"></i>
                                    </span>
                                </label>
                                <textarea
                                    id="comment-message"
                                    name="message"
                                    tabIndex="4"
                                    placeholder="Description"
                                    aria-required="true"
                                ></textarea>
                                <div className="input-group style-2 ">
                                    <div className="btn-check">
                                        <input type="radio" id="sale" name="fav_language" />
                                        <label htmlFor="sale">For My Organization</label>
                                    </div>
                                    <div className="btn-check">
                                        <input type="radio" id="purchase" name="fav_language" />
                                        <label htmlFor="purchase">For Myself</label>
                                    </div>
                                </div>
                                <button
                                    name="submit"
                                    type="submit"
                                    id="submit"
                                    className="sc-button style letter style-2"
                                >
                                    <span>Send</span>{" "}
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="contact-info">
                            <div style={{ textAlign: "left" }} className="sc-heading">
                                <h3>Create Item</h3>
                                <p className="desc">
                                    Most popular gaming digital nft market place{" "}
                                </p>
                            </div>
                            <Link 
                            to="#"
                            onClick={() => window.location = 'mailto:akashrkashyap98@gmail.com'}
                            >
                                <div className="infor-bid contact-pallet">
                                    <div className="content-left">
                                        <h6>
                                            <i class="fa fa-envelope" aria-hidden="true"></i>{" "}
                                            akashrkashyap98@gmail.com
                                        </h6>
                                    </div>
                                </div>
                            </Link>
                            <Link 
                            to="#"
                            onClick={() => window.location = 'tel:+91 9448055577'}
                            >
                                <div className="infor-bid contact-pallet">
                                    <div className="content-left">
                                        <h6>
                                            <i class="fa fa-phone" aria-hidden="true"></i> +91 9448055577
                                        </h6>
                                    </div>
                                </div>
                            </Link>
                            <Link
                                to="/contact"
                                className="sc-button style letter style-2 style-item-details"
                                style={{padding: "18px 22px"}}
                            >
                                <span>Contact Us</span>
                            </Link>
                            <div className="other-login">
                                <div className="text">Follow us on :</div>
                                <div className="widget-social">
                                    <ul>
                                        <li>
                                            <Link to="#" className="active">
                                                <i className="fab fa-facebook-f"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="fab fa-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="fab fa-google-plus-g"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service