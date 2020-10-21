class Utilities {
  public randomNumber() {
    const min = 1,
      max = 9999;

    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  public splitDollar(str) {
    const dollarValue = str.split("$")
    const value = dollarValue[1].trim()
    return value
  }
}

export default Utilities
