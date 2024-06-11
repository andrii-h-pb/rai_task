'use client'

import { memo, useMemo, useState, useCallback, FC } from 'react';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { ICell } from 'interfaces';
import { TableContext } from 'providers';
import { Row } from './Row';

interface IRow {
    id: string;
    cells: ICell[];
}

interface IProps {
    columns: ICell[];
    rows: IRow[];
}

export const Table: FC<IProps> = memo(({ columns, rows }) => {
    const editableCellsIds = useMemo(() => {
        const ids = [];

        for (const { cells } of rows) {
            for (const { id, type } of cells) {
                if (type === 'dropdown') {
                    ids.push(id);
                }
            }
        }

        return ids;
    }, [rows]);

    const [editableCellId, setEditableCellId] = useState<string | null>(null);
    const [editableCells, setEditableCells] = useState<string[]>(editableCellsIds);

    const changeEditableCellId = useCallback((id: string) => {
        const nextCellsIds = editableCells.filter(cellId => cellId !== id);

        const [nextEditableCell] = nextCellsIds;

        setEditableCellId(nextEditableCell);
        setEditableCells(nextCellsIds);
    }, [editableCells, setEditableCellId, setEditableCells]);

    const resetEditableCellId = useCallback((id: string) => {
        const nextCellsIds = editableCells.filter(cellId => cellId !== id);

        setEditableCells(nextCellsIds);
    }, [editableCells, setEditableCellId, setEditableCells]);

    return (
        <TableContext.Provider
            value={{
                editableCellId,
                changeEditableCellId,
                resetEditableCellId
            }}>
            <TableContainer component={Paper}>
                <MuiTable>
                    <TableHead>
                        <Row cells={columns} />
                    </TableHead>
                    <TableBody>
                        {rows.map(({ id, cells }) => (
                            <Row
                                key={id}
                                cells={cells}
                            />
                        ))}
                    </TableBody>
                </MuiTable>
            </TableContainer>
        </TableContext.Provider>
    );
});
