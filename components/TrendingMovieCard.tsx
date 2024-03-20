import { Link } from 'expo-router';
import Animated from 'react-native-reanimated';
import { Card, Text, YStack, Paragraph } from 'tamagui';
import { ResultItem } from '~/intrefaces/apiresults';

type TrendingMovieCardProps = {
  movie: ResultItem;
};

const TrendingMovieCard = ({ movie }: TrendingMovieCardProps) => {
  return (
    <Link
      href={`/(drawer)/home/${movie.media_type === 'movie' ? 'movie' : 'tv'}/${movie.id}`}
      asChild>
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
            sharedTransitionTag={`${movie.media_type === 'movie' ? 'movie' : 'tv'}-${movie.id}`}
          />
        </Card.Header>
        <Card.Footer p={8}>
          <YStack>
            <Text fontSize={12} color={'lightblue'}>
              {movie.title || movie.name}
            </Text>
            <Paragraph theme={'alt2'} fontSize={10}>
              {new Date(movie.release_date! || movie.first_air_date!).getFullYear()}
            </Paragraph>
          </YStack>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default TrendingMovieCard;
