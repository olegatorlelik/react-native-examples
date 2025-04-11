import {styles} from './styles';
import {View} from 'react-native';
import {FC, useState} from 'react';
import Item from './components/item';
import {IOption} from '../../types';
import {useSharedValue} from 'react-native-reanimated';

interface IHeader {
  label: 'Header';
  iconName: 'ellipsis1';
}

interface IProps {
  header: IHeader;
  options: IOption[];
}

const Menu: FC<IProps> = ({header, options}) => {
  const isExpanded = useSharedValue(false);

  return (
    <View style={styles.component}>
      {[header, ...options].map(({label, iconName}, i, arr) => (
        <Item
          key={label}
          iconName={iconName}
          label={label}
          index={i}
          itemsCount={arr.length}
          isExpanded={isExpanded}
        />
      ))}
    </View>
  );
};

export default Menu;
