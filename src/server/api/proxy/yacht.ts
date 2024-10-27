import { defineEventHandler, setResponseHeader } from 'h3';
import axios from 'axios';

export default defineEventHandler(async (event) => {
  setResponseHeader(event, 'Access-Control-Allow-Origin', '*');
  
  try {
    const response = await axios.get('https://royaloceanyachts.com/api/yachts?buy=true&page=1');
    return response.data;
  } catch (error) {
    return { error: 'Error' };
  }
});