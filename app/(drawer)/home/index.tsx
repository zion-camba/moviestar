import { ImageBackground, StyleSheet } from 'react-native';
import { Input, ScrollView, Spinner, YStack } from 'tamagui';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { Container, Title, Main, Subtitle } from '~/tamagui.config';
import { getTrending } from '~/services/api';
import MovieCard from '~/components/MovieCard';

const Page = () => {
  const [searchString, setSearchString] = useState('');

  const trendingQuery = useQuery({
    queryKey: ['trending'],
    queryFn: getTrending,
  });

  const searchQuery = useQuery({
    queryKey: ['trending'],
    queryFn: getTrending,
  });

  return (
    <Main>
      <ImageBackground
        source={{
          // uri: 'https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/ghQrKrcEpAlkzBuNoOCSxHQXWqw.jpg',
          uri: 'https://scontent.fmnl25-2.fna.fbcdn.net/v/t39.30808-1/362692997_667917992055037_6003651457914706853_n.jpg?stp=dst-jpg_p480x480&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG335xWyBIK6cmE5RILDNEXcYsOmUPgrAxxiw6ZQ-CsDOoG1L7LfsQLsAnpbfOkAIlYnXW3fgHugFQCbL8rdTXX&_nc_ohc=0cbTm6jh8cwAX8a9VxW&_nc_ht=scontent.fmnl25-2.fna&oh=00_AfDl4LvSd3PzBgulMlyGE5orWx8FT6USWTlJHl2cWcD2ZA&oe=65FC08A8',
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
              Ludy's Rentahan ng DVD
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
      <Subtitle
        p={10}
        enterStyle={{
          opacity: 0,
        }}
        animation="lazy">
        Trending
      </Subtitle>

      {(trendingQuery.isLoading || searchQuery.isLoading) && (
        <Spinner py={14} size="large" color={'$blue10'} />
      )}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        py={40}
        contentContainerStyle={{ gap: 14, paddingLeft: 14 }}>
        {trendingQuery.data?.results && (
          <>
            {trendingQuery.data?.results.map((item) => {
              return <MovieCard key={item.id} movie={item} />;
            })}
          </>
        )}
      </ScrollView>
    </Main>
  );
};

export default Page;

const styles = StyleSheet.create({});
