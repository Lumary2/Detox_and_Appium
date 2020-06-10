import React, { Component } from 'react';
import { Linking, Button, Modal, StyleSheet, View } from 'react-native';
import BorderText from '../components/BorderText';
import { STATUS_BAR_HEIGHT } from '../components/StatusBar';
import ImageViewer from 'react-native-image-zoom-viewer';


class WebviewScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModelVisible: true,
    };
  }
  ShowModalFunction(visible) {
    this.setState({ isModelVisible: false });
  }
  render() {
    const images = [{
      url: 'https://pngimage.net/wp-content/uploads/2018/06/logo-linux-png-5.png',
    },];
    return (
      <View style={styles.MainContainer}>
        <Modal
          visible={this.state.isModelVisible}
          transparent={false}
          onRequestClose={() => this.ShowModalFunction()}>
          <ImageViewer imageUrls={images} />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
  },
});


/*renderLoading() {
  return (
    <View style={styles.loaderContainer}>
      <BorderText text="Loading..." />
    </View>
  );
}

render() {

  console.log('render');
  return (


    <PictureView
      renderLoading={this.renderLoading}

      source={{
        uri: 'http://webdriver.io/'
      }}
      startInLoadingState
      originWhitelist={['*']}
      style={{ marginTop: STATUS_BAR_HEIGHT }}
    />
  );
}
}

const styles = StyleSheet.create({
loaderContainer: {
  backgroundColor: '#f7f7f7',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  ...StyleSheet.absoluteFill,
},
});*/

export default WebviewScreen;
