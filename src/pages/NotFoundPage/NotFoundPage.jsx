import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.notFound}>
      <h1>Page not found 😢</h1>
      <Link to="/">Return to home page</Link>
    </div>
  );
}
