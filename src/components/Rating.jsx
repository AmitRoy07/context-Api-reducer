import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const Rating = ({ rating, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span onClick={() => onClick(i)} key={i} style={style}>
          {rating > i ? (
            <>
              <FaStar fontSize={16} />
            </>
          ) : (
            <>
              <CiStar fontSize={16} />
            </>
          )}
        </span>
      ))}
    </>
  );
};

export default Rating;
