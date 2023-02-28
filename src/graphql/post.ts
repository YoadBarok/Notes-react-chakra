//QUERIES:
export const AllPosts = `
query Posts($orderBy: OrderByParams) {
    posts(orderBy: $orderBy) {
      id
      title
      body
      author {
        name
        email
        id
      }
      createdAt
      authorId
    }
  }
`;

//MUTATIONS:
export const RemovePost = `
mutation Mutation($removePostId: Int!) {
    removePost(id: $removePostId) {
      id
    }
  }
`;

export const CreatePost = `
mutation Mutation($createPostInput: CreatePostInput!) {
  createPost(createPostInput: $createPostInput) {
    id
  }
}
`;
