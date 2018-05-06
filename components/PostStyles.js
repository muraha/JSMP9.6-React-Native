import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
  },

  title_container: {
    backgroundColor: "#efeff1",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  title: {
    fontSize: 18,
    marginBottom: 5,
  },

  body: {
    marginBottom: 5,
    backgroundColor: "#efeff1",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  }
})

export default styles;
