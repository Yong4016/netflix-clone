import { useQuery } from '@tanstack/react-query';
import { instance } from '../utils/api';

const searchMovies = ({ keyword, page }) => {
  return keyword ? instance.get(`/search/movie?query=${keyword}&page=${page}`) : instance.get(`/movie/popular?page=${page}`);
};

export const useSearch = ({ keyword, page }) => {
  return useQuery({
    queryKey: ['movie-search', { keyword, page }],
    queryFn: () => searchMovies({ keyword, page }),
    select: (result) => result.data,
  });
};
