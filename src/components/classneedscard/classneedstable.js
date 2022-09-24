import React from "react";
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper, styled } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

// this works for now, but including the classes and specs via icons that can be dulled if not needed would be better.
// It would involve adding the filepath/image name to an Avatar component as the src
// createData function and rows variable will need to be updated, and a toggle to indicate if it's needed or not somehow
// row = {
//     className: String,
//     icon: String,
// 	specs: {
//         spec1: {
//             name: String,
//             need: String ('none','low','medium','high'),
//             icon: String
//         },
//         spec2: {
//             name: String,
//             need: String ('none','low','medium','high'),
//             icon: String;
//         },
//         spec3: {
//             name: String,
//             need: String ('none','low','medium','high'),
//             icon: String
//         },
// 	},
// };
const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

function createData(className, need) {
	return { className, need };
}

const rows = [
	createData("Death Knight", "DPS(low)"),
	createData("Demon Hunter", "DPS(low) Tank(low)"),
	createData("Druid", "DPSRanged(high) Tank(low)"),
	createData("Hunter", "(low)"),
	createData("Mage", "(low)"),
	createData("Monk", "(low)"),
	createData("Paladin", "(low)"),
	createData("Priest", "DPS(med) Disc(high)"),
	createData("Rogue", "(high)"),
	createData("Shaman", "DPSRanged(med) Healer(high)"),
	createData("Warlock", "(high)"),
	createData("Warrior", "DPS(high)"),
];

const ClassNeedsTable = () => {
	return (
		<TableContainer component={Paper}>
			<Table size="small" aria-label="simple table">
				<TableHead>
					<TableRow>
						<StyledTableCell>Class</StyledTableCell>
						<StyledTableCell align="right">Need</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<StyledTableRow key={row.className} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
							<TableCell component="th" scope="row">
								{row.className}
							</TableCell>
							<TableCell align="right">{row.need}</TableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ClassNeedsTable;
