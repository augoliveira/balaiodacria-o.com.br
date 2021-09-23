import React from 'react';


const Screenshots = () => {

    return (
    <div>
        <section className="app-shot-one" id="app-shots">
        <img src="/assets/images/shapes/contact-shape-3.png" alt="" className="app-shot__shape-1" />
        <img src="/assets/images/shapes/contact-shape-2.png" alt="" className="app-shot__shape-2" />

        <div className="container-fluid">
            <div className="block-title text-center">
                <span className="block-title__bubbles"></span>
                <p>Checkout App Interface</p>
                <h3>App Screenshots</h3>
            </div>
            <div className="app-shot-one__carousel">
                <Swiper {...params}>
                    <div className="item">
                        <img src="/assets/images/app-shots/app-shot-1-1.jpg" alt="" />
                    </div>
                    <div className="item">
                        <img src="/assets/images/app-shots/app-shot-1-2.jpg" alt="" />
                    </div>
                    <div className="item">
                        <img src="/assets/images/app-shots/app-shot-1-3.jpg" alt="" />
                    </div>
                    <div className="item">
                        <img src="/assets/images/app-shots/app-shot-1-4.jpg" alt="" />
                    </div>
                    <div className="item">
                        <img src="/assets/images/app-shots/app-shot-1-5.jpg" alt="" />
                    </div>
                    <div className="item">
                        <img src="/assets/images/app-shots/app-shot-1-1.jpg" alt="" />
                    </div>
                    <div className="item">
                        <img src="/assets/images/app-shots/app-shot-1-2.jpg" alt="" />
                    </div>
                    <div className="item">
                        <img src="/assets/images/app-shots/app-shot-1-3.jpg" alt="" />
                    </div>
                    <div className="item">
                        <img src="/assets/images/app-shots/app-shot-1-4.jpg" alt="" />
                    </div>
                    <div className="item">
                        <img src="/assets/images/app-shots/app-shot-1-5.jpg" alt="" />
                    </div>
                    <div className="item">
                        <img src="/assets/images/app-shots/app-shot-1-1.jpg" alt="" />
                    </div>
                    <div className="item">
                        <img src="/assets/images/app-shots/app-shot-1-2.jpg" alt="" />
                    </div>
                    <div className="item">
                        <img src="/assets/images/app-shots/app-shot-1-3.jpg" alt="" />
                    </div>
                    <div className="item">
                        <img src="/assets/images/app-shots/app-shot-1-4.jpg" alt="" />
                    </div>
                    <div className="item">
                        <img src="/assets/images/app-shots/app-shot-1-5.jpg" alt="" />
                    </div>
                </Swiper>
            </div>
        </div>
        </section>

    </div>
    )

}

export default Screenshots;