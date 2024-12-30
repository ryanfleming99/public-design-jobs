import "../styles/globals.css"; // Import global styles
import Navbar from "../components/Navbar"; // Import Navbar

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar /> {/* Navbar is included on every page */}
      <main>
        <Component {...pageProps} /> {/* This renders the current page */}
      </main>
    </>
  );
};

export default MyApp;
