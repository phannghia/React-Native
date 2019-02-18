// import * as React from 'react';
// import { Text, View, StyleSheet, Image } from 'react-native';

// export default class AssetExample extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.paragraph}>
//           Local files and assets can be imported by dragging and dropping them into the editor
//         </Text>

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 24,
//   },
//   paragraph: {
//     margin: 24,
//     marginTop: 0,
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   logo: {
//     height: 128,
//     width: 128,
//   }
// });
import React from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';

export default class AssetExample extends React.Component {
  _keyExtractor = (item, index) => item.id;
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        console.log("responseJson");
        console.log(responseJson);

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        });

      })
      .catch((error) => {
        console.error(error);
      });
  }



  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    console.log("this.state.dataSource");
    console.log(this.state.dataSource);


    return (
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item, index }) => {
            console.log("index:" + index);

            return (<Text>{item.title}, {item.releaseYear}</Text>)
          }}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
        />
    );
  }
}