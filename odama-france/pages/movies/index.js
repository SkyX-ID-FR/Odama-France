/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr      "Odama, you like it ! ✨"
*/

import Head from 'next/head';
import Header from '../../components/Header.js';
import fsPromises from 'fs/promises';
import path from 'path'
import { useRouter } from 'next/router'

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
  
  const RedirectToMoviesDetails = event => {
    var id_element = event.currentTarget.id;
    localStorage.setItem('item_id', id_element);
    router.push({pathname: '/movies/details'});
  };

  /* 🎫 Show already box office of the week static ID 🎫 : */
  show_box_office_movie.push (
    <>
      <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[2].id}>
        <img src={file_data[2].poster} className='movie_poster' alt='movie-poster'/>  
        <div className='movies_infos_poster'>
          <div id="love_icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></div>
          <span className='movies_tags'>{file_data[2].tags}</span>
        </div>
      </div>

      <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[3].id}>
        <img src={file_data[3].poster} className='movie_poster' alt='movie-poster'/>
        <div className='movies_infos_poster'>
          <div id="love_icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></div>
          <span className='movies_tags'>{file_data[3].tags}</span>
        </div>
      </div>

      <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[4].id}>
        <img src={file_data[4].poster} className='movie_poster' alt='movie-poster'/> 
        <div className='movies_infos_poster'>
          <div id="love_icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></div>
          <span className='movies_tags'>{file_data[4].tags}</span>
        </div>
      </div>

      <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[5].id}>
        <img src={file_data[5].poster} className='movie_poster' alt='movie-poster'/>  
        <div className='movies_infos_poster'>
          <div id="love_icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></div>
          <span className='movies_tags'>{file_data[5].tags}</span>
        </div>
      </div>

      <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[6].id}>
        <img src={file_data[6].poster} className='movie_poster' alt='movie-poster'/>  
        <div className='movies_infos_poster'>
          <div id="love_icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></div>
          <span className='movies_tags'>{file_data[6].tags}</span>
        </div>
      </div>
    </>
  )

  /* 🎥 List all movies of DB file JSON 🎥 : */
  for (let i = 1; i < file_data.length; i++) {
    show_all_movies.push (
      <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[i].id}>
        <img src={file_data[i].poster} className='movie_poster' alt='movie-poster'/>  
        
        <div className='movies_infos_poster'>
          <div id="love_icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></div>
          <span className='movies_tags'>{file_data[i].tags}</span>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Odama France - Film 🔥</title>
        <meta name="description" content="Odama est la seule plateforme de streaming 100% cloud, sécurisée et open-source en France ! 🇫🇷"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="https://zupimages.net/up/22/28/k6tc.png"/>
      </Head>

      <Header/>
      <section className="content_page">
        <h1 id="ind_text">Box office de la semaine (en cours de dev) 🎁 : </h1>  
        <div className='movies_section'>
          {show_box_office_movie}
        </div><br/><br/>

        <h1 id="ind_text">Tout les films de la plateforme (en cours de dev) 👋 : </h1>  
        <div className='movies_section'>
          {show_all_movies}
        </div>
      </section>
    </>
  )
}
