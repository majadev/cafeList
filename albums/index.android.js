// import a library to help create a component
import React from 'react';
import { AppRegistry, ScrollView } from 'react-native';
import Header from './src/components/header';
import CafeList from './src/components/CafeList';

// create a component
const App = () => {
  return (
      <ScrollView style={{ flex: 1}}>
        <Header headerText={'BATR'} />
        <CafeList />
      </ScrollView>
    );
};

// render it to the device
AppRegistry.registerComponent('albums', () => App);