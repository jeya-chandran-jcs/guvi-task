class UberPriceCalculator {
    constructor(baseFare, costPerMile, costPerMinute, bookingFee) {
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
      this.bookingFee = bookingFee;
    }
  
    calculatePrice(distanceInMiles, timeInMinutes) {
      if (distanceInMiles < 0 || timeInMinutes < 0) {
        return "Invalid input. Distance and time must be non-negative.";
      }
  
      const fareWithoutBookingFee = 
        this.baseFare + 
        this.costPerMile * distanceInMiles + 
        this.costPerMinute * timeInMinutes;
  
      const totalFare = fareWithoutBookingFee + this.bookingFee;
  
      return `Estimated Uber Price: $${totalFare.toFixed(2)}`;
    }
  }
  
  const calculator = new UberPriceCalculator(2.0, 1.5, 0.3, 1.0); 
  const distance = 5; 
  const time = 15; 
  
  const estimatedPrice = calculator.calculatePrice(distance, time);
  console.log(estimatedPrice);
  