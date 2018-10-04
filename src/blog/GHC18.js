import React from 'react';
import { Cover, EmptyPadding } from '../Components';
import '../App.css';

const GHC18 = function () {
  return (
    <div>
      <Cover image={require("../media/backgrounds/ghc.jpg")} height="100%">

        <EmptyPadding height='20vh'/>

        <div className='row center-block White-box'>
          <div className='text-dump col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6  col-xs-12'>
            <h1 align='center'>Grace Hopper Celebration 2018</h1>
            <h3 align='center'>(Sep 26 - Sep 28, 2018)</h3>
            
            <img alt="Opening Ceremony"
            src={require("../media/blog/ghc18/3.jpg")}
            className="Image-content"/>
            <p>
              Opening ceremony picture with Saylee and Anah.
            </p>
            
            <p>
              While I am not your typical Grace Hopper Conference attendee, I had a very productive and enjoyable experience at the 2018 Conference in Houston, TX. I am a University of Cincinnati third year Computer Science student and initially was not expecting to attend. The idea of my attending the conference was suggested to me by other students in my college’s Association for Computing Machinery Women’s Chapter organization, ACM-W. Although I support women in computing, I am male and didn’t feel comfortable attending a women in computing conference. Then Saylee, another student in ACM-W, specifically recommended that I apply for a scholarship and take the opportunity to attend the event as a male ally. Unexpectedly, I received the scholarship and was sponsored by Express Scripts to attend GHC 2018. (See Figure 2.) The conference was a great experience and I attended many events such as Being a Male Ally, Promoting Women in the Workplace and Building an Inclusive Culture. (See Figure 3.) After attending and participating in conference events, I feel much more prepared to help promote women in the workplace and at UC. This can be achieved both within classes and student organizations. 
            </p>

            <img alt="Express Scripts"
            src={require("../media/blog/ghc18/1.jpg")}
            className="Image-content"/>
            <p>
              Picture of me with my sponsor Express Scripts.
            </p>
            
            <p>
              Specifically, I learned that a male ally needs to be committed to supporting women in technology fields and will most likely be challenged in the workplace for doing so. I have already been challenged by my colleagues, male and female, when I told them I was attending this conference. They wanted to know why I was attending a conference focused on women. This question seemed strange to me because I have always supported women in technology and I am an active member of ACM-W’s University of Cincinnati chapter. Another opportunity to practice  positive male ally behavior occurred during a conversation with other students. I was sitting with the female other organizer of the student group Bearcat Coders from UC but the other people in the group kept looking toward me to discuss the group activities even though my female colleague was more qualified to answer the questions. I practiced redirecting the conversation so that my female colleague answered and gently reminding others that she was the group’s leader. Now, I have internalized that others do have these perspectives and my attendance at GHC 2018, enabled me to recognize these misconceptions and positively work toward changing them.
            </p>
            
            <p>
              An interesting part of GHC 2018 was talking with representatives from companies and hearing how they are attempting to improve their workplace culture and increase their diversity of employees. I attended a presentation by someone working at SAP and learned that they reach out to the local community and promote women at all levels with professional development by sponsoring volunteer and outreach programs that introduce younger students to successful females that are role-models and can become future mentors. By networking with and listening to different speakers, I have broadened my perspective toward diversity and feel more prepared to help women succeed in technology fields. In addition to this personal development, I was also able to network with companies and had four interviews as a result of attending the conference which have led to three current job offers for internships for Summer 2019.
            </p>

            <img alt="Male Allies Panel"
            src={require("../media/blog/ghc18/2.jpg")}
            className="Image-content"/>
            <p>
              Picture of me with interviewers.
            </p>
            
            <p>
              In summary, GHC promotes women by giving them more professional opportunities, as well as, promoting diversity in the workplace. It is also a powerful experience for male allies who want to learn how to more effectively support women in educational and industry settings. 
            </p>
            
          </div>
        </div>

        <EmptyPadding height='15vh'/>

        <div className='row'/>
      </Cover>

    </div>

  )
}

export default GHC18

