import { StackParamList } from "@/app/_layout";
import TasksList from "@/components/feature/Tasks/TasksList";
import Layout from "@/components/ui/Layout";
import { View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useStore } from "@/store/TasksStore";

type PropsType = NativeStackScreenProps<StackParamList, "Tasks">;
const Tasks = ({ navigation, route }: PropsType) => {
  const { tasks } = useStore();
  return (
    <Layout>
      <View style={{ flex: 1 }}>
        <TasksList tasks={tasks} />
      </View>
    </Layout>
  );
};

export default Tasks;
