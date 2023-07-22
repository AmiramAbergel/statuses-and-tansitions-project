import { useRef } from 'react';

const StatusForm = (props) => {
  const { formInvalid, setFormInvalid } = props;
  const statusInputRef = useRef<HTMLInputElement>(null);
  const statusSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = statusInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      setFormInvalid(true);
      return;
    }
  };

  return (
    <form onSubmit={statusSubmitHandler}>
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
};

export default StatusForm;
