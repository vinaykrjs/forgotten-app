import React from 'react';
import FormTemplate from '../../components/FormTemplate/FormTemplate';
import FormTemplate2 from '../../components/FormTemplate2/FormTemplate2';
import Gallery from '../../components/Gallery/Gallery';
import MaterialUIForm from '../../components/MaterialUIForm/MaterialUIForm';
import MovingDot from '../../components/MovingDot/MovingDot';
import './TestComp.css';

function TestComp() {
  return (
    <div>
      <FormTemplate />
      <FormTemplate2 />
      <Gallery />
      <MaterialUIForm />
      <MovingDot />
    </div>
  );
}

export default TestComp;
