import React, { Component } from 'react';
import { Project, Cover, EmptyPadding } from '../Components';
import { HashLink } from 'react-router-hash-link';
import '../App.css';
import img from "../media/4a14cec076cc9bc0.jpg";

const BubbleRep = function () {
  return (
    <div>
      <Cover image={img} height="100%">

        <EmptyPadding height='20vh'/>

        <div className='row center-block White-box'>
          <h1 id="BubbleShooter" align="center"> Bubble Shooter JS </h1>
          <h2 align='center'>(April 2017)</h2>
          <h3 align="center">Report on Simple Javascript Game</h3>
          <h5 align="center"> Made by Nicholas Maltbie </h5>

          <div className='text-dump col-lg-offset-3 col-lg-6 col-xs-12'>
            <h2 id="Introduction" align="center">Introduction</h2>

            <p>
              Bubble Shooter is a simple javascript game I made. To play the game
              go to <a href="/#/bubble">this page</a>. This is my report on the
              project. To see the report as a pdf, click
              <a href="https://drive.google.com/file/d/0B0gCZqueOMVIWEZyQ0V4cmVTVDQ/view"> here</a>.
            </p>
          </div>
        </div>

        <EmptyPadding height='10vh'/>

        <div className='row center-block White-box'>
          <div className='text-dump col-lg-offset-3 col-lg-6 col-xs-12'>
            <h2 id="TableOfContents">Table of Contents</h2>
            <ul>
              <li><HashLink to="#BubbleShooter">Bubble Shooter</HashLink></li>
              <li><HashLink to="#Introduction">Introduction</HashLink></li>
              <li><HashLink to="#TableOfContents">Table of Contents</HashLink></li>
              <li><HashLink to="#Description">Description</HashLink></li>
              <li><HashLink to="#Gameplay">Gameplay / Instructions</HashLink></li>
              <ul>
                <li><HashLink to="#GameDesign">Game Design</HashLink></li>
                <li><HashLink to="#ClassLayout">Class Layout</HashLink></li>
                <li><HashLink to="#ShooterDesign">Shooter Design</HashLink></li>
                <li><HashLink to="#GridDesign">Grid Design</HashLink></li>
                <ul>
                  <li><HashLink to="#CollisionDetection">Collision Detection</HashLink></li>
                  <li><HashLink to="#SavingGrid">Saving the Grid in Memory</HashLink></li>
                  <li><HashLink to="#Color">Contigious Color Identification</HashLink></li>
                </ul>
                <li><HashLink to="#BubbleDesign">Bubble Design</HashLink></li>
                <li><HashLink to="#ManagerDesign">Manager Design</HashLink></li>
              </ul>
              <li><HashLink to="#FutureImprovements">FutureImprovements</HashLink></li>
              <li><HashLink to="#Development">Development</HashLink></li>
              <li><HashLink to="#References">References</HashLink></li>
            </ul>
          </div>
        </div>

        <EmptyPadding height='10vh'/>

        <div className='row center-block White-box'>
          <div className='text-dump col-lg-offset-3 col-lg-6 col-xs-12'>
          <h2 id="Description">Description</h2>
          <p>
            Bubble Shooter is a simple game where a player shoots bubbles at a
            grid to make sets. A set is three or more contiguous bubbles of the
            same color. When a player taps on the screen or clicks with a mouse,
            a bubble will be fired at the grid and attach itself to the grid.
            Every few shots, an extra row will be added to the grid. For every
            few rows that are added to the grid, new colors will be added. When
            the number of colors is increased, the game becomes more difficult as
            it is harder to make sets of three. When the number of rows reaches a
            certain number, the player will lose. You are just attempting to get
            the highest score you can, there is no win condition. This project
            was developed using github and the project has its own
            <a href="https://github.com/nicholas-maltbie/BubbleShooterJS/">github page</a>.
          </p>
          </div>
        </div>

        <EmptyPadding height='10vh'/>

        <div className='row center-block White-box'>
          <div className='text-dump col-lg-offset-3 col-lg-6 col-xs-12'>
            <h2 id="Gameplay">Gameplay / Instructions</h2>
            <p>When starting a game, you will see a view like the image below.</p>

            <img alt="Bubble Start" src={require("../media/projects/BubbleMain.png")}
              className="Image-content"/>

            <p>Below are the instruction for how to play the game.</p>
            <p>When playing the game, you need to shoot from the arrow and attach
             bubbles to the grid. The objective of the game is to stop the balls
             from expanding below the red line.
            </p>
            <img alt="Instructions One" src={require("../media/projects/bubbleInstruction1.jpg")}
              className="Image-content"/>

            <p>If the grid expands below the red line, you lose. </p>

            <img alt="Instructions Two" src={require("../media/projects/bubbleInstruction2.jpg")}
               className="Image-content"/>

            <p>
              When you click, you fill fire a ball along the path of the arrow. To
              move the arrow move your mouse (or finger) on the screen. When you
              release the mouse, the shooter will fire a ball.
            </p>

            <img alt="Instructions Three" src={require("../media/projects/bubbleInstruction3.jpg")}
              className="Image-content"/>

            <p>
              After firing, the ball will attach to the grid. The next ball in the
              shooter queue will load into the shooter and a new ball will be added
              to the queue.
            </p>

            <img alt="Instructions Four" src={require("../media/projects/bubbleInstruction4.jpg")}
              className="Image-content"/>

            <p>If you shoot a ball at a wall, it will bounce off the walls</p>

            <img alt="Instructions Five" src={require("../media/projects/bubbleInstruction5.jpg")}
              className="Image-content"/>

            <p>
              If when you shoot a ball, it forms a set of three or more balls, they
              will pop. You receive points based on the number of balls in the set (
              larget sets = more points).
            </p>

            <img alt="Instructions Six" src={require("../media/projects/bubbleInstruction6.jpg")}
              className="Image-content"/>

            <p>Bubbles will only pop when a bubble is added to the grid.</p>

            <img alt="Instructions Seven" src={require("../media/projects/bubbleInstruction7.jpg")}
              className="Image-content"/>

            <p>
              If bubbles disconnect from the top row, they will also pop and give
              extra points.
            </p>

            <img alt="Instructions Eight" src={require("../media/projects/bubbleInstruction8.jpg")}
              className="Image-content"/>

            <p>
              After a few shots (indicated by next) a new row will be added. This
              will push the other rows down. If the balls reach the red line, you
              will lose.
            </p>

            <img alt="Instructions Nine" src={require("../media/projects/bubbleInstruction9.jpg")}
              className="Image-content"/>

            <p>As new rows are added, new colors will be added</p>

            <img alt="Instructions Ten" src={require("../media/projects/bubbleInstruction10.jpg")}
              className="Image-content"/>

            <p>When the bubbles pass the red line, you lose.</p>

            <img alt="Instructions Eleven" src={require("../media/projects/bubbleInstruction11.jpg")}
              className="Image-content"/>

            <img alt="Instructions Twelve" src={require("../media/projects/bubbleInstruction12.jpg")}
              className="Image-content"/>

            <p>Press the "full" button at the bottom of the screen to make the game
              fullscreen</p>

            <img alt="Instructions Thirteen" src={require("../media/projects/bubbleInstruction13.jpg")}
               className="Image-content"/>

            <p>That"s the basic rules and controls of the game. Good Luck!</p>

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

export default BubbleRep
