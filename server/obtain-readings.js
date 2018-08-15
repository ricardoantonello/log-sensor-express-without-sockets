//Import the sensor library
const sensor = require('node-dht-sensor')

//The first argument is the sensor number. In this case 11 represents the DHT11 sensor
//The second argument is the pin number to read from, for this example, we have connected
//the signal pin to pin 4
sensor.read(11, 4, function(err, temperature, humidity) 
    {
        //After reading the sensor, we get the temperature and humidity readings
        if (!err) {
            //If there is no error, log the readings to the console
            console.log('Sensor 1: temp: ' + temperature.toFixed(1) + '°C, ' +
                'humidity: ' + humidity.toFixed(1) + '%')
        }
    });

//Segundo sensor pino 17    
sensor.read(11, 17, function(err, temperature, humidity) 
    {
        //After reading the sensor, we get the temperature and humidity readings
        if (!err) {
            //If there is no error, log the readings to the console
            console.log('Sensor 2: temp: ' + temperature.toFixed(1) + '°C, ' +
                'humidity: ' + humidity.toFixed(1) + '%')
        }
    });

//Terceiro sensor pino 27    
sensor.read(22, 27, function(err, temperature, humidity) 
    {
        //After reading the sensor, we get the temperature and humidity readings
        if (!err) {
            //If there is no error, log the readings to the console
            console.log('Sensor 3: temp: ' + temperature.toFixed(1) + '°C, ' +
                'humidity: ' + humidity.toFixed(1) + '%')
        }
    });