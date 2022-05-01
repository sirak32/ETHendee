import axios from "axios";
const url ='http//:localhost:5000/tenders'
export const fetchPosts=()=>axios.get(url)
