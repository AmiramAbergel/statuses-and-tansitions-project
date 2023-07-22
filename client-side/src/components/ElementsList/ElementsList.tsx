
import Element from '../Element/Element';

interface ElementInterface {
  elements: {
    id: string;
    text: string;
    from?: string;
    to?: string;
  }[];
}


const ElementsList: React.FC<ElementInterface> = (props) => {
  const { elements } = props;
  if (!elements || elements.length === 0) {
    return <h2>No elements found</h2>
  }

  return (
    <ul>
      {elements.map((element) => (
        <Element key={element.id} text={element.text} from={element.from} to={element.to} />
      ))}
    </ul>

  )
}

export default ElementsList;