import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  ToastAndroid,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import useViemModel from './viewModel';
import {  CustomTextInput } from "../../components/CusatomTextInput";
import { KeyboardType } from 'react-native';
import styles from './Styles'


export const RegisterScreen = () => {
  const {name, lastname, phone, email, password, confimPassword, onChange, register} = useViemModel();

  
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/chef.jpg")}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../../assets/user_image.png")}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formText}>REGISTRARSE</Text>
        </View>
        
       <CustomTextInput
       image={require('../../../../assets/user.png')}
       placeholder="Nombres"
       KeyboardType="default"
       property="name"
       onChangeText={onChange}
       value={name}
       />
     
      <CustomTextInput
        image={require('../../../../assets/user.png')}
        placeholder='Apellidos'
        KeyboardType='default'
        property='lastname'
        onChangeText={onChange}
        value = {lastname}
        />
      
        <CustomTextInput
        image={require("../../../../assets/email.png")}
        placeholder= 'correo Electronico'
        KeyboardType='default'
        property="email"
        onChangeText={onChange}
        value={email}
          />
        
        <CustomTextInput
        image={require("../../../../assets/phone.png")}
        placeholder="Telefono"
        KeyboardType="numeric"
        property="phone"
        onChangeText={onChange}
        value={phone}
        />
          
        <CustomTextInput
        image={require("../../../../assets/password.png")}
        placeholder="Contraseña"
        KeyboardType="default"
        property="password"
        onChangeText={onChange}
        value={password}
        secureTextEntry={true}
        />
       

       <CustomTextInput
      image={require("../../../../assets/confirm_password.png")}
      placeholder="Confirmar Contraseña"
      KeyboardType="default"
      property="confirmPassword"
      onChangeText={onChange}
      value={confimPassword}
      secureTextEntry={true}
        />
       
      <View style={{ marginTop: 30 }}>
        <RoundedButton
          text="confirmar"
          onPress={() => register()}
        />
      </View>
    </View>
  );
};

