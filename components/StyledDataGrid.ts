import {styled} from "@mui/material/styles";
import {DataGrid} from "@mui/x-data-grid";

export const StyledDataGrid = styled(DataGrid)(() => ({
    color: "#FFFFFF",
    // height: "100%",
    '& .MuiToolbar-root': {
        color: '#FFFFFF',
    },
    '& .MuiTablePagination-selectIcon': {
        color: '#FFFFFF',
    },
    '& .MuiButtonBase-root': {
        color: '#FFFFFF',
    },
}));