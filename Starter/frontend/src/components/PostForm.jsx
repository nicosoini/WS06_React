function PostForm({ initialData = {}, onSubmit, submitting }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get('title'),
      author: formData.get('author'),
      content: formData.get('content'),
    };
    onSubmit(data);
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          defaultValue={initialData.title ?? ''}
          required
          placeholder="Post title"
        />
      </div>

      <div className="form-field">
        <label htmlFor="author">Author</label>
        <input
          id="author"
          name="author"
          type="text"
          defaultValue={initialData.author ?? ''}
          required
          placeholder="Your name"
        />
      </div>

      <div className="form-field">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          rows={8}
          defaultValue={initialData.content ?? ''}
          required
          placeholder="Write your post here…"
        />
      </div>

      <button type="submit" className="btn btn-primary" disabled={submitting}>
        {submitting ? 'Saving...' : 'Save post'}
      </button>
    </form>
  )
}

export default PostForm;