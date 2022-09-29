import { Article } from '../../interfaces/article';
import type { GetStaticPaths} from "next";
import { Container, Text } from '@chakra-ui/react';

export const getStaticPaths: GetStaticPaths = async() => {
    let paths = []

    try {
        const res= await fetch("http://localhost:3000/api/articles");
        const articles = await res.json();

        paths = articles.map((article) => ({
            params: {id: article.id}
        }))
        
    } catch (error) {
        
    }

    return {
      paths,
      fallback: false, // can also be true or 'blocking'
    }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getStaticProps({params}) {
    const res = await fetch(`http://localhost:3000/api/${params.id}`);
    const data: Article = await res.json();
    return {
      props: {
        article: data,
      },
    };
  }


const Article = ({ article }) =>{
    return (
      <Container>
      <Text>
      {article.fulltext}
      </Text>
      </Container>
    );
}

export default Article