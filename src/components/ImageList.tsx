import * as React from 'react';
import {
  View,
  ImageURISource,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';

type Props = {
  images: ImageURISource[];
  onPress: (i: number) => void;
};

const ImageList: React.SFC<Props> = (props: Props) => {
  const screenWidth = Dimensions.get('window').width;
  return (
    <View
      style={{ flexDirection: 'row', width: screenWidth, flexWrap: 'wrap' }}
    >
      {props.images.map((image, index) => (
        <TouchableHighlight
          // tslint:disable-next-line
          onPress={() => {
            props.onPress(index);
          }}
          style={{ flexGrow: 1, width: 140, margin: 1 }}
        >
          <Image
            key={index}
            style={{
              height: 130,
              width: 'auto'
            }}
            resizeMode={'cover'}
            source={image}
          />
        </TouchableHighlight>
      ))}
    </View>
  );
};

export default ImageList;
