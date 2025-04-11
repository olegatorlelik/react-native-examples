import {SafeAreaView} from 'react-native';
import {FC, useCallback, useState} from 'react';
import {styles} from './styles';
import Task from './components/task';
import {ScrollView} from 'react-native-gesture-handler';

interface TaskInterface {
  title: string;
  index: number;
}

const TITLES = [
  'Record the dismissible tutorial 🎥',
  'Leave 👍🏼 to the video',
  'Check YouTube comments',
  'Subscribe to the channel 🚀',
  'Leave a ⭐️ on the GitHub Repo',
];

const TASKS: TaskInterface[] = TITLES.map((title, index) => ({title, index}));

const SwipeToDelete: FC = () => {
  const [tasks, setTasks] = useState(TASKS);

  const onDismiss = useCallback((id: number) => {
    setTasks(currentState => currentState.filter(item => item.index !== id));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.list}
        contentContainerStyle={styles.listContainer}>
        {tasks.map(({title, index}) => (
          <Task key={index} title={title} onDismiss={onDismiss} id={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SwipeToDelete;
