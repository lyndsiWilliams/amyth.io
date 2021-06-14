import { mount } from '@cypress/react';
import Button from './index';

it('Button', () => {
  mount(
    <Button
      buttonText='This is a button'
      type='default'
      shape='round'
      style={{ width: '150px' }}
    />
  );

  cy.get('button').contains('This is a button').click();
});
