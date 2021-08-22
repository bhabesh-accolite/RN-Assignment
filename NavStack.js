import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App';
import PCHome from './Apps/parent-child';
import NewsHome from './Apps/news/screens/home/Home';
import Web from './Apps/news/screens/home/Web';
import Gallery from './Apps/gallery/Gallery';
import ToDO from './Apps/todo/screens/home';
import AddPost from './Apps/gallery/screens/home/AddPost';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Apps/gallery/redux/reducers/index';

const store = createStore(rootReducer);

const NavStack = () => {
    const Stack = createStackNavigator();

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="app"
                    screenOptions={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#1f145c',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}>
                    <Stack.Screen name="app" component={App} options={{ title: 'All Apps' }} />
                    <Stack.Screen name="to-do-home" component={ToDO} options={{ title: 'To Do App' }} />
                    <Stack.Screen name="pc-home" component={PCHome} options={{ title: 'PC App' }} />
                    <Stack.Screen name="news-home" component={NewsHome} options={{ title: 'New York News' }} />
                    <Stack.Screen name="Web" component={Web} options={{ title: 'Web' }} />
                    <Stack.Screen name="Gallery-home" component={Gallery} options={{ title: 'Gallery App' }} />
                    <Stack.Screen name="AddPost" component={AddPost} options={{ title: 'New Post' }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default NavStack;
