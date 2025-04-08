from fast_flights import FlightData, Passengers, Result, get_flights_from_filter, TFSData

# Create the TFSData object
tfs_data = TFSData.from_interface(
    flight_data=[
        FlightData(date="2025-05-01", from_airport="SEA", to_airport="BKK")
    ],
    trip="one-way",
    seat="economy",
    passengers=Passengers(adults=2, children=1, infants_in_seat=0, infants_on_lap=0),
)

# Fetch the flight data with the specified currency (e.g., "USD")
result: Result = get_flights_from_filter(
    filter=tfs_data,
    currency="USD",
    mode="fallback",
)

print(result)

# The price is currently... low/typical/high
print("The price is currently", result.current_price)
