/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr - "Odama, you like it ! ✨"
*/

import Head from 'next/head';
import Header from '../../components/Header.js';
import fsPromises from 'fs/promises';
import path from 'path';
import { useRouter } from 'next/router';
import $ from 'jquery';
import { useEffect } from 'react'; 
import Link from 'next/link';
import Loader from '../../components/Loader.js';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'pages/movies/details/movies.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  return { props: objectData }
}

export default function MoviesPage(props) {
  const router = useRouter();
  const file_data = props.all_movies; 
  let show_all_movies = [];
  let show_box_office_movie = [];
  let show_odama_selection = [];

  const RedirectToMoviesDetails = event => {
    var id_element = event.currentTarget.id;
    localStorage.setItem('item_id', id_element);
    router.push({pathname: '/movies/details'});
  };

  /* 🎥 List all movies of DB file JSON 🎥 : */
  for (let i = 1; i < file_data.length; i++) {
    show_all_movies.push (
      <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[i].id}>
        <img src={file_data[i].poster} className='movie_poster' alt='movie-poster'/>  
        
        <div className='movies_infos_poster'>
          <div id='rates'><p>{file_data[i].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div>
          <span className='movies_tags'>{file_data[i].tags}</span>
        </div>
      </div>
    )
  }

  /* 🎫 Show already box office of the week static ID 🎫 : */
  show_box_office_movie.push (
    <>
      <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[62].id}>
        <img src={file_data[62].poster} className='movie_poster' alt='movie-poster'/>  
        <div className='movies_infos_poster'>
          <div id='rates'><p>{file_data[62].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div>
          <span className='movies_tags'>{file_data[62].tags}</span>
        </div>
      </div>

      <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[47].id}>
        <img src={file_data[47].poster} className='movie_poster' alt='movie-poster'/>  
        <div className='movies_infos_poster'>
          <div id='rates'><p>{file_data[47].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div>
          <span className='movies_tags'>{file_data[47].tags}</span>
        </div>
      </div>

      <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[48].id}>
        <img src={file_data[48].poster} className='movie_poster' alt='movie-poster'/>  
        <div className='movies_infos_poster'>
          <div id='rates'><p>{file_data[48].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div>
          <span className='movies_tags'>{file_data[48].tags}</span>
        </div>
      </div>

      <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[42].id}>
        <img src={file_data[42].poster} className='movie_poster' alt='movie-poster'/>
        <div className='movies_infos_poster'>
          <div id='rates'><p>{file_data[42].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div>
          <span className='movies_tags'>{file_data[42].tags}</span>
        </div>
      </div>

      <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[49].id}>
        <img src={file_data[49].poster} className='movie_poster' alt='movie-poster'/> 
        <div className='movies_infos_poster'>
          <div id='rates'><p>{file_data[49].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div>
          <span className='movies_tags'>{file_data[49].tags}</span>
        </div>
      </div>

      <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[44].id}>
        <img src={file_data[44].poster} className='movie_poster' alt='movie-poster'/> 
        <div className='movies_infos_poster'>
          <div id='rates'><p>{file_data[44].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div>
          <span className='movies_tags'>{file_data[44].tags}</span>
        </div>
      </div>

      <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[45].id}>
        <img src={file_data[45].poster} className='movie_poster' alt='movie-poster'/>  
        <div className='movies_infos_poster'>
          <div id='rates'><p>{file_data[45].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div> 
          <span className='movies_tags'>{file_data[45].tags}</span>
        </div>
      </div>

      <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[63].id}>
        <img src={file_data[63].poster} className='movie_poster' alt='movie-poster'/>  
        <div className='movies_infos_poster'>
          <div id='rates'><p>{file_data[63].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div> 
          <span className='movies_tags'>{file_data[63].tags}</span>
        </div>
      </div>
    </>
  )

  /* ✨ List of best movies on Odama's App : ✨ */
  show_odama_selection.push (
    <>
      <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[67].id}>
        <img src={file_data[67].poster} className='movie_poster' alt='movie-poster'/>  
        <div className='movies_infos_poster'>
          <div id='rates'><p>{file_data[67].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div> 
          <span className='movies_tags'>{file_data[67].tags}</span>
        </div>
      </div>

      <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[65].id}>
        <img src={file_data[65].poster} className='movie_poster' alt='movie-poster'/>  
        <div className='movies_infos_poster'>
          <div id='rates'><p>{file_data[65].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div> 
          <span className='movies_tags'>{file_data[65].tags}</span>
        </div>
      </div>

      <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[60].id}>
        <img src={file_data[60].poster} className='movie_poster' alt='movie-poster'/>  
        <div className='movies_infos_poster'>
          <div id='rates'><p>{file_data[60].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div> 
          <span className='movies_tags'>{file_data[60].tags}</span>
        </div>
      </div>

      <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[46].id}>
        <img src={file_data[46].poster} className='movie_poster' alt='movie-poster'/>  
        <div className='movies_infos_poster'>
          <div id='rates'><p>{file_data[46].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div>
          <span className='movies_tags'>{file_data[46].tags}</span>
        </div>
      </div>

      <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[41].id}>
        <img src={file_data[41].poster} className='movie_poster' alt='movie-poster'/>  
        <div className='movies_infos_poster'>
          <div id='rates'><p>{file_data[41].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div>
          <span className='movies_tags'>{file_data[41].tags}</span>
        </div>
      </div>

      <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[43].id}>
        <img src={file_data[43].poster} className='movie_poster' alt='movie-poster'/>  
        <div className='movies_infos_poster'>
          <div id='rates'><p>{file_data[43].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div>
          <span className='movies_tags'>{file_data[43].tags}</span>
        </div>
      </div>

      <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[6].id}>
        <img src={file_data[6].poster} className='movie_poster' alt='movie-poster'/>  
        <div className='movies_infos_poster'>
          <div id='rates'><p>{file_data[6].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div>
          <span className='movies_tags'>{file_data[6].tags}</span>
        </div>
      </div>

      <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[3].id}>
        <img src={file_data[3].poster} className='movie_poster' alt='movie-poster'/>  
        <div className='movies_infos_poster'>
          <div id='rates'><p>{file_data[3].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div>
          <span className='movies_tags'>{file_data[3].tags}</span>
        </div>
      </div>

      <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[8].id}>
        <img src={file_data[8].poster} className='movie_poster' alt='movie-poster'/>  
        <div className='movies_infos_poster'>
          <div id='rates'><p>{file_data[8].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div>
          <span className='movies_tags'>{file_data[8].tags}</span>
        </div>
      </div>

      <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[28].id}>
        <img src={file_data[28].poster} className='movie_poster' alt='movie-poster'/>  
        <div className='movies_infos_poster'>
          <div id='rates'><p>{file_data[28].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div>
          <span className='movies_tags'>{file_data[28].tags}</span>
        </div>
      </div>
    </>
  )

  /* ⌛ Launch Loading Function Screen : ⌛ */
  useEffect(function() {
    $("#loader_page_finish").hide();
    setTimeout(function(){
      $("#loader_screen").hide();
      $("#loader_page_finish").fadeIn(800);
    }, 3300);

    $(".left").click(function(){ $('#slider').animate( { scrollLeft: '-=500' }, 800); });
    $(".right").click(function(){ $('#slider').animate( { scrollLeft: '+=500' }, 800); });
  }, []);
  return (
    <>
      <Head>
        <title>Odama France - Films 🔥</title>
        <meta name="description" content="Odama est la seule plateforme de streaming 100% cloud, sécurisée et open-source en France ! 🇫🇷"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="https://zupimages.net/up/22/28/k6tc.png"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
      </Head>
      <Loader/>

      <div id="loader_page_finish">
      <Header/>
        <section className="content_page">
          <br/><Link className='link_to_genres' style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/movies/genres">Voir les films triés par genres... 📚</Link>
          <br/><br/><br/><br/>

          <h1 id="ind_text">Box office de la semaine 🎁 : </h1>  
          <p id="ind_description">Retrouvez ici tout les meilleurs films et émissions de la semaine afin de ne laisser passer aucun programme qui vaut la peine d'être vu !</p>
          <div className='movies_section'>
            {show_box_office_movie}
          </div><br/><br/><br/>

          <h1 id="ind_text">La sélection Odama&copy; ✨ : </h1>  
          <p id="ind_description">Vous ne savez pas quoi regarder ? Choissisez notre sélection : elle est faites pour tout les goûts, tout âges et plaira à tout le monde.</p>
          <div className='movies_section'>
            {show_odama_selection}
          </div><br/><br/><br/>

          <h1 id="ind_text">Tout les films disponibles 🎥 : </h1>  
          <p id="ind_description">Retrouvez ici tout les films de la plateforme dans un long slider interminable...</p>
          <div className='movies_section' id='slider'>
            <div className='scrolling_button left'><img src='https://static-00.iconduck.com/assets.00/chevronleft-icon-303x512-jl07qugm.png'/></div>
            {show_all_movies}
            <div className='scrolling_button right'><img src='https://static-00.iconduck.com/assets.00/chevronleft-icon-303x512-jl07qugm.png'/></div>
          </div>

          <div id='movies_section_space'></div>
        </section>
      </div>
    </>
  )
}
