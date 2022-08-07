import React from 'react';
import { Link } from 'react-router-dom'

const Create = props => {
    const data = props.data
    return (
    <section className="create-and-sell tf-section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="sc-heading style-2 create-and-sell">
                        <div className="content-left">
                            <div className="inner">
                                <h3>How It Works?</h3>
                                <p className="desc">We make creating your certificates easier and completely authentic which can be verified using Blockchain</p>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    data.map((item,index)=> (
                        <div key={index} className="col-lg-3 col-md-6 col-12">
                        <div className={`sc-wallet style-2 ${item.class}`}>
                            <div className="icon">
                                <img src={item.img} alt="Bidzen" />
                            </div>
                            <div className="content">
                                <h5><Link to="/connect-wallet">{item.title}</Link></h5>
                                <p>{item.desc}</p>
                                <Link to="/connect-wallet" className="read-more"><i
                                        className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    </section>
    );
};

export default Create;
