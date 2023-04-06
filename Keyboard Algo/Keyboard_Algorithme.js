function entryTime(s, keypad) {
  const keyCoords = new Map();
  for (let i = 0; i < keypad.length; ++i) {
    const key = keypad[i];
    const row = Math.floor(i / 3);
    const col = i % 3;
    keyCoords.set(key, [row, col]);
  }

  let time = 0;
  let totalTime = 0;
  let presentKey = s[0];
  let presentCoords = keyCoords.get(presentKey);
  //   console.log("presentKey " + presentKey);
  //   console.log("presentCoords " + presentCoords);

  for (let i = 1; i < s.length; ++i) {
    const nextKey = s[i];
    // console.log("nextKey " + nextKey);
    const nextCoords = keyCoords.get(nextKey);
    // console.log("nextCoords " + nextCoords);

    const rowDistance = Math.abs(presentCoords[0] - nextCoords[0]);
    const colDistance = Math.abs(presentCoords[1] - nextCoords[1]);
    // console.log("rowDistance " + rowDistance);
    // console.log("colDistance " + colDistance);

    if (rowDistance < 2 && colDistance < 2) {
      time = 1;
    } else {
      time = 2;
    }
    // console.log("time " + time);
    totalTime += time;

    presentKey = nextKey;
    presentCoords = nextCoords;
  }

  return totalTime;
}

console.log(entryTime("423692", "923857614"));
