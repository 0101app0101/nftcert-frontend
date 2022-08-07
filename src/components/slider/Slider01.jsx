import React from 'react';
import { Link } from 'react-router-dom'
import { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import nftlogo from "../../assets/images/slider/nftcert2.png"
const Slider01 = props => {
    const data = props.data
    return (
        <section className="tf-slider slider">
            <Swiper
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                scrollbar={{ draggable: true }}
            >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <SliderItem item={item} />
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </section>
    )
};

const SliderItem = props => (
    <div className="swiper-container ">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <div className="slider-item">
                    <div className="overlay"></div>
                    <div className="slider-inner flex home-1">
                        <div className="slider-content slider-content-align">
                            <h1 className="heading">{props.item.title}</h1>
                            <p className="sub-heading">{props.item.description}</p>
                            <div className="button-slider">
                                <Link to="/explore-01"
                                    className="sc-button btn-bordered-white style letter "><span>Explore
                                        More</span></Link>
                                <Link to="/create-item"
                                    className="sc-button btn-bordered-white style file"><span>Create
                                        Now</span></Link>
                            </div>
                        </div>
                        <div className="slider-content-align">
                            <div className="sc-product-item slider-cert-bg style-2">
                                <div className="product-img">
                                    <img src={props.item.img} alt="Bidzen" />
                                    <Link to="/connect-wallet" style={{ left: "22%" }} className="sc-button style letter"><span>Create Now</span></Link>
                                </div>
                                <div className="product-content content-flex">
                                    <div className="product-author flex">
                                        <div className="avatar" style={{ marginRight: "2px" }}>
                                            <img className='cert-logo' style={{ fontColor: "white" }} src={nftlogo} alt="NFT Certificate"></img>
                                        </div>
                                        <div className="infor">
                                            <div className="author-name"><Link to="/authors"><h4>NFT Certificate</h4></Link></div>
                                            <span>ERC-721</span>
                                        </div>
                                    </div>
                                    <div style={{ paddingRight: "11%"}} className="product-author flex">
                                        <div className="infor">
                                    <div style={{marginTop:"unset",width:"175px"}} className="button-wishlish button-verify-BC"><Link to="/create-item" className="wishlish" ><i className="fas fa-check"></i></Link><span style={{color:"white"}}>Verify on Blockchain</span></div>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/create-item" style={{width:"80%",marginBottom:"5%",padding: "18px 22px",transition: "unset"}} 
                                    className="sc-button style letter style-2"><span>Create your own</span> </Link>
                                                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

)

export default Slider01;
