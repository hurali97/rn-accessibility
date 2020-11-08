/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Alert,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';


const App = () => {

  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(count + 1);
  }


  return <HomeScreen />

  return (

    <View>

      <TouchableOpacity
        accessible={true}
        // accessibilityLabel="Tap me!"
        onPress={onPress}
      >
        <View  >
          <Text  >Press me!</Text>
          {/* <Text  >Press me 1 !</Text> */}
        </View>
      </TouchableOpacity>

      <Text accessibilityLiveRegion="polite">Clicked {count} times</Text>

      <View
        // importantForAccessibility="no-hide-descendants"
        accessible={true}
        accessibilityLabel="Tap me!"
        accessibilityHint="Navigates to the previous screen"
        accessibilityActions={[
          { name: 'cut', label: 'cut' },
          { name: 'copy', label: 'copy' },
          { name: 'paste', label: 'paste' }
        ]}
        onAccessibilityAction={(event) => {
          switch (event.nativeEvent.actionName) {
            case 'cut':
              Alert.alert('Alert', 'cut action success');
              break;
            case 'copy':
              Alert.alert('Alert', 'copy action success');
              break;
            case 'paste':
              Alert.alert('Alert', 'paste action success');
              break;
          }
        }}
      >
        <Text >text one</Text>
        <Text>text two</Text>
      </View>

    </View>


  );
};

export default App;
