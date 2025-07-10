import { FlatList, StyleSheet, View } from "react-native";
import TaskItems from "./TaskItems";
import { TaskType } from "@/types/TaskType";

const Separator = () => {
  return <View style={Styles.separator}></View>;
};

const TasksList = ({ tasks }: { tasks: TaskType[] }) => {
  return (
    <FlatList
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
  separator: {
    borderBottomWidth: 1,
    borderColor: "black",
    opacity: 0.25,
  },
});
