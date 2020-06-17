import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import Description from './components/Description';
import Parameter from './components/Parameter';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={Description} />
                <Stack.Screen name="Parameter" component={Parameter} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
