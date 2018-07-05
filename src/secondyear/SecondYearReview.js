import React, { Component } from 'react';
import { Cover, EmptyPadding } from '../Components';
import '../App.css';

class SecondYearReview extends Component {
render() {
  return (
    <div>
      <Cover image={require("../media/backgrounds/secondyear.jpg")} height="100%">

        <EmptyPadding height='20vh'/>

        <div className='row center-block White-box'>
          <div className='text-dump col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6  col-xs-12'>
            <h1>Second Year in Review</h1>
            
            <h2>Overview of the Year</h2>
            <img src={require("../media/projects/secondyear-1.jpg")} className="Image-content" alt="Stairs at UC"/>
     
            <p>
            My second year as a UC student taught me to better appreciate and 
            understand my agency. I injured my leg and this influenced my 
            perception of choices for the rest of the year. Initially after 
            I injured myself, I had the same mindset as before I had hurt 
            myself. Given the difference between my prior modus operandi and 
            my current situation, I can understand that this was misguided as 
            I needed to make choices the were best for me in my new situation. 
            I needed to take care of myself, and keep up with how my life 
            changed around me. Needless to say, this year has been a year of 
            change and adaptation for me. 
            </p>

            <h2>Fall Semester</h2>

            <p>
            <img src={require("../media/projects/secondyear-2.jpg")} className="Image-content" alt="Me at Libery Center during winter"/>
            <p>
            Visiting Liberty Center on Crutches
            </p>
            </p>

            <p>
            By random chance, I tore my meniscus (cartilage that cushions knee 
            during walking, running, and standing) and needed crutches and 
            later surgery with a 6 to 8 month recovery time. As a healthy 
            teenager, it is a bit of an existential crisis to lose the ability 
            to walk without aid. This was part way into the fall semester so I 
            had to stop volunteering, I really missed helping at Hughes, and I 
            had to miss a week of classes after the surgery. This injury 
            stopped me from doing this that I would have otherwise liked to do 
            such as seeing friends. I also had to take very strong painkillers 
            and work through physical therapy. Thankfully, my friends, 
            roommates and family did quite a bit to help me through this tough 
            time. Coming back to classes was difficult, but when I came to 
            class on crutches and a full leg brace my teachers cut me some 
            slack. One of my teachers even had torn her own meniscus and she 
            was quite kind and helpful with the work in her class in accordance 
            with my situation. I have really learned to appreciate what I have 
            and not to take anything for granted as it could all be taken away 
            by something out of my control. I overcame my injury, maintained my 
            4.0 GPA and got a great job in California.
            </p> 

            <h2>California Co-op</h2>

            <p>
            <img src={require("../media/projects/secondyear-3.jpg")} className="Image-content" alt="Me at Golden Gate Bridge"/>
            <p>
            Visiting Golden Gate Bridge in California
            </p>
            </p>

            <p>
            This injury had canceled one of my planned trips and made me 
            question whether I wanted to go to California and work for that 
            company. I did end up going but being in a new city on my own with 
            a broken knee is definitely not the best move; I was still in 
            the mindset I had before I injured my leg. I was 2,000 miles away 
            from all my close friends and family. However, living on my own 
            gave me the opportunity to become more independent. Going on this 
            trip with an injured knee was more than a little misguided. While 
            in California, I did one to two hours of physical therapy every day 
            after work which was trying because I wanted to explore more. I was 
            not able to go out on the weekends for half of my time in Cali due 
            to my recovery. I would have rather gone later after having healed 
            from my injury. After living in Cali for four months, I now respect 
            what it takes to live truly on my own. I wish I had eliminated 
            the independent factor of an injury from the equation beforehand. 
            After having this experience, I would place more importance on 
            decisions of travel after injury in the future.
            </p>

            <h2>Trip to Japan</h2>
            
            <p>
            <img src={require("../media/projects/secondyear-4.jpg")} className="Image-content" alt="Me in Japan in front of waterfall"/>
            <p>
            Visiting Japan
            </p>
            </p>

            <p>
            I was fully healed by the time I went to Japan. There, I learned 
            the importance of traveling with people I know well. Although the 
            trip was fun, it incurred extra anxiety and missing some class 
            time. I was overjoyed to experience a new culture and explore, 
            firsthand, the differences between the States and Japanese 
            cultures. I really enjoyed myself the most when I went off to 
            explore on my own. This showed a bit of the mindset change I had 
            been facing all year. After losing the ability to walk without 
            crutches and slowly gaining it back through months of physical 
            therapy, I appreciate what it means to take action in my life. 
            Visiting Japan has helped me come to terms with my new mindset as 
            a person by putting me in a new environment where I could have a 
            fresh look at myself.
            </p>

            <h2>Conclusion</h2>

            <img src={require("../media/projects/secondyear-5.jpg")} className="Image-content" alt="One Lift Is Too Short For Doing Everything"/>

            <p>
            This year wasn’t only about academic or professional development 
            for me. Now that I can walk and handle myself on my own;  I have 
            gained a deeper appreciation of my own agency and of who I am. 
            “One life is too short for doing everything” (Massimo Vignelli) and 
            I will embody my own agency. Given this realization, next year I 
            want to professionally pursue opportunities that align with my 
            personal interest; go back to California and explore it; I would 
            also like to volunteer and help out more in the spring with 
            Bearcat Coders. 
            </p>

          </div>
        </div>

        <EmptyPadding height='15vh'/>

        <div className='row'/>
      </Cover>

    </div>

  )
}
}

export default SecondYearReview
