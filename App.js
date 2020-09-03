import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View } from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList';

 function App() {
  return (
    <View style={{flex:1}}>
      <StatusBar style='auto' />
      <Header headerText={'Albums'} />
     <AlbumList/>
    </View>
  );
}
export default App;