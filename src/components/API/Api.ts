import axios from "axios";

export async function fetchArticles () {
  const response = await axios.get('https://api.spaceflightnewsapi.net/v3/articles');
  return response.data
}