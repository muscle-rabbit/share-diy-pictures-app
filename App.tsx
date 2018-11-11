import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageList from './src/components/ImageList';
export default class App extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <ImageList
          images={[
            require('./assets/images/Iris.jpeg'),
            require('./assets/images/Fourier.jpg'),
            require('./assets/images/Planck.jpg'),
            require('./assets/images/Orthodox.jpg'),
            require('./assets/images/HHKB.jpg')
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
