import axios from "axios";
export default axios.create({
  baseURL: "https://8aff0882c56b.sn.mynetname.net:5002/",
  headers: {'X-Custom-Header': 'foobar'},
  responseType: "json"
});