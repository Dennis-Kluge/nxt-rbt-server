
require 'mongoid'
require 'date'
require 'time'
require_relative 'lib/waypoint'

require 'sinatra'


Mongoid.load!("config/mongoid.yml", :production)

current_time = Time.now

get "/"  do
	erb :index
end

get "/coordinates.json" do
	content_type 'application/json'
	waypoints = Waypoint.where(:created_at.gte => current_time)
	puts "Waypoint: #{waypoints}"
	current_time = Time.now
	waypoints.to_json
end