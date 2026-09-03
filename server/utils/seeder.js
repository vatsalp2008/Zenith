const mongoose = require('mongoose');
const Vehicle = require('../models/Vehicle');
const User = require('../models/User');
require('dotenv').config();

const vehicles = [
  {
    make: 'Toyota',
    model: 'Camry',
    year: 2024,
    price: 32000,
    condition: 'New',
    mileage: 0,
    availability: true
  },
  {
    make: 'Honda',
    model: 'Accord',
    year: 2023,
    price: 28000,
    condition: 'Used',
    mileage: 15000,
    availability: true
  },
  {
    make: 'Tesla',
    model: 'Model 3',
    year: 2024,
    price: 45000,
    condition: 'New',
    mileage: 0,
    availability: true
  },
  {
    make: 'Ford',
    model: 'F-150',
    year: 2023,
    price: 38000,
    condition: 'Used',
    mileage: 20000,
    availability: true
  },
  {
    make: 'BMW',
    model: 'X5',
    year: 2024,
    price: 65000,
    condition: 'New',
    mileage: 0,
    availability: true
  },
  {
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2022,
    price: 35000,
    condition: 'Certified',
    mileage: 25000,
    availability: true
  },
  {
    make: 'Chevrolet',
    model: 'Silverado',
    year: 2023,
    price: 42000,
    condition: 'Used',
    mileage: 18000,
    availability: true
  },
  {
    make: 'Nissan',
    model: 'Altima',
    year: 2024,
    price: 27000,
    condition: 'New',
    mileage: 0,
    availability: true
  },
  {
    make: 'Audi',
    model: 'Q7',
    year: 2023,
    price: 55000,
    condition: 'Certified',
    mileage: 12000,
    availability: true
  },
  {
    make: 'Mazda',
    model: 'CX-5',
    year: 2024,
    price: 33000,
    condition: 'New',
    mileage: 0,
    availability: true
  }
];

const users = [
  {
    name: 'Admin User',
    email: 'admin@cardealership.com',
    password: 'admin123',
    role: 'admin'
  },
  {
    name: 'John Dealer',
    email: 'dealer@cardealership.com',
    password: 'dealer123',
    role: 'dealer'
  },
  {
    name: 'Jane Customer',
    email: 'customer@cardealership.com',
    password: 'customer123',
    role: 'customer'
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/car-dealership');
    
    // Clear existing data
    await Vehicle.deleteMany();
    await User.deleteMany();
    
    // Insert new data
    await Vehicle.insertMany(vehicles);
    await User.create(users); // Use create for password hashing
    
    console.log('✅ Database seeded successfully');
    process.exit();
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

const clearDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/car-dealership');
    
    await Vehicle.deleteMany();
    await User.deleteMany();
    
    console.log('✅ Database cleared successfully');
    process.exit();
  } catch (error) {
    console.error('❌ Error clearing database:', error);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  clearDatabase();
} else {
  seedDatabase();
}