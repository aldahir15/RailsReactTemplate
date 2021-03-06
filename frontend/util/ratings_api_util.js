export const createRating = (rating) => {
  return $.ajax({
    method: 'POST',
    url: `/api/ratings/`,
    data: {rating}
  });
};


export const updateRating = (id, rating) => {
  return $.ajax({
    method: 'PUT',
    url: `/api/ratings/${id}`,
    data: {rating}
  });
};
