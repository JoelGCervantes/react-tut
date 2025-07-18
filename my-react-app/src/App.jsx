import Button from './expirements/button'
import Student from './expirements/Student.jsx'
function App() {

  return (

    //<Header></Header> This is valid,but shorthand way below
    // <></> = "fragement" used to technically return a single element
    <>
      <Student name="Spongebob" age={30} isStudent={false} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Sandy" age={35} isStudent={true} />
      <Student name="Squidward" age={50} isStudent={false} />

    </>

  );

}

export default App
