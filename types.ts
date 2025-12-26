export interface EventTopic {
  id: string;
  title: string;
}

export interface EventDetails {
  title: string;
  location: string;
  date: string;
  topics: EventTopic[];
  isSponsoringOpen: boolean;
}