import { useDetails } from "remoteComponents/store";

const Detail = (props) => {
  const [detail] = useDetails();

  return (
    <div className="detail">
      <img src={detail.url} alt={detail.song} className="picture" />

      <div>
        Release:<span>{detail.released}</span>
      </div>
      <div>
        Writer:<span>{detail.writer}</span>
      </div>
    </div>
  );
};

export default Detail;
