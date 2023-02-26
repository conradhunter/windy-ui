import React from 'react';
import Steps from '../components/Steps';

function ChangeLog() {
  const items = [
    {
      id: 1,
      title: 'New components added',
      description: 'Added 5 new components and 3 new templates.',
    },
    {
      id: 2,
      title: 'Bug fix',
      description: 'We fixed a bug that was causing the app to crash.',
    },
    {
      id: 3,
      title: 'New components added',
      description: 'Added 17 new components.',
    },
    {
      id: 4,
      title: 'New components added',
      description: 'Added 4 new components.',
    },
    {
      id: 5,
      title: 'Version 1.0.0',
      description: 'Launch of WindyUI.',
    },
  ];

  return (
    <div>
      <Steps />
    </div>
  );
}

export default ChangeLog;
