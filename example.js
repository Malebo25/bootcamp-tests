

function mostProfitableDepartment(salesData) {
    const salesMap = {};


    for (var i = 0; i < salesData.length; i++) {
        const data = salesData[i];
        if (salesMap[data.department] === undefined) {
            salesMap[data.department] = 0;
        }
        salesMap[data.department] += data.sales

    }
    var currentMaxSales = 0;
    var currentDepartment = "";
    for (const salesDepartment in salesMap) {

        const currentDepSales = salesMap[salesDepartment];
        if (currentDepSales > currentMaxSales) {
            currentMaxSales = currentDepSales;
            currentDepartment = salesDepartment;
        }

    }

    return currentDepartment;
}
// function mostProfitableDay(salesData) {
//     const dayMap = {};


//     for (var i = 0; i < salesData.length; i++) {
//         const data = salesData[i];
//         if (salesMap[data.day] === undefined) {
//             salesMap[data.day] = 0;
//         }
//         dayMap[data.day] += data.sales

//     }
//     var currentMaxSales = 0;
//     var currentDay = "";
//     for (const salesDay in dayMap) {

//         const currentDaySales = dayMap[salesDay];
//         if (currentDaySales > currentMaxSales) {
//             currentMaxSales = currentDaySales;
//             currentDay = salesDay;
//         }

//     }

//     return currentDay;
// }
