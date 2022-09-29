import Link from 'next/link'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Article } from "../interfaces";

interface IndexPageProps {
  allArticles: Article[]
}
export const getStaticProps: GetStaticProps = async() => {
  //@todo: get articles from http://localhost:3000/api/articles and add to props
  const res = await fetch('http://localhost:3000/api/articles')
  const data: IndexPageProps = await res.json()
  return {
    props: {
      allArticles: data
    },
  }
}

export default function IndexPage({
  allArticles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(allArticles)
  return (
    <>
      
      <p>Below you will find a list of our articles.</p>
      {
        //@todo: display articles
      }
    </>
  )
}
