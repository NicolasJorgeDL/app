import { StyleSheet } from 'react-native';

import Login from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#090219'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E5DFF0'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
