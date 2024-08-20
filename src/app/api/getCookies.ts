// pages/api/getCookie.ts
import {NextApiRequest, NextApiResponse} from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const accountCreated = req.cookies.accountCreated;
  res.status(200).json({accountCreated});
}

// WHY DO I NEED IT
