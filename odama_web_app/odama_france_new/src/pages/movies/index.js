/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr - "Odama, you like it ! ✨"
*/

import Head from 'next/head';
import LeftNav from 'components/LeftNav.js';
import ResponsiveNav from 'components/ResponsiveNav';
import Notifications from 'components/Notifications';
import fsPromises from 'fs/promises';
import path from 'path';
import { useEffect } from 'react';
import $ from 'jquery';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), './src/pages/movies/movies.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  return { props: objectData }
}
  
export default function HomePage(props) {
    const all_movies_data = props.all_movies; 

    useEffect(function() {  
      let slider_counter = localStorage.getItem('compteur') || 0;
      localStorage.setItem('slider_counter', "0");

      const leftArrow = document.querySelector(".left-arrow"),
      rightArrow = document.querySelector(".right-arrow"),
      slider = document.querySelector(".slider");
  
      function scrollRight() {
        $(".left-arrow").removeClass("arrow_disabled");
        if (slider_counter == 2) {
          $(".right-arrow").addClass("arrow_disabled");
          $(".right-arrow").prop("disabled", true);
        } else if (slider_counter > 2) {
          localStorage.setItem('slider_counter', "2");
        } else if (slider_counter < 0) {
          localStorage.setItem('slider_counter', "0");
        } else {
          $(".right-arrow").removeClass("arrow_disabled");
          slider_counter++;
          localStorage.setItem('slider_counter', slider_counter);
        }

        if (slider.scrollWidth - slider.clientWidth === slider.scrollLeft) {
          slider.scrollTo({
            left: 0,
            behavior: "smooth"
          });
        } else {
          slider.scrollBy({
            left: window.innerWidth,
            behavior: "smooth"
          });
        }
      }
  
      function scrollLeft() {
        $(".right-arrow").removeClass("arrow_disabled");
        if (slider_counter == 0) {
          $(".left-arrow").addClass("arrow_disabled");
        } else if (slider_counter < 0) {
          localStorage.setItem('slider_counter', "0");
        } else {
          $(".left-arrow").removeClass("arrow_disabled");
          slider_counter--;
          localStorage.setItem('slider_counter', slider_counter);
        }

        slider.scrollBy({
          left: -window.innerWidth,
          behavior: "smooth"
        });
      }
  
      let timerId = setInterval(scrollRight, 9000);
      function resetTimer() {
        clearInterval(timerId);
        timerId = setInterval(scrollRight, 9000);
      }
  
      slider.addEventListener("click", function(ev) { if (ev.target === leftArrow) { scrollLeft(); resetTimer(); } });
      slider.addEventListener("click", function(ev) { if (ev.target === rightArrow) { scrollRight(); resetTimer(); } });
    }, []);

    return (
        <>
            <Head>
                <title>Odama France 🔥</title>
                <meta name="description" content="Odama© est la seule plateforme de streaming 100% cloud, sécurisée et open-source en France ! 🇫🇷"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="https://zupimages.net/up/22/28/k6tc.png"/>
            </Head>

            <LeftNav page_id="movies_link"/>
            <ResponsiveNav page_id_responsive="movies_link_responsive"/>
            <Notifications/>

            <section id="movies_section">
                {/* 🎫 Box-office movies slider : 🎫 */}
                <div className='slider_component'>
                    <div className="slider">
                    <div className="slider__slide">
                        <img className='bg_img' src={all_movies_data[68].background} alt='bg_movies'/>
                        <h1 className='movie_title'>{all_movies_data[68].title} <img className='one' src="https://cwsmgmt.corsair.com/_ui/responsive/common/images/logo_dlb_aud_vert_wht_1x.png"/></h1>
                        <p id="movies_infos_1" className='movie_infos'>{all_movies_data[68].tags}&ensp; · &ensp;{all_movies_data[68].duration}&ensp; · &ensp;{all_movies_data[68].year}</p>
                        <button id="68" className='new_watch_button first_watch_button'><img src='https://zupimages.net/up/22/28/exo5.png' alt='app_logo'/> Voir ce film avec Odama !</button>
                        <span><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>Vous pouvez retrouver ce film dans la sélection ciné + d'Odama !</span>
                    
                        <div className='viewer'>
                          <img src='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt='user_anyone_pic'/>
                          <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt='user_anyone_pic'/>
                          <img src='https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFjbmV8ZW58MHx8MHx8&w=1000&q=80' alt='user_anyone_pic'/>
                          <p>+ de 693 personnes ont déjà vu ce film ! 🔥</p>
                        </div>
                    </div>
                    
                    <div className="slider__slide">
                        <img className='bg_img' src={all_movies_data[71].background} alt='bg_movies'/>
                        <h1 className='movie_title'>{all_movies_data[71].title} <img src="https://cwsmgmt.corsair.com/_ui/responsive/common/images/logo_dlb_aud_vert_wht_1x.png"/></h1>
                        <p id="movies_infos_2" className='movie_infos'>{all_movies_data[71].tags}&ensp; · &ensp;{all_movies_data[71].duration}&ensp; · &ensp;{all_movies_data[71].year}</p>
                        <button id="71" className='new_watch_button second_watch_button'><img src='https://zupimages.net/up/22/28/exo5.png' alt='app_logo'/> Voir ce film avec Odama !</button>
                        <span><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>Vous pouvez retrouver ce film dans la sélection ciné + d'Odama !</span>
                    
                        <div className='viewer'>
                          <img src='https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg' alt='user_anyone_pic'/>
                          <img src='https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt='user_anyone_pic'/>
                          <img src='https://minimaltoolkit.com/images/randomdata/male/102.jpg' alt='user_anyone_pic'/>
                          <p>+ de 211 personnes ont déjà vu ce film ! 🔥</p>
                        </div>
                    </div>
                    
                    <div className="slider__slide">
                        <img className='bg_img' src={all_movies_data[72].background} alt='bg_movies'/>
                        <h1 className='movie_title'>{all_movies_data[72].title} <img className='three' src="https://cwsmgmt.corsair.com/_ui/responsive/common/images/logo_dlb_aud_vert_wht_1x.png"/></h1>
                        <p id="movies_infos_3" className='movie_infos'>{all_movies_data[72].tags}&ensp; · &ensp;{all_movies_data[72].duration}&ensp; · &ensp;{all_movies_data[72].year}</p>
                        <button id="72" className='new_watch_button third_watch_button'><img src='https://zupimages.net/up/22/28/exo5.png' alt='app_logo'/> Voir ce film avec Odama !</button>
                        <span><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>Vous pouvez retrouver ce film dans la sélection ciné + d'Odama !</span>
                    
                        <div className='viewer'>
                          <img src='https://minimaltoolkit.com/images/randomdata/female/75.jpg' alt='user_anyone_pic'/>
                          <img src='https://minimaltoolkit.com/images/randomdata/female/17.jpg' alt='user_anyone_pic'/>
                          <img src='https://minimaltoolkit.com/images/randomdata/female/78.jpg' alt='user_anyone_pic'/>
                          <p>+ de 851 personnes ont déjà vu ce film ! 🔥</p>
                        </div>
                    </div>

                    <div className="slider__slide">
                        <img className='bg_img' src={all_movies_data[69].background} alt='bg_movies'/>
                        <h1 className='movie_title'>{all_movies_data[69].title} <img src="https://cwsmgmt.corsair.com/_ui/responsive/common/images/logo_dlb_aud_vert_wht_1x.png"/></h1>
                        <p id="movies_infos_4" className='movie_infos'>{all_movies_data[69].tags}&ensp; · &ensp;{all_movies_data[69].duration}&ensp; · &ensp;{all_movies_data[69].year}</p>
                        <button id="69" className='new_watch_button four_watch_button'><img src='https://zupimages.net/up/22/28/exo5.png' alt='app_logo'/> Voir ce film avec Odama !</button>
                        <span><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>Vous pouvez retrouver ce film dans la sélection ciné + d'Odama !</span>
                    
                        <div className='viewer'>
                          <img src='https://www.look-uk.org/wp-content/uploads/2019/05/mentor-chris.jpg' alt='user_anyone_pic'/>
                          <img src='https://minimaltoolkit.com/images/randomdata/female/86.jpg' alt='user_anyone_pic'/>
                          <img src='https://cdnb.artstation.com/p/assets/images/images/009/796/747/large/brodie-delude-rooster-pfp.jpg?1520954625' alt='user_anyone_pic'/>
                          <p>+ de 173 personnes ont déjà vu ce film ! 🔥</p>
                        </div>
                    </div>

                    <svg className="left-arrow arrow_disabled" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    <svg className="right-arrow" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                </div>
                {/* 🎫 End of Box-office movies slider 🎫 */}
            </section>
        </>
    )
}