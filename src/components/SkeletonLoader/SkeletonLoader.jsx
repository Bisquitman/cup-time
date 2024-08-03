import ContentLoader from "react-content-loader";
import s from "./SkeletonLoader.module.css";

export const SkeletonLoader = ({count = 6}) => {
  return (
    <>
    {Array(count).fill().map((_, index) => (
      <div key={index} className={s.skeletonWrapper}>
        <ContentLoader 
          speed={2}
          viewBox="0 0 420 444"
          backgroundColor="#ecebeb"
          foregroundColor="#f2f9f7"
        >
          <rect x="0" y="0" width="100%" height="70%" />
          <rect x="24" y="calc(70% + 30px)" width="80%" height="30px" />
          <rect x="24" y="calc(70% + 80px)" width="40%" height="25px" />
        </ContentLoader>
      </div>
    ))}</>
  );
};
