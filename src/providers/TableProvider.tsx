'use client';

import { createContext, useContext } from 'react';
import { ITableContext } from 'interfaces';

export const TableContext = createContext<ITableContext>({
    editableCellId: null,
    changeEditableCellId: () => {},
    resetEditableCellId: () => {},
});

export const useTable = () => useContext(TableContext);
