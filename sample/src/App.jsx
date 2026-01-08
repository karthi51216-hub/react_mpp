import { Button } from "./components/button.jsx";
import Greeting from "./components/greeting.jsx";
import PersonalBio from "./components/personal.jsx";
import HobbiesList from "./components/hobbies.jsx";
import WelcomeMessage from "./components/welcome.jsx";
import ClickCounter from "./components/counter.jsx";
import ShowHideText from "./components/text build.jsx";
import Clock from "./components/timer.jsx";
import StudentList from "./components/student.jsx";
import TaskManager from "./components/taskmanager.jsx";
import different from "./components/different.jsx";     
import NumberFilter from "./components/number filter.jsx";
import { useState } from "react";
import TodoList from "./components/Todo list.jsx";
import LoginForm from "./components/login form.jsx";
import ContactForm  from "./components/contact.jsx"; 
import SubscriptionForm from "./components/sunscription.jsx";








function App() {
    const myHobbies = ["Reading", "Cycling", "Cooking", "Photography"];
    const isVisible = true;
    
     const currentHour = new Date().getHours();

    const tasks = [
        { id: 1, text: "Learn React basics", completed: false },
        { id: 2, text: "Build a Task Manager", completed: false },
        { id: 3, text: "Teach students with demo", completed: false },
    ];


     const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };

    const [task, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
   
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formDataa] = useState({
    name: "",
    email: "",
    agreed: false,
  });

    const handleClick = () => {
        alert("Button clicked!");
    };

    return (
        <>
            <div>
                <Button label="Click Me" onClick={handleClick} />
            </div>
            <div>
                <Greeting name="karthi" />
            </div>
            <div>
                <PersonalBio
                    name="karthi"
                    age="25"
                    bio="i am a software developer" />
            </div>
            <main>
                <HobbiesList hobbies={myHobbies} />
            </main>
              <div>
                <WelcomeMessage />
               </div>
                  

             <div>
                <h2>Welcome to My React App</h2>
                <ClickCounter />
             </div>
                
              <div>
                {isVisible && <p>Hello, World!</p>}
            </div>

            <div>
                <h1>React Class Component Timer Demo</h1>
                   <Clock />
             </div>
              

         <div>
          <h1>Welcome to My App</h1>
         <StudentList /> 
         </div>

          <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
           <h2> Task Manager</h2>
          <TaskManager initialTasks={tasks} />
          </div>

         <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
           <h1> Welcome to My React App</h1>
         <Greeting />
       </div>


        <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1> Number Filter </h1>
      <NumberFilter />
    </div>


   <div>
      <LoginForm />
    </div>

         <div >
            <TodoList/>
          </div> 

          <div>
            <ContactForm />
          </div>

         <div>
            <SubscriptionForm />
         </div>


        </>
    );
}

export default App;
