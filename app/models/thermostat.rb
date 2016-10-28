require './app/data_mapper_setup'

class Thermostat

  include DataMapper::Resource

    property :id,    Serial
    property :temp,  Integer
    property :city,  String
    property :psm,   Boolean
end
