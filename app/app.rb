require 'sinatra/base'
require 'sinatra'
require_relative './models/thermostat'

ENV['RACK_ENV'] = 'development'

class ThermostatApp < Sinatra::Base

  get '/' do
    erb :index
  end

end
