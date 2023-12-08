{
    /**
     * abstraction is the process of hidding unwanted data
     */

    let Car = {
        model: 10,
        name: 'BMW',
        start: function () {
            console.log(`${Car.name}'s engin started!`)
        }
    }
    
    console.log(`car model : ${Car.model}`)
    console.log(`car name : ${Car.name}`)
    Car.start()
}