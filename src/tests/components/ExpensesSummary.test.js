import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render Expenses summary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});


test('should correctly render Expenses summary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expenseTotal={213142155} />);
    expect(wrapper).toMatchSnapshot();
});