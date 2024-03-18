import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserRegister from "./Components/UserRegister";
import Login from "./Components/Login";
import Homepage from "./Components/Homepage";
import AddVenue from "./Components/AddVenue";
import AddFeatures from "./Components/AddFeatures";
import AddMeal from "./Components/AddMeal";
import AddDecoration from "./Components/AddDecoration";
import Address from "./Components/Address";
import AdminRegister from "./Components/AdminRegister";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import UserList from "./Components/UserList";
import AdminList from "./Components/AdminList";
import CustomerHomepage from "./Components/CustomerHomepage";
import AdminHomepage from "./Components/AdminHomepage";
import ProprietorHomepage from "./Components/ProprietorHomepage";
import MyProfile from "./Components/MyProfile";
import VenueList from "./Components/VenueList";
import BookEvent from './Components/BookEvent';
import FilteredVenueList from "./Components/FilteredVenueList";
import VenueDetails  from "./Components/VenueDetails";
import ChooseMealAndDecoration from "./Components/ChooseMealAndDecoration";
import ComfirmBooking from "./Components/ComfirmBooking";
import AddEvents from "./Components/AddEvents";
import ForgotPassword from "./Components/ForgotPassword";
import BookingHistory from "./Components/BookingHistory";
import ThankYou from "./Components/ThankYou";
import BookedVenueList from "./Components/BookedVenueList";
import DecoreGalary from './Components/DecoreGalary';

function App() {
  return (
    <div>
       <div className="container-fluid">
           <Router>
              <div>
                  <Switch>
                      <Route exact path="/" component={Homepage} />
                      <Route path="/aboutus" component={AboutUs} />
                      <Route path="/price" component={DecoreGalary} />
                      <Route path="/contactus" component={ContactUs} />
                      <Route exact path="/user/login" component={Login} />
                      <Route path="/user/login/forgotpassword" component={ForgotPassword} />
                      <Route exact path="/user/register" component={UserRegister} />
                      <Route path="/user/myprofile" component={MyProfile} />
                      <Route path="/proprietor/homepage" component={ProprietorHomepage} />
                      <Route path="/proprietor/bookedvenuelist" component={BookedVenueList} />
                      <Route exact path="/proprietor/myvenues/addvenue" component={AddVenue} />
                      <Route exact path="/proprietor/myvenues/addvenue/addFeatures" component={AddFeatures} />
                      <Route path="/proprietor/myvenues/addvenue/addFeatures/addMeal" component={AddMeal} />
                      <Route path="/proprietor/myvenues/addvenue/addFeatures/addDecoration" component={AddDecoration} />
                      <Route path="/proprietor/myvenues/addvenue/addFeatures/addEvents" component={AddEvents} />
                      <Route exact path="/admin/homepage" component={AdminHomepage} />
                      <Route exact path="/admin/register" component={AdminRegister} />
                      <Route path="/admin/register/address" component={Address} />
                      <Route path="/admin/userList" component={UserList} />
                      <Route path="/admin/adminList" component={AdminList} />            
                      <Route path="/proprietor/myvenues" component={VenueList} />
                      <Route path="/customer/homepage" component={CustomerHomepage} />  
                      <Route exact path="/customer/bookEvent" component={ BookEvent } />
                      <Route path="/customer/bookingHistory" component={ BookingHistory } />
                      <Route exact path="/customer/bookEvent/venueList" component={ FilteredVenueList } />  
                      <Route exact path="/customer/bookEvent/venueList/venueDetails" component={ VenueDetails } /> 
                      <Route exact path="/customer/bookEvent/venueList/venueDetails/addMealandDecoration" component={ ChooseMealAndDecoration } />
                      <Route exact path="/customer/bookEvent/venueList/venueDetails/addMealandDecoration/comfirmBooking" component={ ComfirmBooking } />
                      <Route path="/customer/bookEvent/venueList/venueDetails/addMealandDecoration/comfirmBooking/thankyou" component={ ThankYou } />                     
                  </Switch>
              </div>
          </Router>
      </div>
    </div>
  );
}

export default App;
