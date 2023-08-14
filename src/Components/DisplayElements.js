import Card from './UI/Card';

const DisplayElements = (props) => {
  const displayItems = (
    <div>
      {props.elements.map((item) => (
        <Card position={item} function_1={props.function_1} />
      ))}
    </div>
  );

  return <div>{displayItems}</div>;
};

export default DisplayElements;
