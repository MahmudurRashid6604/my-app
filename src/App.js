import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  const products= [
    {name:'Photoshop', price:'$40.9'},
    {name:'Illustrator', price: '$50.3'},
    {name:'PDF reader', price:'$6.3'},
    {name:'printer' , price:'$53'}
  ]
  const nayoks = ['Alomgir', 'Elias', 'Shuvo', 'Bappi'];

  const friends= [
    {name:'Jony', roll:'1', age:'28'},
    {name:'Mahmud', roll:'2', age:'28'},
    {name:'Sumon', roll:'10', age:'28'},
    {name:'Sabu', roll:'15', age:'28'}
  ]
    
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>

        <Albums></Albums>

        <Posts></Posts>

        <Counter></Counter>

        <Users></Users>

        <ul>
          {
          nayoks.map(nayok => <li>{nayok}</li> )
          }
        </ul>
        <ul>
          {
            products.map(product => <li>{product.name}</li> )
          }
        </ul>

        {/* <ul>
          <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li>
        </ul>   */}

        {/* <Product product={products[0]}></Product> */}
        {
          products.map(item => <Product product={item} ></Product> )

        }


        
        {/* <Class name="Mahmud" roll="2" age="28"></Class>
        <Class name="Jony" roll="1" age="27"></Class>
        <Class name="Sumon" roll="15" age="28"></Class>
        <Class name="Sabu" roll="20" age="27"></Class> */}

        {
          friends.map(dost => <Friend frnd={dost}></Friend>)
        }
        {/* <Friend frnd={friends[0]}></Friend> */}
      </header>
    </div>
  );
}

function Albums(){
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then( data => setAlbums(data))

  }, [])

  return (
    <div>
      <h1>Albums: {albums.length}</h1>
      <ol>
        {
          albums.map(album => <li>{album.title}</li> )
        }
      </ol>
      {
        console.log(albums)
      }
    </div>
  )
}


function Posts(){
  const [posts, setPosts] = useState([])

  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then( data => setPosts(data) )
  }, [])

  return (
    <div>
      <h3>Posts : {posts.length}</h3>
      <ol>
        {
          posts.map(post => <li>{post.title}</li> )
        }
      </ol>
      {
        console.log(posts)
      }

    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( res => res.json())
    .then(data => setUsers(data));
  }, [])

  return (
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li> )

        }
      </ul>
      <ul>
        {
          users.map(user => <li>{user.phone}</li> )
        }
      </ul>
      
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick= {() => setCount( count - 1)}>decrease</button>
      <button onClick={() => setCount( count + 1)} >Increase</button>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border: '2px solid red',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height:'200px',
    width:'200px',
    float:'left',
    margin:'10px'
  }
 
  const {name, price  } = props.product;
  // console.log(name, price  )
  return ( 
    <div style={productStyle}>
    <h3>{name}</h3>
    <h5>{price}</h5>
    <button>Buy now</button>
    </div>
  )

}

function Friend(props){
  const friendStyle={
    border: '3px solid green',
    margin: '20px',
    width:  '600px',
    backgroundColor: 'lightblue'
  }
  const {name, roll, age} = props.frnd;
  return (
    <div style={friendStyle}>
      {/* <h1>Student name : {props.frnd.name}</h1>
      <h3>Roll number : {props.frnd.roll}</h3>
      <h3>Age : {props.frnd.age}</h3> */}
      <h3>Name: {name}</h3>
      <h5>Roll: {roll}</h5>
      <h5>Age: {age}</h5>
    </div>
  )

}
 
export default App;
