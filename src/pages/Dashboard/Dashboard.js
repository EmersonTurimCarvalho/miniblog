//CSS
import styles from './Dashboard.module.css'

//Components
import { Link } from 'react-router-dom'

//Context
import { useAuthValue } from "../../context/useAuthContext"

//Hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments'


const Dashboard = () => {
  const {user} = useAuthValue();
  const uid = user.uid;

  const {documents: posts, loading} = useFetchDocuments("posts", null, uid);
  const deleteDocument = (id)=>{}

  if(loading){
    return <p>Carregando...</p>
  }

  return (
    <div className={styles.dashboard}>
        <h2>Dashboard</h2>
        {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foi encontrado nenhuma postagem!!</p>
          <Link to="/posts/create" className="btn">
            Criar primeira postagem
          </Link>
        </div>
        ) : (
          <>
            <div className={styles.post_header}>
              <span>Título</span>
              <span>Ações</span>
            </div>
            {posts && posts.map((post)=> <div key={post.id} className={styles.post_row}>
              <p>{post.title}</p>
              <div>
                <Link to={`/posts/${post.id}`} className="btn btn-outline">Ver</Link>
                <Link to={`/posts/edit/${post.id}`} className="btn btn-outline">Editar</Link>
                <button onClick={()=> deleteDocument(post.id)} className="btn btn-outline btn-danger">Excluir</button>
              </div>
            </div>)}
          </>
        )}
    </div>
  )
}

export default Dashboard