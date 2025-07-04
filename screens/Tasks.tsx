import { StackParamList } from "@/app/_layout";
import TasksList from "@/components/feature/Tasks/TasksList";
import Layout from "@/components/ui/Layout";
import { TaskType } from "@/types/TaskType";
import { View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

const data: TaskType[] = [
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum ad aliquid facere quisquam possimus!",
    title: "test 1",
    isCompleted: false,
    id: "a",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum ad aliquid facere quisquam possimus!",
    title: "test 2",
    isCompleted: true,
    id: "b",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum ad aliquid facere quisquam possimus!",
    title: "test 3",
    isCompleted: false,
    id: "c",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum ad aliquid facere quisquam possimus!",
    title: "test 4",
    isCompleted: true,
    id: "d",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum ad aliquid facere quisquam possimus!",
    title: "test 5",
    isCompleted: false,
    id: "e",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum ad aliquid facere quisquam possimus!",
    title: "test 6",
    isCompleted: true,
    id: "f",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum ad aliquid facere quisquam possimus!",
    title: "test 7",
    isCompleted: true,
    id: "g",
  },
];

type PropsType = NativeStackScreenProps<StackParamList, "Tasks">;
const Tasks = ({ navigation, route }: PropsType) => {
  return (
    <Layout>
      <View style={{ flex: 1 }}>
        <TasksList tasks={data} />
      </View>
    </Layout>
  );
};

export default Tasks;
