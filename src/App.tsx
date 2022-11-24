import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainPage from "./pages/MainPage/MainPage";
import Layout from "./components/Layout/Layout";

const App = (): JSX.Element => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
      <Layout
        children={[
          <Header />,
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/main" element={<MainPage />} />
          </Routes>,
        ]}
      />
    </>
  );
};

export default App;
