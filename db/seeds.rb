require 'csv'
require 'activerecord-import/base'
require 'activerecord-import/active_record/adapters/postgresql_adapter'

# Read CSV input in lib/seeds
csv_text = File.read(Rails.root.join('lib/seeds/memory-tech-challenge-data.csv'))

# Parse CSV and create Memory instances from each row
puts "Creating Memory instances..."
csv = CSV.parse(csv_text, :headers => true)
memories = []
csv.each do |row|
  memories << Memory.new(row.to_hash)
end
puts "Done"

# Bulk import instances with activerecord-import gem
puts "Importing..."
Memory.import memories
puts "Done"
puts "#{Memory.count} memories have been added to the database."