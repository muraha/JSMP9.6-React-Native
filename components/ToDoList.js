import React, {Component} from 'react';
import { Text, View, Button, TextInput, FlatList } from 'react-native';
import ListItem from './ListElement';
import styles from './Styles';

let counter = 1;

export default class ToDoList extends Component{
  state = {
    todos: [
      {
        text: 'First Todo',
        id: counter++,
        isCompleted: false,
      },
    ],
    userInput: null,
  };

  submitInput = () => {
    this.setState(prevState => ({
      todos: [
        ...prevState.todos,
        {
          text: prevState.userInput,
          id: counter++,
          isCompleted: false,
        },
      ],
      userInput: '',
    }
    ))};

  changeInput = (newText) => { 
    this.setState({ userInput: newText });
  }

  toggleCompleted = (itemId) => {
    this.setState(prevState => {
      const newTodos = prevState.todos.map(todo => {
        if (todo.id === itemId) {
          return { ...todo, isCompleted: !todo.isCompleted }
        }
        return todo;
      });
      
      return { todos: newTodos }
      })
  }

  deleteItem = (itemId) => {
    this.setState(prevState => {
      const newTodos = prevState.todos.filter(item => itemId !== item.id);
      return { todos: newTodos }
    })
  }

  render() {
    const { userInput, todos } = this.state;    
    
    return (
      <View style={styles.container}>
        <TextInput value={userInput} placeholder={'Type your text'} onChangeText={this.changeInput}/>
          <Button 
            title='SUBMIT'
            onPress={this.submitInput}
        />    
        <FlatList 
          data={todos}
          renderItem={({ item }) => <ListItem onPress={() => this.toggleCompleted(item.id)}
                                              onLongPress={() => this.deleteItem(item.id)}
                                              item={item}
                                              isCompleted={item.isCompleted} />}
          keyExtractor={(item) => item.id.toString()}
          />
      </View>
    )
  }
}
