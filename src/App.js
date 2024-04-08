import "./App.css";
 
import Quiz from "./components/legal trivia/Quiz";
import EndScreen from "./components/legal trivia/EndScreen";
 
import { GameStateContext } from "./helpers/Contexts";
import Home from "./components/Home/Home";
import { RouterProvider } from "react-router-dom";

import Kidztube from "./components/Kidztube/Kidztube";
import NotFound from "./NotFound";

 
import React from "react";
 import AboutUs from "./components/AboutUs/Aboutus"
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
 
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function App() {
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
      path: "/finish",
      element: <EndScreen />,
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
      path: "/aboutus",
      element: <AboutUs/>
    },
    {
      path: "/blogs",
      element: <Blogs/>
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
     
    <div className="App">
 
      <RouterProvider router={appRouter} />
         
    </div>

     
  );
}
