function palindrome(str) {
  const no_alnum = /[\W_]/gi;
  str = str.replace(no_alnum, "").toLowerCase();

  if (str.length % 2 == 0) 
  {
    const last_char = (str.length / 2) - 1;
    const first_char = str.length / 2;

    if ( str.substr(0, last_char + 1) == str.substr(first_char).split("").reverse().join("") ) 
    {
      return true;
    }
    else 
    {
      return false;
    }
  }
  else 
  {
    let mid = (str.length - 1) / 2;

    if ( str.substr(0, mid) == str.substr(mid+1).split("").reverse().join("") ) 
    {
      return true;
    }
    else 
    {
      return false;
    }
  }

}