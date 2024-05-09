import '../App.css';
import {Link} from 'react-router-dom';

export default function projectBox({link}) {
  return (
    <div className='projectBox'>
      <a href={link} Target="_blank">LET'S GOOOOO</a>
    </div>
  )
} 