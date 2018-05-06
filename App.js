import React, {Component} from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { TabNavigator  } from 'react-navigation';
import ToDoList from './components/ToDoList';
import Post from './components/Post';
import AnimComponent from './components/AnimComponent';

const NAV_SCREENS = {
  'HOME': 'Home',
  'FIRST': 'First',
  'SECOND': 'Second',
}

class HomeScreen extends Component {
  
  render() {
    const { navigation } = this.props;
    return (

      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
            <ToDoList/>  
        <Text>Home!</Text>
        <Button
          title = 'First Screen'
          onPress = {() => navigation.navigate(NAV_SCREENS.FIRST)}
        />
        <Button
          title = 'Second Screen'
          onPress = {() => navigation.navigate('Second')}
        />
      </View>
    );
  }
}

class FirstScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
        <AnimComponent duration={1000} ref={elem => this.animComponent = elem}>
          <Text>1st Screen!</Text>
        </AnimComponent>  
      </View>
    );
  }
}

class SecondScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
      headers: {'content-type': 'application/json'},
    })
    .then((resp) => resp.json())  
    .then(posts => this.setState( {data : posts}))
  }

  _renderItem = ({ item }) => {
    return <View key={item.id} >
    <Post key={item.id} post={item} />
    </View>
  }

  render() {
    const { data } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList 
          data={data}
          keyExtractor={(item) => item.id.toString() }
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

export default TabNavigator({
  [NAV_SCREENS.HOME]: { screen: HomeScreen },
  [NAV_SCREENS.FIRST]: { screen: FirstScreen },
  [NAV_SCREENS.SECOND]: { screen: SecondScreen },
});
