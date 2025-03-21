//// [tests/cases/compiler/commentsEnums.ts] ////

//// [commentsEnums.ts]
/** Enum of colors*/
enum Colors {
    /** Fancy name for 'blue'*/
    Cornflower /* blue */,
    /** Fancy name for 'pink'*/
    FancyPink
} // trailing comment
var x = Colors.Cornflower;
x = Colors.FancyPink;



//// [commentsEnums.js]
var Colors;
(function (Colors) {
    Colors[Colors["Cornflower"] = 0] = "Cornflower";
    Colors[Colors["FancyPink"] = 1] = "FancyPink";
})(Colors || (Colors = {}));
var x = Colors.Cornflower;
x = Colors.FancyPink;
