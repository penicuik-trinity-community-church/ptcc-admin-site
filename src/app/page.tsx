import Link from "next/link";
import NavBar from "../(components)/nav-bar";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <div>
        <Link href="/add-blog">Add a blog post</Link>
      </div>
      <div>
        <Link href="/upload-images">Upload images</Link>
      </div>
      <div>
        <Link href="/add-youtube">Add a new youtube link</Link>
      </div>
    </>
  );
}
