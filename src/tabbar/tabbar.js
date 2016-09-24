import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Navigator
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import SystemView from '../main/system';
import SearchView from '../main/search';
import HomePage from '../main/homepage';

export default class TabMain extends Component{
  constructor(props) {
    super(props);
    this.state = {selectedTab: 'home'}
}

  render() {
    return (
    <View style={styles.container}>
        <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title='Home'
            renderIcon={() => <Image style={styles.tabIcon} source={require('../images/home.png')}/>}
            renderSelectedIcon={() => <Image style={styles.tabIcon} source={require('../images/home1.png')}/>}
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <HomePage navigator={this.props.navigator}/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'search'}
            title='Search'
            renderIcon={() => <Image style={styles.tabIcon} source={require('../images/me.png')}/>}
            renderSelectedIcon={() => <Image style={styles.tabIcon} source={require('../images/me1.png')}/>}
            onPress={() => this.setState({ selectedTab: 'search' })}>
            <SearchView navigator={this.props.navigator}/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'system'}
            title='System'
            renderIcon={() => <Image style={styles.tabIcon} source={require('../images/me.png')}/>}
            renderSelectedIcon={() => <Image style={styles.tabIcon} source={require('../images/me1.png')}/>}
            onPress={() => this.setState({ selectedTab: 'system' })}>
            <SystemView navigator={this.props.navigator}/>
          </TabNavigator.Item>

        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabIcon: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
    marginTop: 10,
  },
  tab: {
    backgroundColor: 'white',
    borderColor:'lavender',
    borderTopWidth:0.5,
  }
});
