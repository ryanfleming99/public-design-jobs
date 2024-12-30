import "../styles/globals.css"; // Import global styles

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <main>
        <Component {...pageProps} /> {/* This renders the current page */}
      </main>
    </>
  );
};

export default MyApp;
