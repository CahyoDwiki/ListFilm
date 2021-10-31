$.ajax({
   
    url: "http://www.omdbapi.com/?apikey=3ef6bfe9&s=Star Wars",
    success: function (response) {
        //iterasi Card
        const film = response.Search;//Callback Function
        console.log(response)
        let card = '';
        film.forEach(f=>{
            card+=` <div class="col-lg-4 my-3 h-60">
            <div class="card border-primary mb-3" >
                <img src = "${f.Poster}" class="card-img-top" >
                <div class="card-body">
                  <h5 class="card-title">${f.Title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${f.Year}</h6>
                  <a href="#" class="btn btn-danger detail-button" data-toggle="modal" data-target="#FilmModal" data-imdbid ="${f.imdbID}" >Detail</a>
                </div>
              </div>
        </div>`;
        });
        $('.list-film').html(card);



        //Button Detail
        $('.detail-button').on('click',function () {
            $.ajax({
                url: "http://www.omdbapi.com/?apikey=3ef6bfe9&i=" + $(this).data('imdbid'),
                success: f=> {
                    const filmDetail =` <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-3">
                            <img src="${f.Poster}" class="img-fluid">
                        </div>
                        <div class="col-md">
                          <ul class="list-group">
                              <li class="list-group-item"><h3><strong>Title : </strong>${f.Title}</h4></li>
                              <li class="list-group-item"><strong>Director : </strong> ${f.Director} </li>
                              <li class="list-group-item"><strong> Actors: </strong>${f.Actors}</li>
                              <li class="list-group-item"><strong>Writer : </strong>${f.Writer}</li>
                              <li class="list-group-item"><strong>Genre : </strong>${f.Genre}</li>
                              <li class="list-group-item"><strong>Awards : </strong>${f.Awards}</li>
                            </ul>
                        </div>
                    </div>
                </div>`;
                $('.modal-body').html(filmDetail);
                },
                error:(e)=>{
                    console.log("imdbID Tidak Ditemukan")
                }
            });
            
        })
      
    },
    error:(e)=>{
        console.log(e.responseText);
    },
   

});

