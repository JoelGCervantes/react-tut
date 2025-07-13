React is a Javascript LIBRARY not framework. It is Used to easily arrange user interfaces for web apps. It focuses on creating an interface using things called components.

A component is a self contained section of code that functions as a reusable buidling block. 

It uses a syntax extension of JavaScript called JSX (JavaScript XML). It also allows us to write HTML like code within JS code. 

React uses a virtual DOM. This is a lightweight version of the real DOM of a webpage. Changes to virtual DOM can be tracked and we can apply that change to the real DOM without refreshing the entire web-page Only that specific section. This reduces rendering performance overhead. 

vite = development server. Modern replacement to create react app

PROJECT STRUCTURE 

node modules = Contains external libraries and packages 
               that our project relies on. Build tools, utility libraries, and routing libraries are a few examples. 

public folder = Contains any public assets. It can 
                contain any public images, videos, ect.. They are not bundled during the final output. 

src folder = Where 99% of the time is spent developing. 
             Within the src folder there is an assets folder which is similar to the public folder, but files are bundled during final output. 

             main.jsx = In a way this functions as the main javascript file. React works with components that are imported. 

index.html file = main entry point of our program. 

                  Within this file in the <body></body> of our document exists a div element with an id of root. there is also a script to our main jsx file. 

package.json file = structure in key value pairs. This 
                    file contains metadata about our project. 