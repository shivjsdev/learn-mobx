import React from "react";
import StoreContext from "./store-context";

export default WrappedComponent => props => (
  <StoreContext.Consumer>
    {values => <WrappedComponent {...props} {...values} />}
  </StoreContext.Consumer>
);
