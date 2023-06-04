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
