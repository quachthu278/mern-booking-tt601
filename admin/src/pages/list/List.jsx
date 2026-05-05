import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import CategoryNav from "../../components/categoryNav/CategoryNav"

const List = ({columns}) => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <CategoryNav />
        <Datatable columns={columns}/>
      </div>
    </div>
  )
}

export default List