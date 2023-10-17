import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import ScreenNavigator from './app/navigators/ScreenNavigator';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ScreenNavigator />
        <StatusBar style="dark" />
      </NavigationContainer>
    </Provider>



  );
}

