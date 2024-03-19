import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useMMKVBoolean, useMMKVObject } from 'react-native-mmkv';

import { Favorite } from '~/intrefaces/favorites';
import { Container, Main } from '~/tamagui.config';
import { Image, ListItem, ScrollView } from 'tamagui';
import { Link } from 'expo-router';
import Animated from 'react-native-reanimated';

const Page = () => {
  const [favorites, setFavorites] = useMMKVObject<Favorite[]>('favorites');

  return (
    <Main>
      <Container>
        <ScrollView>
          {favorites?.map((fav) => (
            <Link key={fav.id} href={`/(drawer)/favorites/${fav.mediaType}/${fav.id}`}>
              <ListItem
                theme={'alt2'}
                title={fav.name}
                size={'$3'}
                icon={() => (
                  <Animated.Image
                    source={{ uri: `https://image.tmdb.org/t/p/w500${fav.thumb}` }}
                    style={{ width: 50, height: 50 }}
                    sharedTransitionTag={`${fav.mediaType === 'movie' ? 'movie' : 'tv'}-${fav.id}`}
                  />
                )}></ListItem>
            </Link>
          ))}
        </ScrollView>
      </Container>
    </Main>
  );
};

export default Page;

const styles = StyleSheet.create({});
