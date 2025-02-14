import BasicButtons from '../components/BasicButtons';
import '../styles/Navlinks.css';
import { useNavigate } from 'react-router-dom';

export default function Navlinks() {
    const navigate = useNavigate();
  return (
    <div className="navlinks">
        <div className="sub-navlink">
              <div className='container'>
                  <div className='circle'></div>
                  <h4>Anywhere app.</h4>
              </div>
              <BasicButtons name={"Home"} onClick={() => navigate('/Redux')}/>
              <BasicButtons name={"Join"} onClick={()=> navigate('/Redux/join')}/>
        </div>
    </div>
  )
}
