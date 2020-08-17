import $ from 'jquery';

$(function() {
  $('body').css('background', '#CCC');
  alert('a');
  console.log('env', process.env.NODE_ENV);
  
})