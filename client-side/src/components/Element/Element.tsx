interface ElementInterface {
  text: string;
  from?: string;
  to?: string;
}

const Element = (props: ElementInterface) => {
  const {text,from,to} = props;
  
  return (
    <li>
      <div>
        <p>{text}</p>
      </div>
    </li>
  )
}

export default Element;