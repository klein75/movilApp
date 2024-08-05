import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { MyColors } from "../theme/Apptheme";

interface Props {
  text: string;
  onPress: () => void;
}

export const RoundedButton = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.RoundedButton} onPress={() => onPress()}>
      <Text style={styles.textButton}>Entrar</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  RoundedButton: {
    width: "100%",
    height: 50,
    backgroundColor: MyColors.primary,
    alignItems: "center",
    borderRadius: 15,
  },
  textButton: {
    color: "white",
  },
});
export default RoundedButton;
