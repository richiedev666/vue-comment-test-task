export interface PostComment {
  author: string;
  text: string;
  time: string;
}

export interface Post {
  id: number;
  text: string;
  author: string;
  time: string;
  likes: number;
  comments: Array<PostComment>;
  views: number;
}

export interface PostPanelItem {
  title: string;
  action: Function;
}
