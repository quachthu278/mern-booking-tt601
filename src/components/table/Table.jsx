import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Grand Hyatt Hotel",
      img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=120&h=120&fit=crop",
      customer: "Nguyễn Văn An",
      date: "1 tháng 3",
      amount: "18.200.000 ₫",
      method: "Thẻ tín dụng",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Chuyến bay VN123",
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=120&h=120&fit=crop",
      customer: "Trần Minh Đức",
      date: "1 tháng 3",
      amount: "3.500.000 ₫",
      method: "Thanh toán online",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Tour Thành phố Đà Nẵng",
      img: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=120&h=120&fit=crop",
      customer: "Lê Thị Hoa",
      date: "1 tháng 3",
      amount: "850.000 ₫",
      method: "Thẻ tín dụng",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Thuê xe Toyota Camry",
      img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=120&h=120&fit=crop",
      customer: "Phạm Thu Hằng",
      date: "1 tháng 3",
      amount: "2.800.000 ₫",
      method: "Ví điện tử",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "Taxi sân bay Nội Bài",
      img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=120&h=120&fit=crop",
      customer: "Hoàng Quốc Huy",
      date: "1 tháng 3",
      amount: "650.000 ₫",
      method: "Tiền mặt",
      status: "Pending",
    },
  ];

  const statusLabel = {
    Approved: "Đã duyệt",
    Pending: "Chờ duyệt",
    Declined: "Từ chối",
  };

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Mã đặt chỗ</TableCell>
            <TableCell className="tableCell">Sản phẩm</TableCell>
            <TableCell className="tableCell">Khách hàng</TableCell>
            <TableCell className="tableCell">Ngày</TableCell>
            <TableCell className="tableCell">Số tiền</TableCell>
            <TableCell className="tableCell">Phương thức TT</TableCell>
            <TableCell className="tableCell">Trạng thái</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt={row.product} className="image" onError={(e) => { e.target.src = "https://via.placeholder.com/40x40?text=N/A"; }} />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{statusLabel[row.status] || row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
