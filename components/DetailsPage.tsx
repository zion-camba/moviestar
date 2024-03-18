import { ImageBackground, Image } from 'react-native';
import React from 'react';
import { MediaType } from '~/intrefaces/apiresults';
import { useQuery } from '@tanstack/react-query';
import { Container, Title, Main, Subtitle } from '~/tamagui.config';
import { getMovieDetails } from '~/services/api';
import { ScrollView, YStack, H1, Text, Paragraph } from 'tamagui';

type DetailsPageProps = {
  id: string;
  mediaType: MediaType;
};

const DetailsPage = ({ id, mediaType }: DetailsPageProps) => {
  const movieQuery = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieDetails(+id, mediaType),
  });

  return (
    <Main>
      <ScrollView>
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/w400${movieQuery.data?.backdrop_path}`,
          }}>
          <Image
            borderRadius={6}
            source={{
              uri: `https://image.tmdb.org/t/p/w400${movieQuery.data?.poster_path}`,
            }}
            style={{ width: 200, height: 300, margin: 10 }}
          />
        </ImageBackground>
        <YStack p={10} animation={'lazy'} enterStyle={{ opacity: 0, y: 10 }}>
          <H1 color={'$blue7'}>
            {movieQuery.data?.title || movieQuery.data?.name}
            <Text fontSize={16}>(2023)</Text>
          </H1>
          <Paragraph theme={'alt2'}>{movieQuery.data?.tagline}</Paragraph>
          <Text fontSize={16}>{movieQuery.data?.overview}</Text>
        </YStack>
      </ScrollView>
    </Main>
  );
};

export default DetailsPage;
