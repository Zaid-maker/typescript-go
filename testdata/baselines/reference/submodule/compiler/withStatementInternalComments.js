//// [tests/cases/compiler/withStatementInternalComments.ts] ////

//// [withStatementInternalComments.ts]
// @ts-ignore
/*1*/ with /*2*/ ( /*3*/ false /*4*/ ) /*5*/ {}

//// [withStatementInternalComments.js]
with (false) { }
