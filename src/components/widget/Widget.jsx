import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import useFetch from "../../hooks/useFetch";

const Widget = ({ type }) => {
  let widgetData;

  // Map type to API endpoint
  const getQuery = (type) => {
    switch (type) {
      case "user": return "users";
      case "order": return "bookings";
      case "tour": return "tours";
      case "earning": return "stats";
      case "balance": return "stats";
      default: return "users";
    }
  };

  const query = getQuery(type);
  const { data: fetchedData } = useFetch(`/${query}`);
  
  const amount = Array.isArray(fetchedData) 
    ? fetchedData.length 
    : (fetchedData?.count || 0);

  const diff = 20;

  switch (type) {
    case "user":
      widgetData = {
        title: "KHÁCH HÀNG",
        isMoney: false,
        link: "Xem tất cả khách hàng",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      widgetData = {
        title: "ĐƠN HÀNG",
        isMoney: false,
        link: "Xem tất cả đơn hàng",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      widgetData = {
        title: "THU NHẬP",
        isMoney: true,
        link: "Xem chi tiết doanh thu",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      widgetData = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    case "tour":
      widgetData = {
        title: "TOUR",
        isMoney: false,
        link: "Xem tất cả tour",
        icon: (
          <LocalActivityIcon
            className="icon"
            style={{
              backgroundColor: "rgba(0, 120, 215, 0.2)",
              color: "#0078d7",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{widgetData?.title}</span>
        <span className="counter">
          {widgetData?.isMoney && "$"} {amount}
        </span>
        <span className="link">{widgetData?.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {widgetData?.icon}
      </div>
    </div>
  );
};

export default Widget;
