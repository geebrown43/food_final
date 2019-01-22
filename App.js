import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import configureStore from './src/store/createStore';
import { registerScreens } from './src';


const store = configureStore();
registerScreens(store, Provider);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [{
                    component: {
                        name: 'app.Onboarding'
                    }
                }]
            }
        }
    });
});
