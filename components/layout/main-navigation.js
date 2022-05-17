import Link from "next/link";

function MainNavigation() {
  return (
    <header>
      <Link href="/">
        <a>
          <h3>Logo</h3>
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
