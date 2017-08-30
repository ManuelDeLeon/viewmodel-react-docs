import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Header', () => {

	describe('view model', () => {
		let header;
		beforeEach(() => {
			header = new Header();
		});
		
		describe('propertyOrFunction', () => {
			it('does something (SAMPLE)', () => {
				expect(false).toBe(true);
			});
		});

	});

	describe('bindings', () => {
		const rendered = shallow(<Header />);

		it('binds div (SAMPLE)', () => {
			const elements = rendered.find('div[data-bind=""]');
			expect(elements.length).toBe(1);
		});
	})

});