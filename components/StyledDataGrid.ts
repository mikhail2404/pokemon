import {styled} from "@mui/material/styles";
import {DataGrid} from "@mui/x-data-grid";

export const StyledDataGrid = styled(DataGrid)(() => ({
    color: "#FFFFFF",
    fontSize: "inherit",
    '& .MuiToolbar-root': {
        color: '#FFFFFF',
        fontSize: "1.5rem",
    },
    '& .MuiTablePagination-selectIcon': {
        color: '#FFFFFF',
    },
    '& .MuiButtonBase-root': {
        color: '#FFFFFF',
    },
    '& .MuiTablePagination-displayedRows': {
        fontSize: "inherit"
    },
    '& .MuiTablePagination-selectLabel': {
        fontSize: "inherit"
    }
}));