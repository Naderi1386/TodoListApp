import { Colors } from "@/constant/Colors";
import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, ViewStyle } from "react-native";

type CustomButtonProps = {
  children: ReactNode;
  onPress?: () => void;
  color?: string;
};

const CustomButton = ({ children, onPress, color }: CustomButtonProps) => {
  const buttonStyle: ViewStyle = {
    backgroundColor: color ?? "#3B82F6",
  };

  return (
    <Pressable style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "600",
    color: Colors.white,
  },
});
