import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating monorepo</strong>
            <p>At the recent Google I/O 2019, when Google announced an epidemic widespread of Dark Theme,   I was super pumped. For those of you who follow me on social media, you might know that I am a hardcore fan of Dark Theme. I just love it!
              With Android Q coming out in the 3rd Quarter of 2019, I felt that it was important for everyone to get the Dark Theme ready for their apps.
              Google has released the Material Guidelines for applying Dark Theme to your apps. The documentation is excellent unlike the Human Interface Guidelines by Apple. (Why Apple? Why?). Anyway, you can definitely spend time reading that, but I plan to make your life a lot easier with a step by step process.</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating monorepo</strong>
            <p>At the recent Google I/O 2019, when Google announced an epidemic widespread of Dark Theme,   I was super pumped. For those of you who follow me on social media, you might know that I am a hardcore fan of Dark Theme. I just love it!
              With Android Q coming out in the 3rd Quarter of 2019, I felt that it was important for everyone to get the Dark Theme ready for their apps.
              Google has released the Material Guidelines for applying Dark Theme to your apps. The documentation is excellent unlike the Human Interface Guidelines by Apple. (Why Apple? Why?). Anyway, you can definitely spend time reading that, but I plan to make your life a lot easier with a step by step process.</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating monorepo</strong>
            <p>At the recent Google I/O 2019, when Google announced an epidemic widespread of Dark Theme,   I was super pumped. For those of you who follow me on social media, you might know that I am a hardcore fan of Dark Theme. I just love it!
              With Android Q coming out in the 3rd Quarter of 2019, I felt that it was important for everyone to get the Dark Theme ready for their apps.
              Google has released the Material Guidelines for applying Dark Theme to your apps. The documentation is excellent unlike the Human Interface Guidelines by Apple. (Why Apple? Why?). Anyway, you can definitely spend time reading that, but I plan to make your life a lot easier with a step by step process.</p>
          </a>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'publication')
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  })

  console.log(response)

  return {
    props: {}
  }
}