import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AdminScreen from './screens/AdminScreen';
import LoginAdmin from '../src/component/ui/Admin/LoginAdmin';
import SignupAdmin from "../src/component/ui/Admin/SignupAdmin"
import Header from "./component/static/header"
import Footer from "./component/static/footer"
import Career from "./screens/careerScreen"
import HireDeveloper from "./screens/hireDevelopers"
import Home from "./screens/homeScreen"
import Chatbot from './chatbot.js';
import AboutScreen from "./screens/AboutScreen";
import Services from "./screens/services";
import Portfolio from "./screens/portfolioScreen";
import Django_developer from "./screens/django_developer";
import WorkEnvironmentScreen from "./screens/WorkEnvironmentScreen";
import Azure_Developers from "./screens/Azure_Developers";
import Big_Data_developers from "./screens/Big_Data_developers";
import Dynamo_Developers from "./screens/Dynamo_Developers";
import Cloud_Formations_Developers from "./screens/Cloud_Formations_Developers";
import Laravel_developers from "./screens/Laravel_developers";
import Cake_Php_Developers from "./screens/Cake_Php_Developers";
import CodeIgniter_Developers from "./screens/CodeIgniter_Developers";
import WordPress_Developers from "./screens/WordPress_Developers";
import Shopify_Developers from "./screens/Shopify_Developers";
import SEO_Experts_Developers from "./screens/SEO_Experts_Developers";
import SMO_Experts_Developers from "./screens/SMO_Experts_Developers";
import PPC_Expert from "./screens/PPC_Expert";
import ORM_Experts from "./screens/ORM_Experts";
import Flask_developers from "./screens/Flask_developers";
import Fast_api_developers from "./screens/Fast_api_developers";
import Kafka_developers from "./screens/kafka_developers";
import Grafana_developers from "./screens/grafana_developers";
import Graphic_Designers_Developers from "./screens/Graphic_Designers_Developers";
import Web_Developers from "./screens/Web_Developers";
import Hire_Manuel_Developers from "./screens/Hire_Manuel_Developers";
import Automation_QA_Developers from "./screens/Automation_QA_Developers";
import ChatBots_Experts_Developers from "./screens/ChatBots_Experts_Developers";
import Machine_Learning_Developers from "./screens/Machine_Learning_Developers";
import Tensorflow_Developers from "./screens/Tensorflow_Developers";
import IOS_Developers from "./screens/IOS_Developers";
import Andriod_Developers from "./screens/Andriod_Developers";
import React_Native_Developers from "./screens/React_Native_Developers";
import React_JS_Developers from "./screens/React_JS_Developers";
import Vue_JS_Developers from "./screens/Vue_JS_Developers";
import Angular_Js_Developers from "./screens/Angular_Js_Developers";
import Node_Js_Developers from "./screens/Node_Js_Developers";
import AWS_Developers from "./screens/AWS_Developers";
import Service_Details from "./component/ui/detailSection/Service_Details";
import Benefits from "./component/ui/detailSection/Benefits";
import Django_Development from "./screens/Django_Development";
import Flask_Developement from "./screens/Flask_Developement";
import Fast_Api_Developement from "./screens/Fast_Api_Developement";
import Kafka_Development from "./screens/Kafka_Development";
import Grafana_Development from "./screens/Grafana_Development";
import Payment_Api from "./screens/Payment_Api";
import Shipping_Api from "./screens/Shipping_Api";
import Authentication_Api from "./screens/Authentication_Api";
import Phone_verication_Api from "./screens/Phone_verication_Api";
import React_Js_Development from "./screens/React_Js_Development";
import Vue_Js_Developement from "./screens/Vue_Js_Developement";
import Angular_Js_Development from "./screens/Angular_Js_Development";
import Node_Js_Development from "./screens/Node_Js_Development";
import ChatBots from "./screens/ChatBots";
import TensorFlow_Development from "./screens/TensorFlow_Development";
import Machine_Learning from "./screens/Machine_Learning";
import Laravel_Development from "./screens/Laravel_Development";
import Cake_Php_Development from "./screens/Cake_Php_Development";
import Codigniter_Development from "./screens/Codigniter_Development";
import WordPress_Development from "./screens/WordPress_Development";
import Shopify_Development from "./screens/Shopify_Development";
import IOS_Development from "./screens/IOS_Development";
import Andriod_Development from "./screens/Andriod_Development";
import React_Native_Development from "./screens/React_Native_Development";
import PSD_to_HTML_Design from "./screens/PSD_to_HTML_Design";
import Responsive_Website_Design from "./screens/Responsive_Website_Design";
import Mobile_Development from "./screens/Mobile_Development";
import Design_Prototye from "./screens/Design_Prototye";
import SEO_Development from "./screens/SEO_Development";
import SMO_Services_Development from "./screens/SMO_Services_Development";
import ORM_Services_Development from "./screens/ORM_Services_Development";
import PPC_Development from "./screens/PPC_Development";
import ErrorPage from "./errorScreen/errorPage";
import CareerForm from "./component/ui/careerSection/CareerForm";
import PrivateRoute from "./component/ui/Admin/PrivateRoute";
import JobOfferForm from './component/ui/Admin/JobOfferForm';
import WorkDoneForm from './component/ui/Admin/WorkDoneForm';
import ContactPage from './component/ui/Contact/contactPage';
import { Copyright } from '@mui/icons-material';
import CopyrightPage from './component/static/CopyRightPage';
import FooterSection from './component/static/FooterSection';
import Footers from './component/static/footer';



const App = () => {
  return (
    <Router>
      <Header/>
      {/* <AdminHeader/> */}
      <Routes>

        <Route path="/" exact  element={ <Home />} />
        <Route path="/*" element={<ErrorPage/>} />
        <Route path="/products"  element={<Career />} />
        <Route path="/hire-developers"  element={<HireDeveloper />} />
        <Route path="/aboutus"  element={ <AboutScreen/>} />
        <Route path="/services"  element={<Services/>} />
        <Route path="/portfolio"  element={<Portfolio/>} />
        <Route path="/contactus"  element={<ContactPage/>} />
        <Route path="/hire-developers/django-developers"  element={<Django_developer/>} />
        <Route path="/hire-developers/hire-azure-services-developers"  element={<Azure_Developers/>} />
        <Route path="/hire-developers/hire-big-data-developers"  element={<Big_Data_developers/>} />
        <Route path="/hire-developers/hire-dynamodb-developers"  element={<Dynamo_Developers/>} />
        <Route path="/hire-developers/hire-cloud-formation-developers"  element={<Cloud_Formations_Developers/>} />
        <Route path="/hire-developers/hire-laravel-developers"  element={<Laravel_developers/>} />
        <Route path="/hire-developers/hire-cake-php-js-developers"  element={<Cake_Php_Developers/>} />
        <Route path="/hire-developers/hire-codeIgniter-developers"  element={<CodeIgniter_Developers/>} />
        <Route path="/hire-developers/hire-wordpress-developers"  element={<WordPress_Developers/>} />
        <Route path="/hire-developers/hire-shopify-developers"  element={<Shopify_Developers/>} />
        <Route path="/hire-developers/hire-seo-expert"  element={<SEO_Experts_Developers/>} />
        <Route path="/hire-developers/hire-smo-expert"  element={<SMO_Experts_Developers/>} />
        <Route path="/hire-developers/hire-ppc-expert"  element={<PPC_Expert/>} />
        <Route path="/hire-developers/hire-orm-expert"  element={<ORM_Experts/>} />
        <Route path="/hire-developers/hire-flask-developers"  element={<Flask_developers/>} />
        <Route path="/hire-developers/hire-fast-api-developers"  element={<Fast_api_developers/> } />
        <Route path="/hire-developers/hire-kafka-developers"  element={ <Kafka_developers/>} />
        <Route path="/hire-developers/hire-grafana-developers"  element={<Grafana_developers/>} />
        <Route path="/hire-developers/hire-graphic-designers"  element={<Graphic_Designers_Developers/>} />
        <Route path="/hire-developers/hire-web-designers"  element={<Web_Developers/>} />
        <Route path="/hire-developers/hire-manual-qa"  element={<Hire_Manuel_Developers/>} />
        <Route path="/hire-developers/hire-automated-qa"  element={ <Automation_QA_Developers/>} />
        <Route path="/hire-developers/hire-chatbot-developers"  element={<ChatBots_Experts_Developers/> } />
        <Route path="/hire-developers/hire-ml-developers"  element={<Machine_Learning_Developers/>} />
        <Route path="/hire-developers/hire-tensorflow-developers"  element={<Tensorflow_Developers/>} />
        <Route path="/hire-developers/hire-ios-developers"  element={<IOS_Developers/>} />
        <Route path="/hire-developers/hire-android-developers"  element={<Andriod_Developers/>} />
        <Route path="/hire-developers/hire-react-native-developers"  element={<React_Native_Developers/>} />
        <Route path="/hire-developers/hire-react-js-developers"  element={<React_JS_Developers/>} />
        <Route path="/hire-developers/hire-vue-js-developers"  element={<Vue_JS_Developers/>} />
        <Route path="/hire-developers/hire-angular-developers"  element={<Angular_Js_Developers/>} />
        <Route path="/hire-developers/hire-node-js-developers"  element={<Node_Js_Developers/>} />
        <Route path="/hire-developers/hire-aws-developers"  element={ <AWS_Developers/>} />
        <Route path="/work-environments"  element={ <WorkEnvironmentScreen/>} />
        <Route path="/services/django-development"  element={<Django_Development/>} />
        <Route path="/services/python-frameworks/flask"  element={<Flask_Developement/>} />
        <Route path="/services/python-frameworks/fastapi"  element={<Fast_Api_Developement/>} />
        <Route path="/services/python-frameworks/kafka"  element={<Kafka_Development/>} />
        <Route path="/services/python-frameworks/grafana"  element={<Grafana_Development/> } />
        <Route path="/services/api-integration-services/payment-api"  element={<Payment_Api/>} />
        <Route path="/services/api-integration-services/shipping-api"  element={<Shipping_Api/>} />
        <Route path="/services/api-integration-services/authentication-api"  element={<Authentication_Api/>} />
        <Route path="/services/api-integration-services/phone-verification-api"  element={<Phone_verication_Api/>} />
        <Route path="/services/mvc-frameworks/react-js"  element={ <React_Js_Development/>} />
        <Route path="/services/mvc-frameworks/vue-js"  element={ <Vue_Js_Developement/>} />
        <Route path="/services/mvc-frameworks/angular-js"  element={<Angular_Js_Development/> } />
        <Route path="/services/mvc-frameworks/node-js"  element={<Node_Js_Development/>} />
        <Route path="/services/ai-ml/chatbot"  element={<ChatBots/>} />
        <Route path="/services/ai-ml/machine-learning"  element={ <Machine_Learning/>} />
        <Route path="/services/ai-ml/tensorflow"  element={<TensorFlow_Development/>} />
        <Route path="/services/php-frameworks/laravel-development"  element={<Laravel_Development/>} />
        <Route path="/services/php-frameworks/cake-php-framework"  element={<Cake_Php_Development/> } />
        <Route path="/services/php-frameworks/codigniter-development"  element={<Codigniter_Development/>} />
        <Route path="/services/php-frameworks/wordpress-development"  element={<WordPress_Development/>} />
        <Route path="/services/php-frameworks/shopify-development"  element={<Shopify_Development/>} />
        <Route path="/services/mobile-app-development/ios-application"  element={<IOS_Development/>} />
        <Route path="/services/mobile-app-development/android-application"  element={ <Andriod_Development/>} />
        <Route path="/services/mobile-app-development/react-native-application"  element={<React_Native_Development/>} />
        <Route path="/services/designing-services/psd-html-design-services"  element={<PSD_to_HTML_Design/>} />
        <Route path="/services/designing-services/responsive-website-design"  element={ <Responsive_Website_Design/>} />
        <Route path="/services/designing-services/mobile-application-design"  element={<Mobile_Development/>} />
        <Route path="/services/designing-services/design-prototype"  element={<Design_Prototye/>} />
        <Route path="/services/digital-marketing/seo"  element={<SEO_Development/>} />
        <Route path="/services/digital-marketing/smo"  element={<SMO_Services_Development/>} />
        <Route path="/services/digital-marketing/orm"  element={<ORM_Services_Development/>} />
        <Route path="/services/digital-marketing/ppc"  element={<PPC_Development/>} />
        <Route path="/service_details"  element={< Service_Details/>} />
        <Route path="/benefits"  element={<Benefits/>} />
        <Route path="/careerform/:applyID/:apply" element = {<CareerForm/>}/>
        <Route path="/=kjxsofttechbdhd-h652hdsnadmin=login" element={<LoginAdmin />} />
        <Route path="/=kjxsofttechbdhd-h652hdsnadmin=signup" element={<SignupAdmin />} />
        <Route path="/=kjxsofttechbdhd-h652hdsnadmin=admin-upload-job" element={<JobOfferForm />} />
        <Route path="/=kjxsofttechbdhd-h652hdsnadmin=admin-upload-job-done" element={<WorkDoneForm />} />
        <Route path="/=kjxsofttechb-dhdh652hdsn=admin" element={
          <PrivateRoute>
            <AdminScreen/>
          </PrivateRoute>
        } />
      </Routes>

      <Footers />
      
    </Router>
  );
};

export default App 