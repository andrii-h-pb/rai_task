import { memo, useMemo, useCallback, FC } from 'react';
import { IOption } from 'interfaces';
import { Dropdown } from 'components';
import { useTable } from 'providers';
import { TableCell } from './styled';

interface IProps {
    id: string;
    value: string;
    options: IOption[];
}

export const MultivalueCell: FC<IProps> = memo(({ id, value, options }) => {
    const { editableCellId, changeEditableCellId, resetEditableCellId } = useTable();

    const isEditMode = useMemo(() => id === editableCellId, [editableCellId]);

    const onDropdownChange = useCallback(() => {
        changeEditableCellId(id);
    }, [id, changeEditableCellId]);

    const onDropdownClose = useCallback(() => {
        resetEditableCellId(id);
    }, [id, resetEditableCellId]);

    return (
        <TableCell>
            <Dropdown
                open={isEditMode}
                defaultValue={value}
                options={options}
                onChange={onDropdownChange}
                onMenuClose={onDropdownClose}
            />
        </TableCell>
    );
});
