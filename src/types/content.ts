export interface ContentCard {
  id: string;
  name: string;
  description: string;
  rating: number;
  image: string;
  type: string;
}

export interface Content extends ContentCard {
  // TODO: add new attributes
}
