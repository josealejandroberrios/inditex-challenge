export interface AppleLabel {
  label: string;
}

export interface AppleAttributes<T> {
  attributes: T;
}

export type AppleLinkAttributes = AppleAttributes<{
  rel: string;
  type: string;
  href: string;
}>;

export interface ApplePodcastsAuthor {
  name: AppleLabel;
  uri: AppleLabel;
}

export type ApplePodcastsEntryImage = AppleLabel &
  AppleAttributes<{ height: string }>;

export type ApplePodcastsEntryPrice = AppleLabel &
  AppleAttributes<{
    amount: string;
    currency: string;
  }>;

export type ApplePodcastsEntryContentType = AppleAttributes<{
  term: string;
  label: string;
}>;

export type ApplePodcastsEntryId = AppleLabel &
  AppleAttributes<{ 'im:id': string }>;

export interface ApplePodcastsEntryArtist extends AppleLabel {
  attributes?: { href: string };
}

export type ApplePodcastsEntryCategory = AppleAttributes<{
  'im:id': string;
  term: string;
  scheme: string;
  label: string;
}>;

export type ApplePodcastsEntryReleaseDate = AppleLabel &
  AppleAttributes<{
    label: string;
  }>;

export interface ApplePodcastsEntry {
  'im:name': AppleLabel;
  'im:image': ApplePodcastsEntryImage[];
  summary: AppleLabel;
  'im:price': ApplePodcastsEntryPrice;
  'im:contentType': ApplePodcastsEntryContentType;
  rights: AppleLabel;
  title: AppleLabel;
  link: AppleLinkAttributes;
  id: ApplePodcastsEntryId;
  'im:artist': ApplePodcastsEntryArtist;
  category: ApplePodcastsEntryCategory;
  'im:releaseDate': ApplePodcastsEntryReleaseDate;
}

export interface ApplePodcastsResponse {
  feed: {
    author: ApplePodcastsAuthor;
    entry: ApplePodcastEntry[];
    updated: AppleLabel;
    rights: AppleLabel;
    title: AppleLabel;
    icon: AppleLabel;
    link: AppleLinkAttributes[];
    id: AppleLabel;
  };
}

export interface ApplePodcastResult {
  wrapperType: string;
  kind: string;
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  collectionHdPrice: number;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  trackCount: number;
  trackTimeMillis?: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating: string;
  artworkUrl600: string;
  genreIds: string[];
  genres: string[];
}

export interface ApplePodcastEpisodeResult {
  artworkUrl160: string;
  episodeFileExtension: string;
  episodeContentType: string;
  closedCaptioning: string;
  genres: { id: string; name: string }[];
  episodeGuid: string;
  description: string;
  shortDescription: string;
  artistIds: number[];
  previewUrl: string;
  episodeUrl: string;
  wrapperType: string;
  kind: string;
  collectionId: number;
  trackId: number;
  collectionName: string;
  trackName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl60: string;
  releaseDate: string;
  trackTimeMillis?: number;
  country: string;
  contentAdvisoryRating: string;
  artworkUrl600: string;
}

export interface ApplePodcastResponse {
  resultCount: number;
  results: ApplePodcastResult[] | ApplePodcastEpisodeResult[];
}
