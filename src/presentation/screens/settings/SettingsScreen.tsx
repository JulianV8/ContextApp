import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../../../config';
import {useCounterStore} from '../../stores/counter-store';
import {useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const count = useCounterStore(state => state.count);
  const incrementBy = useCounterStore(state => state.incrementBy);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Counter: ${count}`,
    });
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Counter: {count}</Text>
      <Pressable
        style={styles.primaryButton}
        onPress={() => {
          incrementBy(1);
        }}>
        <Text style={styles.tittle}>+1</Text>
      </Pressable>
      <Pressable
        style={styles.primaryButton}
        onPress={() => {
          incrementBy(-1);
        }}>
        <Text style={styles.tittle}>-1</Text>
      </Pressable>
    </View>
  );
};
