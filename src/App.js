
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common/header';
import BookList from './components/bookList';


class App extends Component {
  render() {

    return (
      <Provider store={createStore(reducers)}>
        <View>
             <Header headerText='Book Lists' />
             <BookList />
        </View>
      </Provider>
    );
  }
}


export default App;
