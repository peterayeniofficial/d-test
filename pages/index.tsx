import NextLink from "next/link";
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { Article } from "../interfaces";

interface IndexPageProps {
  allArticles: Article[];
}
export const getStaticProps: GetStaticProps = async () => {
  //@todo: get articles from http://localhost:3000/api/articles and add to props
  const res = await fetch("http://localhost:3000/api/articles");
  const data: IndexPageProps = await res.json();
  return {
    props: {
      allArticles: data,
    },
  };
};

export default function IndexPage({
  allArticles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(allArticles);
  allArticles.sort((a: Article, b: Article) => {
    let first = new Date(a.date);
    let second = new Date(b.date);
    console.log(first.getUTCSeconds(), "f");
    return first.getUTCSeconds() - second.getUTCSeconds();
  });

  return (
    <Container mt={10}>
      <Heading mb={5}>Below you will find a list of our articles.</Heading>
      <SimpleGrid columns={2} spacing={10}>
        {
          //@todo: display articles
          allArticles.map((article: Article) => (
            <Box key={article.id}>
              <VStack alignItems="flex-start">
                <Box>
                  <Text>Title:</Text>
                </Box>
                <Box color={'blue.600'}>
                  <NextLink href='#' passHref>
                    <Link>
                      <Text fontSize="lg">{article.title}</Text>
                    </Link>
                  </NextLink>
                </Box>
                <Box>
                  <Text>Authors: {article.authors.slice(0, 3)}</Text>
                </Box>
              </VStack>
            </Box>
          ))
        }
      </SimpleGrid>
    </Container>
  );
}
