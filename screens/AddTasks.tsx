import { View } from "react-native"
import { StackParamList } from "@/app/_layout";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type PropsType = NativeStackScreenProps<StackParamList, "AddTasks">;
const AddTasks = ({navigation,route}: PropsType) => {
  return <View>Add Tasks</View>;
};

export default AddTasks