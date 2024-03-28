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
import BusinessDirectory from "./pages/BussinessDirectory/BusinessDirectory";
import Chat from "./pages/Chat/Chat";
import Commerce from "./pages/Commerce/Commerce";
import CategoryPage from "./pages/Commerce/Category";
import PersonalDetails from "./pages/PersonalDetails/PersonalDetails";
import SearchPage from "./pages/SearchPage/SearchPage";
import Ticket from "./pages/Ticket/Ticket";
// import BusinessProfile from './pages/BusinessProfile';
import Connect from "./pages/Connect/Connect";
import Stereo from "./pages/Stereo";
import NonAuthStero from "./pages/Stereo/NonAuthStero";
// import AddProfile from './pages/Profile/AddProfile';
import FeedDetail from "pages/FeedDetail/FeedDetail";
import { Toaster } from "react-hot-toast";
import PrivacyPolicy from "./components/LandinComp/Privacy";
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
import BusinessProfile from "./pages/BusinessProfile/BusinessProfile";
import Profile from "./pages/Profile/Profile";
import Histories from "./pages/Rewards/Histories";
import Payment from "./pages/Rewards/Payment";
import Payouts from "./pages/Rewards/Payouts";
import Rewards from "./pages/Rewards/Rewards";
import Welcome from "pages/Stereo/Pages/Welcome";
import StereoHome from "pages/Stereo/Pages/Home";
import BigHit from "pages/Stereo/Pages/bigHit";
import More from "pages/Stereo/Pages/More";
import TopAlbums from "pages/Stereo/Pages/TopAlbums";
import StereoSearchResult from "pages/Stereo/StereoSearchResult";
import UploadMusic from "pages/Stereo/Pages/UploadMusic/UploadMusic";
import RecentUploads from "pages/Stereo/Pages/UploadMusic/recentUploads";
import { AppLayout } from "Layout/AppLayout";
import PollPayment from "components/PollsComp/PollPayment";
import PromotionPayment from "components/PollsComp/PromotionPayment";
import Library from "pages/Stereo/Pages/Library";
import StereoSearchPage from "pages/Stereo/Pages/Search";
// import SearchPage from "pages/Stereo/Pages/Search"

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

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
          {/* AUTH */}
          <Route index path="/Signup" element={<Signup />} />
          <Route index path="/Signin" element={<Signin />} />
          <Route index path="/reset-password" element={<ForgotPassword />} />
          <Route index path="/verify" element={<Verify />} />

          {/* Below are the pages with aside containers */}
          <Route
            path="/"
            element={
              isAuthenticated ? <Navigate replace to="Home" /> : <Landing />
            }
          />

          <Route
            path="/poll-payment-confimed"
            element={<ProtectedRoutes element={<PollPayment />} />}
          />
          <Route
            path="/promotion-payment-confimed"
            element={<ProtectedRoutes element={<PromotionPayment />} />}
          />

          <Route element={<AppLayout />}>
            <Route element={<Navigate replace to="Home" />} />
            <Route
              path="/Home"
              element={<ProtectedRoutes element={<Home />} />}
            />

            <Route path="/Home/:feedId" element={<FeedDetail />} />

            {/* Below are poll routes */}
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

            {/* Below are chat routes */}
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

            {/* Below are stereo routes */}
            <Route
              path="/stereo"
              element={<ProtectedRoutes element={<Welcome />} />}
            />

            <Route
              path="/stereo/home"
              element={<ProtectedRoutes element={<StereoHome />} />}
            />

            <Route
              path="/stereo/bighit"
              element={<ProtectedRoutes element={<BigHit />} />}
            />

            <Route
              path="/stereo/quickpicks"
              element={<ProtectedRoutes element={<More />} />}
            />

            <Route
              path="/stereo/topAlbums"
              element={<ProtectedRoutes element={<TopAlbums />} />}
            />

            {/* <Route
              path="/stereo/search"
              element={<ProtectedRoutes element={<StereoSearchResult />} />}
            /> */}

<Route
              path="/stereo/artistIndex"
              element={<ProtectedRoutes element={<UploadMusic />} />}
            />

            <Route
              path="/stereo/artist/recentUploads"
              element={<ProtectedRoutes element={<RecentUploads />} />}
            />

            <Route
              path="/stereo/nonauth"
              element={<ProtectedRoutes element={<NonAuthStero />} />}
            />

<Route
              path="/stereo/search"
              element={<ProtectedRoutes element={<StereoSearchPage />} />}
            />

<Route
              path="/stereo/library"
              element={<ProtectedRoutes element={<Library />} />}
            />

            {/* Profile */}
            <Route
              path="/profile"
              element={<ProtectedRoutes element={<Profile />} />}
            />

            <Route
              path="/business-profile"
              element={<ProtectedRoutes element={<BusinessProfile />} />}
            />

            <Route
              path="manage-business"
              element={<ProtectedRoutes element={<ManageBusiness />} />}
            />

            <Route element={<ProtectedRoutes element={<RewardLayout />} />}>
              <Route element={<Navigate replace to="rewards" />} />
              <Route path="rewards" element={<Rewards />} />

              <Route path="rewards/histories" element={<Histories />} />
              <Route path="rewards/payouts" element={<Payouts />} />
              <Route path="rewards/payment" element={<Payment />} />
            </Route>
          </Route>
         
        </Routes>
      </div>

      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
