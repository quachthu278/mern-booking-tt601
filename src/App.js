import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { userColumns, bookingColumns, tourColumns, reviewColumns, ticketColumns, flightColumns, carColumns } from "./datatablesource";
import Stats from "./pages/stats/Stats";
import Profile from "./pages/profile/Profile";
import NewBooking from "./pages/newBooking/NewBooking";
import SingleBooking from "./pages/singleBooking/SingleBooking";
import SingleTicket from "./pages/singleTicket/SingleTicket";
import NewTour from "./pages/newTour/NewTour";
import NewFlight from "./pages/newFlight/NewFlight";
import NewCar from "./pages/newCar/NewCar";
import Payment from "./pages/payment/Payment";
import Category from "./pages/category/Category";
import Article from "./pages/article/Article";
import NewArticle from "./pages/newArticle/NewArticle";
import Settings from "./pages/settings/Settings";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    // const { user } = useContext(AuthContext);
    // if (!user) return <Navigate to="/login" />;
    return children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="users">
              <Route index element={<ProtectedRoute><List columns={userColumns} /></ProtectedRoute>} />
              <Route path=":userId" element={<ProtectedRoute><Single /></ProtectedRoute>} />
              <Route path="new" element={<ProtectedRoute><New inputs={userInputs} title="Add New User" /></ProtectedRoute>} />
            </Route>
            <Route path="bookings">
              <Route index element={<ProtectedRoute><List columns={bookingColumns} /></ProtectedRoute>} />
              <Route path=":productId" element={<ProtectedRoute><SingleBooking /></ProtectedRoute>} />
              <Route path="new" element={<ProtectedRoute><NewBooking /></ProtectedRoute>} />
            </Route>
            <Route path="tours">
              <Route index element={<ProtectedRoute><List columns={tourColumns} /></ProtectedRoute>} />
              <Route path=":productId" element={<ProtectedRoute><Single /></ProtectedRoute>} />
              <Route path="new" element={<ProtectedRoute><NewTour /></ProtectedRoute>} />
            </Route>
            <Route path="flights">
              <Route index element={<ProtectedRoute><List columns={flightColumns} /></ProtectedRoute>} />
              <Route path=":productId" element={<ProtectedRoute><Single /></ProtectedRoute>} />
              <Route path="new" element={<ProtectedRoute><NewFlight /></ProtectedRoute>} />
            </Route>
            <Route path="cars">
              <Route index element={<ProtectedRoute><List columns={carColumns} /></ProtectedRoute>} />
              <Route path=":productId" element={<ProtectedRoute><Single /></ProtectedRoute>} />
              <Route path="new" element={<ProtectedRoute><NewCar /></ProtectedRoute>} />
            </Route>
            <Route path="stats" element={<ProtectedRoute><Stats /></ProtectedRoute>} />
            <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="payments" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
            <Route path="categories" element={<ProtectedRoute><Category /></ProtectedRoute>} />
            <Route path="reviews">
              <Route index element={<ProtectedRoute><List columns={reviewColumns} /></ProtectedRoute>} />
            </Route>
            <Route path="tickets">
              <Route index element={<ProtectedRoute><List columns={ticketColumns} /></ProtectedRoute>} />
              <Route path=":ticketId" element={<ProtectedRoute><SingleTicket /></ProtectedRoute>} />
            </Route>
            <Route path="articles">
              <Route index element={<ProtectedRoute><Article /></ProtectedRoute>} />
              <Route path="new" element={<ProtectedRoute><NewArticle /></ProtectedRoute>} />
            </Route>
            <Route path="settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
