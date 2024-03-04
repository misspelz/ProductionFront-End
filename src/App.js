import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useContext, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";
import Home from "./pages/Home";
import Landing from "./pages/LandingPage";
/**
 * ---------------------------
 * AUTH
 * ---------------------------
 */
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Verify from "./pages/Verify";
import ForgotPassword from "./pages/ForgotPassword";
/**
 * ---------------------------
 * POLLS
 * ---------------------------
 */
import CantVote from "./components/Modals/Vote/Cant/CantVote";
import Voted from "./components/Modals/Vote/Cant/Voted";
import CreatePoll from "./components/Modals/Vote/CreatePoll/CreatePoll";
import PollResult from "./components/Modals/Vote/PollResult";
import SuccessPoll from "./components/Modals/Vote/SuccessPoll";
import PollsSearch from "./components/PollsComp/PollsSearch";
import MyPolls from "./pages/Polls/MyPolls";
import Voting from "./pages/Polls/Voting";
import BusinessDirectory from "./pages/BussinessDirectory";
import Chat from "./pages/Chat";
import Commerce from "./pages/Commerce";
import CategoryPage from "./pages/Commerce/Category";
import PersonalDetails from "./pages/PersonalDetails";
import SearchPage from "./pages/SearchPage";
import Ticket from "./pages/Ticket";
// import BusinessProfile from './pages/BusinessProfile';
import Connect from "./pages/Connect";
import Stereo from "./pages/Stereo";
import NonAuthStero from "./pages/Stereo/NonAuthStero";
// import AddProfile from './pages/Profile/AddProfile';
import FeedDetail from "pages/FeedDetail/FeedDetail";
import { Toaster } from "react-hot-toast";
import PrivacyPolicy from "./components/LandinComp/Privacy";
import EditProfile from "./components/Modals/EditProfile";
import TicketDashCard from "./components/TicketComp/TicketDashCard";
import ComingSoonPage from "./pages/ComingSoon";

/**
 * ---------------------------
 * PROFILE PAGE DEV
 * ---------------------------
 */
import { ModalContext } from "Context/ModalContext";
import ManageBusiness from "pages/ManageBusiness/ManageBusiness";
import RewardLayout from "./Layout/RewardLayout";
import { setupAxios } from "./api";
import BusinessProfile from "./pages/BusinessProfile/BusinessProfile";
import Profile from "./pages/Profile";
import Histories from "./pages/Rewards/Histories";
import Payment from "./pages/Rewards/Payment";
import Payouts from "./pages/Rewards/Payouts";
import Rewards from "./pages/Rewards/Rewards";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    setupAxios();
  });

  const { isAuthenticated } = useContext(ModalContext);

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <>
      <div className="App">
        <ScrollToTop />

        <Toaster
          toastOptions={{
            style: {
              maxWidth: "700px",
              padding: "12px 16px",
              fontSize: "17px",
              fontWeight: "400",
            },
            error: {
              style: {
                color: "red",
              },
            },
            success: {
              style: {
                color: "green",
              },
            },
          }}
          position="top-center"
          reverseOrder={false}
        />

        <Routes>
          <Route path="/" element={isAuthenticated ? <Home /> : <Landing />} />

          {/* AUTH */}
          <Route index path="/Signup" element={<Signup />} />
          <Route index path="/Signin" element={<Signin />} />
          <Route index path="/reset-password" element={<ForgotPassword />} />
          <Route index path="/verify" element={<Verify />} />

          {/* HOME */}
          <Route
            index
            path="/Home"
            element={<ProtectedRoutes element={<Home />} />}
          />

          <Route index path="/Home/:feedId" element={<FeedDetail />} />

          {/* POLL */}
          <Route
            path="/Voted"
            element={<ProtectedRoutes element={<Voted />} />}
          />
          <Route
            path="/MyPolls"
            element={<ProtectedRoutes element={<MyPolls />} />}
          />
          <Route
            path="/PollResult"
            element={<ProtectedRoutes element={<PollResult />} />}
          />
          <Route
            path="/Voting"
            element={<ProtectedRoutes element={<Voting />} />}
          />
          <Route
            path="/CanVote"
            element={<ProtectedRoutes element={<CantVote />} />}
          />
          <Route
            path="/CreatePoll"
            element={<ProtectedRoutes element={<CreatePoll />} />}
          />
          <Route
            path="/SuccessPoll"
            element={<ProtectedRoutes element={<SuccessPoll />} />}
          />
          <Route
            path="/PollsSearch"
            element={<ProtectedRoutes element={<PollsSearch />} />}
          />
          <Route
            path="/CantVote"
            element={<ProtectedRoutes element={<CantVote />} />}
          />

          {/* CHAT */}
          <Route
            path="/chat"
            element={<ProtectedRoutes element={<Chat />} />}
          />

          <Route
            path="/personaldetail"
            element={<ProtectedRoutes element={<PersonalDetails />} />}
          />
          <Route
            path="/search"
            element={<ProtectedRoutes element={<SearchPage />} />}
          />
          <Route
            path="/ComingSoonPage"
            element={<ProtectedRoutes element={<ComingSoonPage />} />}
          />

          <Route
            path="/PrivacyPolicy"
            element={<ProtectedRoutes element={<PrivacyPolicy />} />}
          />

          <Route
            path="/TicketDashCard"
            element={<ProtectedRoutes element={<TicketDashCard />} />}
          />
          <Route
            path="/commerce"
            element={<ProtectedRoutes element={<Commerce />} />}
          />
          <Route
            path="/category"
            element={<ProtectedRoutes element={<CategoryPage />} />}
          />
          <Route
            path="/business"
            element={<ProtectedRoutes element={<BusinessDirectory />} />}
          />
          <Route
            path="/ticket"
            element={<ProtectedRoutes element={<Ticket />} />}
          />
          <Route
            path="/connect"
            element={<ProtectedRoutes element={<Connect />} />}
          />
          {/* <Route
          path='/addprofile'
          element={<ProtectedRoutes element={<AddProfile />} />}
        /> */}
          <Route
            path="/EditProfile"
            element={<ProtectedRoutes element={<EditProfile />} />}
          />
          <Route
            path="/stereo"
            element={<ProtectedRoutes element={<Stereo />} />}
          />
          <Route
            path="/bussprofile"
            element={<ProtectedRoutes element={<BusinessProfile />} />}
          />
          <Route
            path="/stereo/nonauth"
            element={<ProtectedRoutes element={<NonAuthStero />} />}
          />

          {/* PROFILE PAGE */}
          <Route
            path="/profile"
            element={<ProtectedRoutes element={<Profile />} />}
          />

          <Route
            index
            path="/business-profile"
            element={<ProtectedRoutes element={<BusinessProfile />} />}
          />

          <Route
            index
            path="manage-business"
            element={<ProtectedRoutes element={<ManageBusiness />} />}
          />

          <Route
            path="/"
            element={<ProtectedRoutes element={<RewardLayout />} />}
          >
            <Route element={<Navigate replace to="rewards" />} />
            <Route path="rewards" element={<Rewards />} />

            <Route path="rewards/histories" element={<Histories />} />
            <Route path="rewards/payouts" element={<Payouts />} />
            <Route path="rewards/payment" element={<Payment />} />
          </Route>
        </Routes>
      </div>

      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
