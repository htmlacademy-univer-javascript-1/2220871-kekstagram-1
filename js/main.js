
function getRandom (min, max) {
  if(min >= 0 && max <= min){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  else{
    return false;
  }
}
getRandom(0, 1000);


function stringType (userString, maxLen){
  if(userString.length > maxLen){
    return false;
  }
  else{
    return true;
  }
}
stringType('Дичь!', 1000);
