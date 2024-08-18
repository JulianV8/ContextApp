import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../../../config';
import {useProfileStore} from '../../stores/profile-store';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>{name}</Text>
      <Text style={styles.tittle}>{email}</Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => {
          useProfileStore.setState({name: 'Leonardo Avella'});
        }}>
        <Text style={styles.tittle}>Cambiar nombre</Text>
      </Pressable>
      <Pressable
        style={styles.primaryButton}
        onPress={() => {
          useProfileStore.setState({email: 'leo.avella@gmail.com'});
        }}>
        <Text style={styles.tittle}>Cambiar email</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() => {
          changeProfile('Ramiro Mendez', 'ramiro.mendez@gmail.com');
        }}>
        <Text style={styles.tittle}>Cambiar Perfil</Text>
      </Pressable>
    </View>
  );
};
