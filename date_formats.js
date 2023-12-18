{
    let date_ = new Date()
    let dateStr = date_.toDateString()
    console.log(dateStr)
    let timeStr = date_.toTimeString()
    console.log(timeStr)
    let local = date_.toLocaleString()
    console.log(local)
    let localt = date_.toLocaleTimeString()
    console.log(localt)
    let locald = date_.toLocaleDateString()
    console.log(locald)
}

{
    // displying formated date and time
    let newDate = new Date()
    let opt = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    }
    let formated = newDate.toLocaleDateString('en-US', opt)
    console.log(formated)
}