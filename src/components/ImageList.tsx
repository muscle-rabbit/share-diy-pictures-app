import * as React from 'react';
import { View, ImageURISource, Image, Dimensions } from 'react-native';

type Props = {
  images: ImageURISource[];
};

const ImageList: React.SFC<Props> = (props: Props) => {
  console.log(Dimensions.get('window').width / 3);
  const screenWidth = Dimensions.get('window').width;
  return (
    <View
      style={{ flexDirection: 'row', width: screenWidth, flexWrap: 'wrap' }}
    >
      {props.images.map((image, index) => (
        <Image
          key={index}
          style={{
            height: 130,
            flexGrow: 1,
            width: 140,
            margin: 1
          }}
          resizeMode={'cover'}
          source={image}
        />
      ))}
    </View>
  );
};

export default ImageList;
