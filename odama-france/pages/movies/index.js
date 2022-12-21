/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr      "Odama, you like it ! ✨"
*/

import Head from 'next/head';
import LeftNavBar from '../../components/LeftNavBar.js';
import fsPromises from 'fs/promises';
import path from 'path'
import { useRouter } from 'next/router'

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'pages/movies/premiere_movies.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}

export default function MoviesPage(props) {
  const router = useRouter();
  const file_data = props.premiere_movies;
  var i;
  let show_premiere_movies_data = [];

  const RedirectToMoviesDetails = event => {
    var id_element = event.currentTarget.id;
    router.push({pathname: '/movies/details', query: id_element});
  };

  for (let i = 0; i < file_data.length; i++){
    show_premiere_movies_data.push(
      <div onClick={RedirectToMoviesDetails} className='movies_item' id={file_data[i].id}>
        <p>{file_data[i].title}</p>
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

      <LeftNavBar/>
      <section className="content_page">        
        <div className='movies_section'>
          {show_premiere_movies_data}
        </div>
      </section>
    </>
  )
}
