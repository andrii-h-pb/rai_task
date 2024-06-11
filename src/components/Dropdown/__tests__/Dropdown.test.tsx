import React from 'react';
import { screen, render, within, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { IOption } from 'interfaces';
import { Dropdown } from '../Dropdown';

const options: IOption[] = [
    { value: 'option_1', label: 'Option 1' },
    { value: 'option_2', label: 'Option 2' },
    { value: 'option_3', label: 'Option 3' },
];

describe('Dropdown component', () => {
    test('renders correctly', () => {
        const { getByRole } = render(
            <Dropdown
                defaultValue='option_1'
                open={false}
                options={options}
            />
        );
    
        expect(getByRole('combobox')).toBeInTheDocument();
    });

    test('opens when the open prop is true', () => {
        const { getByRole } = render(
            <Dropdown
                open
                defaultValue='option_1'
                options={options}
            />
        );
        expect(getByRole('listbox')).toBeInTheDocument();
    });

    test('initializes with the default value', () => {
        const { getByTestId } = render(
            <Dropdown
                open={false}
                defaultValue='option_2'
                options={options}
            />
        );

        
        expect(getByTestId('dropdown.input')).toHaveValue('option_2');
    });

    test('renders options correctly', () => {
        const { getAllByRole } = render(
            <Dropdown
                open
                defaultValue='option_1'
                options={options}
            />
        );

        const optionsItems = getAllByRole('option');

        optionsItems.forEach((option, index) => {
            const { getByText } = within(option)
            expect(getByText(options[index].label)).toBeInTheDocument()
        });
    });

    test('calls onChange callback when value changes', () => {
        const handleChange = jest.fn();
    
        const { getByTestId } = render(
            <Dropdown
                open={true}
                defaultValue='option_1'
                options={options}
                onChange={handleChange}
            />
        );

        fireEvent.change(getByTestId('dropdown.input'), {
            target: { value: 'option_2' },
        });

        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});
