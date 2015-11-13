var wpm;
var readTime = {
  configWPM:function(input){
    wpm = input;
  },
  getWPM:function(){
    return wpm;
  },
  convertToArray:function(html){
    var newArray = [];
    for (var i = 0; i < html.length; i++) {
      newArray.push(html[i].innerHTML);
    }
    return newArray;

  },
  getTextFromNodes:function(array){
    return array.join('');
  },
  removePunctuation:function(string){
    var newString = string.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()?]/g,"");
    return newString;
  },
  countWords:function(string) {
      var array = [];
      var newString= readTime.removePunctuation(string);
      array = newString.split(' ');
      return array.length;
  },
  calcWPM:function(num){
    var anotherNumber = num/wpm;
    var minutes = Math.round(anotherNumber);
    var respuesta = ''+ minutes + " minute read";
    return respuesta;
  }
};
