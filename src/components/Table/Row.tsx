import { memo, FC } from 'react';
import TableRow from '@mui/material/TableRow';
import { ICell } from 'interfaces';
import { Cell } from './Cell';
import { MultivalueCell } from './MultivalueCell';

interface IProps {
    cells: ICell[];
}

export const Row: FC<IProps> = memo(({ cells }) => (
    <TableRow>
        {cells.map(({ id, type, value, options = [] }) => {
            if (type === 'dropdown') {
                return (
                    <MultivalueCell
                        key={id}
                        id={id}
                        value={value as string}
                        options={options.map((value) => ({
                            value,
                            label: value,
                        }))}
                    />
                );
            }

            return (
                <Cell
                    key={id}
                    value={value}
                />
            );
        })}
    </TableRow>
));
