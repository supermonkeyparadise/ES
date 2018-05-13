// function game() {
//   const score = Math.random() * 10;
//   console.log(score >= 5);
// }

// game();

/**
 *  [ IIFE ]
 *   1. Just for call once
 *   2. 建立一個 new scope，所以變數不會衝突
 *   3. [ Data Privacy ]
 */
(function(goodLuck) {
  const score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(3);

console.log('## score:', score);
