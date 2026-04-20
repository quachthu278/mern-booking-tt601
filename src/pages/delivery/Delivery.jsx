import "./delivery.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { deliveryColumns } from "../../datatablesource";

const Delivery = () => {
    return (
        <div className="delivery">
            <Sidebar />
            <div className="deliveryContainer">
                <Navbar />
                <Datatable columns={deliveryColumns} />
            </div>
        </div>
    );
};

export default Delivery;
