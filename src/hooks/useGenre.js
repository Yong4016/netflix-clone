import { useQuery } from '@tanstack/react-query';
import { instance } from '../utils/api';

const getGenre = () => {
  return instance.get('/genre/movie/list');
};

export const useGenre = () => {
  return useQuery({
    queryKey: ['movie-genre'],
    queryFn: getGenre,
    select: (result) => result.data.genres,
    staleTime: 1000 * 60 * 60,
  });
};
