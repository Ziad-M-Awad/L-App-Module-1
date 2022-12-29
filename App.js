import * as React from 'react';
import { Text, View, TextInput, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{
        padding: 20,
        backgroundColor: '#FFF',
        width: '80%',
      }}>
        <Text style={{
          fontSize: 16,
          paddingTop: 5,
          paddingBottom: 5,
          width: '80%'
        }}>Name: Ziad Awad </Text>
        <Text style={{
          fontSize: 16,
          paddingTop: 5,
          paddingBottom: 5
        }}>Number: 2</Text>
        <Text style={{
          fontSize: 16,
          paddingTop: 5,
          paddingBottom: 5
        }}>Grope Name: KPI-04</Text>
      </View>

    </View>
  );
}

function InputList() {
  const [value, onChangeText] = React.useState('');
  const [list, setList] = React.useState([1]);
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={{
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20
      }}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
        <Button title='add' onPress={() => {
          if(value == ''){
            console.log('please input value!')
            return
          }
          let data = [...list];
          data.push(value);
          setList(data);
        }}></Button>
      </View>

      <FlatList
        data={list}
        renderItem={({item}) => {
          return (
            <View style={{
              backgroundColor: '#FFF',
              paddingLeft: 50,
              paddingRight: 50 
            }}>
              <Text>
                {item}
              </Text>
            </View>
          );
        }}
        keyExtractor={item => item}
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="MyInfo" component={HomeScreen} />
        <Drawer.Screen name="InputList" component={InputList} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
