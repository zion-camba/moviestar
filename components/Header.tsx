import { ImageBackground } from 'react-native';
import { Container, Title } from '~/tamagui.config';
import { Input, YStack } from 'tamagui';

type HeaderProps = {
  title: string;

  banner: string;
  searchString: string;
  setSearchString: (arg0: string) => void;
};

const Header = ({ title, banner, searchString, setSearchString }: HeaderProps) => {
  return (
    <ImageBackground
      source={{
        uri: banner,
      }}
      imageStyle={{ opacity: 0.8 }}
      style={{ width: '100%', height: 200 }}>
      <Container>
        <YStack>
          <Title
            fontSize={30}
            color={'#000'}
            enterStyle={{
              opacity: 0,
              scale: 0.5,
              y: -10,
            }}
            animation="quick">
            {title}
          </Title>
          <Input
            placeholder="Search for a movie, tv show, person..."
            placeholderTextColor={'#fff'}
            borderWidth={1}
            size={'$4'}
            value={searchString}
            onChangeText={(text) => setSearchString(text)}
          />
        </YStack>
      </Container>
    </ImageBackground>
  );
};

export default Header;
