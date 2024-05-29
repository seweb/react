export type Article = {
  article: {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: {
      username: string;
      bio: string;
      image: string;
      following: boolean;
    };
  };
};

export type Articles = {
  articles: [Article];
  articlesCount: number;
};

export type ArticlesArgs = {
  tag?: string;
  offset?: number;
  limit?: number;
};

export type Comment = {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
};

export type CommentsPayload = {
  comment: {
    body: string;
  };
};

export type Comments = {
  comments: Comment;
};

export enum ArticlesQueryKeys {
  Get = 'GetArticles',
}

export enum ArticleQueryKeys {
  Get = 'GetArticle',
}

export enum FeedsQueryKeys {
  Get = 'GetFeeds',
}

export enum CommentsQueryKeys {
  Get = 'GetComments',
  Post = 'PostComment',
}
