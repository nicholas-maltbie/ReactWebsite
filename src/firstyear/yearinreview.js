import React from 'react';
import { Cover, EmptyPadding } from '../Components';
import '../App.css';

const YearOneReview = function () {
  return (
    <div>
      <Cover image="https://drive.google.com/uc?id=1kfhN7C9W-Fs5J5JGbkQ6W_xLq9q0imYz" height="100%">

        <EmptyPadding height='20vh'/>

        <div className='row center-block White-box'>
          <div className='text-dump col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6  col-xs-12'>
            <h1 align="Center">First Year In Review</h1>
            <p>
              This past year was my first year at UC. This was a rather large
              transition; I lived in a dorm on campus and started taking college
              classes. I went to Lakota West fore high school before I came to UC.
              Comparatively, high school was extremely restrictive and full of people
              less inspired to learn than college. I realize why this is, although,
              the experience of college for me is much more inviting than that of
              high school.
            </p>
            <p>
              The social experience of living in a dorm was very different than what
              I was used to. I meet a new friends during my experience in the dorm.
              He was also interested in Computer Science. Talking to him and other
              interested students helped introduce me to how other people see my
              area of study and what to expect looking forward. In high school I was
              mostly the odd man out in high school as computer science was not
              popular to most of my peers but I found a real sense of community in
              the engineering environment at UC.
            </p>
          </div>
          
          <div className='text-dump col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6  col-xs-12'>
            <p>
              During my first year, I joined ACM (Association for Computing
              Machinery), the student computer science organization. This club
              introduced me more fully to the computer science student community at
              UC. While at the meetings, I was able to meet many other students who
              were also interested in Computer Science. This club was one of my best
              experiences my first year and I decided to become involved by helping
              organize Revolution UC during the Spring. This club also allowed me to
              make my first self designed experience.
            </p>
            <p>
              In addition to joining ACM, I joined ACM, Women's Chapter (ACM-W)
              which focuses on female student involvement in Computer Science at UC.
              This organization also focuses on community service. I took the chance
              to reflect on this experience as part of the University Honors Program
              and made a <a href="#/UHP/BearcatCoders">self designed experience</a>. I
              used my time to give back to the community and help high school students
              learn computer science. The at the high school instructor, Ms. Grasso
              was very thankful for my help and some of the students were inspired
              by my knowledge in computer science and my commitment to help them.
              This was a very rewarding experience and reflecting on my volunteer
              work has helped me grow as a person and learn more about mentoring and
              working in groups. I presented my experience at an ACM-W meeting after
              I had finished and I hope that my experience inspires others in the
              group to do more.
            </p>
          </div>
          
          <div className='text-dump col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6  col-xs-12'>
            <p>
              Through my experience at UC I have grown to learn that difficulty is
              an invitation, a chance to grow as a person and this adversity should
              be approached with open arms. Not everyone will be as open to
              challenge and I must accept that, I cannot change how my peers
              approach problems, I can only adapt how I interact with these other
              students and use this to improve my own experience and hopefully leave
              a positive impression to those around me. I hope to take this with me
              as a move forward in my college career.
            </p>
            <p>
              One piece of advice I will always hold with me is "One life is too
              short to do everything" - Massimo Vignelli. As I continue to get
              older and try new challenges, this advice becomes more and more
              relevant and I can truly understand its importance.
            </p>
          </div>
        </div>

        <EmptyPadding height='15vh'/>

        <div className='row'/>
      </Cover>

    </div>

  )
}

export default YearOneReview
