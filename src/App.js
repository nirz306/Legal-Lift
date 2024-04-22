import "./App.css";
import Quiz from "./components/legal trivia/Quiz";
import Home from "./components/Home/Home";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { useLocation,Route,Routes } from 'react-router-dom';
import Kidztube from "./components/Kidztube/Kidztube";
import NotFound from "./NotFound";

 
import React, { useEffect } from "react";
import Blogs from "./components/Blogs/Blogs"
import Squests from "./components/S_quests/squests";
import Rule from "./components/legal trivia/Rules/rule";
import Login from "./components/Login/Login";
import Road_acc from "./components/S_quests/Road_acc";
import Sexualharras from "./components/S_quests/Sexualharras";
import Rasicm from "./components/Kidztube/Rasicm";
import Consumer from "./components/Kidztube/Consumer";
import Lostphone from "./components/S_quests/Lostphone/Lostphone";
import Signup from "./components/Signin_out/Signup";
import { createBrowserRouter } from "react-router-dom";
import Respect_realm from "./components/S_quests/Respect_realm";
import Detention from "./components/Kidztube/Detention";
 
 
 
export default function App() {


  // const {pathname} = useLocation();

  // useEffect(()=>{
  //   window.scrollTo(0,0);
  // },[pathname])

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/kidztube",
      element: <Kidztube />,
    },
    {
      path: "/play",
      element: <Quiz />,
    },
    {
      path:"/squests",
      element:<Squests/>
    },
    {
      path: "/rule",
      element: <Rule />,
    },
    {
      path: "/Road Accident",
      element: <Road_acc />,
    },
    {
      path: "/Sexual harresment",
      element: <Sexualharras />,
    },
    {
      path: "/rasicm",
      element: <Rasicm />,
    },
    {
      path: "/consumer_rights",
      element: <Consumer />,
    },
    {
      path: "/Lost phone",
      element: <Lostphone />,
    },
    {
      path: "/blogs",
      element: <Blogs/>
    },
    {
      path: "/respect_realm",
      element: <Respect_realm/>
    },
    {
      path: "/detention",
      element: <Detention/>
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
     
    <div className="App">
 
      <RouterProvider router={appRouter} />
       
       {/* <BrowserRouter>
       <Routes>
        <Route path ="/kidztube" element = {<Kidztube/>}/>
      </Routes>
      </BrowserRouter> */}
     
      
         
    </div>

     
  );
}
