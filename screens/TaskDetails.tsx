import { View } from 'react-native';
import { StackParamList } from '@/app/_layout';
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type PropsType = NativeStackScreenProps<StackParamList, "TaskDetails">;
const TaskDetails = ({ navigation, route }: PropsType) => {
  return <View>TaskDetails</View>;
};

export default TaskDetails;
