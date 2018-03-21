export class BlogService {
  blogs = [
    {title: 'Title'},
    {title: 'Title2'},
    {title: 'Title3'},
    {title: 'Title4'},
  ];

  addBlog(blog) {
    this.blogs = [
      ...this.blogs,
      blog
    ];
  }
}