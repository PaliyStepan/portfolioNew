import React, {useEffect, useState} from 'react';
import Menu from "./components/Menu/Menu";
import {Routes , Route, } from "react-router-dom";
import Main from "./pages/Main/Main";
import Logo from "./pages/Logo/Logo";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import ReactBlock from "./pages/React/React";
import Contacts from "./pages/Contacts/Contacts";
import Games from "./pages/Games/Games";
import VueBlock from "./pages/Vue/Vue";
import Tag from "./components/Tag/Tag";

const App = () => {

    const [app, setApp] = useState(['App']);

    useEffect(()=>{
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            setApp(['App', 'App_mobile']);
        }

    },[]);

    return (
        <div className={app.join(" ")}>
			<Menu/>
			<div className="App__wrap">
				<div className="container App__container">
					<div className="App__header">
						<Tag tag="html"/>
						<Tag tag="body"/>
					</div>
					<div className="App__content">
						<Routes  >
							<Route path="/about"  element={<About/>}></Route>
							<Route path="/skills"  element={<Skills/>}></Route>
							<Route path="/projects" element={<Projects/> }></Route>
							<Route path="/react"  element={<ReactBlock/> }></Route>
							<Route path="/vue"  element={<VueBlock/>}></Route>
							<Route path="/contacts"  element={<Contacts/>}></Route>
							<Route path="/games"   element={<Games/>}></Route>
							<Route path="/" exact element={<Main/>}></Route>
							<Route path="*" exact element={<Main/>}></Route>
						</Routes >
					</div>
					<div className="App__footer">
						<Tag tag="body" end/>
						<Tag tag="html" end/>
					</div>
				</div>
			</div>
		</div>
    );
}

export default App;
