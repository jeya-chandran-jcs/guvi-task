class Person {
    constructor(firstName, lastName, age, address, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.address = address;
      this.email = email;
    }
  
    updateAge(newAge) {
      if (newAge >= 0) {
        this.age = newAge;
      } else {
        console.log("Age cannot be negative.");
      }
    }
  
    updateAddress(newAddress) {
      this.address = newAddress;
    }
  
    updateEmail(newEmail) {
      this.email = newEmail;
    }
  
    toString() {
      return `${this.firstName} ${this.lastName}, Age: ${this.age}\nAddress: ${this.address}\nEmail: ${this.email}`;
    }
  }
  
  const person1 = new Person("John", "Doe", 30, "123 Main St, City, Country", "johndoe@example.com");
  console.log(person1.toString());
  
  person1.updateAge(31);
  person1.updateAddress("456 Elm St, Town, Country");
  person1.updateEmail("john.doe@example.com");
  
  console.log("\nUpdated Person:");
  console.log(person1.toString());
  