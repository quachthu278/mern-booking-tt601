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
      img: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Credit Card",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Flight VN123",
      img: "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=600",
      customer: "Michael Doe",
      date: "1 March",
      amount: 150,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "City Tour",
      img: "https://images.pexels.com/photos/2422502/pexels-photo-2422502.jpeg?auto=compress&cs=tinysrgb&w=600",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Credit Card",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Toyota Camry",
      img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600",
      customer: "Jane Smith",
      date: "1 March",
      amount: 120,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "Airport Taxi",
      img: "https://images.pexels.com/photos/1239106/pexels-photo-1239106.jpeg?auto=compress&cs=tinysrgb&w=600",
      customer: "Harold Carol",
      date: "1 March",
      amount: 25,
      method: "Cash",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Booking ID</TableCell>
            <TableCell className="tableCell">Item booked</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
