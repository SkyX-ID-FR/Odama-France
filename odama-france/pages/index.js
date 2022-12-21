/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr      "Odama, you like it ! ✨"
*/

import Head from 'next/head';
import LeftNavBar from '../components/LeftNavBar.js'

export default function Home() {
  /* 
  🎉 JS Confetti BG :
  'use strict';
   if (typeof window !== "undefined") {
      var random = Math.random
        , cos = Math.cos
        , sin = Math.sin
        , PI = Math.PI
        , PI2 = PI * 2
        , timer = undefined
        , frame = undefined
        , confetti = [];
    
      var particles = 10
        , spread = 40
        , sizeMin = 3
        , sizeMax = 12 - sizeMin
        , eccentricity = 10
        , deviation = 100
        , dxThetaMin = -.1
        , dxThetaMax = -dxThetaMin - dxThetaMin
        , dyMin = .13
        , dyMax = .18
        , dThetaMin = .4
        , dThetaMax = .7 - dThetaMin;
    
      var colorThemes = [
        function() {
          return color(200 * random()|0, 200 * random()|0, 200 * random()|0);
        }, function() {
          var black = 200 * random()|0; return color(200, black, black);
        }, function() {
          var black = 200 * random()|0; return color(black, 200, black);
        }, function() {
          var black = 200 * random()|0; return color(black, black, 200);
        }, function() {
          return color(200, 100, 200 * random()|0);
        }, function() {
          return color(200 * random()|0, 200, 200);
        }, function() {
          var black = 256 * random()|0; return color(black, black, black);
        }, function() {
          return colorThemes[random() < .5 ? 1 : 2]();
        }, function() {
          return colorThemes[random() < .5 ? 3 : 5]();
        }, function() {
          return colorThemes[random() < .5 ? 2 : 4]();
        }
      ];
      function color(r, g, b) {
        return 'rgb(' + r + ',' + g + ',' + b + ')';
      }

      function interpolation(a, b, t) {
        return (1-cos(PI*t))/2 * (b-a) + a;
      }
    
      var radius = 1/eccentricity, radius2 = radius+radius;
      function createPoisson() {
        var domain = [radius, 1-radius], measure = 1-radius2, spline = [0, 1];
        while (measure) {
          var dart = measure * random(), i, l, interval, a, b, c, d;
          for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
            a = domain[i], b = domain[i+1], interval = b-a;
            if (dart < measure+interval) {
              spline.push(dart += a-measure);
              break;
            }
            measure += interval;
          }
          c = dart-radius, d = dart+radius;
    
          for (i = domain.length-1; i > 0; i -= 2) {
            l = i-1, a = domain[l], b = domain[i];
            if (a >= c && a < d)
              if (b > d) domain[l] = d; 
              else domain.splice(l, 2); 
            else if (a < c && b > c)
              if (b <= d) domain[i] = c;
              else domain.splice(i, 0, c, d); 
          }

          for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
            measure += domain[i+1]-domain[i];
        }
    
        return spline.sort();
      }
    
      var container = document.createElement('div');
      container.style.position = 'fixed';
      container.style.top      = '0';
      container.style.left     = '0';
      container.style.width    = '100%';
      container.style.height   = '0';
      container.style.overflow = 'visible';
      container.style.zIndex   = '9999';
    
      function Confetto(theme) {
        this.frame = 0;
        this.outer = document.createElement('div');
        this.inner = document.createElement('div');
        this.outer.appendChild(this.inner);
    
        var outerStyle = this.outer.style, innerStyle = this.inner.style;
        outerStyle.position = 'absolute';
        outerStyle.width  = (sizeMin + sizeMax * random()) + 'px';
        outerStyle.height = (sizeMin + sizeMax * random()) + 'px';
        innerStyle.width  = '100%';
        innerStyle.height = '100%';
        innerStyle.backgroundColor = theme();
    
        outerStyle.perspective = '50px';
        outerStyle.transform = 'rotate(' + (360 * random()) + 'deg)';
        this.axis = 'rotate3D(' +
          cos(360 * random()) + ',' +
          cos(360 * random()) + ',0,';
        this.theta = 360 * random();
        this.dTheta = dThetaMin + dThetaMax * random();
        innerStyle.transform = this.axis + this.theta + 'deg)';
    
        this.x = window.innerWidth * random();
        this.y = -deviation;
        this.dx = sin(dxThetaMin + dxThetaMax * random());
        this.dy = dyMin + dyMax * random();
        outerStyle.left = this.x + 'px';
        outerStyle.top  = this.y + 'px';
  
        this.splineX = createPoisson();
        this.splineY = [];
        for (var i = 1, l = this.splineX.length-1; i < l; ++i)
          this.splineY[i] = deviation * random();
        this.splineY[0] = this.splineY[l] = deviation * random();
    
        this.update = function(height, delta) {
          this.frame += delta;
          this.x += this.dx * delta;
          this.y += this.dy * delta;
          this.theta += this.dTheta * delta;
          var phi = this.frame % 7777 / 7777, i = 0, j = 1;
          while (phi >= this.splineX[j]) i = j++;
          var rho = interpolation(
            this.splineY[i],
            this.splineY[j],
            (phi-this.splineX[i]) / (this.splineX[j]-this.splineX[i])
          );
          phi *= PI2;
    
          outerStyle.left = this.x + rho * cos(phi) + 'px';
          outerStyle.top  = this.y + rho * sin(phi) + 'px';
          innerStyle.transform = this.axis + this.theta + 'deg)';
          return this.y > height+deviation;
        };
      }
    
      function poof() {
        if (!frame) {
          document.body.appendChild(container);
    
          var theme = colorThemes[0]
            , count = 0;
          (function addConfetto() {
            var confetto = new Confetto(theme);
            confetti.push(confetto);
            container.appendChild(confetto.outer);
            timer = setTimeout(addConfetto, spread * random());
          })(0);
    
          var prev = undefined;
          requestAnimationFrame(function loop(timestamp) {
            var delta = prev ? timestamp - prev : 0;
            prev = timestamp;
            var height = window.innerHeight;
    
            for (var i = confetti.length-1; i >= 0; --i) {
              if (confetti[i].update(height, delta)) {
                container.removeChild(confetti[i].outer);
                confetti.splice(i, 1);
              }
            }
    
            if (timer || confetti.length)
              return frame = requestAnimationFrame(loop);
            document.body.removeChild(container);
            frame = undefined;
          });
        }
      }
      poof();
    } */
  
  if (process.browser) {
    console.clear(); console.info("Odama© webapp starting on " + document.location + " ! ✨");    
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
            <br/><br/><b>- Odama, you like it !</b> 😉
          </p>

          <a className='github_link' href="https://github.com/SkyX-ID-FR/Odama-France" target="_blank"><img src='https://camo.githubusercontent.com/fe3b97974431a5652f0572ef8dd3c46d206d0aeb9658c7dd1f9c766ed89e4215/68747470733a2f2f69636f6e2d6c6962726172792e636f6d2f696d616765732f6769746875622d69636f6e2d77686974652f6769746875622d69636f6e2d77686974652d362e6a7067' alt='github_logo' className='github_button_logo'/><p>Projet Github</p></a>
        </div>
      </main>
    </>
  )
}
