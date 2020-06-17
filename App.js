import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import Description from './components/Description';
import Parameter from './components/Parameter';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux'
import Store from './Store/configureStore'

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function App() {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <Tab.Navigator initialRouteName="Parameter">
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Details" component={Description} />
                    <Stack.Screen name="Parameter" component={Parameter} />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;
