import React from 'react';
import { StyleSheet, Text, View, MapView, ListView } from 'react-native';

export default class App extends React.Component {
    constructor() {
      super();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Use the force</Text>
        <ListView
          dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
