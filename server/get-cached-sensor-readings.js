const getSensorReadings = require('./get-sensor-readings')
const databaseOperations =require('./database-operations')

//Instantiate the cache. In this case its a simple variable stored in local memory
const cache = {
    temperature: null,
    humidity: null
}

//Run a function to get the sensor readings every 2 seconds (the same sampling rate as our sensor)
setInterval(() => {
    getSensorReadings((err, temperature, humidity) => {
        if (err) {
          console.log("Erro ao ler sensor em getCachedSensorReadings!")
          return console.error(err)
        }
        //record data in database
        databaseOperations.insertReading('temperature',temperature)
        databaseOperations.insertReading('humidity', humidity)
        
        //Set the values of the cache on receiving new readings
        cache.temperature = temperature
        cache.humidity = humidity
    })
}, 2000)

//The functions that we expose only return the cached values, and dont make a call to the sensor interface everytime
module.exports.getTemperature = () => cache.temperature
module.exports.getHumidity = () => cache.humidity