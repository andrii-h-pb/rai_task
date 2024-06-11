import { memo, useState, useEffect, useCallback, FC } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import { IOption } from 'interfaces';
import { Select } from './styled';

interface IProps {
    open?: boolean;
    defaultValue: string;
    options: IOption[];
    onChange?: () => void;
    onMenuClose?: () => void;
}

export const Dropdown: FC<IProps> = memo(
    ({ open, defaultValue, options, onChange, onMenuClose }) => {
        const [value, setValue] = useState(defaultValue);
        const [isOpen, setOpen] = useState(false);

        useEffect(() => {
            if (open) {
                setOpen(true);
            }
        }, [open]);

        const handleChange = useCallback(
            ({ target: { value } }: SelectChangeEvent<unknown>) => {
                setValue(value as string);

                if (onChange) {
                    onChange();
                }
            },
            [setValue, onChange]
        );

        const handleOpen = useCallback(() => {
            setOpen(true);
        }, [setOpen]);

        const handleClose = useCallback(() => {
            setOpen(false);
        }, [setOpen]);

        const handleMenuClose = useCallback(() => {
            setOpen(false);

            if (onMenuClose) {
                onMenuClose();
            }
        }, [setOpen, onMenuClose]);

        return (
            <FormControl sx={{ width: 200 }}>
                <Select
                    variant='standard'
                    open={isOpen}
                    value={value}
                    onOpen={handleOpen}
                    onClose={handleClose}
                    onChange={handleChange}
                    inputProps={{
                        'data-testid': 'dropdown.input',
                    }}
                    MenuProps={{
                        onClose: handleMenuClose
                    }}>
                    {options.map(({ value, label }) => (
                        <MenuItem
                            key={`${value}_${label}`}
                            value={value}>
                            {label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        );
    }
);
