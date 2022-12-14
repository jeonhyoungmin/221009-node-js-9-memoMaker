const fs = require('fs');

const memoData = "Always go with your passions. Never ask yourself if it's realistic or not.";

function memoMaker(directoryName, fileName, data) {
  let combinePath = "./" + directoryName + fileName;
  console.time('메모장 파일 만들기');
  fs.writeFile(`${combinePath}.text`, data, 'utf-8', (error) => {
    if(error === true) {
      console.error('this is error');
    }
  });
  console.timeEnd('메모장 파일 만들기');
  // 구분선 -----------------------------------

  console.time('JSON 파일 만들기');
  fs.writeFile(`${combinePath}.json`, JSON.stringify(data), 'utf-8', (error) => {
    if(error === true) {
      console.error('this is error');
    }
  });
  console.timeEnd('JSON 파일 만들기');
}

memoMaker("test", "example-file", memoData);

// first test ---------
// 메모장 파일 만들기: 1.772ms
// JSON 파일 만들기: 0.147ms
// second test --------
// 메모장 파일 만들기: 1.477ms
// JSON 파일 만들기: 0.163ms
// third test ---------
// 메모장 파일 만들기: 1.323ms
// JSON 파일 만들기: 0.104ms