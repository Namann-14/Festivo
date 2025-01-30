import { NextApiRequest, NextApiResponse } from 'next';
import { getContract, provider } from './config/contract';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const contract = getContract(); // Getting the contract instance
      const data = await contract.someFunction(); // Call your contract function here
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}