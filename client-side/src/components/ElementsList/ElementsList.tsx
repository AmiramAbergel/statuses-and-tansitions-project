import Element from '../Element/Element';

interface ElementInterface {
  type: string;
  from?: string;
  to?: string;
  elements: {
    id: string;
    text: string;
  }[];
}

const ElementsList: React.FC<ElementInterface> = (props) => {
  const { elements, from, to } = props;
  if (!elements || elements.length === 0) {
    return <h2>No elements found</h2>;
  }

  return (
    <ul>
      {elements.map((element) => (
        <Element key={element.id} text={element.text} from={from} to={to} />
      ))}
    </ul>
  );
};

export default ElementsList;
