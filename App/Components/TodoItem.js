import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { Text, Icon, ListItem, CheckBox } from 'native-base';

const TodoItem = ({ toggle, remove, item }) => (
  <ListItem style={{ flex: 1, flexDirection: 'row' }}>
    <View style={{width: '10%'}}>
        <CheckBox onPress={toggle} checked={item.completed} />
    </View>
    <View style={{width: '80%'}}>
        <Text>{item.text}</Text>
    </View>
    <View style={{ width: '10%', justifyContent: 'flex-end' }}>
        <Icon name="md-trash" style={{ color: '#000000' }} onPress={remove} />
    </View>
  </ListItem>
);

TodoItem.propTypes = {
  toggle: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired, //eslint-disable-line
};

export default TodoItem;