/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr - "Odama, you like it ! ✨"
*/

import Head from 'next/head';
import Header from '../components/Header.js';

export default function Home() {  
  if (process.browser) { console.clear(); console.info("Odama© webapp starting on " + document.location + " ! ✨"); }

  return (
    <>
      <Head>
        <title>Odama France 🔥</title>
        <meta name="description" content="Odama est la seule plateforme de streaming 100% cloud, sécurisée et open-source en France ! 🇫🇷"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="https://zupimages.net/up/22/28/k6tc.png"/>
      </Head>

      <Header/>
      <main className='content_page' id="content_page">
        <div className='hero_section'>
          <h1>Odama is back ! 🎉</h1>
          <p>
            Cette fois Odama est de retour avec du lourd : une nouvelle base de donnée mise à jour avec les tout derniers films, séries, 
            documentaires et émissions officiellement extrait des serveurs correspondants. Une version bourrée de nouvelles fonctionnalités qui
            va vous faire de l'oeil. 😇<br/><br/>

            Cette fois basé sur les appréciations des 15 000 utilisateurs de la version précédente, elle s'appuie sur une interface doté d'un tout nouveau design,
            les préférences de l'utilisateur seront enregistrées et analysées pour une meilleure expérience. Un système de commentaires et de likes sera également mis 
            en place pour référencer les meilleurs films. Si vous souhaitez partagez la plateforme, donnez un avis/remarques, sachez qu'un <a id="link_discord" href="https://discord.gg/RxeUj2vAWp" target="_blank">serveur Discord Officiel</a> a été créer pour ça. N'hésitez pas à le rejoindre ! 
            <br/><br/>- Odama, you like it ! 😉
          </p>

          <a className='github_link' href="https://github.com/SkyX-ID-FR/Odama-France" target="_blank"><img src='https://camo.githubusercontent.com/fe3b97974431a5652f0572ef8dd3c46d206d0aeb9658c7dd1f9c766ed89e4215/68747470733a2f2f69636f6e2d6c6962726172792e636f6d2f696d616765732f6769746875622d69636f6e2d77686974652f6769746875622d69636f6e2d77686974652d362e6a7067' alt='github_logo' className='github_button_logo'/><p>Projet Github</p></a>
        </div>
      </main>
    </>
  )
}
