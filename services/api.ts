import { MediaType, TrendingResult, UpcomingResults } from '~/intrefaces/apiresults';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const getTrending = async (): Promise<TrendingResult> => {
  const responose = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${API_KEY}&page=1`
  );
  const json = await responose.json();
  return json;
};

export const getUpcoming = async (): Promise<UpcomingResults> => {
  const responose = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&api_key=${API_KEY}`
  );
  const json = await responose.json();
  return json;
};

export const getSearchResults = async (query: string): Promise<TrendingResult> => {
  console.log('SEARCH: ', query);

  const response = await fetch(
    `https://api.themoviedb.org/3/search/multi?language=en-US&api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );

  const data = await response.json();
  return data;
};

export const getMovieDetails = async (id: number, type: MediaType): Promise<any> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}?language=en-US&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};
