import React, { Component } from 'react';
import { Cover, EmptyPadding } from '../Components';
import '../App.css';

import Script from 'react-load-script'

class Japan extends Component {
render() {
  const albumstyle = {
      witdth:"100%",
      height:"480px",
      zIndex: -1,
  }
  return (
    <div>
      <Cover image={require("../media/backgrounds/Japan.jpg")} height="100%">

        <EmptyPadding height='20vh'/>

        <div className='row center-block White-box'>
          <div className='text-dump col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6  col-xs-12'>
            <h1>Japan Trip</h1>
            <h3>(April to May 2018)</h3>

            <img src="https://lh3.googleusercontent.com/1cBRZv-ALqDFnzEIwKTp7HJURrD58VJSMkgj5EwIC6ZE9K-Hqvwimi7OiQZjw1FqnhN7gzD_SjJinDi3W4GrVTwP2_eivCf0gb13CzRy7h_rKXB4EIsQlPPzNIpnUDwbaOL64_O0dDY=w640-h480" className="Image-content" alt="Group in Nara"/>
            
            <h2>Reflection</h2>
            <p>
            I’m leaving from work for the last day, my internship was over. I had mailed all my things back home, over 2,000 miles away, earlier this week. Now, I’m about to get on a flight to go over 5,000 miles away and over 6,500 miles from home. Saying goodbye to what feels like old friends and ready for a new adventure. I’m about to fly on my own to a country where I don’t know the language; only have a second hand account of the culture; and will meet with people I have never meet before to explore Japan for the next two weeks. This was my first international experience and UC International, University Honors Program and Gayle Elliott all helped make this a reality for me.  
            </p>
            <p>
            This was my mindset when leaving on a flight from SFO to Japan. 
            </p>
            <p>
            This was my first international experience, first time leaving the US to visit another country and represent UC and the States. I wasn’t sure what to expect and was very timid. I tried my best to appear inoffensive and kind to those around me (even though I only knew a few Japanese phrases). This was made very apparent to me right after I landed. Having never traveled internationally before, I ended up being rushed through customs and not having the proper paperwork. I just kept my voice soft, asked questions nicely and tried my best to bear through filling out the paperwork while being watched closely. And another time shortly after; while I was waiting for the rest of the group’s flight to land, a police officer in the airport asked me what I was doing (I clearly looked out of place). This was terrifying to me (first time in another country alone) but I was able to smile, be nice and cooperate with local customs. Even though I was scared out of my mind, the whole experience was great and I really enjoyed talking to the police officer. He even asked me how his English was and if I had any suggestions to help him improve after he asked me a few questions. These reactions and feelings sum up all of what I would experience while I was in Japan. Exploring was a new, terrifying place on the surface; although, people are people, no matter the language, country or culture. 
            </p>
            <p>
            Japan, although a different culture, was interesting to experience and I was able to learn much more about myself and the States. While visiting, I was able to compare contrast my experiences in Japan with those from back home. In both the States and Japan, being nice and friendly was usually greeted likewise, everyone liked a smile. Also, seeing Japan as such a different place opened me up to understand more about the United States in general. First, mass transit in Japan is great and I wish there was something like that in the US. The Shinkansen (bullet train) was the main way we traveled from city to city. I had never taken a train to get around in the US (with the exception of Caltrain) and this new way of traveling and interacting with other areas was a new way of looking at transit for me. Additionally, on a cultural level, I was able to better understand and appreciate the way that people interact and that it can be different. For example, simple greetings in Japan are much more formal than the US: casual introductions aren’t the norm around the world. For example, when meeting someone in a store, the cashier would say “arigato gosaimas” when walking in the store. In the States, you would be lucky to get a grunt from most store clerks. This isn’t better or worse inherently, just different. And this formal nature pervades through all of society in Japan. After having a first hand account and being caught completely off guard more than my fair share of times, I have really gained new experiences and widened my worldview from this short but intense two week trip. 
            </p>
            <p>
            Exploring this new country with people from UC was a very rewarding experience. I’m happy that I went, even with the ups and downs. This has given me my first personal account of another culture and I wouldn’t trade it for the world. I’m happy to have represented UC in the best way I could and to have experienced, what was to me, a new and interesting culture. 
            </p>
        </div>
        <div className='text-dump col-lg-offset-1 col-lg-10 col-xs-12'>
            <h2>Photo Album</h2>
            <p>Link to original <a href="https://photos.app.goo.gl/BpTF2hr9MDYfnYA17">Google Photo Album</a></p>
            <p>If this doesn't load right away, refresh page</p>
            <Script
              url="https://www.publicalbum.org/js/pa-ins.min.js"/>
            <ins className="pa-widget-gallery" style={albumstyle}
                data-url="https://photos.app.goo.gl/BpTF2hr9MDYfnYA17"
                data-uid="5488c39ae10754034c2f3b60cae11b643cf8a5c7403e5a7071df37cbf204c105"
                data-delay="2"
                data-repeat="true"/>
        
            <h2>Itinerary</h2>
            <p></p>
            <table>
              <col width="10%"/>
              <col width="20%"/>
              <col width="70%"/>
              <thead>
              <tr>
                <th>Date</th>
                <th>Activities</th>
                <th>Summary</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>April 28th</td>
                <td>Flight Out</td>
                <td>I flew out to join the rest of my group from California. 
                I had just got off my first official UC coop and flew on a 17
                hour flight with a transfer in Taipei.</td>
              </tr>
              <tr>
                <td>April 29th</td>
                <td>Arriving in Japan</td>
                <td>Due to time change, we arrived this day. We got our train 
                passes, went to Kyoto and went to the hotel for the first
                night. </td>
              </tr>
              <tr>
                <td>April 30th</td>
                <td>Visiting Nara</td>
                <td>Took a train to nara and went to see temples and shrines 
                and saw a park famous for its deer.</td>
              </tr>
              <tr>
                <td>May 1st</td>
                <td>Tour of Kyoto</td>
                <td>Meet with a guide to explore kyoto and many of the
                surrounding shrines and temples, Nijo castle, Kinkakuji temple,
                and the Gion district</td>
              </tr>
              <tr>
                <td>May 2nd</td>
                <td>Free day to explore Kyoto</td>
                <td>I went to see the bamboo forest and then to a monkey shrine 
                on top of a mountain near Kyoto. At the end of the day we 
                went to Okayama by train to our next hotel. </td>
              </tr>
              <tr>
                <td>May 3rd</td>
                <td>Travel to Miyajima and Hiroshima</td>
                <td>We went to this very pretty tourist like island which had
                a very large mountain and set of gondolas that led up to the 
                top of the mountain. I took the gondolas to nearly the top of
                the mountain and got as close to the apex as I could before I 
                had to travel back down to meet up with the rest of the group 
                to get to Hiroshima. Then we traveled to see the Hiroshima dome 
                and see the Peace Memorial Museum and surrounding park. </td>
              </tr>
              <tr>
                <td>May 4th</td>
                <td>Visit Old Town Kurashiki, meet host families</td>
                <td>Visited a pretty old town with a canal then met host 
                families. I got to meet Naomi and her cute dog coco. We stayed 
                with the host familier for most of the next week. </td>
              </tr>
              <tr>
                <td>May 5th</td>
                <td>Free day with host families</td>
                <td>Got to ride the Enoden line with Naomi and visit many 
                pretty temples and shrines near Tokyo. </td>
              </tr>
              <tr>
                <td>May 6th</td>
                <td>Visit Edo Museum and </td>
                <td>Visited museum of Edo (Tokyo) and then went to fun shopping 
                street with Crepes and lots of fun stores. </td>
              </tr>
              <tr>
                <td>May 7th</td>
                <td>Visit Nikko</td>
                <td>Traveled with guide to visit a mountain and see different
                temples, shrines, and a great waterfall (Toshogu Shrine and Rinnoji Temple, Chuzenji Onsen and Kegon Fall) </td>
              </tr>
              <tr>
                <td>May 8th</td>
                <td>Visit Fusion Systems, Ueno Market</td>
                <td>Traveled to meet with a company who has employed previous UC
                coop students and went to Ueno Market to see different shops 
                and lots of places to eat. After visiting the market, me and a few 
                other people traveled to Akihabara.</td>
              </tr>
              <tr>
                <td>May 9th</td>
                <td>Visit Landor and Shimizu</td>
                <td>Meet with two different companies in Japan: Landor, a 
                marketing company which employed former UC coops, and Shimizu, 
                a company that specializes in architecture and building planning.
                </td>
              </tr>
              <tr>
                <td>May 10th</td>
                <td>Meet with Toyo University</td>
                <td>We meet with students at Toyo University in Tokyo and then
                took some time to explore tokyo. Sadly, this was our last day 
                with our host families and I had to say goodbye to Coco and Naomi
                in the morning before I left.</td>
              </tr>
              <tr>
                <td>May 11th</td>
                <td>Free day to explore Tokyo</td>
                <td>I traveled to Tsukiji market, Tokyo Skytree, and got lost a
                bit while taking the subways to get around Tokyo. It was a fun
                experience and I was happy to have some time to explore on my own.
                </td>
              </tr>
              <tr>
                <td>May 12th</td>
                <td>Flight back home</td>
                <td>Enjoyed sleeping in on the last day. Then we took a trian to
                the airport and had a 15 hour flight back home, landing only 2
                hours after we took off. </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <EmptyPadding height='15vh'/>

        <div className='row'/>
      </Cover>

    </div>

  )
}
}

export default Japan
