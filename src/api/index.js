import axios from 'axios';
export const api = {
  fetchPosts: async () => {
    try {
      const response = await axios.get('http://jsonplaceholder.typicode.com/posts');
      const posts = response.data;
      return posts;
    } catch (err) {
      return err.message;
    }
  },
};
