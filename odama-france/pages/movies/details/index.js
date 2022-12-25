/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr      "Odama, you like it ! ✨"
*/

import { useRouter } from 'next/router';
import Head from 'next/head';

export default function DetailsMoviesPage() {
  const router = useRouter();
  console.log(router.query.id); 
  /* https://63a8857cf4962215b5840adb.mockapi.io/premiere_movies */

  return (
    <>
      <Head>
        <title>Odama France - Movies Details 🔥</title>
        <meta name="description" content="Odama est la seule plateforme de streaming 100% cloud, sécurisée et open-source en France ! 🇫🇷"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="https://zupimages.net/up/22/28/k6tc.png"/>
      </Head>

      <section className='movies_details_section'>        
        <p>movies details</p>
      </section>
    </>
  )
}
