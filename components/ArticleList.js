import styles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <div className={styles.grid}>
      {articles.map((item) => (
        <ArticleItem article={item} />
      ))}
    </div>
  );
};

export default ArticleList;
