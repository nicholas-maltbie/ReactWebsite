import React from 'react';
import { Cover, EmptyPadding } from '../Components';
import '../App.css';

const Cchmc = function () {
  return (
    <div>
      <Cover image="https://drive.google.com/uc?export=view&id=1w3zx9C185oCTP3VFd4_cGuB0P7YkrwX5" height="100%">

        <EmptyPadding height='20vh'/>

        <div className='row center-block White-box'>
          <div className='text-dump col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6  col-xs-12'>
            <h1 align='center'>Working with Cincinnati Children's Hospital Medical Center (CCHMC)</h1>
            <h3 align='center'> Summer 2017 (May-Aug)</h3>

            <p>
              I created an automated pipeline to generate covariance data about
              protein sequences (<a href="https://www.google.com/url?q=https://bmcbioinformatics.biomedcentral.com/track/pdf/10.1186/s12859-016-0975-z?site%3Dbmcbioinformatics.biomedcentral.com&sa=D&ust=1503776639757000&usg=AFQjCNEmzQJc_dPDJ6v3Ad0ahwCYKDDCsA">CoeViz: a web-based tool for coevolution analysis
              of protein residues. Frazier Baker and Aleksey Porollo</a>). Covariance
              data describes the evolutionary profile of a protein, this is useful
              for determining interaction sites on proteins and relates to protein
              folding and function. The data processed was open source data: the
              Baker's Yeast protein set from National Center for Biotechnology
              Information (NCBI) database and the BioLiP data is from Jianyi Yang,
              Ambrish Roy and Yang Zhang at the Department of Computational Medicine
              and Bioinformatics, University of Michigan. The Baker's Yeast dataset
              is simply a collection of protein sequences and the BioLiP dataset is
              a set of labeled sequences with information about structure and
              interaction sites.
            </p>

            <img alt="Polyview render"
            src='https://drive.google.com/uc?export=view&id=16GLovm6rc8YAT2voG78OwX2IYh8G8QMI'
            className="Image-content"/>
            <p align="center">
              Image of polyview identification of protein protein interaction sites (pink) for test sequence.
            </p>

            <p>
              This pipeline is composed of bash macros that call python, R, and perl
              scripts that I adapted or wrote and some more advanced programs that
              Dr. Porollo has created in his research. This data can potentially be
              used by machine learning to predict interaction sites on proteins in
              the future. As part of the pipeline, I first used Basic Local Alignment
              Search Tool (BLAST) to reduce redundancy in the dataset. These resulting
              sequences were then run through comparison analysis against a larger
              database and the results were aligned and interpreted to by other
              programs. This whole process has taken about two months and may not
              finish before I leave this summer.
            </p>
          </div>
          
          <div className='text-dump col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6  col-xs-12'>
            <h2 align="center">Experimenting with Tensor Flow to predict BSI Results</h2>

            <p>
              In addition to generating covariance metrics, I also worked with using
              Tensor Flow to predict patient results based on samples. I was given
              samples about patients over time and labels for which patients became
              sick over time. There are only about 100 patients in the dataset so
              that did not leave much room for error or noise (Majority of the normal
              are designed to work with thousands or millions of data points). To
              resolve the limited data, I normalized and filtered for redundant
              data points. I broke the data up by patient and attempted to group the
              input vectors. The raw data has over 2,000 values per sample. I
              normalized all the values between 0 and 1 using various methods and
              grouped the data based on different conditions. I wrote a few python
              scripts to manage data generation and a few bash scripts to partially
              automate data generation.
            </p>
            <p>
              After the data was normalized, I used various methods of machine
              learning to predict results based on the data. These implementation
              were developed using Jupyter Notebook in an Anaconda environment with
              python. Some methods I used consisted of Kernel Ridge, Linear Support
              Vector Machine, Linear Ridge, and Stochastic Gradient Descent; all
              methods found in SciKit learn, a python library. Additionally, I used
              a simple Dense Neural Network (DNN) with Tensor Flow. These methods
              all took in a patient's sample and attempted to determine if the patient
              is sick. The results were about 60 to 70% accuracy with a high false
              negative rate. This was alright but without more data points, would be
              difficult to improve.
            </p>
            <p>
              In order to make use of the redundant data, I decided to use a
              Recurrent Neural Network (RNN) and used a Long Short Term Memory
              (LSTM) cell in Tensor Flow's library to look at a patient's records
              over time. This proved to have a much better true positive rate and
              an accuracy of around 75%. I am spending time tuning the values to
              improve the accuracy and quality of the neural network. I am using
              Jupyter notebook because it makes the adapting the network and adding
              documentation easy. As of now, there is not enough data to conclude
              that these methods work for classification but the methods do show
              promise and possible future improvement.
            </p>


            <img alt="DNN Learning Graphs"
            src= 'https://drive.google.com/uc?export=view&id=1QsYpVMiMlGA2Ijf364whi0t7FyCmtFWl'
            className="Image-content"/>
            <p>
              Cost (distance from perfect prediction) of LSTM (left) and cost of
              DNN (right) as they train. Blue line is validation set, orange line
              is training set. LSTM avoids overfitting better than the DNN. Images
              generated using Tensorboard.
            </p>
            <img alt="RNN Learning Graphs"
            src = 'https://drive.google.com/uc?export=view&id=1zVPhu13fQAcCQINim3CJOBJ5T7mXwkhp'
            className="Image-content"/>
            <p>
              Statistics of finalized RNN Network as it trained. Orange line is
              training set and Blue line is validation set. Lines are smoothed so
              dim/background colors represent actual points (smoothing reduces the
              graph's variation).
            </p>
          </div>

          <div className='text-dump col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6  col-xs-12'>
            <img alt="DNN Layout"
            src='https://drive.google.com/uc?export=view&id=1OgTVPZty18-XY2ITxL4I4X2BlT0kS55l'
            className="Image-content"/>
            <p align="center">
              Strucutre of DNN
            </p>
            <img alt="RNN Layout"
            src= 'https://drive.google.com/uc?export=view&id=1Xf_9ea23YEBDxld-93F9awlr5UUClAcW'
            className="Image-content"/>
            <p align="center">
              Strucutre of RNN
            </p>
          </div>
        </div>

        <EmptyPadding height='15vh'/>

        <div className='row'/>
      </Cover>

    </div>

  )
}

export default Cchmc
