const today = dayjs();

const deliveryDate = today.add(7, 'days');
console.log(deliveryDate.format('dddd, MMMM D'));