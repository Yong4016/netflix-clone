import { useQuery } from '@tanstack/react-query';
import { instance } from '../utils/api';

const getPopularMovies = () => {
  return instance.get(`/movie/popular`);
};

export const usePopularMovies = () => {
  return useQuery({
    queryKey: ['popularMovies'],
    queryFn: getPopularMovies,
    select: (data) => data.data,
  });
};
