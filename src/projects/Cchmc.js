import React, { Component } from 'react';
import { Project, Cover, EmptyPadding } from '../Components';
import { HashLink } from 'react-router-hash-link';
import '../App.css';
import img from "../media/IMG_3251-EFFECTS.jpg";

const Cchmc = function () {
  return (
    <div>
      <Cover image={img} height="100%">

        <EmptyPadding height='20vh'/>

        <div className='row center-block White-box'>
          <h1 align='center'>Working with Cincinnati Children's Hospital Medical Center (CCHMC)</h1>
          <h3 align='center'> Summer 2017 (May-Aug)</h3>

          <div className='text-dump col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6  col-xs-12'>
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
          </div>
        </div>

        <EmptyPadding height='15vh'/>

        <div className='row'/>
      </Cover>

    </div>

  )
}

export default Cchmc
