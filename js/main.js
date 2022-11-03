//https://www.codewars.com/kata/54ba84be607a92aa900000f1

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

function isIsogram (str) {
    str = str.toLowerCase();
    for (i = 0; i < str.length; i++){
        for (m = i + 1; m < str.length; m++){
            if (str[i] == str[m]){
                return false
            }
        }
    }
    return true
}
isogram ("olodo") //false


function isIsogram(str){
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i)
      for(j = i + 1; j < str.length; ++j)
        if(str[i] === str[j])
          return false;
    return true;
  }
  isIsogram('olodo') //false
  isIsogram("cake")  //true