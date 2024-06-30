import { useQuery } from '@tanstack/react-query';
import { instance } from '../utils/api';

const getTopRatedMovies = () => {
  return instance.get(`/movie/top_rated`);
};

export const useTopRatedMovies = () => {
  return useQuery({
    queryKey: ['TopRatedMovies'],
    queryFn: getTopRatedMovies,
    select: (result) => result.data,
  });
};
