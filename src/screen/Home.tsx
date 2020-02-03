import React from 'react'
import {FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {useNavigation} from 'react-navigation-hooks'
import {useDispatch, useSelector} from 'react-redux'
import {removeTodo, State} from '../redux'
import {TodoCard} from './_Home'

export default () => {
  const {navigate} = useNavigation()

  const todos = useSelector((state: State) => state.todo)

  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <SafeAreaView style={styles.parent}>
        <FlatList
          style={{flex: 1, width: '100%'}}
          data={todos.ids}
          renderItem={({item}) => (
            <TodoCard
              onPressEdit={id => {
                navigate('AddTodo', {
                  ...todos.todo[id]
                })
              }}
              onPressRemove={id => dispatch(removeTodo({id}))}
              {...todos.todo[item]}
            />
          )}
          keyExtractor={item => item}
          extraData={todos}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigate('AddTodo')}
        >
          <Text style={{color: 'grey'}}>+</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: 'center',
  },
  addButton: {
    height: 50,
    width: 50,
    elevation: 10,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    borderRadius: 25,
    position: 'absolute',
    bottom: 0
  },
})
