import { Loadmore } from './Button.styled';

const LoadMoreButton = ({ nextPage }) => {
  return (
    <Loadmore type="button" onClick={nextPage}>
      Load More
    </Loadmore>
  );
};

export default LoadMoreButton;
