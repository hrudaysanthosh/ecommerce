

function Home() {
    return (
        <div>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.fireboltt.com/cdn/shop/files/Artboard_2_copy_31_1759x.jpg?v=1702884211" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.fireboltt.com/cdn/shop/files/Artboard_2_934b2528-81af-4e20-9296-87a1771cead1_1759x.jpg?v=1702704893" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.fireboltt.com/cdn/shop/files/Artboard_4_48_1759x.jpg?v=1702454886" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container my-4">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center m-5">Fire-Boltt | Ignite the fire in you</h1>
                        <div className="row">
                            <div className="col-sm">
                                <div className="row">
                                    <div className="col-sm">
                                        <img src="https://www.fireboltt.com/cdn/shop/files/growth.gif?v=6149664055454190024" className="img-fluid"/>
                                    </div>
                                    <div className="col-sm">
                                        <h4>1300% YOY</h4>
                                        <h4>400% QOQ</h4>
                                        <h4>Growth</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="row">
                                    <div className="col-sm">
                                        <img src="https://www.fireboltt.com/cdn/shop/files/growth.gif?v=6149664055454190024" className="img-fluid"/>
                                    </div>
                                    <div className="col-sm">
                                        <h4>1300% YOY</h4>
                                        <h4>400% QOQ</h4>
                                        <h4>Growth</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="row">
                                    <div className="col-sm">
                                        <img src="https://www.fireboltt.com/cdn/shop/files/stopwatch.gif.gif?37994" className="img-fluid"/>
                                    </div>
                                    <div className="col-sm">
                                        <h4>1 Unit Sold</h4>
                                        <h4>Every 05 Sec</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="row">
                                    <div className="col-sm">
                                        <img src="https://www.fireboltt.com/cdn/shop/files/review.gif?v=6281934118567879272" className="img-fluid"/>
                                    </div>
                                    <div className="col-sm">
                                        <h4>2Mn+ Product</h4>
                                        <h4>Reviews</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
