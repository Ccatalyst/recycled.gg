import React from "react";
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper, styled } from "@mui/material";
import SpecIcon from "../specicon";
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

function createData(className, name1, need1, name2, need2, name3, need3, name4, need4) {
	// className = className.toLowerCase().replace(/ /g, "-");
	let icon1 = className.toLowerCase().replace(/ /g, "") + "-" + name1;
	let icon2 = className.toLowerCase().replace(/ /g, "") + "-" + name2;
	let icon3 = className.toLowerCase().replace(/ /g, "") + "-" + name3;
	let icon4 = className.toLowerCase().replace(/ /g, "") + "-" + name4;
	return {
		className,
		specs: [
			{
				name: name1,
				need: need1,
				icon: icon1,
			},
			{
				name: name2,
				need: need2,
				icon: icon2,
			},
			{
				name: name3,
				need: need3,
				icon: icon3,
			},
			{
				name: name4,
				need: need4,
				icon: icon4,
			},
		],
	};
}
console.log(createData("Death Knight", "blood", "low", "frost", "low", "unholy", "low"));
const rows = [
	createData("Death Knight", "blood", "low", "frost", "low", "unholy", "low"),

	createData("Demon Hunter", "havoc", "low", "vengance", "low"),

	createData("Druid", "balance", "medium", "feral", "low", "guardian", "none", "restoration", "medium"),

	createData("Hunter", "beastmastery", "none", "marksman", "none", "survival", "none"),

	createData("Mage", "arcane", "low", "fire", "medium", "frost", "low"),

	createData("Monk", "brewmaster", "low", "mistweaver", "low", "windwalker", "high"),

	createData("Paladin", "holy", "medium", "protection", "low", "retribution", "none"),

	createData("Priest", "discipline", "high", "holy", "low", "shadow", "high"),

	createData("Rogue", "assassination", "low", "outlaw", "low", "subtlety", "low"),

	createData("Shaman", "elemental", "high", "enhancement", "low", "restoration", "medium"),

	createData("Warlock", "demonology", "medium", "destruction", "medium", "affliction", "medium"),

	createData("Warrior", "arms", "high", "fury", "high", "protection", "low"),
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
							<TableCell align="right">
								{row.specs
									.filter(function (spec) {
										if (spec.need == null) {
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
