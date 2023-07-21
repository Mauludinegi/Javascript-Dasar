//operator persamaan
document.writeln("1 == \'1\' = " + (1 == '1'));
document.writeln("<br>");
document.writeln("1 == \'1\' = " + (1 === '1'));
document.writeln("<br>");

//operator negasi (kebalikan)
document.writeln("1 != \'1\' = " + (1 != '1'));
document.writeln("<br>");
document.writeln("1 !== \'1\' = " + (1 !== '1'));
document.writeln("<br>");

//operator and (&&)
document.writeln("1 !== \'1\' && 1 == \'1\'  = " + ((1 !== '1') && (1 == '1')));
document.writeln("<br>");
document.writeln("1 != \'1\' && 1 == \'1\'  = " + ((1 != '1') && (1 == '1')));
document.writeln("<br>");

//operator or (||)
document.writeln("1 != \'1\' || 1 == \'1\'  = " + ((1 != '1') || (1 == '1')));
document.writeln("<br>");
document.writeln("1 != \'1\' || 1 === \'1\'  = " + ((1 != '1') || (1 === '1')));