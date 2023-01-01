/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr      "Odama, you like it ! ✨"
*/

import Head from 'next/head';
export default function not_found() {
    return <>
      <Head>
        <title>Odama France - Erreur 404 ⛔</title>
        <meta name="description" content="Odama est la seule plateforme de streaming 100% cloud, sécurisée et open-source en France ! 🇫🇷"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="https://zupimages.net/up/22/28/k6tc.png"/>
      </Head>

      <div className='error_page_container'>
        <img src='https://zupimages.net/up/22/28/k6tc.png' alt='odama_logo'/>
        <h1>Oops !</h1>
        <p>Cette page n'est pas disponible ou est tout simplement en cours de développement. Repassez plus tard ou cliquez sur le bouton ci-dessous pour revenir à l'accueil :</p>
        <a href='/'><button>Revenir en lieu sûr</button></a>
      </div>
    </>
  }