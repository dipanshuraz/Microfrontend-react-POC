import React, { Suspense } from "react";
import "./App.css";
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';

const WalletApp = React.lazy(() => import("wallet/App"));
const ExchangeApp = React.lazy(() => import("exchange/App"));

const Home = () => <div>Home</div>;

function App() {
  return (
    <BrowserRouter>
     <div>
     <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/exchange">Exchange</Link>
            </li>
            <li>
              <Link to="/wallet">Wallet</Link>
            </li>
          </ul>
        </nav>
     </div>
    <Suspense fallback="Loading...">
       <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/wallet" component={WalletApp} />                         
            <Route path="/exchange" component={ExchangeApp} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import {
//   StylesProvider,
//   createGenerateClassName,
// } from '@material-ui/core/styles';

// import WalletContainer from './components/Wallet/WalletContainer';
// import ExchangeContainer from './components/Exchange/ExchangeContainer';
// import Header from './components/Header';


// const generateClassName = createGenerateClassName({
//   productionPrefix: 'co',
// });

// export default () => {
//   return (
//     <BrowserRouter>
//       <StylesProvider generateClassName={generateClassName}>
//         <div>
//           {/* <Header /> */}
//           {/* <WalletContainer /> */}
//           <div>
//             <ExchangeContainer />
//           </div>
//           <div>
            
//           </div>
//         </div>
//       </StylesProvider>
//     </BrowserRouter>
//   );
// };
