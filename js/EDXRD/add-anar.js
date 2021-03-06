//an - номер атома ar - атомный радиус

function addANAR(mainArray) {
	var symbol = '';
	var mainArrayLength = mainArray.length
	for (var i = 0; i < mainArrayLength; i++) {
		symbol = mainArray[i][0];
		switch (symbol) {
			case 'H': mainArray[i].push(1); mainArray[i].push(0.53);
			break;
			case 'He': mainArray[i].push(2); mainArray[i].push(0.31);
			break;
			case 'Li': mainArray[i].push(3); mainArray[i].push(1.67);
			break;
			case 'Be': mainArray[i].push(4); mainArray[i].push(1.12);
			break;
			case 'B': mainArray[i].push(5); mainArray[i].push(0.87);
			break;
			case 'C': mainArray[i].push(6); mainArray[i].push(0.67);
			break;
			case 'N': mainArray[i].push(7); mainArray[i].push(0.56);
			break;
			case 'O': mainArray[i].push(8); mainArray[i].push(0.48);
			break;
			case 'F': mainArray[i].push(9); mainArray[i].push(0.42);
			break;
			case 'Ne': mainArray[i].push(10); mainArray[i].push(0.38);
			break;
			case 'Na': mainArray[i].push(11); mainArray[i].push(1.9);
			break;
			case 'Mg': mainArray[i].push(12); mainArray[i].push(1.45);
			break;
			case 'Al': mainArray[i].push(13); mainArray[i].push(1.18);
			break;
			case 'Si': mainArray[i].push(14); mainArray[i].push(1.11);
			break;
			case 'P': mainArray[i].push(15); mainArray[i].push(0.98);
			break;
			case 'S': mainArray[i].push(16); mainArray[i].push(0.88);
			break;
			case 'Cl': mainArray[i].push(17); mainArray[i].push(0.79);
			break;
			case 'Ar': mainArray[i].push(18); mainArray[i].push(0.71);
			break;
			case 'K': mainArray[i].push(19); mainArray[i].push(2.43);
			break;
			case 'Ca': mainArray[i].push(20); mainArray[i].push(1.94);
			break;
			case 'Sc': mainArray[i].push(21); mainArray[i].push(1.84);
			break;
			case 'Ti': mainArray[i].push(22); mainArray[i].push(1.76);
			break;
			case 'V': mainArray[i].push(23); mainArray[i].push(1.71);
			break;
			case 'Cr': mainArray[i].push(24); mainArray[i].push(1.66);
			break;
			case 'Mn': mainArray[i].push(25); mainArray[i].push(1.61);
			break;
			case 'Fe': mainArray[i].push(26); mainArray[i].push(1.56);
			break;
			case 'Co': mainArray[i].push(27); mainArray[i].push(1.52);
			break;
			case 'Ni': mainArray[i].push(28); mainArray[i].push(1.49);
			break;
			case 'Cu': mainArray[i].push(29); mainArray[i].push(1.45);
			break;
			case 'Zn': mainArray[i].push(30); mainArray[i].push(1.42);
			break;
			case 'Ga': mainArray[i].push(31); mainArray[i].push(1.36);
			break;
			case 'Ge': mainArray[i].push(32); mainArray[i].push(1.25);
			break;
			case 'As': mainArray[i].push(33); mainArray[i].push(1.14);
			break;
			case 'Se': mainArray[i].push(34); mainArray[i].push(1.03);
			break;
			case 'Br': mainArray[i].push(35); mainArray[i].push(0.94);
			break;
			case 'Kr': mainArray[i].push(36); mainArray[i].push(0.88);
			break;
			case 'Rb': mainArray[i].push(37); mainArray[i].push(2.65);
			break;
			case 'Sr': mainArray[i].push(38); mainArray[i].push(2.19);
			break;
			case 'Y': mainArray[i].push(39); mainArray[i].push(2.12);
			break;
			case 'Zr': mainArray[i].push(40); mainArray[i].push(2.06);
			break;
			case 'Nb': mainArray[i].push(41); mainArray[i].push(1.98);
			break;
			case 'Mo': mainArray[i].push(42); mainArray[i].push(1.9);
			break;
			case 'Tc': mainArray[i].push(43); mainArray[i].push(1.83);
			break;
			case 'Ru': mainArray[i].push(44); mainArray[i].push(1.78);
			break;
			case 'Rh': mainArray[i].push(45); mainArray[i].push(1.73);
			break;
			case 'Pd': mainArray[i].push(46); mainArray[i].push(1.69);
			break;
			case 'Ag': mainArray[i].push(47); mainArray[i].push(1.65);
			break;
			case 'Cd': mainArray[i].push(48); mainArray[i].push(1.61);
			break;
			case 'In': mainArray[i].push(49); mainArray[i].push(1.56);
			break;
			case 'Sn': mainArray[i].push(50); mainArray[i].push(1.45);
			break;
			case 'Sb': mainArray[i].push(51); mainArray[i].push(1.33);
			break;
			case 'Te': mainArray[i].push(52); mainArray[i].push(1.23);
			break;
			case 'I': mainArray[i].push(53); mainArray[i].push(1.15);
			break;
			case 'Xe': mainArray[i].push(54); mainArray[i].push(1.08);
			break;
			case 'Cs': mainArray[i].push(55); mainArray[i].push(2.98);
			break;
			case 'Ba': mainArray[i].push(56); mainArray[i].push(2.53);
			break;
			case 'Pr': mainArray[i].push(59); mainArray[i].push(2.47);
			break;
			case 'Nd': mainArray[i].push(60); mainArray[i].push(2.06);
			break;
			case 'Pm': mainArray[i].push(61); mainArray[i].push(2.05);
			break;
			case 'Sm': mainArray[i].push(62); mainArray[i].push(2.38);
			break;
			case 'Eu': mainArray[i].push(63); mainArray[i].push(2.31);
			break;
			case 'Gd': mainArray[i].push(64); mainArray[i].push(2.33);
			break;
			case 'Tb': mainArray[i].push(65); mainArray[i].push(2.25);
			break;
			case 'Dy': mainArray[i].push(66); mainArray[i].push(2.28);
			break;
			case 'Ho': mainArray[i].push(67); mainArray[i].push(2.26);
			break;
			case 'Er': mainArray[i].push(68); mainArray[i].push(2.26);
			break;
			case 'Tm': mainArray[i].push(69); mainArray[i].push(2.22);
			break;
			case 'Yb': mainArray[i].push(70); mainArray[i].push(2.22);
			break;
			case 'Lu': mainArray[i].push(71); mainArray[i].push(2.17);
			break;
			case 'Hf': mainArray[i].push(72); mainArray[i].push(2.08);
			break;
			case 'Ta': mainArray[i].push(73); mainArray[i].push(2);
			break;
			case 'W': mainArray[i].push(74); mainArray[i].push(1.93);
			break;
			case 'Re': mainArray[i].push(75); mainArray[i].push(1.88);
			break;
			case 'Os': mainArray[i].push(76); mainArray[i].push(1.85);
			break;
			case 'Ir': mainArray[i].push(77); mainArray[i].push(1.8);
			break;
			case 'Pt': mainArray[i].push(78); mainArray[i].push(1.77);
			break;
			case 'Au': mainArray[i].push(79); mainArray[i].push(1.74);
			break;
			case 'Hg': mainArray[i].push(80); mainArray[i].push(1.71);
			break;
			case 'Tl': mainArray[i].push(81); mainArray[i].push(1.56);
			break;
			case 'Pb': mainArray[i].push(82); mainArray[i].push(1.54);
			break;
			case 'Bi': mainArray[i].push(83); mainArray[i].push(1.43);
			break;
			case 'Po': mainArray[i].push(84); mainArray[i].push(1.35);
			break;
			case 'At': mainArray[i].push(85); mainArray[i].push(1.27);
			break;
			case 'Rn': mainArray[i].push(86); mainArray[i].push(1.2);
			break;
			default: mainArray[i].push(1); mainArray[i].push(0.79);
			break;
		}
	}
}