import CustomButton from "@/components/ui/CustomButton";
import { Colors } from "@/constant/Colors";
import { TaskType } from "@/types/TaskType";
import { StyleSheet, Text, View } from "react-native";

const TaskItems = ({
  task: { description, id, isCompleted, title },
}: {
  task: TaskType;
}) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>{title}</Text>
      <Text style={Styles.description}>{description}</Text>
      <CustomButton color={isCompleted ? Colors.red : Colors.green}>
        {isCompleted ? "Haven't done" : "Done"}
      </CustomButton>
    </View>
  );
};

export default TaskItems;

const Styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  title: {
    marginBottom: 12,
    fontSize: 22,
    fontWeight: "500",
  },
  description: {
    marginBottom: 20,
    fontSize: 18,
  },
});
