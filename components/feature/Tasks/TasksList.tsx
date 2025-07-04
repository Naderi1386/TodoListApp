import { FlatList, StyleSheet, Text, View } from "react-native";
import TaskItems from "./TaskItems";
import { TaskType } from "@/types/TaskType";

const Separator = () => {
  return <View style={Styles.separator}></View>;
};

const TasksList = ({ tasks }: { tasks: TaskType[] }) => {
  return (
    <FlatList
      ListHeaderComponent={<Text style={Styles.header}>My Tasks 📝</Text>}
      keyExtractor={(item) => item.id}
      data={tasks}
      renderItem={({ item }) => <TaskItems task={item} />}
      ItemSeparatorComponent={Separator}
      removeClippedSubviews={false}
    />
  );
};

export default TasksList;

const Styles = StyleSheet.create({
  header: {
    marginBottom: 24,
    marginTop: 8,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "black",
    opacity: 0.25,
  },
});
