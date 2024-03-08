import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'tamagui';
import { Title } from '~/tamagui.config';
import React from 'react';
import { Link } from 'expo-router';

const Page = () => {
  return (
    <View>
      <Title>Home</Title>
      <Link href={'/(drawer)/home/movie/1'} asChild>
        <Text>Moive 1</Text>
      </Link>
      <Card>
        <Card.Header>
          <Text>Header</Text>
        </Card.Header>
      </Card>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({});
