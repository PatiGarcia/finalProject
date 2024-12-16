// src/app/api/youtube/route.js
export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const state = searchParams.get('state');
    const pageToken = searchParams.get('pageToken') || '';
    
    const apiKey = process.env.YOUTUBE_API_KEY;  // Tu API key de YouTube
  
    const youtubeApiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${state}%20superacion%20personal%20psicologos&maxResults=20&pageToken=${pageToken}&key=${apiKey}`;
  
    const response = await fetch(youtubeApiUrl);
    const data = await response.json();
  
    return new Response(JSON.stringify({
      items: data.items,
      nextPageToken: data.nextPageToken
    }));
  }