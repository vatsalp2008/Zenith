const express = require('express');
const router = express.Router();
const {
  getVehicles,
  getVehicle,
  createVehicle,
  updateVehicle,
  deleteVehicle,
  getVehicleStats
} = require('../controllers/vehicleController');
const { protect, authorize } = require('../middleware/auth');

// Public routes
router.get('/stats', getVehicleStats);
router.get('/', getVehicles);
router.get('/:id', getVehicle);

// Protected routes
router.post('/', protect, authorize('admin', 'dealer'), createVehicle);
router.put('/:id', protect, authorize('admin', 'dealer'), updateVehicle);
router.delete('/:id', protect, authorize('admin'), deleteVehicle);

module.exports = router;