{
    // we use Date class to implement or create a date
    let currentDate = Date()
    console.log(currentDate)

    // creating date 

    let createDate = new Date()
    // createDate.getMilliseconds(12)
    createDate.getSeconds(10)
    createDate.getMinutes(40)
    createDate.getHours(14)
    createDate.getDay(2) // day of week
    createDate.getDate(18) // day of month
    createDate.getMonth(12-1) // month starts form index 0
    createDate.getFullYear(2023)
    console.log(createDate)

    // making date
    let mkdate = new Date('2023-12-18T09:06:10')
    console.log(mkdate)
}