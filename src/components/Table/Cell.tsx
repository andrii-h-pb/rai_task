import { memo, FC } from 'react';
import TableCell from '@mui/material/TableCell';

interface IProps {
    value: string | number;
}

export const Cell: FC<IProps> = memo(({ value }) => {
    return <TableCell>{value}</TableCell>;
});
