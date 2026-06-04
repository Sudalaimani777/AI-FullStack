export const options = {
    method:"GET",
    headers:{
        accept : "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjdiYzFhMjhhZDc3NjExMzA3NTRhNWVmYmQzZjVmNSIsIm5iZiI6MTc3OTE4OTMwOS4zNjcsInN1YiI6IjZhMGM0NjNkYmFlM2ZhYTU5YmMyN2E3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SpA4_LxymwpNym9jU5mHgnF56FJ6l7sF2R9XlD2uB-A`
    }
}

// curl --request GET \
//      --url 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1' \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjdiYzFhMjhhZDc3NjExMzA3NTRhNWVmYmQzZjVmNSIsIm5iZiI6MTc3OTE4OTMwOS4zNjcsInN1YiI6IjZhMGM0NjNkYmFlM2ZhYTU5YmMyN2E3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SpA4_LxymwpNym9jU5mHgnF56FJ6l7sF2R9XlD2uB-A' \
//      --header 'accept: application/json'