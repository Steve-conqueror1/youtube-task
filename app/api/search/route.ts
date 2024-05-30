import axios from "axios";

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

export async function GET(req: Request) {
  const query = new URL(req.url).searchParams.get("query")

  const REQUEST_URL = `${process.env.YOUTUBE_API}?q=${query}&maxResults=${8}&key=${YOUTUBE_API_KEY}&type=video&part=snippet`

  if (!query) {
    return  Response.json({ type: "error", message: "query is required"}, {status: 400})
  }

  try {
    const response = await axios.get(REQUEST_URL);

    const data = response.data.items.map((video: any) => ({
      id: video.id.videoId,
      title: video.snippet.title,
      description: video.snippet.description,
      thumbnail: video.snippet.thumbnails.default.url,
      views: "Test number of views"
    }))
    return Response.json({data: data,  pageInfo: response.data.pageInfo}, {status: 200});

  } catch (error) {
    console.error("Error searching YouTube videos:", error);
    return Response.json({ type: "error", message: "Error searching YouTube videos" }, {status: 500});
  }
}

export const revalidate = 0;