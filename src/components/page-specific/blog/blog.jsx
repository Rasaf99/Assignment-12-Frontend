

import './style.css'

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




const question_answer_array = [

    {
        question: "What are the different ways to manage a state in a React application?",
        answer: "Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components. There are several other ways to manage state​s in React, including the use of: Hooks, React Context API, Apollo Link State, etc."
    },

    {
        question: "How does prototypical inheritance work?",
        answer: "Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__."
    },


    {
        question: "What is a unit test? Why should we write unit tests?",
        answer: "Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages."
    },

    {
      question: "React vs. Angular vs. Vue?",
      answer: "React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework. React Elements are the smallest building blocks of React apps. They are more powerful than DOM elements because the React DOM makes sure to update them efficiently whenever something changes. Components are larger building blocks that define independent and reusable pieces to be used throughout the application. They accept inputs called props and produce elements that are then displayed to the user. On the other hand, The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework. Although Vue is not strictly associated with the MVVM (Model-View-ViewModel) pattern, its design was partly inspired by it. With Vue, you’ll be working mostly on the ViewModel layer, to make sure that the application data is processed in a way that allows the framework to render an up-to-date View.Vue’s templating syntax lets you create View components, and it combines familiar HTML with special directives and features. This templating syntax is preferred, even though raw JavaScript and JSX are also supported. Now let's talk about angular. AngularJS, the original framework, is an MVC (Model-View-Controller)) framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based. Projects in Angular are structured into Modules, Components, and Services. Each Angular application has at least one root component and one root module. Each component in Angular contains a Template, a Class that defines the application logic, and MetaData (Decorators). The metadata for a component tells Angular where to find the building blocks that it needs to create and present its view."
  }


]







export default function BLOG() {
  return (

   <div className='question_answer_component'>

     <h3  style={{marginBottom:'2rem'}}>Frequently Asked questions in the Interview</h3>

      <div className='question_answer_wrapper'>

        {

          question_answer_array.map((item)=> {

            return (
                <Accordion sx={{backgroundColor:'hsl(0, 0%, 14%)', 
                color: 'hsl(0, 0%, 95%)'}}>
                  <AccordionSummary 
                    expandIcon={<ExpandMoreIcon  sx={{color: 'hsl(0, 0%, 95%)'}}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography sx={{textAlign:'center'}}>{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{backgroundColor:'hsl(0, 0%, 19%)'}}>
                    <Typography sx={{textAlign:'center'}}>
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
            )

          })

        }

      
      
      </div>

    </div>
  );
}
