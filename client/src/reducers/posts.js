export default (posts = [], action) => {
    switch (action.type) {
      case 'DELETE':
        return posts.filter((post) => post._id !== action.payload);
      case 'FETCH_ALL':
        return action.payload;
      case 'CREATE':
        return [...posts, action.payload]; // Add the new post to the array
        case 'UPDATE':
          case 'LIKE':
          return posts.map((post) => post._id === action.payload._id ? action.payload : post);
      default:
        return posts;
    }
  };
  


