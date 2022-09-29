import { NextApiResponse, NextApiRequest } from 'next'
import { articles } from '../../../data'
import { Article } from '../../../interfaces'

export default function handler(
    _req: NextApiRequest,
    res: NextApiResponse<Article[]>
) {
    return res.status(200).json(articles)
}
