import React from 'react';
import { Cover, EmptyPadding } from '../Components';
import '../App.css';

const BCat = function () {
  return (
    <div>
      <Cover image={require("../media/backgrounds/bearcatCoders.jpg")} height="100%">

        <EmptyPadding height='20vh'/>

        <div className='row center-block White-box'>
          <div className='text-dump col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6  col-xs-12'>
            <h1 align='center'>Bearcat Coders Honors Experience</h1>
            <h3 align='center'>(Fall 2016 to Spring 2017)</h3>

            <p>
              As my first self designed honors experience, I decided to reflect
              further upon my work volunteering for the local community. As part of
              one of the college organizations I'm in, Association for Computing
              Machinery-Women's Chapter (ACM-W), I go to Hughes STEM High school to
              help students learn how to code and create animations. I enjoyed this
              experience as I had taken time to mentor other students while I was
              in High School so this felt like a natural continuation of my
              experience. For the most part, I just helped Ms. Grasso, the
              instructor of the class, with whatever she needed. This varied from
              simply helping out in the class to attending after school meetings
              and making course material.
            </p>
            <p>
              During the experience, I kept a log that I updated weekly of my
              reflections on my experience mentoring the students. I helped with
              Ms. Grasso's class for about 4 hours a week from February to April
              with a few longer sessions for special events. When I started working
              with the students, I was timid and was worried about what the
              students would think of my manner of teaching opposed to their
              instructor. As the weeks went on, I slowly started being more
              assertive in my style even if it differed from Ms. Grasso's.
            </p>
          </div>

          <div className='text-dump col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6  col-xs-12'>
            <img alt="Tutoring at Revolution UC"
              src={require("../media/projects/hughes.jpg")}
              className="Image-content"/>
            <p>
              The picture of me helping a high school student with this project at
              Revolution UC, a student run hackathon that happened this Spring.
            </p>
            <p>
              The majority of my work with Ms. Grasso was spent helping in class and
              planning. Much of this work was done with students and I'm not supposed
              to take pictures of high school students as part of the requirements of
              working with the group. Nonetheless, my time spent working with the
              students gave me a significant amount of experience mentoring and
              managing the group. During Revolution UC,I worked to help organize the
              event. During the event, I was able to take my mentorship skills I
              gained during this experience and help students with their projects.
            </p>
            <p>
              I found this photo fitting because it exemplifies me using skills I
              gained while working with the students. I enjoy helping local students
              and am grateful for being given the opportunity to integrate this with
              my honors experience. This experience of mentoring has helped me with
              group dynamics and work management. I believe that what I have gained
              from this reflection will be useful to me for the rest of my life.
            </p>
          </div>
        </div>

        <EmptyPadding height='15vh'/>

        <div className='row'/>
      </Cover>

    </div>

  )
}

export default BCat
