import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

import styles from './Layout.module.css'

const Layout = props => (
  <div className={styles.Layout}>
    <Head>
      <title>Charles Cantin - Photographe</title>      
    </Head>
    <Header />
    <div className={styles.Content}>
      {props.children}
    </div>
    <Footer/>
    <style jsx global>{`
      * {
        box-sizing: border-box;
        --primary-color: #47555e;
        --secondary-color: #EEEEEE;
        --header-height: 80px;
      }

      html, body, #__next {
        height: 100%;
        width: 100%;
        font-size: 100%;
      }

      body {
        margin: 0;
        padding: 0;
        font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
      }
    `}
    </style>
  </div>
);

export default Layout;