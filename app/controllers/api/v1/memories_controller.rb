class Api::V1::MemoriesController < ApplicationController
  def index

    # Pick every country for database
    countries = Memory.distinct.pluck(:country)
    
    data = []

    # Calculations on all data
    total_data = {}
    total_data[:country] = "All"
    total_data[:revenue] = Memory.sum("quantity * unit_price").round(2)
    total_data[:unique_orders] = Memory.distinct.count(:order_id)
    total_data[:average_revenue_per_order] = (total_data[:revenue] / total_data[:unique_orders]).round(2)
    total_data[:unique_customers] = Memory.distinct.count(:customer_id)
    total_data[:revenue_per_month] = Memory.all.group("DATE_TRUNC('year', date)", "DATE_TRUNC('month', date)").sum("quantity * unit_price")
    data << total_data

    # Calculations on every country's data
    countries.each do |country|
      country_memories = Memory.where(country: country)
      country_data = {}
      country_data[:country] = country
      country_data[:revenue] = country_memories.sum("quantity * unit_price").round(2)
      country_data[:unique_orders] = country_memories.distinct.count(:order_id)
      country_data[:average_revenue_per_order] = (country_data[:revenue] / country_data[:unique_orders]).round(2)
      country_data[:unique_customers] = country_memories.distinct.count(:customer_id)
      country_data[:revenue_per_month] = country_memories.group("DATE_TRUNC('year', date)", "DATE_TRUNC('month', date)").sum("quantity * unit_price")
      data << country_data
    end
    
    # Render data as JSON so we can exploit it with React
    render json: data.to_json
  end
end
