const API_Key = process.env.REACT_APP_API_Key

const fetchTrending = `/trending/all/week?api_key=${API_Key}&language=en=US`
const fetchTopRated = `/movie/top_rated?api_key=${API_Key}&language=en=US`
const fetchAction = `/discover/movie?api_key=${API_Key}&with_genres=28`
const fetchComedy = `/discover/movie?api_key=${API_Key}&with_genres=35`
const fetchHorror = `/discover/movie?api_key=${API_Key}&with_genres=27`
const fetchRomantic = `/discover/movie?api_key=${API_Key}&with_genres=10749`
const fetchMystery = `/discover/movie?api_key=${API_Key}&with_genres=9648`
const fetchSciFi = `/discover/movie?api_key=${API_Key}&with_genres=878`
const fetchWestern = `/discover/movie?api_key=${API_Key}&with_genres=37`
const fetchAnimation = `/discover/movie?api_key=${API_Key}&with_genres=16`
const fetchTV = `/discover/movie?api_key=${API_Key}&with_genres=10770`

export default {
    fetchTrending,
    fetchTopRated,
    fetchAction,
    fetchComedy,
    fetchHorror,
    fetchRomantic,
    fetchMystery,
    fetchSciFi,
    fetchWestern,
    fetchAnimation,
    fetchTV,
}