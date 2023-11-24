import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonLoad = () => {
    return ( 
        <div>
            <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12" >
                <div className="product foo">
                    <div className="product__inner">
                        <div className="card" style={{ width: "100%" }}>
                            <div className="card-body" style={{ width: "100%" }}>
                                <SkeletonTheme color="#5E6C77" highlightColor="#A9B7C1" >
                                    <p>
                                        <Skeleton count={1} duration={3} height={247} width={"100%"} />
                                    </p>
                                </SkeletonTheme>
                                <SkeletonTheme color="#5E6C77" highlightColor="#A9B7C1">
                                    <p>
                                        <Skeleton count={1} duration={3} height={13} width={"100%"} />
                                    </p>
                                </SkeletonTheme>
                                <SkeletonTheme color="#5E6C77" highlightColor="#A9B7C1">
                                    <p>
                                        <Skeleton count={1} duration={3} height={13} width={"100%"} />
                                    </p>
                                </SkeletonTheme>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                <div className="product foo">
                    <div className="product__inner">
                        <div className="card" style={{ width: "100%" }}>
                            <div className="card-body" style={{ width: "100%" }}>
                                <SkeletonTheme color="#5E6C77" highlightColor="#A9B7C1" >
                                    <p>
                                        <Skeleton count={1} duration={3} height={247} width={"100%"} />
                                    </p>
                                </SkeletonTheme>
                                <SkeletonTheme color="#5E6C77" highlightColor="#A9B7C1">
                                    <p>
                                        <Skeleton count={1} duration={3} height={13} width={"100%"} />
                                    </p>
                                </SkeletonTheme>
                                <SkeletonTheme color="#5E6C77" highlightColor="#A9B7C1">
                                    <p>
                                        <Skeleton count={1} duration={3} height={13} width={"100%"} />
                                    </p>
                                </SkeletonTheme>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                <div className="product foo">
                    <div className="product__inner">
                        <div className="card" style={{ width: "100%" }}>
                            <div className="card-body" style={{ width: "100%" }}>
                                <SkeletonTheme color="#5E6C77" highlightColor="#A9B7C1">
                                    <p>
                                        <Skeleton count={1} duration={3} height={247} width={"100%"} />
                                    </p>
                                </SkeletonTheme>
                                <SkeletonTheme color="#5E6C77" highlightColor="#A9B7C1">
                                    <p>
                                        <Skeleton count={1} duration={3} height={13} width={"100%"} />
                                    </p>
                                </SkeletonTheme>
                                <SkeletonTheme color="#5E6C77" highlightColor="#A9B7C1">
                                    <p>
                                        <Skeleton count={1} duration={3} height={13} width={"100%"} />
                                    </p>
                                </SkeletonTheme>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                <div className="product foo">
                    <div className="product__inner">
                        <div className="card" style={{ width: "100%" }}>
                            <div className="card-body" style={{ width: "100%" }}>
                                <SkeletonTheme color="#5E6C77" highlightColor="#A9B7C1">
                                    <p>
                                        <Skeleton count={1} duration={3} height={247} width={"100%"} />
                                    </p>
                                </SkeletonTheme>
                                <SkeletonTheme color="#5E6C77" highlightColor="#A9B7C1">
                                    <p>
                                        <Skeleton count={1} duration={3} height={13} width={"100%"} />
                                    </p>
                                </SkeletonTheme>
                                <SkeletonTheme color="#5E6C77" highlightColor="#A9B7C1">
                                    <p>
                                        <Skeleton count={1} duration={3} height={13} width={"100%"} />
                                    </p>
                                </SkeletonTheme>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonLoad;