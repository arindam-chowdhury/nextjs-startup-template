import styled from "../styles/404Page.module.css";

export default function Custom404() {
  return <div className={styled.main_container}>
    <h1 className={styled.title}>404</h1>
    <h2 className={styled.subtitle}>Page Not Found</h2>
    <p className={styled.description}>
      The page you are looking for does not exist.
    </p>
  </div>;
}
