import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Loader from "./components/Loader";

const lazyDefault = page => lazy(() => import("./pages/" + page));

export default function Routes() {
  return (
    <Switch>
      <Suspense fallback={<Loader />}>
        <Route exact path="/" component={lazyDefault("Home")} />
        <Route exact path="/about" component={lazyDefault("About")} />
      </Suspense>
    </Switch>
  );
}
