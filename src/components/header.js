import '../App.css';
import Chicken from '../images/chicken2.png';

export default function Header() {
  return (
    <div className='Header'>    
        <img src={Chicken} alt="hen43 Logo" className="Logo"></img>
        <div className="TitleGroup">
            <h1>The Coop</h1>
            <h2>By hen43 on Github</h2>
        </div>
    </div>
  )
} 