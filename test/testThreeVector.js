
function test(i_cVect, i_fX, i_fY, i_fZ)
{
	var fEpsilon = 1.0e-7;
	return Math.abs(i_cVect.x - i_fX) < fEpsilon && Math.abs(i_cVect.y - i_fY) < fEpsilon && Math.abs(i_cVect.z - i_fZ) < fEpsilon;
}
function testAndReport(bSilent_Pass, i_psTest, i_cVect, i_fX, i_fY, i_fZ)
{
	var iRet = 0;
	var sSuccess = "Pass";
	var bPrint = !bSilent_Pass;
	if (!test(i_cVect,i_fX,i_fY,i_fZ))
	{
		iRet = 1;
		bPrint = true;
		sSuccess = "Fail";
	}
	if (bPrint)
	{
		console.log(sSuccess + ":  " + i_psTest + ": x=" + i_cVect.x + " (" + i_fX + ") y=" + i_cVect.y + " (" + i_fY + ") z=" + i_cVect.z + " (" + i_fZ + ")");
	}
	return iRet;
}

function testAndReportScalar(bSilent_Pass, i_psTest, i_fResult, i_fExpected_Result)
{
	var fEpsilon = 1.0e-7;
	var iRet = 0;
	var sSuccess = "Pass";
	var bPrint = !bSilent_Pass;
	if (Math.abs(i_fResult - i_fExpected_Result) > fEpsilon)
	{
		iRet = 1;
		bPrint = true;
		sSuccess = "Fail";
	}
	if (bPrint)
	{
		console.log(sSuccess + ":  " + i_psTest + ": s=" + i_fResult + " (" + i_fExpected_Result + ")");
	}
	return iRet;
}

function printV(i_cVect)
{
	console.log("<" + i_cVect.x + ", " + i_cVect.y + ", " + i_cVect.z + ">");
}


var iFailures = 0;
var bSilent_Pass = true;
var qA = new ThreeVector();
var qX = new ThreeVector(1,0,0);
var qY = new ThreeVector(0,1,0);
var qZ = new ThreeVector(0,0,1);

iFailures += testAndReport(bSilent_Pass,"X",qX,1,0,0);
iFailures += testAndReport(bSilent_Pass,"Y",qY,0,1,0);
iFailures += testAndReport(bSilent_Pass,"Z",qZ,0,0,1);
iFailures += testAndReport(bSilent_Pass,"A",qA,0,0,0);

iFailures += testAndReportScalar(bSilent_Pass,"X . X",qX.dot(qX),1.0);
iFailures += testAndReportScalar(bSilent_Pass,"Y . Y",qY.dot(qY),1.0);
iFailures += testAndReportScalar(bSilent_Pass,"Z . Z",qZ.dot(qZ),1.0);
iFailures += testAndReportScalar(bSilent_Pass,"X . Y",qX.dot(qY),0.0);
iFailures += testAndReportScalar(bSilent_Pass,"X . Z",qX.dot(qZ),0.0);
iFailures += testAndReportScalar(bSilent_Pass,"Y . X",qY.dot(qX),0.0);
iFailures += testAndReportScalar(bSilent_Pass,"Y . Z",qY.dot(qZ),0.0);
iFailures += testAndReportScalar(bSilent_Pass,"Z . X",qZ.dot(qX),0.0);
iFailures += testAndReportScalar(bSilent_Pass,"Z . Y",qZ.dot(qY),0.0);

iFailures += testAndReportScalar(bSilent_Pass,"||X||",qX.magnitude(),1.0);
iFailures += testAndReportScalar(bSilent_Pass,"||Y||",qY.magnitude(),1.0);
iFailures += testAndReportScalar(bSilent_Pass,"||Z||",qZ.magnitude(),1.0);
iFailures += testAndReportScalar(bSilent_Pass,"||A||",qA.magnitude(),0.0);

qA = new ThreeVector(2,0,0);
iFailures += testAndReport(bSilent_Pass,"unit <2,0,0>",qA.unit(),1,0,0);
qA = new ThreeVector(0,2,0);
iFailures += testAndReport(bSilent_Pass,"unit <0,2,0>",qA.unit(),0,1,0);
qA = new ThreeVector(0,0,2);
iFailures += testAndReport(bSilent_Pass,"unit <0,0,2>",qA.unit(),0,0,1);

iFailures += testAndReport(bSilent_Pass,"-X",qX.negate(),-1,0,0);
iFailures += testAndReport(bSilent_Pass,"-Y",qY.negate(),0,-1,0);
iFailures += testAndReport(bSilent_Pass,"-Z",qZ.negate(),0,0,-1);

iFailures += testAndReport(bSilent_Pass,"X + X",qX.add(qX),2,0,0);
iFailures += testAndReport(bSilent_Pass,"Y + Y",qY.add(qY),0,2,0);
iFailures += testAndReport(bSilent_Pass,"Z + Z",qZ.add(qZ),0,0,2);
iFailures += testAndReport(bSilent_Pass,"X + Y",qX.add(qY),1,1,0);
iFailures += testAndReport(bSilent_Pass,"X + Z",qX.add(qZ),1,0,1);
iFailures += testAndReport(bSilent_Pass,"Y + X",qY.add(qX),1,1,0);
iFailures += testAndReport(bSilent_Pass,"Y + Z",qY.add(qZ),0,1,1);
iFailures += testAndReport(bSilent_Pass,"Z + X",qZ.add(qX),1,0,1);
iFailures += testAndReport(bSilent_Pass,"Z + Y",qZ.add(qY),0,1,1);

iFailures += testAndReport(bSilent_Pass,"X - X",qX.subtract(qX),0,0,0);
iFailures += testAndReport(bSilent_Pass,"Y - Y",qY.subtract(qY),0,0,0);
iFailures += testAndReport(bSilent_Pass,"Z - Z",qZ.subtract(qZ),0,0,0);
iFailures += testAndReport(bSilent_Pass,"X - Y",qX.subtract(qY),1,-1,0);
iFailures += testAndReport(bSilent_Pass,"X - Z",qX.subtract(qZ),1,0,-1);
iFailures += testAndReport(bSilent_Pass,"Y - X",qY.subtract(qX),-1,1,0);
iFailures += testAndReport(bSilent_Pass,"Y - Z",qY.subtract(qZ),0,1,-1);
iFailures += testAndReport(bSilent_Pass,"Z - X",qZ.subtract(qX),-1,0,1);
iFailures += testAndReport(bSilent_Pass,"Z - Y",qZ.subtract(qY),0,-1,1);

iFailures += testAndReport(bSilent_Pass,"X * 2",qX.scale(2.0),2,0,0);
iFailures += testAndReport(bSilent_Pass,"Y * 2",qY.scale(2.0),0,2,0);
iFailures += testAndReport(bSilent_Pass,"Z * 2",qZ.scale(2.0),0,0,2);

iFailures += testAndReport(bSilent_Pass,"X / 2",qX.divide(2.0),0.5,0,0);
iFailures += testAndReport(bSilent_Pass,"Y / 2",qY.divide(2.0),0,0.5,0);
iFailures += testAndReport(bSilent_Pass,"Z / 2",qZ.divide(2.0),0,0,0.5);


iFailures += testAndReport(bSilent_Pass,"X x X",qX.cross(qX),0,0,0);
iFailures += testAndReport(bSilent_Pass,"Y x Y",qY.cross(qY),0,0,0);
iFailures += testAndReport(bSilent_Pass,"Z x Z",qZ.cross(qZ),0,0,0);
iFailures += testAndReport(bSilent_Pass,"X x Y",qX.cross(qY),0,0,1);
iFailures += testAndReport(bSilent_Pass,"X x Z",qX.cross(qZ),0,-1,0);
iFailures += testAndReport(bSilent_Pass,"Y x X",qY.cross(qX),0,0,-1);
iFailures += testAndReport(bSilent_Pass,"Y x Z",qY.cross(qZ),1,0,0);
iFailures += testAndReport(bSilent_Pass,"Z x X",qZ.cross(qX),0,1,0);
iFailures += testAndReport(bSilent_Pass,"Z x Y",qZ.cross(qY),-1,0,0);

console.log("PASS: " + (56 - iFailures) + " FAIL: " + iFailures);	

