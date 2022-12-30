/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr      "Odama, you like it ! ✨"
*/

import Head from 'next/head';
import Header from '../../../components/Header.js';
import fsPromises from 'fs/promises';
import path from 'path';
import { useRouter } from 'next/router';
import $ from 'jquery';
import { useEffect } from 'react'; 
import Link from 'next/link.js';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'pages/movies/details/movies.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  return { props: objectData }
}

export default function MoviesPage(props) {
  const router = useRouter();
  const file_data = props.all_movies; 
  let show_humour_movies = [];

  useEffect(function() {
    $("#loader_page_finish").hide();
    setTimeout(function(){
      $("#loader_section").hide();
      $("#loader_page_finish").fadeIn(700);
    }, 1100);
  }, []);

  const RedirectToMoviesDetails = event => {
    var id_element = event.currentTarget.id;
    localStorage.setItem('item_id', id_element);
    router.push({pathname: '../movies/details'});
  };

  let humour_movies_id = 11;
  while (humour_movies_id < 18) {
    humour_movies_id++;
    show_humour_movies.push (
      <>
        <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[humour_movies_id].id}>
          <img src={file_data[humour_movies_id].poster} className='movie_poster' alt='movie-poster'/>  
          <div className='movies_infos_poster'>
            <div id='rates'><p>{file_data[humour_movies_id].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div>
            <span className='movies_tags'>{file_data[humour_movies_id].tags}</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Odama France - Genres 🔥</title>
        <meta name="description" content="Odama est la seule plateforme de streaming 100% cloud, sécurisée et open-source en France ! 🇫🇷"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="https://zupimages.net/up/22/28/k6tc.png"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>

      <Header/>
      <section id="loader_section">
        <img src='https://media3.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif'/>
      </section>

      <section className="content_page genres_page" id="loader_page_finish">
        <Link className='back_link' style={{textDecoration:"none", backgroundColor:"transparent", color:"inherit"}} href="/movies"><img className='back_icon' src='https://svgur.com/i/p5L.svg'/><p>Revenir à tout les films</p></Link><br/><br/>
        
        <h1>Genre - Comédie 😂</h1>
        <p>Est-ce qu'il y a vraiment mieux qu'un bon film de comédie ? Odama&copy; vous propose une sélection digne des plus grands fous rire du cinéma français. Et maintenant peut-être le plus dur : à vous de choisir !</p>
        <div className='movies_section'>
          <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[5].id}>
            <img src={file_data[5].poster} className='movie_poster' alt='movie-poster'/>  
            <div className='movies_infos_poster'>
              <div id='rates'><p>{file_data[5].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div>
              <span className='movies_tags'>{file_data[5].tags}</span>
            </div>
          </div>
          {show_humour_movies}
        </div><br/><br/><br/>

        <h1>Genre - Action 💪</h1>
        <p>Est-ce qu'il y a vraiment mieux qu'un bon film de comédie ? Odama&copy; vous propose une sélection digne des plus grands fous rire du cinéma français. Et maintenant peut-être le plus dur : à vous de choisir !</p>
        <div className='movies_section'>
          <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[1].id}>
            <img src={file_data[1].poster} className='movie_poster' alt='movie-poster'/>  
            <div className='movies_infos_poster'>
              <div id='rates'><p>{file_data[1].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div>
              <span className='movies_tags'>{file_data[1].tags}</span>
            </div>
          </div>

          <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[19].id}>
            <img src={file_data[19].poster} className='movie_poster' alt='movie-poster'/>  
            <div className='movies_infos_poster'>
              <div id='rates'><p>{file_data[19].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div>
              <span className='movies_tags'>{file_data[19].tags}</span>
            </div>
          </div>

          <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[20].id}>
            <img src={file_data[20].poster} className='movie_poster' alt='movie-poster'/>  
            <div className='movies_infos_poster'>
              <div id='rates'><p>{file_data[20].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div>
              <span className='movies_tags'>{file_data[20].tags}</span>
            </div>
          </div>

          <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[21].id}>
            <img src={file_data[21].poster} className='movie_poster' alt='movie-poster'/>  
            <div className='movies_infos_poster'>
              <div id='rates'><p>{file_data[21].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div>
              <span className='movies_tags'>{file_data[21].tags}</span>
            </div>
          </div>

          <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[22].id}>
            <img src={file_data[22].poster} className='movie_poster' alt='movie-poster'/>  
            <div className='movies_infos_poster'>
              <div id='rates'><p>{file_data[22].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div>
              <span className='movies_tags'>{file_data[22].tags}</span>
            </div>
          </div>

          <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[23].id}>
            <img src={file_data[23].poster} className='movie_poster' alt='movie-poster'/>  
            <div className='movies_infos_poster'>
              <div id='rates'><p>{file_data[23].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div>
              <span className='movies_tags'>{file_data[23].tags}</span>
            </div>
          </div>

          <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[24].id}>
            <img src={file_data[24].poster} className='movie_poster' alt='movie-poster'/>  
            <div className='movies_infos_poster'>
              <div id='rates'><p>{file_data[24].rate}</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/2048px-FA_star.svg.png" alt='star_icon'/></div>
              <span className='movies_tags'>{file_data[24].tags}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
