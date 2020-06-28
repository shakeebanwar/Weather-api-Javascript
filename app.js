var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){

    fetch('api.openweathermap.org/data/2.5/weather?q={inputValue.value}&appid={8d992082f76fa219b9eb3e64cf6e000d}')
.then(response=>response.json())
.then(data=>{

    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];

    name.innerHtml = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;
})

.catch (err=> alert("wrong city name"))

})



