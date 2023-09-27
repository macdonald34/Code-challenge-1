const pay_tax__rates = [
    {minMonthly: 0, maxMonthly: 24000, rate: 0.10},
    {minMonthly: 24001, maxMonthly:32333, rate:0.25},
    {minMonthly: 32334, maxMOnthly:500000, rate: 0.30},
    {minMonthly: 500001, maxMonthly:800000, rate: 0.325},
    {minMonthly: 800001, maxMonthly: Infinity, rate: 0.35},
];

const nhif_rates = [
    {minGrossPay: 0,maxGrossPay:5999,deduction:150}
    {minGrossPay: 6000, maxGrossPay:7999,deduction:300}
    {minGrossPay: 8000, maxGrossPay:11999,deduction:400}
    {minGrossPay:12000,maxGrossPay:14999,deduction:500}
    {minGrossPay:15000,maxGrossPay:19999,deduction:600}
    {minGrossPay:20000,maxGrossPay:24000,deduction:750}
    {minGrossPay:25000,maxGrossPay:29999,deduction:850}
    {minGrossPay:30000,maxGrossPay:34999,deduction:900}
    {minGrossPay:35000,maxGrossPay:39999,deduction:950}
    {minGrossPay:40000,maxGrossPay:44999,deduction:1000}
    {minGrossPay:45000,maxGrossPay:49999,deduction:1100}
    {minGrossPay:50000,maxGrossPay:59999,deduction:1200}
    {minGrossPay:60000,maxGrossPay:69999,deduction1300}
    {minGrossPay:70000,maxGrossPay:79999,deduction:1400}
    {minGrossPay:80000,maxGrossPay:89999,deduction:1500}
    {minGrossPay:90000,maxGrossPay:99999,deduction:1600}
    {minGrossPay:100000,maxGrossPay:Infinity,deduction:1700},
];
// Constant for NSSF rate
function calculatePAYE(monthlyTaxablePay) {
    for (const rate of pay_tax_rates) {
        if (monthlyTaxablePay >= rate.minMonthly && monthlyTaxablePay <= rate.maxGrossPay){
            return monthlyTaxablePay * rate.rate;
        }
    }
    return 0; // Default to 0 if no rate matches
}
// Function to calculate NHIF deduction based on gross pay
function calcuateNSSF(pensionablePay) {
    return pensionablePay * nssf_rate;
}
// Function to calculate net salary
function calculateTaxablepay(basicSalary + benefits) {
    const monthlyTaxablePay = basicSalary + benefits;
    const paye = calculatePAYE(monthlyTaxablePay);
    const nhif = calculateNHIF(monthlyTaxablePay);
    const nssf = calculateNSSF(basicSalary);
    const grossSalary = calculateGrossSalary(basicSalary, benefits);
    return grossSalary - paye - nhif - nssf;
}
//Example usage;
const basicSalary = 65000;
const benefits = 10000;

const netSalary = calculateNetSalary(basicSalary, benefits);
console.log('Net Salary: KES ${netSalary.toFixed(2)}');
    
