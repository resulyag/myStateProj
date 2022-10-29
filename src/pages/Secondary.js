import React from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

const Secondary = () => {
  const list = useSelector(selector => selector.nameList);
  const myUserName = useSelector(selector => selector.userName);
  return (
    <SafeAreaView>
      <Text style={{fontSize: 30}}>Secondary</Text>
      <Text style={{fontSize: 30}}>Username: {myUserName}</Text>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={list}
        renderItem={({item}) => <Text>{item}</Text>}
      />
    </SafeAreaView>
  );
};

export default Secondary;
