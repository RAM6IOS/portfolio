import Head from 'next/head'
import { Container, Row, Card, Button,Carousel,CarouselItem } from 'react-bootstrap'
//import Imag from './imag1.jpg'
import Peg1 from "./peg1"
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3,DiReact } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs"
import { SiMaterialUi } from "react-icons/si";




export default function Home() {
  return (
    <>
<div className="imageovar">

  <img src="imag1.jpg" alt="" className='imag1'  />
  <div className="artcl">

    <h1>HOLLE</h1>
    <p>I am Bouchedoub Ramzi </p>

  </div>


</div>

    <div className="about">
      <h1>About My</h1>

      <p>

        <p>I am Bouchedoub Ramzi ,</p>  <p>I am Web Developer ,</p> <p>I live in Algeria,</p> <p>It starts operating in 2019</p>
      </p>


    </div>

    <div className='work'>

      <h1> work tools</h1>

      <h2><AiFillHtml5 className="html"/> Html</h2>
      <p>Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript</p>
      <h2><DiCss3 className="css"/>  CSS</h2>
      <p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript</p>
     <h2><SiJavascript className="js"/> javascript</h2>
     <p>JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions</p>

     <h2><BsFillBootstrapFill className="boostrab"/> Bootstrap</h2>
     <p>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.</p>

     <h2><SiMaterialUi className="matrului"/> Material Ui </h2>
     <p>React components for faster and easier web development. Build your own design system, or start with Material Design.</p>
     <h2><DiReact className="react"/> Ract</h2>
     <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.</p>



    </div>



    </>
  )
}
