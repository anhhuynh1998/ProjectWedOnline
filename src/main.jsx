import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import '../src/cssAdmin/styles.css'
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0"
import "./assets/css/animate.min.css"
import './assets/css/demo.css'
import "./cssAdmin/product.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-toastify/dist/ReactToastify.css';
import { GoogleOAuthProvider } from "@react-oauth/google";



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <GoogleOAuthProvider clientId="484686037040-bgr2c8t63rq2ringvqsf2ugh17f5a760.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </BrowserRouter>
  // </React.StrictMode>,
)
