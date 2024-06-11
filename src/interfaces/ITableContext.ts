export interface ITableContext {
    editableCellId: string | null;

    changeEditableCellId: (id: string) => void;
    resetEditableCellId: (id: string) => void;
}