import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  console.log('🚀 ~ Page ~ id:', id);

  return (
    <View>
      <Text>Page</Text>
    </View>
  );
};

export default Page;
