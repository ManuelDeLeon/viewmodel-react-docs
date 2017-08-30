import React from 'react';
import { shallow } from 'enzyme';
import { Fourofour } from './Fourofour';

describe('Fourofour', () => {

	describe('view model', () => {
		let fourofour;
		beforeEach(() => {
			fourofour = new Fourofour();
		});
		
		describe('propertyOrFunction', () => {
			it('does something (SAMPLE)', () => {
				expect(false).toBe(true);
			});
		});

	});

	describe('bindings', () => {
		const rendered = shallow(<Fourofour />);

		it('binds div (SAMPLE)', () => {
			const elements = rendered.find('div[data-bind=""]');
			expect(elements.length).toBe(1);
		});
	})

});