// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
console.log('name：' + name.toUpperCase());


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var attr = sentence.split(" ");
for (let i = 0; i < attr.length; i++) {
    attr[i] = attr[i][0].toUpperCase() + attr[i].substring(1);
}
sentence = attr.join(" ");
console.log('sentence：'+ sentence);

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
money = money.match(/\d+/g);
console.log('money：'+money);