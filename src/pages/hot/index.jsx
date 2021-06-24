import { View, Button, Text } from '@tarojs/components';
import { useSelector, useUpdateStore } from 'simple-redux-store';
import './index.less';

const Index = () => {
  // 读取redux store
  const { name, counter = 0 } = useSelector((s) => s.app);
  //用于更新store
  const updateStore = useUpdateStore();

  return (
    <View className="index">
      <View>
        <Text>
          {name} {counter}
        </Text>
        <Button
          type="primary"
          onClick={() => updateStore({ counter: counter - 1 })}
        >
          hot --
        </Button>
      </View>
    </View>
  );
};

export default Index;
