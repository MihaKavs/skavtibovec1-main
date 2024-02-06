import React from 'react'
import Post from './Post.js'
import './Posts.css'
function Posts() {
  //TODO: dubi use poste od zadnjega naprej
  //TODO: nared da je možno poslat vč slik v en post in nared css za to
  return (
    <div className='Posts'>
      <div className='posts-container'>
        <div className='posts-wrapper'>
          <ul className='posts-items'>
            <Post src={require('./ziga.jpg')} location="žaga" text="to je žiga smh a to je žiga smh ato je žiga smh avto je žiga smh ato je žiga smh ato je žiga smh ato je žiga smh ato je žiga smh ato je žiga smh ato je žiga smh ato je žiga smh ato je žiga smh ato je žiga smh ato je žiga smh ato je žiga smh ato je žiga smh ato je žiga smh ato je žiga smh ato je žiga smh ato je žiga smh ato je žiga smh ato je žiga smh ato je žiga smh a" label="vv" ></Post>
            <Post src={require('./ziga.jpg')} text="to je žiga smh" label="žigga" ></Post>
            <Post src={require('./ziga.jpg')} text="to je žiga smh" label="žigga" ></Post>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Posts