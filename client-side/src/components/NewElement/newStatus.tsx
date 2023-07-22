import { useRef, useState } from 'react';

interface StatusesListInterface {
  onAddStatus: (statusText: string) => void;
}
const NewStatus: React.FC<StatusesListInterface> = (props) => {
  const {onAddStatus} = props;
  const statusInputRef = useRef<HTMLInputElement>(null);
  const [formInvalid, setFormInvalid] = useState(false);


  
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = statusInputRef.current!.value;
    
    if (enteredText.trim().length === 0) {
      setFormInvalid(true);
      return;
    }

    onAddStatus(enteredText);
  };

  

  return (
    <form onSubmit={submitHandler}>
      <p>
        <label htmlFor="status">Status</label>
        <input type="text" id="status" ref={statusInputRef} />
      </p>
      {formInvalid && <p>Invalid input.</p>}
      <p>
        <button type="submit">Add Status</button>
      </p>
    </form>
  );  
}

export default NewStatus;