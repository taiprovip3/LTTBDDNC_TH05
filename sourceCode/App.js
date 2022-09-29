import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList, Image } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
const dataList = require('./dataList');

console.log('dataList:: ', dataList);
const MyViewItem = ({ name, photo }) => (
    <View style={{flexDirection: 'row'}}>
      <Image source={photo} style={{ borderRadius: '20px', width: 100, height: 100}} />
      <Text>{name} - {photo}</Text>
    </View>
);

export default function App() {
  const functionToRenderItem = ({ item }) => (//Hàm được gọi từ thằng khác, nhận vào 1 item gì đó
    <MyViewItem name={item.name} photo={item.photo} />
  );

  return (
    <View style={styles.container}>
        <View style={{ backgroundColor: '#1BA9FF', padding: '13px', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{ width: '33.3%', alignItems: 'start' }}><IconAntDesign name="arrowleft" /></View>
            <View style={{ width: '33.3%', alignItems: 'center' }}><Text>Chat</Text></View>
            <View style={{ width: '33.3%', alignItems: 'end' }}><IconAntDesign name="shoppingcart" /></View>
        </View>
        <View style={{padding: '20px'}}>
          <Text>Bạn có thắc mắc với sản phẩm vừa xem? Đừng ngại chat với shop!</Text>
        </View>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, }} />
        <SafeAreaView style={{flex: '1'}}>
          <Text>Items:</Text>
          <FlatList
            data={dataList}
            renderItem={functionToRenderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
    </View>
  );

}
const styles = StyleSheet.create({
    container: {
      flex: '1',
      backgroundColor: '#E5E5E5',
    },
});
