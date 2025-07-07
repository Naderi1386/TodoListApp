import CustomButton from "@/components/ui/CustomButton";
import { Colors } from "@/constant/Colors";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
} from "react-native";

const AddTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <KeyboardAvoidingView behavior="padding" style={Styles.container}>
      <TextInput
        style={Styles.input}
        placeholder="Enter Your Title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={Styles.input}
        placeholder="Enter Your description"
        value={description}
        onChangeText={setDescription}
        
      />
      <CustomButton>Add</CustomButton>
    </KeyboardAvoidingView>
  );
};

export default AddTaskForm;

const Styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 10,
    color: "white",
    fontWeight: "600",
    fontSize: 18,
    outline: "none",
    marginBottom: 18,
    backgroundColor: Colors.blueDark,
  },
  container: {
    marginTop: 18,
  },
});
