import React from 'react';
import { Cover, EmptyPadding } from '../Components';
import '../App.css';

const PlayerCount = function () {
  return (
    <div>
      <Cover image="https://drive.google.com/uc?id=1NWPHzihy4GIm-dEpuVHd85zvUjRKLfaP" height="100%">

        <EmptyPadding height='20vh'/>

        <div className='row center-block White-box'>
          <h1 align='center'>Player Count Message</h1>
          <h2 align='center'>(2014 to 2015)</h2>

          <span title = "click for project page">
           <a href='https://dev.bukkit.org/bukkit-plugins/player-count-message/'>
             <p><img src="https://drive.google.com/uc?id=1kA_3Lgcm-tlEbRTXs4grcyrUXiom1qCt" className='center-block Image-content' alt="Player Count Message example"/></p>
           </a>
          </span>
          
          <div className='col-lg-offset-3 col-lg-6 col-xs-12'>
            <h1 align='center'>Project Description</h1>
            <p>
               Player Count Message (pcm) is a 'plugin' for minecraft bukkit software. A
               plugin is a collection of java files that changes how the minecraft
               software interacts with users. This plugin created an animated message
               that appeared on the player's screen when the decided whether or not
               to connect to the server. The plugin is hosted on Bukkit's forums.
               The <a href='https://dev.bukkit.org/bukkit-plugins/player-count-message/'>project page</a>
               gives a more detailed explanation on how the project functions and what
               the program does. Below is an image of the project in action (animated
               of course). An update to the software prevented the feature that allowed
               animated messages and discouraged further development.
            </p>
            <p>
              Then the project was abandoned and the source code was added to the github. The project
              is uploaded to github in two formats for the bungee server software
              and the bukkit server software. The project has been downloaded over
              45,000 times as of November 2016. In addition, the project has been
              translated into over 5 different languages by people who wanted to
              promote and use the plugin. Below are pictures of the youtube videos
              showing how to use the translated plugin.
              <a href='https://dev.bukkit.org/bukkit-plugins/player-count-message/pages/tutorials/'>This page</a>
              has a list of the youtube videos that translate the plugin into different languages.
            </p>


             <div align="center">
               <p>
                 <a href='https://github.com/nicholas-maltbie/PlayerCountMessage'>pcm bukkit github</a> |
                 <a href='https://github.com/nicholas-maltbie/Player-Count-Message-Bungee'> pcm bungee github</a>
               </p>
             </div>
           </div>
           
          <div className='col-lg-offset-2 col-lg-8 col-xs-12'>
            <div className='row'>
              <h1 align="center">Tutorial Videos Made by Users</h1>
            </div>
            <div className='row'>
              <div className='col-lg-6 col-xs-12'>
                <h3> Tutorial video by lockeMinecraft (que1124) </h3>
                <iframe title="lockeMinecraft" src="https://www.youtube.com/embed/TVMCCvRO4D0"
                  className="Video-content"/>
              </div>
              <div className='col-lg-6 col-xs-12'>
                <h3> Tutorial video by VariationVault </h3>
                <iframe title="VariationVault" src="https://www.youtube.com/embed/n5gYRKOV2aw"
                  className="Video-content"/>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6 col-xs-12'>
                <h3> Tutoriel vid&#x00E9;o par GAmerHD Quatre </h3>
                <iframe title='GAmerHD Quatre' src="https://www.youtube.com/embed/go2Xkj4qsOU"
                  className="Video-content"/>
              </div>
              <div className='col-lg-6 col-xs-12'>
                <h3> Tutorial de v&#x00ED;deo por Yan Francisco P&#x00E9;rez </h3>
                <iframe title='Yan Francisco' src="https://www.youtube.com/embed/PZbJAv_Iz94"
                  className="Video-content"/>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6 col-xs-12'>
                <h3> &#x0412;&#x0438;&#x0434;&#x0435;&#x043E; &#x0443;&#x0440;&#x043E;&#x043A; &#x043E;&#x0442; BOBARA333BG </h3>
                <iframe title='BOBARA333BG' src="https://www.youtube.com/embed/RiBajAOos8Q"
                  className="Video-content"/>
              </div>
            </div>

          </div>
        </div>

        <EmptyPadding height='15vh'/>

        <div className='row'/>
      </Cover>

    </div>

  )
}

export default PlayerCount
