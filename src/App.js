import React, { useCallback, useContext, useEffect, useState } from "react";
import "error-polyfill";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@near-wallet-selector/modal-ui/styles.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "App.scss";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";

import MyEditorPage from "./_/pages/editorPage/EditorPage";
import SearchPage from "./_/pages/searchPage/SearchPage";
import EditorPage from "./pages/EditorPage";
// import ViewPage from "./pages/ViewPage";
// import EmbedPage from "./pages/EmbedPage";

import { setupModal } from "@near-wallet-selector/modal-ui";
import { useAccount, useInitNear, useNear, utils } from "near-social-vm";
import Big from "big.js";
import { NavigationWrapper } from "./components/navigation/alpha/NavigationWrapper";
import { EditorContext } from "./_/context/EditorContext";

export const refreshAllowanceObj = {};

function App(props) {
  const { NetworkId, Widgets } = useContext(EditorContext);

  const [connected, setConnected] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [signedAccountId, setSignedAccountId] = useState(null);
  const [availableStorage, setAvailableStorage] = useState(null);
  const [walletModal, setWalletModal] = useState(null);
  const [widgetSrc, setWidgetSrc] = useState(null);

  const { initNear } = useInitNear();
  const near = useNear();
  const account = useAccount();
  const accountId = account.accountId;

  const location = window.location;

  useEffect(() => {
    initNear &&
      initNear({
        networkId: localStorage.getItem("environment"),
      });

    console.log("NetworkId ======= APP ====> ", NetworkId);
  }, [initNear, NetworkId]);

  useEffect(() => {
    if (
      !location.search.includes("?account_id") &&
      !location.search.includes("&account_id") &&
      (location.search || location.href.includes("/?#"))
    ) {
      window.history.replaceState({}, "/", "/" + location.hash);
    }
  }, [location]);

  useEffect(() => {
    if (!near) {
      return;
    }
    near.selector.then((selector) => {
      setWalletModal(
        setupModal(selector, { contractId: near.config.contractName })
      );
    });
  }, [near, NetworkId]);

  const requestSignIn = useCallback(
    (e) => {
      e && e.preventDefault();
      walletModal.show();
      return false;
    },
    [walletModal]
  );

  const logOut = useCallback(async () => {
    if (!near) {
      return;
    }
    const wallet = await (await near.selector).wallet();
    wallet.signOut();
    near.accountId = null;
    setSignedIn(false);
    setSignedAccountId(null);
  }, [near]);

  const refreshAllowance = useCallback(async () => {
    alert(
      "You're out of access key allowance. Need sign in again to refresh it"
    );
    await logOut();
    requestSignIn();
  }, [logOut, requestSignIn]);
  refreshAllowanceObj.refreshAllowance = refreshAllowance;

  useEffect(() => {
    if (!near) {
      return;
    }
    setSignedIn(!!accountId);
    setSignedAccountId(accountId);
    setConnected(true);
  }, [near, accountId]);

  useEffect(() => {
    setAvailableStorage(
      account.storageBalance
        ? Big(account.storageBalance.available).div(utils.StorageCostPerByte)
        : Big(0)
    );
  }, [account]);

  const passProps = {
    refreshAllowance: () => refreshAllowance(),
    setWidgetSrc,
    signedAccountId,
    signedIn,
    connected,
    availableStorage,
    widgetSrc,
    logOut,
    requestSignIn,
    widgets: Widgets,
    tos: {
      checkComponentPath: "adminalpha.near/widget/TosCheck",
      contentComponentPath: "adminalpha.near/widget/TosContent",
    },
  };

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          {/* <Route path={"/embed/:widgetSrc*"}>
            <EmbedPage {...passProps} />
          </Route> */}
          {/* <Route path={"/"}>
            <HomePage {...passProps} />
          </Route> */}

          <Route path={"/search*"}>
            <SearchPage {...passProps} />
          </Route>

          {/* <Route path={"/edit/:widgetSrc*"}>
            <NavigationWrapper {...passProps} />
            <EditorPage {...passProps} />
          </Route> */}

          <Route path={"/edit/:widgetSrc*"}>
            <MyEditorPage {...passProps} />
          </Route>
          {/*  <Route path={"/:widgetSrc*"}>
            <NavigationWrapper {...passProps} />
            <ViewPage {...passProps} />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

const HomePage = () => {
  return (
    <div>
      <h1>Hello</h1>

      <h1>
        <Link to="/edit">Edit</Link>
      </h1>

      <h1>
        <Link to="/search">Search</Link>
      </h1>
    </div>
  );
};

export default App;
