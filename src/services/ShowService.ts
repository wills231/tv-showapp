import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.tvmaze.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {

  // Retrieve all shows
  getShows() {
    return apiClient.get('/shows')
  },

  // Retrieve primary show information with additional embedding: seasons, episodes, cast
  getShow(id: string) {
    return apiClient.get(`/shows/${id}?embed[]=seasons&embed[]=episodes&embed[]=cast&embed[]=crew`)
  },

  // Retrieve a show based on a searchQuery
  getSearchResult(searchQuery: string) {
    return apiClient.get(`/search/shows?q=${searchQuery}`)
  },
}
