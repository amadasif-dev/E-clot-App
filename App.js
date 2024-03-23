import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthProvider from './src/services/context/AuthContext';
import StackNavigation from './src/navigation/StackNavigate';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  );
};
export default App;
