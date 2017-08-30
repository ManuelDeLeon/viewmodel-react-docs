import React from 'react';
import { shallow } from 'enzyme';
import { About } from './About';

describe('About', () => {

	describe('view model', () => {
		let about;
		beforeEach(() => {
			about = new About();
		});
		
		describe('propertyOrFunction', () => {
			it('does something (SAMPLE)', () => {
				expect(false).toBe(true);
			});
		});

	});

	describe('bindings', () => {
		const rendered = shallow(<About />);

		it('binds div (SAMPLE)', () => {
			const elements = rendered.find('div[data-bind=""]');
			expect(elements.length).toBe(1);
		});
	})

});