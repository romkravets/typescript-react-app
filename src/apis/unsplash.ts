import axios from 'axios';
import configs from '../configs';

export default axios.create({
  baseURL: configs.baseUrl,
  headers: {
    'Authorization': `Client-ID ${configs.clientId}`
  }
})