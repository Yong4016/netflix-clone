import { useQuery } from '@tanstack/react-query';
import { instance } from '../utils/api';

const getReviews = (id) => {
  return instance.get(`/movie/${id}/reviews`);
};

export const useReview = (id) => {
  return useQuery({
    queryKey: ['movie-reviews', { id }],
    queryFn: () => getReviews(id),
    select: (results) => results.data,
  });
};
