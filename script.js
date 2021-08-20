// https://free.currconv.com/api/v7/currencies?apiKey=c18676c72ff0fe4557d1
// https://api.frankfurter.app/currencies

var select = document.querySelectorAll('.currency');
var btn = document.getElementById('btn');
var ans = document.getElementById('ans');
var num = document.getElementById('num');

fetch('https://free.currconv.com/api/v7/currencies?apiKey=c18676c72ff0fe4557d1')
.then((data) => data.json())
.then((data) => {
    display(data);
    // console.log(data);
});

function display(data) {
    var entries = Object.entries(data);
    for (let i = 0; i < entries.length; i++) {
        select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
        select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
        
    }
}

btn.addEventListener("click", () => {
    var fromCurrency = select[0].value;
    var toCurrency = select[1].value;

    var amount = num.value;

    if (fromCurrency != currency2) {
        convert(fromCurrency, toCurrency, amount);
    }else{
        alert('Choose Diffrent Currency');
    }
});

// function convert(currency1, currency2, value) {
//     var host = 'free.currconv.com/api/v7/currencies?apiKey=c18676c72ff0fe4557d1';
//     fetch(`https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`)
//     .then((val) => val.json())
//     .then((val) => {
//         console.log(Object.values(val.rates))
//         ans.value = Object.values(val.rates)[0]
//     })
// }


var https = 'https';

function convert(amount, fromCurrency, toCurrency, cb) {
  var apiKey = 'c18676c72ff0fe4557d1';

  fromCurrency = encodeURIComponent(fromCurrency);
  toCurrency = encodeURIComponent(toCurrency);
  var query = fromCurrency + '_' + toCurrency;

  var url = 'free.currconv.com/api/v7/currencies/convert?q='
            + query + '&compact=ultra&apiKey=' + apiKey;

  https.get(url, function(res){
      var body = '';

      res.on('data', function(chunk){
          body += chunk;
      });

      res.on('end', function(){
          try {
            var jsonObj = JSON.parse(body);

            var val = jsonObj[query];
            if (val) {
              var total = val * amount;
              cb(null, Math.round(total * 100) / 100);
            } else {
              var err = new Error("Value not found for " + query); 
              console.log(err);
              cb(err);
            }
          } catch(e) {
            console.log("Parse error: ", e);
            cb(e);
          }
      });
  }).on('error', function(e){
        console.log("Got an error: ", e);
        cb(e);
  });
}
