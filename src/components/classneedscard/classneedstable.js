import React from "react";
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper, styled } from "@mui/material";
import SpecIcon from "./specicon";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

// this works for now, but including the classes and specs via icons that can be dulled if not needed would be better.
// It would involve adding the filepath/image name to an Avatar component as the src
// createData function and rows variable will need to be updated, and a toggle to indicate if it's needed or not somehow
// row = {
//     className: String,
//
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
// Sets header cells to be black
const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));
// Alters every other row to have slightly different color
const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));
// Creates data and returns it in an object for use in the class needs table.

function createData(className, needs) {
	let classNeed = false;
	let specNeeds = needs.map((need) => {
		need.icon = className.toLowerCase().replace(/ /g, "") + "-" + need.name;
		if (need.need !== "none") {
			classNeed = true;
		}
		return need;
	});

	return {
		className,
		specs: specNeeds,
		need: classNeed,
	};
}
// the data for each class as it's rendered on the page. If a need changes, it can be changed here.
const rows = [
	createData("Death Knight", [
		{ name: "blood", need: "none" },
		{ name: "frost", need: "low" },
		{ name: "unholy", need: "low" },
	]),

	createData("Demon Hunter", [
		{ name: "havoc", need: "none" },
		{ name: "vengance", need: "low" },
	]),

	createData("Druid", [
		{ name: "balance", need: "high" },
		{ name: "feral", need: "none" },
		{ name: "guardian", need: "medium" },
		{ name: "restoration", need: "low" },
	]),

	createData("Hunter", [
		{ name: "beastmastery", need: "none" },
		{ name: "marksman", need: "none" },
		{ name: "survival", need: "none" },
	]),

	createData("Mage", [
		{ name: "arcane", need: "none" },
		{ name: "fire", need: "none" },
		{ name: "frost", need: "none" },
	]),

	createData("Monk", [
		{ name: "brewmaster", need: "high" },
		{ name: "mistweaver", need: "low" },
		{ name: "windwalker", need: "medium" },
	]),

	createData("Paladin", [
		{ name: "holy", need: "high" },
		{ name: "protection", need: "high" },
		{ name: "retribution", need: "none" },
	]),

	createData("Priest", [
		{ name: "discipline", need: "high" },
		{ name: "holy", need: "low" },
		{ name: "shadow", need: "high" },
	]),

	createData("Rogue", [
		{ name: "assassination", need: "high" },
		{ name: "outlaw", need: "high" },
		{ name: "subtlety", need: "high" },
	]),

	createData("Shaman", [
		{ name: "elemental", need: "high" },
		{ name: "enhancement", need: "medium" },
		{ name: "restoration", need: "high" },
	]),

	createData("Warlock", [
		{ name: "demonology", need: "low" },
		{ name: "destruction", need: "low" },
		{ name: "affliction", need: "low" },
	]),

	createData("Warrior", [
		{ name: "arms", need: "high" },
		{ name: "fury", need: "high" },
		{ name: "protection", need: "medium" },
	]),
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
					{rows
						.filter((row) => row.need)
						.map((row) => (
							<StyledTableRow key={row.className} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
								<TableCell component="th" scope="row">
									{row.className}
								</TableCell>
								<TableCell align="right">
									{row.specs
										.filter(function (spec) {
											if (spec.need === "none") {
												return false;
											}
											return true;
										})
										.map((specs) => (
											<SpecIcon spec={specs.icon} key={specs.name} need={specs.need} ml={3} />
										))}
								</TableCell>
							</StyledTableRow>
						))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ClassNeedsTable;
