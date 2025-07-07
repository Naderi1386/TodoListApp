import CustomButton from "@/components/ui/CustomButton";
import { Colors } from "@/constant/Colors";
import { useStore } from "@/store/TasksStore";
import { TaskType } from "@/types/TaskType";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
} from "react-native";

const AddTaskForm = ({ handleNavigate }: { handleNavigate: () => void }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addTask } = useStore();
  const handlePress = () => {
    if (title && description) {
      const newTask: TaskType = {
        description,
        title,
        isCompleted: false,
        id: title,
      };
      addTask(newTask);
      Alert.alert("Success", "Task added! Let’s get things done 💪");
      handleNavigate();
    }
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={Styles.container}>
      <TextInput
        style={Styles.input}
        placeholder="Enter Your Title"
        value={title}
        onChangeText={setTitle}
        underlineColorAndroid="transparent"
      />

      <TextInput
        style={Styles.input}
        placeholder="Enter Your description"
        value={description}
        onChangeText={setDescription}
        underlineColorAndroid="transparent"
        multiline
      />
      <CustomButton onPress={handlePress}>Add</CustomButton>
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
    marginBottom: 18,
    backgroundColor: Colors.blueDark,
  },
  container: {
    marginTop: 18,
  },
});
