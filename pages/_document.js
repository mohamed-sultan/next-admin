import Document, { Head, Main, NextScript } from "next/document";
import "../ styles/styles.scss";
//import "bootstrap/dist/css/bootstrap.min.css";
// import { Provider } from "react-redux";
// import { persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/es/integration/react";

import store from "../redux";

export default class MyDocument extends Document {
  render() {
    //const persistor = persistStore(store);

    return (
      <html>
        <Head>
          <title>My Next.js Project</title>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" />
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" />
          {/* This provides all admin-lte functionality - we copied the files to our static directory above */}
          <script src="/static/adminlte.js" />
        </Head>
        <body className="sidebar-mini">
          <Main />
          <NextScript />
          {/* <Provider store={store}>
            <PersistGate persistor={persistor} />
          </Provider> */}
        </body>
      </html>
    );
  }
}
