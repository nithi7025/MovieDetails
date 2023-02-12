
import './App.css';
import React,{ useEffect, useState } from 'react';

import { ClassNames } from '@emotion/react';

import  AppBar  from './components/AppBar';
import HomeCarousal from './components/HomeCarousal';
import MovieSection from './components/MovieSection';


function App() {
 const [searchResult,setSearchResult] = useState("")
 const handlesearchInput = (e)=>{
      setSearchResult(e.target.value)
      console.log(searchResult)
  }
  const carouselitems=["bg1.webp","bg2.webp","bg3.webp","bg4.webp","bg5.webp","bg6.webp"]
  return (
    <>
   
    <AppBar setsearchinput={handlesearchInput}/>
    {searchResult.length >= 4 &&  (<MovieSection title={"Search Result For '" + searchResult + "':"} Genre={searchResult}/>)}
    <HomeCarousal Carouselitems={carouselitems}/>
   
    <MovieSection title="Trending Movies" Genre="hello"/>
    <MovieSection title="Action" Genre="star"/>
    <MovieSection title="Comedy" Genre="die"/>
  
   
    
    </>
  );
}
export default App;
