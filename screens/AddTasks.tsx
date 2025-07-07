import { StyleSheet, Text, View } from "react-native";
import { StackParamList } from "@/app/_layout";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import Layout from "@/components/ui/Layout";
import AddTaskForm from "@/components/feature/AddTasks/AddTaskForm";

type PropsType = NativeStackScreenProps<StackParamList, "AddTasks">;
const AddTasks = ({ navigation, route }: PropsType) => {
  return (
    <Layout>
      <View>
        <Text style={Styles.title}>Got Something to Do?</Text>
        <AddTaskForm handleNavigate={()=>navigation.navigate("Tasks")} />
      </View>
    </Layout>
  );
};

export default AddTasks;

const Styles = StyleSheet.create({
  title: {
    marginBottom: 16,
    marginTop: 8,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
  },
});
