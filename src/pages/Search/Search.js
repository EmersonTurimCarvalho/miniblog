//CSS
import styles from './Search.module.css'

//Hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'

//Components
import { Link } from 'react-router-dom'
import PostDetail from '../../components/PostDetail'



const Search = () => {
    const query = useQuery()
    const search = query.get("q");

    const {documents: posts} = useFetchDocuments("posts", search);

  return (
    <div className={styles.search_container}>
        <h2>Busca</h2>
        <div>
            {posts && posts.length === 0 && (
                <div className={styles.noposts}>
                    <p>Não foram encontrados postagens...</p>
                    <Link to="/" className="btn btn-dark">
                        Voltar
                    </Link>
                </div>
            )}
            {posts && posts.map((post)=><PostDetail key={post.id} post={post}/>)}
        </div>
    </div>
  );
};

export default Search