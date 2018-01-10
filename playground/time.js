/**
 * Created by peter on 2018/1/5.
 */
// var date = new Date();
// var months = ['Jan', 'Feb']
// console.log(date.getMonth());//0-11

var moment = require('moment');

var someTimestamp = moment().valueOf();
console.log(someTimestamp);
var date = moment();
console.log(date.format('YYYY/MM/DD'));
// date.add(100, 'year').subtract(1, 'months');
// console.log(date.format('MMM Do, YYYY '))