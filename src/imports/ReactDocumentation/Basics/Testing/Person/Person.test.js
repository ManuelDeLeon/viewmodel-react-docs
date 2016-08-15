import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { Person } from './Person';

describe('Person', () => {
  describe('view model', () => {
    let person;
    beforeEach(() => {
      person = new Person();
    });

    describe('firstName', () => {
      let firstName;
      beforeEach(() => {
        firstName = person.firstName;
      });

      it('defaults to empty', () => {
        expect(firstName()).toBe('');
      });

      it("is invalid with ''", () => {
        expect(firstName.valid()).toBe(false);
      });

      it("is valid with 'A'", () => {
        firstName('A');
        expect(firstName.valid()).toBe(true);
      });
    });

    describe('lastName', () => {
      let lastName;
      beforeEach(() => {
        lastName = person.lastName;
      });

      it('defaults to empty', () => {
        expect(lastName()).toBe('');
      });

      it("is invalid with ''", () => {
        expect(lastName.valid()).toBe(false);
      });

      it("is valid with 'A'", () => {
        lastName('A');
        expect(lastName.valid()).toBe(true);
      });
    });

    describe('fullName', () => {
      it('returns first + last', () => {
        person.firstName('A');
        person.lastName('B');
        expect(person.fullName()).toBe('A B');
      });
    });

  })

  describe('bindings', ()=>{
    const intoDom = TestUtils.renderIntoDocument(
      <Person  />
    );
    const rendered = ReactDOM.findDOMNode(intoDom);

    it('binds first name', ()=>{
      // One method is to find the input with the bind that we want to test:

      const elements = rendered.querySelectorAll('input');
      const filtered = [].filter.call(elements, (element) => element.vmBinding.value === 'firstName');
      expect(filtered.length).toBe(1);
      // We already know it has 'value: firstName' so check that it's the only one
      expect(Object.keys(filtered[0].vmBinding).length).toBe(1);
    })

    it('binds last name', ()=>{
      // Another method is to rely on the fact that our component will have 2 inputs and
      // firstName will be before lastName, so we can pick the second input:

      const element = rendered.querySelectorAll('input')[1];
      const binding = element.vmBinding;
      expect(binding.value).toBe('lastName');
      // Make sure binding only has 1 entry ('value: lastName')
      expect(Object.keys(binding).length).toBe(1);
    })

    it('binds reset button', ()=>{
      // There's only one button so grab it
      const element = rendered.querySelectorAll('button')[0];
      const binding = element.vmBinding;
      expect(binding.click).toBe('reset');
      expect(binding.enable).toBe('valid');
      // Make sure binding only has click and enable
      expect(Object.keys(binding).length).toBe(2);
    })
  })

});