import { useQuery } from '@tanstack/react-query';
import { instance } from '../utils/api';

const getTrailer = (id) => {
  return instance.get(`/movie/${id}/videos`);
};
export const useTrailer = (id) => {
  return useQuery({
    queryKey: ['movie-trailer', { id }],
    queryFn: () => getTrailer(id),
    select: (results) => results.data.results.find((object) => object.type === 'Trailer'),
  });
};
