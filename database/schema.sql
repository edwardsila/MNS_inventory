-- Devices table
CREATE TABLE devices (
	id SERIAL PRIMARY KEY,
	serial_number VARCHAR(100) NOT NULL UNIQUE,
	type VARCHAR(50) NOT NULL,
	description TEXT,
	status VARCHAR(30) NOT NULL DEFAULT 'in_room',
	current_location VARCHAR(100),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Users table
CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	role VARCHAR(30) NOT NULL,
	email VARCHAR(100) UNIQUE
);

-- Device Movements table
CREATE TABLE device_movements (
	id SERIAL PRIMARY KEY,
	device_id INTEGER REFERENCES devices(id) ON DELETE CASCADE,
	action VARCHAR(30) NOT NULL, -- entry, exit, transfer
	from_location VARCHAR(100),
	to_location VARCHAR(100),
	timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	received_by INTEGER REFERENCES users(id),
	confirmed_arrival BOOLEAN DEFAULT FALSE,
	notes TEXT
);

-- Maintenance Logs table
CREATE TABLE maintenance_logs (
	id SERIAL PRIMARY KEY,
	device_id INTEGER REFERENCES devices(id) ON DELETE CASCADE,
	performed_by INTEGER REFERENCES users(id),
	action VARCHAR(30) NOT NULL, -- cleaned, repaired, checked
	status_after VARCHAR(30),
	timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	notes TEXT
);
