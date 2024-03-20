import { Link } from 'expo-router';
import Animated from 'react-native-reanimated';
import { Card, Text, YStack, Paragraph } from 'tamagui';
import { UpcomingResult } from '~/intrefaces/apiresults';

type UpcomingMovieCardProps = {
  movie: UpcomingResult;
};

const UpcomingMovieCard = ({ movie }: UpcomingMovieCardProps) => {
  return (
    // <Link
    //   href={`/(drawer)/home/${movie.media_type === 'movie' ? 'movie' : 'tv'}/${movie.id}`}
    //   asChild>
    <Card
      elevate
      width={120}
      height={230}
      scale={0.9}
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.975 }}
      animation={'bouncy'}>
      <Card.Header p={0}>
        <Animated.Image
          source={{ uri: `https://image.tmdb.org/t/p/w200${movie.poster_path}` }}
          alt={movie.title}
          style={{ width: 120, height: 170 }}
          // sharedTransitionTag={`${movie.media_type === 'movie' ? 'movie' : 'tv'}-${movie.id}`}
        />
      </Card.Header>
      <Card.Footer p={8}>
        <YStack>
          <Text fontSize={12} color={'lightblue'}>
            {movie.title}
          </Text>
          <Paragraph theme={'alt2'} fontSize={10}>
            {new Date(movie.release_date!).getFullYear()}
          </Paragraph>
        </YStack>
      </Card.Footer>
    </Card>
    // </Link>
  );
};

export default UpcomingMovieCard;
