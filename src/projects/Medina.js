import React, { Component } from 'react';
import { Project, Cover, EmptyPadding } from '../Components';
import { HashLink } from 'react-router-hash-link';
import '../App.css';
import img from "../media/4a14cec076cc9bc0.jpg";

const ret = function () {
  return (
    <div>
      <Cover image={img} height="100%">

        <EmptyPadding height='20vh'/>

        <div className='row center-block White-box'>
          <h1 align='center' id="Medina">Medina</h1>
          <h2 align='center'>(Sept - Dec 2016)</h2>

          <div className='text-dump col-lg-offset-3 col-lg-6 col-xs-12'>
            <h2 id="Introduction" align="center">Introduction</h2>
            <p>
              Medina is a board game. For my project in my Programming python course
              at UC during Fall semester 2016, I decided to implement this board
              game and create an AI to play it. This project is an attempt to create
              the board game Medina and implement some sort of machine learning into
              the game. These goals were not met but the results still proved
              interesting. The game was fully implemented but a learning Neural
              Network was not implemented by the end of the project. I have gained a
              much better theoretical understanding of neural networks as a result of
              this project.
            </p>

            <p>
              To find the source code of this project, go to <a href="https://github.com/nicholas-maltbie/Medina">
              the project page</a> on github for more details.
            </p>

            <p>
              Below is the report I wrote on this project, to see the report
              as a PDF, click <a href="https://docs.google.com/document/d/1J_SvtCRRIIJmJaO5r8T8v3cF5rBgT4qaOnFdGPvMvvc/edit?usp=sharing">here</a>. I
              translated the report to HTML and adjusted the style to fit my website
              design.
            </p>
          </div>
        </div>

        <EmptyPadding height='10vh'/>

        <div className='row center-block White-box'>
          <div className='text-dump col-lg-offset-3 col-lg-6 col-xs-12'>
            <h2 id="TableOfContents">Table of Contents</h2>
            <ul>
              <li><HashLink to="#Medina">Medina</HashLink></li>
              <ul>
                <li><HashLink to="#Introduction">Introduction</HashLink></li>
                <li><HashLink to="#TableOfContents">Table of Contents</HashLink></li>
                <li><HashLink to="#Usage">Usage</HashLink></li>
              </ul>
              <li><HashLink to="#/projects/Meinda/#TheGame">The Game</HashLink></li>
              <ul>
                <li><HashLink to="#Design">Design</HashLink></li>
                <li><HashLink to="#Objective">Objective</HashLink></li>
                <li><HashLink to="#Results">Results</HashLink></li>
                <li><HashLink to="#FutureImprovements">Future Improvements</HashLink></li>
                <li><HashLink to="#/projects/Meinda/#References">References</HashLink></li>
                <li><HashLink to="#/projects/Meinda/#Librariesused">Libraries Used</HashLink></li>
                <li><HashLink to="#/projects/Meinda/#Development">Development</HashLink></li>
              </ul>
            </ul>
          </div>
        </div>

        <EmptyPadding height='10vh'/>

        <div className='row center-block White-box'>
          <div className='text-dump col-lg-offset-3 col-lg-6 col-xs-12'>
            <h2 id="Usage">Usage</h2>
            <p>
              In order to use the project, python3 must be installed along with
              tkinter, tensor flow and numpy. To run the project, simply do the
              command "python3 Main.py". Main.py is a script that will launch a
              small graphical display with a play game button. Pressing play game
              will load a panel where options can be selected to modify and set up
              a game. As of this writing, only human player or random computer
              player are the options. All human players will play on the same
              computer and a small dialog will appear informing players when it is
              his or her turn. Once a game is completed, it will announce the final
              scores. After the final scores are announced, the window can be
              closed and the application will return to the main window from the
              start.
            </p>
            <p>
              The application does not explain how to play the game, this could be a
              future improvement. When playing the game, it does enforce the game"s
              rules. These rules can be found in the
              <a href="http://www.boardspace.net/medina/english/WGG_Medina_Rules_GB_Web.pdf">rules pdf</a>
               for Medina.
            </p>

            <p align="center"> Start Panel </p>
            <img alt="Start Panel Picture" src={require("../media/projects/MedinaStart.png")} className="Image-content"/>
            <p align="center"> Options panel </p>
            <img alt="Options Panel Picture" src={require("../media/projects/MedinaOpt.png")} className="Image-content"/>
            <p align="center"> Game Screen </p>
            <img alt="Virtual Game Picture" src={require("../media/projects/MedinaGame.png")} className="Image-content"/>
          </div>
        </div>

        <EmptyPadding height='10vh'/>

        <div className='row center-block White-box'>
          <div className='text-dump col-lg-offset-3 col-lg-6 col-xs-12'>
            <h2 id="TheGame">The Game</h2>
            <p>
              Media is a board game published by Stronghold Games ( <a href="https://boardgamegeek.com/boardgame/167270/medina-second-edition">
                more information here</a>, <a href="https://strongholdgames.com/store/board-games/medina/">official website for game</a>
              ) and designed by Stefan Dorra. I claim to have no ownership of the
              game and this project is only an attempt to use machine learning to
              play the game.
            </p>
            <p>
              The game is played by two to four players and the players all build a
              city together. While building the city, players can claim buildings
              for points. Buildings near the well, market or walls are worth more
              points than buildings not close to anything important in the city.
            </p>
            <p align="center"> Picture of the game in Real Life </p>
            <img alt="Board Game Picture" src={require("../media/projects/MedinaIRL.jpg")} className="Image-content"/>
            <p align="center"> Image from Board Game Geek by Julian Pombo uploaded on 2015-08-03 <a href="https://boardgamegeek.com/image/2613390/medina-second-edition?size=medium">
              image source</a></p>
            <p>
              Each player is given a limited amount of resources and on each of
              their turns, players can build the city or claim a building; players
              can take a total of two actions on each of their turns. There are
              four different colors of buildings and each player can only claim one
              of each color. After every player has claimed a building of each
              color, the game ends.
            </p>
            <p>
              A player can place any two or two of the same pieces from the following list on each of their turns:
            </p>
            <ol>
              <li><i>Buildings</i> : can be used to start a new building or grow an
                existing, unclaimed building. Four colors of buildings: Grey, Brown
                Orange and Purple.
              </li>
              <li><i>Rooftops</i> : can be used to claim an unclaimed building
                currently on the board. A player can only own one of each color
                building.
              </li>
              <li><i>Stables</i> : can be attached to an existing claimed building
                and grows the building for purposes of ardency and scoring.
              </li>
              <li><i>Merchant</i> : merchants build in a claim across the board and
                award extra points to buildings that the merchants are next to.
              </li>
              <li><i>Walls</i> : walls are built around the edge of the board
                growing out from towers at the corners. Walls that are adjacent to
                buildings award extra points to the building for each wall touching
                the building.
              </li>
            </ol>
            <p>
              While building, there are a few restrictions that players can utilize
              to take advantage of the current board and further their own score or
              hurt other players ability to play. For example, only one unclaimed
              building of each color can be built at a time and once a building is
              claimed it can only be extended by attaching stables.
            </p>
            <p>
              Once the game has ended, the buildings each player has claimed scores
              based on the position and elements around the building (walls, the
              well, merchants and stables all give additional points). For the
              full rules and scoring of the game, view go <a href="http://www.boardspace.net/medina/english/WGG_Medina_Rules_GB_Web.pdf">
                here</a>
            </p>
            <p>(this HashLink is listed on the github repo as <a href="https://github.com/nicholas-maltbie/Medina">this pdf</a>
              at the end of The Game section)
            </p>
          </div>
        </div>

        <EmptyPadding height='10vh'/>

        <div className='row center-block White-box'>
          <div className='text-dump col-lg-offset-3 col-lg-6 col-xs-12'>
            <h2 id="Design">Design</h2>
            <p>
              While working on the project, I made many design decision about
              concerning the organization and management of data. In order to do
              this, I followed a relatively consistent format. This format required
              me to make modules for each kind of element in the board game that
              could make an abstract data type (ADT) to represent the element. This
              ADT could then later be used to find information about the element.
              The game consisted of many different elements: a Market, a collection
              of buildings, tiles, players, a board, and so on… each of these ADT’s
              modules is found in the github repo. The documentation of each of
              these modules describes the purpose of the ADT and contains functions
              for interacting with the ADT.
            </p>
            <p>
              At a higher level, the game revolves around a board state. This board
              state is made up of three components, the players, a board, and the
              tile supply. This board state is modified by Moves. Moves are generated
              by Agents, and Agents are moderated by a Game. These interaction can
              be shown to the user via the BoardCanvas which is a class in the
              BoardCanvas.py module. Here are some diagrams that describe the
              relationships between these different aspects of the game. Again,
              each of these modules is described in detailed python documentation in
              their respective files on the <a href="https://github.com/nicholas-maltbie">Github Repo</a>.
            </p>
            <p>Diagram of the Definition of a Board State</p>
            <img src={require("../media/projects/MedinaBoard.png")} className="Image-content"/>
            <p>
              Board State is an abstract definition so there is no ADT or module for
              Board State. In different parts of the project, modules will use a
              Board, Tile Supply and Collection of Players to represent the board
              State. This is shown in the Agent module and getting moves from
              players; the board state is passed as three parameters.
            </p>
            <p>Diagram of how the Game is controlled from the Game.py file</p>
            <img src={require("../media/projects/MedinaDesign.png")} className="Image-content"/>

            <p>
              In Addition to making the game, there needed to be a display mechanism.
               This display is almost exclusively in the BoardCanvas Module in the
               BoardCanvas.py file. The Graphical components of this project were
               all implemented using tkinter in Python3. The Board Canvas takes a
               Board State and can render it on the screen. The HumanAgent module
               is responsible for rendering and making interactive parts of the
               board through use of the BoardCanvas Module. The board canvas uses
               the tkinter canvas module to draw images on the screen and create
               interactive elements that a player can use to modify the board state
               and make moves.
            </p>
            <p>Example of the board canvas with a human agent.</p>
            <img src={require("../media/projects/MedinaVirtual.png")} className="Image-content"/>

            <p>
              The game uses a setup of agents. As defined in the documentation, "an
              agent is responsible for making a move decision based on a board.
              Players will make two moves (unless it is the first turn, in which
              case only one move is allowed) This module will have support for
              getting all possible moves (or ranges for all types of moves as there
              are many similar moves of the same type such as placing buildings or
               stables). An agent only needs to be the following function:
               make_decision(board, player_index, players, tile_supply, num_moves)"
            </p>
            <p>
              As show in the diagram of the Game, an agent makes moves that modify
              the board state. A human agent is slightly different: a human will
              interact with the board canvas to make moves and has an intermediate
              step between the board state and the player"s actions.
            </p>
            <p>Diagram of Human Agent design.</p>
            <img src={require("../media/projects/MedinaAgency.png")} className="Image-content"/>
          </div>
        </div>

        <EmptyPadding height='10vh'/>

        <div className='row center-block White-box'>
          <div className='text-dump col-lg-offset-3 col-lg-6 col-xs-12'>
            <h2 id="Objective">Objective</h2>
            <p>My objectives at the start of the project:</p>
            <ul>
              <li>Implement the game in Python with a GUI interface and allow players
                to play the game.
              </li>
              <li>Make the game a network game so multiple players could play the same
                game on different machines. Network game play is a lower objective.
              </li>
              <li>Add an AI to the game that utilizes machine learning and pattern
                recognition to make moves and become better at playing the game as
                time goes on.
              </li>
              <li>Give the AI the ability to watch and learn from records of games.
              </li>
              <li>Train the AI to the point in which it can consistently play the
                game and get a decent score.
              </li>
              <li>Possibly develop different versions of the AI that can play the game
                with different strategies (aggressive, risky, impatient) and
                difficulty.
              </li>
            </ul>
          </div>
        </div>

        <EmptyPadding height='10vh'/>

        <div className='row center-block White-box'>
          <div className='text-dump col-lg-offset-3 col-lg-6 col-xs-12'>
            <h2 id="Results">Results</h2>
            <p>
              As can be clearly seen, these objectives were not met and only the
              game was implemented with no machine learning. Although there is no
              machine learning for medina, the format for higher level game playing
              can be implemented through use of the Agent Module. In the AIPractice
              Directory, there are many files dedicated to creating and managing a
              neural network. These use the same layout of an agent setup to
              implement a Neural Network that can play Tic Tac Toe. This was modeled
              from Daniel Slater"s <a href="https://github.com/DanielSlater/AlphaToe">Alpha Toe</a>
              project in which he used the same machine learning used by Google’s
              Alpha Go to play the game Tic Tac Toe. This was planned to be
              implemented with Medina but I ran out of time. A person can play
              against the Tic Tac Toe neural network by running the AIPractice/tttAI.py
              script with python3. The Neural network will train against a random
              opponent by use of a policy gradient in the tttTrain.py script.
            </p>
            <p>
              Although only a random computer opponent was developed and tested by
              this time, the use of the Agent module allows for the easy creation of
              more competent opponents and even the creation of a Neural Network as
              shown by Tic Tac Toe.
            </p>
          </div>
        </div>

        <EmptyPadding height='10vh'/>

        <div className='row center-block White-box'>
          <div className='text-dump col-lg-offset-3 col-lg-6 col-xs-12'>
            <h2 id="FutureImprovements">Future Improvements</h2>
            <p>
              Some easy future improvements to this design would be implementing
              different kinds of opponents such as those implemented in Dainel
              Slater"s Alpha Toe project in the <a href="https://github.com/DanielSlater/AlphaToe/tree/master/techniques">techniques directory</a>
              . These techniques represent different kinds of machine learning and
              could be compared against each other or used to train a neural network.
              The kind of machine learning that the neural network would use is
              classified as Reinforcement Learning. Reinforcement learning is when
              the machine will adjust its decision making process based on the results
              of previous experiences. For example, if a neural network performs well
              in a game, the recorded moves will be weighted more favorably. The results
              obtained by Imran Ghory in his paper "Reinforcement Learning in Board
              Games" could be applied in more detail to Medina. Medina has an
              extremely complicated search space and one player only represents a
              fourth of the actions in the game so the challenge is mainly how can
              the player optimize their score given a limited amount of influence.
              The game has no random chance so it is difficult even for humans to
              play well. Medina is not as complicated as GO but still represents an
              interesting problem which is why I chose it for my project; it has an
              unlimited space for improvement and analysis.
            </p>
          </div>
        </div>

        <EmptyPadding height='10vh'/>

        <div className='row center-block White-box'>
          <div className='text-dump col-lg-offset-3 col-lg-6 col-xs-12'>
            <h2 id="References">References</h2>
            <p>
              Ghory, Imran. "Reinforcement learning in board games". May 4, 2004.
              Autonomous Learning Laboratory. College of Information and Computer
              Sciences University of Massachusetts Amherst
              (<a href="https://pdfs.semanticscholar.org/0517/501ddea186aeb6c6de30b0c5c27e1e4f9d96.pdf">source</a>)
            </p>
            <p>
              Lundh Fredrik. "An Introduction To Tkinter". Effbot.org. 2005.
              (<a href="http://effbot.org/tkinterbook/tkinter-index.htm">source</a>)
            </p>
            <p>
              "Python Tkinter Canvas". Tutorials Point Simply Easy Learning.
              (<a href="https://www.tutorialspoint.com/python/tk_canvas.htm">source</a>)
            </p>
            <p>
              "Graphical User Interfaces with Tk" The Python Software Foundation.
              2016. (<a href="https://docs.python.org/3/library/tk.html">source</a>)
            </p>
            <p>
              Slater Daniel. "Alpha Toe". Github. <a href="http://www.danielslater.net/">http://www.danielslater.net/</a>.
              Nov 6. 2016 (<a href="https://github.com/DanielSlater/AlphaToe">github repo</a>
              , <a href="http://www.danielslater.net/2016/10/alphatoe.html">source</a>)
            </p>
            <p>
              Singh, Aarti. "Neural Networks". Carnegie Mellon University School of
              Computer Science. 2010.
              (<a href="http://www.cs.cmu.edu/~aarti/Class/10701/slides/Lecture22.pdf">source</a>)
            </p>
            <p>
              Stergiou, Christos and Siganos, Dimitrios. "Neural Networks". Imperial
              College London. 1998. (<a href="https://www.doc.ic.ac.uk/~nd/surprise_96/journal/vol4/cs11/report.html#References">source</a>)
            </p>
            <p>
              Tensor Flow. Google Brain Team. 2016. (<a href="https://www.tensorflow.org/about.html">source</a>)
            </p>
            <p>
              Shipman, John W.. "Tkinter 8.5 reference: a GUI for Python". New Mexico
              Tech Computer Center. <a href="www.nmt.ecu/tcc">www.nmt.ecu/tcc </a>
              (<a href="http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/index.html"> source </a>)
            </p>
          </div>
        </div>

        <EmptyPadding height='10vh'/>

        <div className='row center-block White-box'>
          <div className='text-dump col-lg-offset-3 col-lg-6 col-xs-12'>
            <h2 id="LibrariesUsed">Libraries Used</h2>

            <p><i><a href="https://wiki.python.org/moin/TkInter">Tkinter</a></i> - for GUI
              elements Tkinter is usually installed with most distribution of
              python, to check if it is installed, open up the python3 interpreter
              and try the following commands.
            </p>
            <pre>
              import tkinter
              tkinter._test()
            </pre>
            <p>This should give a basic window that can be interacted with.</p>
            <p>If it does not give a window, the command to install tkinter on
              Ubuntu is "sudo apt-get install python3-tk", more specific
              information for each os to install tkinter can be found <a href="http://www.tkdocs.com/tutorial/install.html">here</a>
            </p>
            <p>Tkinter will be used to make the GUI for the game.</p>

            <p><i><a href="http://www.numpy.org/">NumPy</a></i> - Mathematics Library </p>
            <p>to install NumPy, use pip:</p>
            <pre>
              pip3 install numpy
            </pre>
            <p>NumPy will be useful to compute and do operations on the large
              amounts of numbers and math involved in analyzing a board game.
            </p>

            <p><i><a href="https://github.com/nicholas-maltbie/Medina/blob/master/www.tensorflow.org">Tensor Flow</a></i> -
              Neural Network Library
            </p>
            <p>to install tensorflow, use pip:</p>
            <pre>
              pip3 install tensorflow
            </pre>
            <p>Tensorflow is used to make and read neural networks.</p>
          </div>
        </div>

        <EmptyPadding height='10vh'/>

        <div className='row center-block White-box'>
          <div className='text-dump col-lg-offset-3 col-lg-6 col-xs-12'>
            <h2 id="Development">Development</h2>
            <p>
              The entire development of this project was recorded by the commit log
              on the <a href="https://github.com/nicholas-maltbie/Medina/commits/master">github repository</a>.
              This was almost exclusively developed by me besides the code from
              other projects. The commit log documents what code was modified when
              and by whom.
            </p>
            <p>
              During development, the first two weeks were attempting to develop the
              project with an object oriented interface. After this, the project was
              changed to an Abstract Data Type design for each element of the project.
              This was a large setback and caused other parts of the project to be
              cut and adjusted the scope of the project.
            </p>
          </div>
        </div>

        <EmptyPadding height='15vh'/>

        <div className='row'/>
      </Cover>

    </div>

  )
}

export default ret
