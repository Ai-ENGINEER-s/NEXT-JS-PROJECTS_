"use client"
import Image from "next/image";
import styles from './Home.module.css'; // Importer les styles

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <span className={styles['navbar-logo']}>MaApp</span>
      </div>

      <div className={styles['main-banner']}>
        <h1 className={styles['banner-title']}>Bienvenue dans votre Application de Gestion de Projets</h1>
        <p className={styles['banner-subtitle']}>Organisez et suivez vos tâches avec efficacité</p>
      </div>
    </div>
  );
}
