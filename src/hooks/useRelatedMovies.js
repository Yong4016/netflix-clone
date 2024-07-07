import { useQuery } from '@tanstack/react-query';
import { instance } from '../utils/api';

const getRelatedMovies = (id) => {
  return instance.get(`/movie/${id}/recommendations`);
};

export const useRelatedMovies = (id) => {
  return useQuery({
    queryKey: ['movie-related', { id }],
    queryFn: () => getRelatedMovies(id),
    select: (result) => result.data.results,
  });
};
