import React from "react";
import { View, Image, TextInput, StyleSheet, KeyboardType } from "react-native";

interface Props {
  image: any;
  placeholder: string;
  value: string;
  KeyboardType: KeyboardType;
  secureTextEntry?: boolean;
  property: string;
  onChangeText: (property: string, value: any) => void;
}
export const CustomTextInput = ({
  image,
  placeholder,
  value,
  KeyboardType,
  secureTextEntry = false,
  property,
  onChangeText,
}: Props) => {
  <View style={styles.formInput}>
    <Image style={styles.formIcon} source={image} />
    <TextInput
      style={styles.formTextInput}
      placeholder={placeholder}
      keyboardType={KeyboardType}
      value={value}
      onChangeText={(text) => onChangeText(property, text)}
      secureTextEntry={secureTextEntry}
    />
  </View>;
};
const styles = StyleSheet.create({
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  formInput: {
    flexDirection: "row",
    marginTop: 30,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#AAAAAA",
    marginLeft: 15,
  },
});

export const CusatomTextInput = () => {
  return <div>CusatomTextInput</div>;
};
