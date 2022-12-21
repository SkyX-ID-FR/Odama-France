/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr      "Odama, you like it ! ✨"
*/

import Head from 'next/head';
import LeftNavBar from '../components/LeftNavBar';

export default function Home() {
  if (process.browser) {
    console.clear();
    console.info("Odama© webapp starting on " + document.location + " ! ✨");    
  }

  return (
    <>
      <Head>
        <title>Odama France 🔥</title>
        <meta name="description" content="Odama est la seule plateforme de streaming 100% cloud, sécurisée et open-source en France ! 🇫🇷"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="https://zupimages.net/up/22/28/k6tc.png"/>
      </Head>

      <LeftNavBar/>

      <main className='content_page' id="content_page">
        <div className='hero_section'>
          <h1>Odama is back ! 🎉</h1>
          <p>
            Cette fois Odama est de retour avec du lourd : une nouvelle base de donnée mise à jour avec les tous derniers films, séries, 
            documentaires et émissions officiellement extrait des serveurs correspondant. Une version bourrée de nouvelles fonctionnalités, 
            elle va vous faire de l'oeil.<br/><br/>

            Cette fois basé sur les appréciations des 15 000 utilisateurs de la version précédente, elle s'appuie sur une interface doté d'un tout nouveau design,
            les préférences de l'utilisateur seront enregistrée et analysée pour une meilleure expérience. Un système de commentaires et de likes sera également mis 
            en place pour référencer les meilleurs films. Si vous souhaitez partagez la plateforme, donnez un avis/remarques, sachez qu'un <a href="https://discord.gg/RxeUj2vAWp" target="_blank">serveur Discord Officiel</a> a été créer ! 
          
            <br/><br/> - <i>Odama, you like it !</i> 😉
          </p>
        </div>
      </main>
    </>
  )
}
