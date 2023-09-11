import React from 'react'
import styles from './NotFound.module.scss'

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <h1 >Ничего не найдено 404</h1>
      <p className={styles.discription}>
         К сожалению данная страница отсутствует
      </p>
    </div>
  )
}

export default NotFoundBlock
