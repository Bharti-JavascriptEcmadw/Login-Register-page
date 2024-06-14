// function getData(){
// 	const bharti=search.value;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'ef960a3673mshd2380ad66cacb42p1a6765jsne801b1963925',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };
    
// 	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+bharti, options)
// 	.then(response=> response.json())
// 	.then(res=>{ 
// 		console.log(res);
// 		temp.innerHTML = res.temp;
// 		th.innerHTML = res.wind_speed;
// 	    h.innerHTML = res.humidity
// 		;


// 		})
// 	.catch(err=>console.error(err));
// }

function getData(){
	const dwivedi =search.value;
	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+dwivedi
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ef960a3673mshd2380ad66cacb42p1a6765jsne801b1963925',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

async function efd(){
	try {
	const response = await fetch(url, options);
	console.log(response);
	const result = await response.json();
	console.log(result);
	temp.innerHTML = result.temp;
	console.log(result.temp)
			th.innerHTML = result.wind_speed;
		    h.innerHTML = result.humidity
			;
	
	
     } 
 catch (error) {
	console.error(error);
			
	
  }

}  efd();
}
// getData();