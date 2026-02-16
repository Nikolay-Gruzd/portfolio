import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {Contacts} from "./layout/sections/contacts/Contacts.tsx";
import {AboutMe} from "./layout/sections/aboutme/AboutMe.tsx";

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <AboutMe/>
            <Projects/>
            <Skills />
            <Contacts/>

        </div>
    )
}

export default App