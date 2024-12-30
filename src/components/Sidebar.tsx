import { PencilLine } from '@phosphor-icons/react'
import { Avatar } from './Avatar.js'

import styles from './Sidebar.module.css'


export function Sidebar() {
    return(
        <aside className={styles.sidebar}> 
        
        <img 
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1733212543060-457679f1a682?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        
        <div className={styles.profile}>
            <Avatar src="https://images.unsplash.com/photo-1734000402740-dc480cbbaeb6?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />


            <strong>Marcos Henrique.</strong>
            <span>Web Developer</span>
        </div>

        <footer>
            <a href="#">
                <PencilLine size={20}/>
                Editar seu perfil   
            </a>

        </footer>
        
        </aside>
    )
}