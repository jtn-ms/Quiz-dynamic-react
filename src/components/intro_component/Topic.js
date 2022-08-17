const Topic = function (props) {
  return (
    <div className="topic">
      <img src={props.imgPath} alt={props.alt} className={props.imgName} />
      <h2 className="topic__title">{props.about}</h2>
    </div>
  );
};

export default Topic;
