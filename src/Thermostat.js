'use strict';

function Thermostat(){
  this.DEFAULT_TEMP = 20;
  this.minimumTemperature = 10;
  this.MAXIMUM_TEMP_PSM_ON = 25;
  this.maximumTemperature = this.MAXIMUM_TEMP_PSM_ON;
  this.temperature = this.DEFAULT_TEMP;
}

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.increase = function() {
  this.temperature += 1;
};

Thermostat.prototype.decrease = function() {
  this.temperature -= 1;
};

Thermostat.prototype.powerSavingModeOn = function() {
  this.maximumTemperature = this.MAXIMUM_TEMP_PSM_ON;
};
