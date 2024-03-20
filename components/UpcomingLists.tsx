import { ScrollView, Spinner } from 'tamagui';
import { UseQueryResult } from '@tanstack/react-query';

import UpcomingMovieCard from './UpcomingMovieCard';
import { Subtitle } from '~/tamagui.config';
import { UpcomingResults } from '~/intrefaces/apiresults';

type UpcomingListsProps = {
  upcomingQuery: UseQueryResult<UpcomingResults, Error>;
};

const UpcomingLists = ({ upcomingQuery }: UpcomingListsProps) => {
  return (
    <>
      <Subtitle
        p={10}
        enterStyle={{
          opacity: 0,
        }}
        animation="lazy">
        Upcoming
      </Subtitle>

      {upcomingQuery.isLoading && <Spinner py={14} size="large" color={'$blue10'} />}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        py={40}
        contentContainerStyle={{ gap: 14, paddingLeft: 14 }}>
        {upcomingQuery.data?.results && (
          <>
            {upcomingQuery.data?.results.map((item) => {
              return <UpcomingMovieCard key={item.id} movie={item} />;
            })}
          </>
        )}
      </ScrollView>
    </>
  );
};

export default UpcomingLists;
