import Link from 'next/link'
import type { InferGetStaticPropsType } from 'next'
import { Article } from "../interfaces";

export async function getStaticProps() {
  //@todo: get articles from http://localhost:3000/api/articles and add to props

  return {
    props: {
      journalTitle: 'DCJ Journal',
      another: 'flip',
    },
  }
}

export default function IndexPage({
  journalTitle,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <h1>{journalTitle}</h1>
      <p>Below you will find a list of our articles.</p>
      {
        //@todo: display articles
      }
    </>
  )
}
