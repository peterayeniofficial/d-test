import { NextApiResponse, NextApiRequest } from 'next'
import { articles } from '../../../data'
import { Article } from '../../../interfaces'

export default function handler(
    _req: NextApiRequest,
    res: NextApiResponse<Article[]>
) {
    const {
        query: {id},
        method
    }= _req

    switch(method){
        case 'GET':
            return res.status(200).json(articles.find((article) => article.id == id))
    }
    
}
