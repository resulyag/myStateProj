import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, Button, View} from 'react-native';

import {useDispatch} from 'react-redux';

const Primary = () => {
  const [text, setText] = useState('');
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch({type: 'ADD_NAME', payload: {name: text}});
    setText('');
  };
  const handleClear = () => {
    dispatch({type: 'CLEAN_LIST'});
  };
  const handleSaveUsername = () => {
    dispatch({type: 'SET_USERNAME', payload: {username}});
  };
  return (
    <SafeAreaView>
      <Text style={{fontSize: 30}}>Primary</Text>
      <View
        style={{
          borderWidth: 1,
          margin: 10,
          padding: 5,
          borderRadius: 10,
          borderColor: '#e0e0e0',
        }}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="İsim giriniz..."
        />
      </View>
      <View
        style={{
          borderWidth: 1,
          margin: 10,
          padding: 5,
          borderRadius: 10,
          borderColor: '#e0e0e0',
        }}>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Kullanıcı İsmi giriniz..."
        />
      </View>
      <Button title="Kaydet" onPress={handleSaveUsername} />
      <View style={{margin: 10}} />
      <Button title="Ekle" onPress={handleAdd} />
      <View style={{margin: 10}} />

      <Button title="Temizle" onPress={handleClear} />
    </SafeAreaView>
  );
};

export default Primary;
