import { StackParamList } from "@/app/_layout";
import CustomButton from "@/components/ui/CustomButton";
import Layout from "@/components/ui/Layout";
import { StyleSheet, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type PropsType = NativeStackScreenProps<StackParamList, "Home">;

const Home = ({ navigation, route }: PropsType) => {
  return (
    <Layout>
      <View>
        <Text style={Styles.welcomeTitle}>Welcome 👋</Text>
        <Text style={Styles.aboutTitle}>
          Organize your tasks, plan your day, and never miss anything again.
        </Text>
        <View style={Styles.buttonsContainer}>
          <CustomButton onPress={() => navigation.navigate("Tasks")}>
            📋 View All Tasks
          </CustomButton>
          <CustomButton onPress={() => navigation.navigate("AddTasks")}>
            ➕ Add New Task
          </CustomButton>
        </View>
      </View>
    </Layout>
  );
};

export default Home;

const Styles = StyleSheet.create({
  welcomeTitle: {
    marginBottom: 16,
    marginTop: 8,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
  },
  aboutTitle: {
    marginBottom: 24,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
});
