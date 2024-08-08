import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import { RootStackParamList } from "../../../../App";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import useViewModel from './viewModel'
import { CustomTextInput } from '../../components/CusatomTextInput';
import styles from './Styles'

export const HomeScreen = () => {
  const {email, password, onChange
  } = useViewModel();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/imagen.jpg")}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../../assets/imagen2.jpg")}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>FOOD APP</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formText}>INGRESAR</Text>
      
          <CustomTextInput
          image= {require("../../../../assets/imagen3.jpg")}
            placeholder="Correo electrónico"
            KeyboardType="email-address"
            property="email"
            onChangeText={onChange}
            value ={email}
          />
          <CustomTextInput
          image= {require("../../../../assets/imagen4.jpg")}
            placeholder="Contraseña"
            KeyboardType="default"
            property="password"
            onChangeText={onChange}
            value={password}
            secureTextEntry={true}
           
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <RoundedButton
            text="ENTRAR"
            onPress={()=>{console.log('email'+ email)
              console.log('passdword'+ password);   
            }}
          />
        </View>

        <View style={styles.formRegister}>
          <Text>¿No tienes cuenta?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.formRegisterText}>Regístrate</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};


