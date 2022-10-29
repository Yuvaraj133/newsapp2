
import './App.css';
import Axios from 'axios';
import {useState} from 'react';
function App(){
  const [data, setData] = useState([])
  const getNews=()=>{
    Axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=df95bb400c3c46f780b5546a0351d298")
    .then((response)=>{
      console.log(response);
      setData(response.data.articles);
    })
   }
    return (
    
      <>
       <div>
        <button classname='App'onclick={getNews}>GET NEWS</button>
        </div>
        <div className='containers'>
          <div className='row'>
            {
              data.map((value)=>{
                return(
                <div className="card" >
                 <img src={value.urlToImage} className="card-img-top" alt="..."/>
                 <div className="card-body">
                 <h5 className="card-title">{value.title}</h5>
                 <p className="card-text">{value.description}</p>
                
                </div>
                 </div>
              );
                })
              }
         </div>
        </div> 
     </>
   
    );
}
        export default App;



