import Home from "./pages/home";
import Posts from "./pages/posts";
import PostDetail from "./pages/postDetail";
import Comments from "./pages/comments";
import Albums from "./pages/albums";
import Photos from "./pages/photos";
import Todos from "./pages/todos";
import Users from "./pages/users";
import NotificationsDemo from "./pages/Notifications/notifications-demo";

export const elContent = [
  { link: "/", text: "Home", el: <Home /> },
  { link: "/posts", text: "Posts", el: <Posts /> },
  { link: "/posts/:id", text: "Post Detail", el: <PostDetail /> },
  { link: "/comments", text: "Comments", el: <Comments /> },
  { link: "/albums", text: "Albums", el: <Albums /> },
  { link: "/photos", text: "Photos", el: <Photos /> },
  { link: "/todos", text: "Todos", el: <Todos /> },
  { link: "/users", text: "Users", el: <Users /> },
  {
    link: "/notifications-demo",
    text: "Notifications",
    el: <NotificationsDemo />,
  },
];
export const apiUrl = "https://jsonplaceholder.typicode.com/";
