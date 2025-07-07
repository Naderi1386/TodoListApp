import { StackParamList } from "@/app/_layout";
import TasksList from "@/components/feature/Tasks/TasksList";
import Layout from "@/components/ui/Layout";
import { StyleSheet, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useStore } from "@/store/TasksStore";
import CustomButton from "@/components/ui/CustomButton";
import EmptyTasks from "@/components/feature/Tasks/EmptyTasks";

type PropsType = NativeStackScreenProps<StackParamList, "Tasks">;
const Tasks = ({ navigation, route }: PropsType) => {
  const { tasks, removeAll } = useStore();
  if (!tasks.length)
    return (
      <Layout>
        <EmptyTasks handleNavigate={() => navigation.navigate("AddTasks")} />
      </Layout>
    );
  return (
    <Layout>
      <View style={{ flex: 1 }}>
        <View style={Styles.headerContainer}>
          <Text style={Styles.header}>My Tasks 📝</Text>
          <CustomButton onPress={() => removeAll()}>Remove All 🗑️</CustomButton>
        </View>
        <TasksList tasks={tasks} />
      </View>
    </Layout>
  );
};

export default Tasks;

const Styles = StyleSheet.create({
  headerContainer: {
    marginVertical: 8,
  },
  header: {
    marginBottom: 24,
    marginTop: 8,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
  },
});
