//CSS
import styles from './About.module.css';

import { Link } from 'react-router-dom';



const About = () => {
  return (
    <div className={styles.about}>
        <h2>Sobre o  Mini <span>Blog</span></h2>
        <p>Projeto feito com React no Front-end e Firebase no Back-end</p>
        <Link to='CreatePost' className='btn'>
          Criar post
        </Link>
    </div>
  )
}

export default About