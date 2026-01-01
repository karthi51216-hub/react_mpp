import { Button } from "./components/button.jsx";
import Greeting from "./components/greeting.jsx";
import PersonalBio from "./components/personal.jsx";
import HobbiesList from "./components/hobbies.jsx";
 import WelcomeMessage from "./components/welcome.jsx";
import ClickCounter from "./components/counter.jsx";
import ShowHideText from "./components/text build.jsx";
import Clock from "./components/timer.jsx";
 


function App() {
    const myHobbies = ["Reading", "Cycling", "Cooking", "Photography"];
    const isVisible = true; 

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
        </>
    );
}

export default App;