module.exports = function toReadable (number) {
    var ones = new Array('one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen');
    var tens = new Array('twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety');
    var hundred = 'hundred';
    if(number == 0){
        number = "zero";
    }else if(number < 20){
        number = ones[number - 1];
    }else{
        number = number.toString().split('');
      if(number.length === 2){
          if(number[1] === "0"){
          number = tens[Number(number[0]) - 2];
          }else{
              number[0] = tens[Number(number[0]) - 2];
              number[1] = ones[Number(number[1]) - 1];
              number = number.join(" ");
          }
        }
      if(number.length === 3){
          if(Number(number[1] + number[2]) < 20){
              if(Number(number.join("")) % 100 === 0){
                  number = ones[Number(number.join("")) / 100 - 1] + " " + hundred;
              }else{
                  number[0] = ones[Number(number[0]) - 1] + " " + hundred;
                  number = number[0] + " " + ones[Number(number[1] + number[2]) - 1];
              }
          }
          if(Number(number[1] + number[2]) >= 20){
              if(number[1] === "0" && number[2] === "0"){
                  number = ones[Number(number[0]) - 1] + " " + hundred;
              }
              if(Number(number[1] + number[2]) > 19 && number[2] === "0" ){
                  number[0] = ones[Number(number[0]) - 1] + " " + hundred;
                  number = number[0] + " " + tens[Number(number[1]) - 2];
              }
              else{
                  number[0] = ones[Number(number[0]) - 1] + " " + hundred;
                  number[1] = tens[Number(number[1]) - 2];
                  number[2] = ones[Number(number[2]) - 1];
                  number = number[0] + " " + number[1] + " " + number[2]; 
              }
          }
      }
    }
  return number;
}
