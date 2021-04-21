var profileDataArgs = process.argv.slice(2, process.argv.length);

// Notice the lack of parentheses around the `profileDataArr` parameter?
const printProfileData = (profileDataArr) => {
  for (let i = 0; i < profileDataArr.length; i++) {
    console.log(profileDataArr[i]);
  }
  profileDataArr.forEach((element) => {
    console.log(element);
  });
};

const addNums = (numOne, numTwo) => numOne + numTwo;

const sum = addNums(5, 3); // sum would be 8

printProfileData(profileDataArgs);
