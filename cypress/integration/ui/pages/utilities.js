class Utilities {
  randomNumber() {
    const min = 1,
      max = 9999;

    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  randomNumber_phoneNumber() {
    var text = '777777'
    return text+=Math.floor(Math.random() * 10000);
  }

  randomString(){
    var text=''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for( var i=0;i<6;i++){
      text+=possible.charAt(Math.floor(Math.random() *possible.length))
    }
    return text;
  }

  splitDollar(str) {
    const dollarValue = str.split("$")
    const value = dollarValue[1].trim()
    return value
  }
}

export default Utilities
