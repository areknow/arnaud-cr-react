import "../styles/style.scss";
import { SetTheme } from "../lib/theme";

SetTheme();

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
