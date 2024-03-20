import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { Main } from '~/tamagui.config';
import { getTrending, getSearchResults, getUpcoming } from '~/services/api';
import useDebounce from '~/utils/useDebounce';
import Header from '~/components/Header';
import TrendingLists from '~/components/TrendingLists';
import UpcomingLists from '~/components/UpcomingLists';
import { ScrollView } from 'tamagui';

const Page = () => {
  const [searchString, setSearchString] = useState('');
  const debounceString = useDebounce(searchString, 300);

  const trendingQuery = useQuery({
    queryKey: ['trending'],
    queryFn: getTrending,
  });

  console.log('🚀 ~ Page ~ trendingQuery:', trendingQuery);

  const upcomingQuery = useQuery({
    queryKey: ['upcoming'],
    queryFn: getUpcoming,
  });

  const searchQuery = useQuery({
    queryKey: ['trending', debounceString],
    queryFn: () => getSearchResults(debounceString),
    enabled: debounceString.length > 0,
  });

  return (
    <Main>
      <Header
        title={" Ludy's Rentahan ng DVD"}
        banner={
          // 'https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/ghQrKrcEpAlkzBuNoOCSxHQXWqw.jpg'
          'https://scontent.fmnl25-2.fna.fbcdn.net/v/t39.30808-1/362692997_667917992055037_6003651457914706853_n.jpg?stp=dst-jpg_p480x480&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG335xWyBIK6cmE5RILDNEXcYsOmUPgrAxxiw6ZQ-CsDOoG1L7LfsQLsAnpbfOkAIlYnXW3fgHugFQCbL8rdTXX&_nc_ohc=0cbTm6jh8cwAX8a9VxW&_nc_ht=scontent.fmnl25-2.fna&oh=00_AfDl4LvSd3PzBgulMlyGE5orWx8FT6USWTlJHl2cWcD2ZA&oe=65FC08A8'
        }
        searchString={searchString}
        setSearchString={setSearchString}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TrendingLists searchQuery={searchQuery} trendingQuery={trendingQuery} />
        <UpcomingLists upcomingQuery={upcomingQuery} />
      </ScrollView>
    </Main>
  );
};

export default Page;
