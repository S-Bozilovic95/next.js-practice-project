// /api/new-meetup
import API from "./baseUrl";

export async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, descripition } = data;

    const response = await API.post("meetups.json", data);

    res.status(201).json({ message: "data inserted" });
  }
}

export default handler;
