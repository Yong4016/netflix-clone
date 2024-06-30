import { useQuery } from '@tanstack/react-query';
import { instance } from '../utils/api';

const getUpComingMovies = () => {
  return instance.get(`/movie/upcoming`);
};

export const useUpComingMovies = () => {
  return useQuery({
    queryKey: ['UpComingMovies'],
    queryFn: getUpComingMovies,
    select: (result) => result.data,
  });
};
