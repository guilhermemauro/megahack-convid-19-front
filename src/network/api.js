import axios from 'axios';

const baseDomain = 'https://megahack-covid-19.herokuapp.com';

export default axios.create({
  baseURL: baseDomain,
  headers: { 'Content-Type': 'application/json' },
});
