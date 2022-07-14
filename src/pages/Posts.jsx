import '../styles/App.css'
import { useState } from 'react';
import Postitem from '../components/Postitem';
import MyModal from '../components/MyModal';
import Loader from '../components/Loader/Loader';
import { AuthContext } from '../context';
import {useContext} from 'react';


    
function Posts() {
let {isAuth,setisAuth} = useContext(AuthContext);

    const [posts] = useState([
        { id: 1, title: 'Javascript', body: 'Description' },
        { id: 2, title: 'Javascript2', body: 'Description' },
        { id: 3, title: 'Javascript3', body: 'Description' },
        { id: 4, title: 'Javascript4', body: 'Description' }
    ])
    
    const [modal, setModal] = useState(false);

    function zapusk(){
        setModal(true)
        setisAuth(true)
        }



    return (
        <div className="App">
            <button style={{ marginTop: 30 }} onClick={zapusk}>Модалка</button>
            <button style={{ marginTop: 30 }} onClick={()=>console.log(isAuth)}>лог</button>
            <MyModal visible={modal} setVisible={setModal}>
                <h1>Вход</h1>
                <input style={{ margintop: '30px' }} ></input>
                <input placeholder="Пароль"></input>
            </MyModal>
            <h1 style={{ textAlign: 'center' }}>Список постов</h1>
            {posts.map(post =>
                <Postitem post={post} key={post.id} />
            )}
            {isAuth!==true
            ?<div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}><Loader />
            </div>
            :<h1>lox</h1>
}
        </div>
    );
}


export default Posts;
