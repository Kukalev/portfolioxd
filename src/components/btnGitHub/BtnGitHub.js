import './style.css'
import git from './gitHub-black.svg'

const BtnGinHub = ({ link }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={git} alt="" />
            GitHub repo
        </a>
    );
}

export default BtnGinHub;