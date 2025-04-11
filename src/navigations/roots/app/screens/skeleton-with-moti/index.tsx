import {FlatList, SafeAreaView} from 'react-native';
import {FC} from 'react';
import {styles} from './styles';

const foo = () => {};

const SkeletonWithMoti: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={[]} renderItem={() => <></>} />
    </SafeAreaView>
  );
};

export default SkeletonWithMoti;
