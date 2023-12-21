import Background from "./background";

const Deposit = () => {
    return (
        <div>
            <div className="body__overlay" />
            <Background message={"Thông Tin Ký Gởi"}
                img={"rgba(0, 0, 0, 0) url(http://localhost:5173/images/bg/userinfo.jpeg) no-repeat scroll center center / cover"} />
        </div>
    );
};

export default Deposit;
