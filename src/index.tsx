import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme, View } from 'react-native';
import Home from './home';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={{
          height: '100%',
          backgroundColor: '#343434',
        }}>
        <Home />
      </View>
    </SafeAreaView>
  );
};

export default App;
