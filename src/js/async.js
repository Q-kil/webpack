// import axios from 'axios';
import $ from 'jquery';

export async function sum(a, b) {
  // return await axios.get(`http://localhost:8081?a=${a}&b=${b}`);
  let res = await $.ajax({
    url: 'http://localhost:8081',
    data: {a, b},
    method: 'get',
    dataType: 'json'
  });

  return res;
}