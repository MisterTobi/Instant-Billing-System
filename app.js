var request= require('request');

var headers = { 'X-Api-Key': '277127d8ec20599d6a8f1cfacf58062d', 'X-Auth-Token': 'd08774b35295b24b46f1e99b81d68b52'}
var payload = {
  purpose: 'FIFA 16',
  amount: '2500',
  phone: '8655384740',
  buyer_name: 'John Doe',
  redirect_url: 'http://www.example.com/redirect/',
  send_email: true,
  webhook: 'http://www.example.com/webhook/',
  send_sms: true,
  email: 'foo@example.com',
  allow_repeated_payments: false}

request.post('https://www.instamojo.com/api/1.1/payment-requests/', {form: payload,  headers: headers}, function(error, response, body){
  if(!error && response.statusCode == 201){
    console.log(body);
  }
})

// var submit = function(){
//   document.getElementById('')
// }