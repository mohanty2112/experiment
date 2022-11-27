import "./Home.css";
import {useState} from "react";


function Home () {

    const [counter,setCounter] = useState(1);

    // fetch("tweet.json")
    // .then((res) => res.json())
    // .then((res) => {
    //   setTweets(res);
      
      
    // });
    
    function updateCounter () {

        setCounter(counter+1);
        
    }
    console.log(counter);
    return (
        <div  > 
            <button className="division" onClick={updateCounter} >Counter</button>
            <p className="division">{counter}</p>
            </div>
    )
}

export default Home;
