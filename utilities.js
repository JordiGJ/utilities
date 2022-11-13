//
// function to randomize elements inside an array
//
function randomizeArr(arr) {
  const randomizedArr = [];
  if (arr.length > 2) {
    for (let i = 0; i <= arr.length; i++) {
      const index = Math.floor(Math.random() * arr.length);
      const iToPush = arr.splice(index, 1);
      randomizedArr.push(iToPush);
    }
    randomizedArr.push(arr[0]);
    return randomizedArr.flat();
  } else {
    for (let i = 0; i <= arr.length; i++) {
      const index = Math.floor(Math.random() * arr.length);
      const iToPush = arr.splice(index, 1);
      randomizedArr.push(iToPush);
    }
    return randomizedArr.flat();
  }
}

//
// Function to apply different regex to a string
//
function reggexer(str) {
  const quotationRegex = /&quot;/gm;
  const quotationRegex2 = /&#039;/gm;
  const quotationRegex3 = /&eacute;/gm;
  const quotationRegex4 = /&amp;/gm;
  const quotationRegex5 = /&rsquo;/gm;
  const quotationRegex6 = /&#039;/gm; // "'"
  const quotationRegex7 = /&atilde;/gm; // "ã"
  const quotationRegex8 = /&ntilde;/gm; // "ñ"
  const quotationRegex9 = /&uuml;/gm; // "ü"
  const quotationRegex10 = /&Uuml;/gm; // "Ü"
  const quotationRegex11 = /&ldquo;/gm; // "“"
  const quotationRegex12 = /&rdquo;/gm; // "”"
  return str
    .replace(quotationRegex, '"')
    .replace(quotationRegex2, "'")
    .replace(quotationRegex3, "é")
    .replace(quotationRegex4, "&")
    .replace(quotationRegex5, "'")
    .replace(quotationRegex6, "'")
    .replace(quotationRegex7, "ã")
    .replace(quotationRegex8, "ñ")
    .replace(quotationRegex9, "ü")
    .replace(quotationRegex10, "Ü")
    .replace(quotationRegex11, "“")
    .replace(quotationRegex12, "”");
}

///
// sort elements in an array in ascencing order
//
const arr = [3, 5, 1, 4, 2];
const sorted = arr.sort(function (a, b) {
  return a - b;
});

/////////
// sort elements in an array in descending order
////////
const arr2 = [3, 5, 1, 4, 2];
const sorted2 = arr2.sort(function (a, b) {
  return b - a;
});

/////////////////////////////////////
// ROUNDING TIME UP & DOWN 5' WITHOUT PARAMETERS//
/////////////////////////////////////

// round up 5 minutes the current time
function roundToNearest5Up(date = new Date()) {
  const minutes = 5;
  const ms = 1000 * 60 * minutes;
  return new Date(Math.ceil(date.getTime() / ms) * ms);
}

// round down 5 minutes the current time
function roundToNearest5Down(date = new Date()) {
  const minutes = 5;
  const ms = 1000 * 60 * minutes;
  return new Date(Math.floor(date.getTime() / ms) * ms);
}
const down5result = document.createElement("p");
down5result.innerHTML = `<b>Returns:</b> ${roundToNearest5Down()}`;
container.appendChild(down5result);

////////////////////////////////////////////////////
// ROUND TIME TO NEAREST 5 MINUTES WITH PARAMETERS//
////////////////////////////////////////////////////

//
// round up 5 minutes
//
function roundToNearest5UpWithParameters(
  year,
  month,
  day,
  hours,
  minutes,
  seconds
) {
  const amountOfMinutes = 5;
  const ms = 1000 * 60 * amountOfMinutes;
  return new Date(
    Math.ceil(new Date(year, month, day, hours, minutes, seconds) / ms) * ms
  );
}

//
// round down 5 minutes
//
function roundToNearest5DownWithParameters(
  year,
  month,
  day,
  hours,
  minutes,
  seconds
) {
  const amountOfMinutes = 5;
  const ms = 1000 * 60 * amountOfMinutes;
  return new Date(
    Math.floor(new Date(year, month, day, hours, minutes, seconds) / ms) * ms
  );
}

////////////////////////////////////////////////////
// ROUND TIME TO NEAREST ANY MINUTES WITH PARAMETERS//
////////////////////////////////////////////////////

//
// round up 5 minutes
//
function roundToNearest5UpWithParameters(
  year,
  month,
  day,
  hours,
  minutes,
  seconds,
  amountOfMinutes
) {
  const ms = 1000 * 60 * amountOfMinutes;
  return new Date(
    Math.ceil(new Date(year, month, day, hours, minutes, seconds) / ms) * ms
  );
}

//
// round down 5 minutes
//
function roundToNearest5DownWithParameters(
  year,
  month,
  day,
  hours,
  minutes,
  seconds,
  amountOfMinutes
) {
  const ms = 1000 * 60 * amountOfMinutes;
  return new Date(
    Math.floor(new Date(year, month, day, hours, minutes, seconds) / ms) * ms
  );
}

////////////////////////////////////////////////////////
// MAKE ANY POSITIVE INTEGER HAVE AT LEAST TWO DIGITS //
////////////////////////////////////////////////////////

function atLeastTwoDigits(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}
