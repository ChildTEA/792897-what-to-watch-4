const convertBackToFront = (movie) => {
  return ({
    id: movie.id,
    name: movie.name,
    posterImage: movie.poster_image,
    previewImage: movie.preview_image,
    backgroundImage: movie.background_image,
    backgroundColor: movie.background_color,
    description: movie.description,
    rating: movie.rating,
    scoresCount: movie.scores_count,
    director: movie.director,
    starring: movie.starring,
    runTime: movie.run_time,
    genre: movie.genre,
    released: movie.released,
    isFavorite: movie.is_favorite,
    videoSrc: movie.video_link,
    videoPreviewSrc: movie.preview_video_link,
  });
};


export default convertBackToFront;
