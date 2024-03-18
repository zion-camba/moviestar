import { useLocalSearchParams } from 'expo-router';
import DetailsPage from '~/components/DetailsPage';
import { MediaType } from '~/intrefaces/apiresults';

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return <DetailsPage id={id} mediaType={MediaType.Tv} />;
};

export default Page;
