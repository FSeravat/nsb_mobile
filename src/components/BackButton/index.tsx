import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

export default function ArrowBack() {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  return (
    <TouchableOpacity onPress={goBack}>
      <Ionicons name="arrow-back" size={40} color="black" />
    </TouchableOpacity>
  );
}
