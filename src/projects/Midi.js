import React from 'react';
import { Cover, EmptyPadding } from '../Components';
import '../App.css';

const ret = function () {
  return (
    <div>
      <Cover image='https://drive.google.com/uc?export=view&id=12i83VxJu4qOh1Ebe0YwEMDSnDYMD2Ax1' height="100%">

        <EmptyPadding height='20vh'/>

        <div className='row center-block White-box'>
          <h1 align='center'>MIDI Improvisor</h1>
          <h2 align='center'>(Oct 2016)</h2>

          <div className='col-lg-offset-3 col-lg-6 col-xs-12'>
            <p>
              Now the program can read in either specially written text files that
              represent a music sheet or from midi files with different tracks for
              chords and the melody. Then, the program will take the results from
              this data and use the melody and chords to compose a song.
            </p>
            <p>
              In order to use the application, you can use the GUI launched when the
              FakeMidi.jar is executed (found in builds). The GUI will present the
              user with two text boxes for input and output. The path of the input
              can be directly typed into the load box or it can be selected using
              the dialog created when the select file button is pressed. Once a
              file is selected, it must be loaded by pressing the load file button.
              After the file is loaded, it can be exported to the file specified
              in export file text box. A export location can be specified using
              the select export button.
            </p>
            <p>
              The full project is posed to <a href='https://devpost.com/software/fakemidi'>devpost</a>.
            </p>
          </div>
          
          <div className='col-lg-offset-3 col-lg-6 col-xs-12'>
            <h1 align='center'> Samle of project </h1>
            <iframe title="Sample Music" src="https://www.youtube.com/embed/5eRjky8j_Eg" className="Video-content"/>
          </div>
        </div>

        <EmptyPadding height='15vh'/>

        <div className='row'/>
      </Cover>

    </div>

  )
}

export default ret
