import React, { Suspense } from "react";
import SpinnerWrapper from "./components/SpinnerWrapper";
import Navi from "./components/Navi";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const Home = React.lazy(() => import("./components/Home"));
  const Contact = React.lazy(() => import("./components/Contact"));
  const Shops = React.lazy(() => import("./components/Shops"));
  const Countries = React.lazy(() => import("./components/Countries"));
  const Calculator = React.lazy(() => import("./components/Calculator"));
  const Rules = React.lazy(() => import("./components/Rules"));
  const Questions = React.lazy(() => import("./components/Questions"));
  const About = React.lazy(() => import("./components/About"));
  const Privacy = React.lazy(() => import("./components/Privacy"));
  const AdvertisementDetail = React.lazy(() =>
    import("./components/AdvertisementDetail")
  );

  return (
    <>
      <Navi />
      <Suspense fallback={<SpinnerWrapper />}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/shops' component={Shops} />
          <Route path='/countries' component={Countries} />
          <Route path='/calculator' component={Calculator} />
          <Route path='/rules' component={Rules} />
          <Route path='/questions' component={Questions} />
          <Route path='/about' component={About} />
          <Route path='/privacy' component={Privacy} />
          <Route path='/advertisements/:id' component={AdvertisementDetail} />
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
