const BlogList = ({ blogs, handleTitleClick }) => {
  const blogElements = blogs.map((blog) => {
    return (
      <tr className="blog-preview" key={blog.id}>
        <td>{blog.author}</td>
        <td
          onClick={() => {
            handleTitleClick(blog.id);
          }}
        >
          {blog.title}
        </td>
        <td></td>
      </tr>
    );
  });

  return (
    <div className="blog-list">
      <table>
        <tbody>
          <tr>
            <th>Author</th>
            <th>Title</th>
          </tr>
          {blogElements}
        </tbody>
      </table>
    </div>
  );
};

export default BlogList;
