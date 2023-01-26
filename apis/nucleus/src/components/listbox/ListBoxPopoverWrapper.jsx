import React, { useState } from 'react';
import ListBoxPopover from './ListBoxPopover';

export default function ListBoxPopoverWrapper({ app, fieldIdentifier, stateName, element, options = {} }) {
  const [showState, setShowstate] = useState(!!options.show);
  const handleCloseShowState = () => {
    setShowstate(false);
  };

  return (
    <ListBoxPopover
      show={showState}
      app={app}
      alignTo={{ current: element }}
      close={handleCloseShowState}
      fieldName={fieldIdentifier}
      stateName={stateName}
    />
  );
}
