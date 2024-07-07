import { useQuery } from '@tanstack/react-query';
import { instance } from '../utils/api';

const getMovieDetails = (id) => {
  return instance.get(`/movie/${id}`);
};

export const useMovieDetails = (id) => {
  return useQuery({
    queryKey: ['movie-details', { id }],
    queryFn: () => getMovieDetails(id),
    select: (result) => result.data,
  });
};
