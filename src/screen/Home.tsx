import React from 'react'
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
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
      <SafeAreaView>
        <View style={style.appbar}>
          <Text>Home</Text>
          <TouchableOpacity
            style={style.addButton}
            onPress={() => navigate('AddTodo')}
          />
        </View>
        <FlatList
          style={{height: '100%'}}
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
      </SafeAreaView>
    </React.Fragment>
  )
}

const style = StyleSheet.create({
  appbar: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  addButton: {
    height: 20,
    width: 20,
    backgroundColor: 'red'
  }
})
