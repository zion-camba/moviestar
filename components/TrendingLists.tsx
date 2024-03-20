import { ScrollView, Spinner } from 'tamagui';
import { UseQueryResult } from '@tanstack/react-query';

import TrendingMovieCard from './TrendingMovieCard';
import { Subtitle } from '~/tamagui.config';
import { TrendingResult } from '~/intrefaces/apiresults';

type TrendingListsProps = {
  trendingQuery: UseQueryResult<TrendingResult, Error>;
  searchQuery: UseQueryResult<TrendingResult, Error>;
};

const TrendingLists = ({ searchQuery, trendingQuery }: TrendingListsProps) => {
  return (
    <>
      <Subtitle
        p={10}
        enterStyle={{
          opacity: 0,
        }}
        animation="lazy">
        {searchQuery.data?.results ? 'Search Results' : 'Trending'}
      </Subtitle>

      {(trendingQuery.isLoading || searchQuery.isLoading) && (
        <Spinner py={14} size="large" color={'$blue10'} />
      )}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        py={40}
        contentContainerStyle={{ gap: 14, paddingLeft: 14 }}>
        {searchQuery.data?.results ? (
          <>
            {searchQuery.data?.results.map((item) => (
              <TrendingMovieCard key={item.id} movie={item} />
            ))}
          </>
        ) : (
          <>
            {trendingQuery.data?.results && (
              <>
                {trendingQuery.data?.results.map((item) => {
                  return <TrendingMovieCard key={item.id} movie={item} />;
                })}
              </>
            )}
          </>
        )}
      </ScrollView>
    </>
  );
};

export default TrendingLists;
