import { useRef } from 'react';

const TransitionForm = (props) => {
  const { formInvalid, setFormInvalid } = props;
  const transitionNameRef = useRef<HTMLInputElement>(null);
  const transitionFromRef = useRef<HTMLSelectElement>(null);
  const transitionToRef = useRef<HTMLSelectElement>(null);

  const transitionSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const transitionEnteredName = transitionNameRef.current!.value;
    const transitionEnteredFrom = transitionFromRef.current!.value;
    const transitionEnteredTo = transitionToRef.current!.value;

    if (
      transitionEnteredName.trim().length === 0 ||
      transitionEnteredFrom.trim().length === 0 ||
      transitionEnteredTo.trim().length === 0
    ) {
      setFormInvalid(true);
      return;
    }
  };

  return (
    <form onSubmit={transitionSubmitHandler}>
      <p>
        <label htmlFor="transitionName">name:</label>
        <input type="text" id="transitionName" ref={transitionNameRef} />
      </p>
      <p>
        <label htmlFor="transitionFrom">From:</label>
        <select id="transitionFrom" name="From" ref={transitionFromRef}></select>
      </p>
      <p>
        <label htmlFor="transitionTo">To:</label>
        <select id="transitionTo" name="To" ref={transitionToRef}></select>
      </p>
      {formInvalid && <p>Invalid input.</p>}
      <p>
        <button type="submit">Add transition</button>
      </p>
    </form>
  );
};

export default TransitionForm;
