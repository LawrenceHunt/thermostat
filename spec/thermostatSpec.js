'use strict';

describe('Thermostat', function(){
  var Thermostat = require('../src/Thermostat');
  var thermostat;

  beforeEach(function(){
   thermostat = new Thermostat();
  });

  // Thermostat starts at 20 degrees

  it('starts at 20 degrees', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  // You can increase the temperature with the up button

  it('increases temperature with up button', function(){
    thermostat.upButton();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  // You can decrease the temperature with the down button

  it('decreases temperature with down button', function(){
    thermostat.downButton();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  // The minimum temperature is 10 degrees

  it('has a minimum temperature of 10 degrees', function(){
    thermostat.temperature = 10;
    expect( function(){ thermostat.downButton(); } ).toThrow(new Error("Thermostat at minimum"));
  });


  // Power saving mode is on by default

  it('has power saving mode', function() {
    expect( thermostat.powerSavingMode).toBe(true);
  });

  // If power saving mode is on, the maximum temperature is 25 degrees

  it('has a maximum temperature of 25 degrees if power saving mode is on', function() {
    thermostat.temperature = 25;
    expect( thermostat.powerSavingMode).toBe(true);
    expect( function(){ thermostat.upButton(); } ).toThrow(new Error("Thermostat at maximum"));
  });

  // Can turn power saving mode off

  it('has power saving mode', function() {
    thermostat.togglePowerSavingMode();
    expect( thermostat.powerSavingMode).toBe(false);
  });

  // If power saving mode is off, the maximum temperature is 32 degrees
  it('if power saving mode is off max temperature is 32 degress', function() {
    thermostat.togglePowerSavingMode();
    expect(thermostat.powerSavingMode).toBe(false);
    expect(thermostat.maximumTemperature).toEqual(32);
  });

  // You can reset the temperature to 20 by hitting the reset button
  it('lets you reset the temperature to 20 with reset', function(){
    thermostat.temperature = 25;
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  // The thermostat should colour the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red
  describe('Thermostat colours', function(){
    it('should be green if temperature is less than 18', function(){
      thermostat.temperature = 17;
      expect(thermostat.color).toEqual('Green');
    });

    it('should be yellow if temperature is between 18 and 25', function(){
      thermostat.temperature = 23;
      expect(thermostat.color).toEqual('Yellow');
    });

    it('should be red if temperature is over 25', function(){
      thermostat.temperature = 26;
      expect(thermostat.color).toEqual('Red');
    });

  });
});
