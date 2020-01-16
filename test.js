function gugudan(start, end) {
  for (let i = start; i <= end; i++) {
    //console.log(i + '단');
    console.log(`${i}단`);

    for (let j = 1; j < 10; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log(``);
  }
}
gugudan(3, 6);
