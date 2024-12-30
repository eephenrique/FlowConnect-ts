import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'

import styles from './App.module.css'
import { Header } from './components/Header';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1734000402740-dc480cbbaeb6?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Marcos Henrique  ',
      role: 'Dev'
    },
    content: [
              {
                type: 'paragraph', content: 'Fala galeraa 👋',
                comment: undefined
              },
              {
                type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.  O nome do projeto é DoctorCare 🚀',
                comment: undefined
              },
              {
                type: 'link', content: 'jane.design/doctorcare',
                comment: undefined
              },
    ],
    publishedAt: new Date('2024-12-26 11:07:36'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Dide Forti  ',
      role: 'Suporte'
    },
    content: [
              {
                type: 'paragraph', content: 'Fala galeraa 👋',
                comment: undefined
              },
              {
                type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.  O nome do projeto é DoctorCare 🚀',
                comment: undefined
              },
              {
                type: 'link', content: 'jane.design/doctorcare',
                comment: undefined
              },
    ],
    publishedAt: new Date('2024-11-14 08:25:47'),
  },
];

export function App() {
  return( 
  <>
    <Header />


    <div className={styles.wrapper}>

      <Sidebar />

      <main>
      {posts.map(post => {
        return (
          <Post
            key={post.id}
            post={post}
        />
        )
      })}
      </main>
    </div>
    </>
  )
}