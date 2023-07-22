import { useState } from 'react';

import TransitionForm from '../Forms/TransitionForm';
import StatusForm from '../Forms/StatusForm';

interface ElementInterface {
  type: string;
}

const NewElement: React.FC<ElementInterface> = (props) => {
  const { type } = props;

  const [formInvalid, setFormInvalid] = useState(false);

  return (
    <div>
      {type === 'status' && (
        <StatusForm formInvalid={formInvalid} setFormInvalid={setFormInvalid} />
      )}
      {type === 'transition' && (
        <TransitionForm formInvalid={formInvalid} setFormInvalid={setFormInvalid} />
      )}
    </div>
  );
};

export default NewElement;
