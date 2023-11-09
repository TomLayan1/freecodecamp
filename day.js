import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
const today = dayjs();
const deliveryDate = today.add(7, 'days');
console.log(deliveryDate.format('dddd, MMMM D'));