const SERMONS_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID!;
const MUSIC_CHANNEL_ID = process.env.YOUTUBE_MUSIC_CHANNEL_ID!;
const API_KEY = process.env.YOUTUBE_API_KEY!;

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
}

async function fetchVideos(channelId: string, maxResults: number): Promise<Video[]> {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}&type=video`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error(`YouTube API error: ${res.status} for channel ${channelId}`);
  }

  const data = await res.json();

  return data.items.map((item: any) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnail:
      item.snippet.thumbnails.maxres?.url ||
      item.snippet.thumbnails.high?.url ||
      item.snippet.thumbnails.default?.url,
    publishedAt: item.snippet.publishedAt,
  }));
}

export async function getLatestVideos(maxResults = 12): Promise<Video[]> {
  return fetchVideos(SERMONS_CHANNEL_ID, maxResults);
}

export async function getLatestSermon(): Promise<Video | null> {
  const videos = await getLatestVideos(1);
  return videos[0] ?? null;
}

export async function getLatestSongs(maxResults = 12): Promise<Video[]> {
  return fetchVideos(MUSIC_CHANNEL_ID, maxResults);
}

export async function getLatestSong(): Promise<Video | null> {
  const songs = await getLatestSongs(1);
  return songs[0] ?? null;
}

export function formatDate(isoString: string): string {
  return new Date(isoString).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getYouTubeUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}