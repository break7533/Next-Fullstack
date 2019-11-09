import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  req.headers;
  res.status(200).json({
    test: "Hello level up"
  });
};

// Long way
// export default (req, res) => {
//   res.setHeader("Content-Type", "application/json");
//   res.statusCode = 200;
//   res.end(
//     JSON.stringify({
//       test: "Hello level up"
//     })
//   );
// };
