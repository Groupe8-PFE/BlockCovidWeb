import React from "react";
import App from "./App";
import { ProviderWrapper as BlockCovidContext } from "../../contexts/BlockCovidContext";

const AppContainer = () => {
  return (
    <BlockCovidContext>
      <App />
    </BlockCovidContext>
  );
};

export default AppContainer;
