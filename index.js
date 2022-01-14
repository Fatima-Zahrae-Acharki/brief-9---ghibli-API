

// fetch("https://ghibliapi.herokuapp.com/films")
//     .then(response => response.json())
//     .then(data => console.log(data))

// fetch("https://ghibliapi.herokuapp.com/films")
// 	// "method": "GET",
// 	// "headers": {}

// .then(function (response)  {
//     return response.json()
// 	console.log(response);
// })


// .catch(err => {
// 	console.error(err);
// });


async function GetData(){
    const response = await fetch("https://ghibliapi.herokuapp.com/films")
    const films = await response.json(); // array 21 elements
    console.log(films);
    films.map(film => {
        // var desc = film.description
        document.querySelector('#movies').innerHTML +=
        `       
                <div class ="col-3" id="cont">
                    <div class="poster"><img id="gh" src = ${film.image}> </div>
                    <h2>${film.title}</h2> 
                    <h5> <b>release_date: </b>${film.release_date}</h5>
                    <div class="desc"> <p> <b> description: </b> ${film.description}</p></div>
                    
                </div>`
                
        // document.getElementById('movies').innerHTML += film.title +" <br>";
        // document.getElementById('movies').innerHTML += film.description +"<br>";
    });
    // movieBanner.src = data[0]["movies"];
    //document.getElementsByClassName('movies')[0].innerHTML = data[0].title;
}


GetData();
 





var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 5 seconds
}