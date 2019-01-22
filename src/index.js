import React from "react";
import { Navigation } from "react-native-navigation";
import Onboarding from "./components/Onboarding";

export function registerScreens(store, Provider) {
  Navigation.registerComponent(
    'app.Onboarding',
    () => props => (
      <Provider>
        <Onboarding {...props} />
      </Provider>
    ),
    () => Onboarding
  );
}
