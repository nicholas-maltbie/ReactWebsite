import React from 'react';
import { Cover, EmptyPadding } from '../Components';
import '../App.css';

const ISCB2018 = function () {
  return (
    <div>
      <Cover image={require("../media/backgrounds/iscb2018.jpg")} height="100%">

        <EmptyPadding height='20vh'/>

        <div className='row center-block White-box'>
          <h1 align='center'>Metalloproteome landscape from the amino acid Covariance perspective</h1>
          <h2 align='center'>(July 9th, 2018)</h2>

          <div className='col-lg-offset-3 col-lg-6 col-xs-12'>
            <p>
              Poster presented at 2018 Intelligent Systems for Molecular Biology Conference. The poster is listed on the website's <a href='https://www.iscb.org/cms_addon/conferences/ismb2018/posters.php'>poster list</a>.
            </p>
            <span title = "click for full pdf">
              <a href='https://drive.google.com/file/d/1_S-2Fh1qw-FN0dsjCJrH_xUfx_A8ngAI/view?usp=sharing'><img src={require("../media/blog/metalloproteome-poster.jpg")} className='Image-content' alt="Showcase Poster"/></a>
            </span>
            <p>
              <b>Short Abstract</b>: Metal binding proteins are estimated to constitute at least one third of the proteome in any living organism. There is a great need for developing a reliable sequence-based annotation method for metal binding sites. We approached this problem using amino acid covariance analysis. 6090 non-redundant metal binding proteins were retrieved from the BioLiP database. A wide set of cumulative features derived from the top co-varying residues for a given site were evaluated. The best performing feature to discriminate metal binding from non-binding sites was found to be the individual conservation score (Shannon entropy). For metal specificity, the correlation-based metric appears the most informative to discriminate one metal versus others, as well as to achieve their pairwise distinctions. When discerning one type of metal from the other five types, metals can be discriminated in the following descending order of signal strength: Zn > Cu > Ca > Mg > Mn > Fe. In pairwise comparisons, Ca vs Mg appears to be the hardest metal pair to discern. Our study strongly suggests the possibility of developing an accurate sequence-based method for the annotation of metal binding sites and their specificity.
            </p>
          </div>
        </div>

        <EmptyPadding height='15vh'/>

        <div className='row'/>
      </Cover>

    </div>

  )
}

export default ISCB2018
