import { User, Complaint, Department, Notification } from '../../shared/types.js';

const DEMO_ADMIN: User = {
  id: 'USR-ADMIN-001',
  phone: '+919876543210',
  name: 'Chief Grievance Administrator',
  email: 'admin@smartgov.local',
  role: 'ADMIN',
  status: 'ACTIVE',
  createdAt: '2026-10-01T00:00:00.000Z',
  updatedAt: '2026-10-01T00:00:00.000Z',
  lastLoginAt: new Date().toISOString(),
};

const DEMO_CITIZEN: User = {
  id: 'USR-CITIZEN-001',
  phone: '+919876543211',
  name: 'Priya Sharma',
  email: 'priya.sharma@example.com',
  role: 'CITIZEN',
  status: 'ACTIVE',
  createdAt: '2026-10-05T00:00:00.000Z',
  updatedAt: '2026-10-05T00:00:00.000Z',
  lastLoginAt: new Date().toISOString(),
};

const INITIAL_DEPARTMENTS: Department[] = [
  {
    id: 'DEPT-ROADS',
    code: 'DEPT_ROADS',
    name: 'Public Works & Roads Department (PWD)',
    description: 'Responsible for arterial roads, pothole repairs, bridges, flyovers, and pedestrian footpaths.',
    categories: ['ROADS'],
    headName: 'Er. R. K. Nambiar (Chief Engineer - Roads)',
    contactEmail: 'pwd.roads@smartgov.local',
    contactPhone: '+91 80 2297 5001',
    active: true,
    createdAt: '2026-10-01T00:00:00.000Z',
  },
  {
    id: 'DEPT-WATER',
    code: 'DEPT_WATER',
    name: 'Water Supply & Sewerage Board (BWSSB)',
    description: 'Operates drinking water distribution pipelines, reservoir maintenance, and major leak repairs.',
    categories: ['WATER'],
    headName: 'Smt. Deepa Sundaram (Executive Engineer)',
    contactEmail: 'bwssb.water@smartgov.local',
    contactPhone: '+91 80 2297 5002',
    active: true,
    createdAt: '2026-10-01T00:00:00.000Z',
  },
  {
    id: 'DEPT-SANITATION',
    code: 'DEPT_SANITATION',
    name: 'Solid Waste Management & Sanitation Dept',
    description: 'Daily doorstep garbage collection, commercial waste clearance, and community sanitation bins.',
    categories: ['GARBAGE'],
    headName: 'Dr. Mohan Kumar (Joint Commissioner SWM)',
    contactEmail: 'sanitation@smartgov.local',
    contactPhone: '+91 80 2297 5003',
    active: true,
    createdAt: '2026-10-01T00:00:00.000Z',
  },
  {
    id: 'DEPT-POWER',
    code: 'DEPT_POWER',
    name: 'Electricity Supply & Streetlight Authority (BESCOM)',
    description: 'Maintains low and high-voltage transmission lines, transformers, and public streetlight infrastructure.',
    categories: ['ELECTRICITY'],
    headName: 'Er. Arvind Swamy (Superintending Engineer)',
    contactEmail: 'power.streetlights@smartgov.local',
    contactPhone: '+91 80 2297 5004',
    active: true,
    createdAt: '2026-10-01T00:00:00.000Z',
  },
  {
    id: 'DEPT-DRAINAGE',
    code: 'DEPT_DRAINAGE',
    name: 'Stormwater & Underground Drainage Cell',
    description: 'Stormwater drain desilting, culvert maintenance, and flood mitigation canals.',
    categories: ['DRAINAGE'],
    headName: 'Er. V. Chandrasekhar (Chief Hydrologist)',
    contactEmail: 'drainage.flood@smartgov.local',
    contactPhone: '+91 80 2297 5005',
    active: true,
    createdAt: '2026-10-01T00:00:00.000Z',
  },
  {
    id: 'DEPT-SAFETY',
    code: 'DEPT_SAFETY',
    name: 'Disaster Management & Public Safety Cell',
    description: 'Emergency structural risk management, tree fall clearance, hazard perimeter cordoning.',
    categories: ['PUBLIC_SAFETY', 'OTHER'],
    headName: 'Col. (Retd.) Sanjeev Hegde (Director Disaster Cell)',
    contactEmail: 'safety.emergency@smartgov.local',
    contactPhone: '+91 80 2297 5006',
    active: true,
    createdAt: '2026-10-01T00:00:00.000Z',
  },
];

const INITIAL_COMPLAINTS: Complaint[] = [
  {
    id: 'SGC-2026-1001',
    citizenId: 'USR-CITIZEN-001',
    citizen: DEMO_CITIZEN,
    title: 'Deep hazardous crater pothole outside Indiranagar Metro Station exit A',
    description: 'A 2-foot wide and 8-inch deep pothole has opened up right at the pedestrian crossing outside Indiranagar Metro Station. Two scooter riders slipped yesterday evening during rain.',
    category: 'ROADS',
    predictedCategory: 'ROADS',
    priority: 'HIGH',
    status: 'IN_PROGRESS',
    state: 'Karnataka',
    city: 'Bengaluru',
    locality: 'Indiranagar',
    address: 'CMH Road, opposite Metro Pillar 84',
    latitude: 12.9784,
    longitude: 77.6408,
    language: 'en',
    assignedDepartmentId: 'DEPT-ROADS',
    assignedDepartment: INITIAL_DEPARTMENTS[0],
    createdAt: new Date(Date.now() - 48 * 3600000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 3600000).toISOString(),
  },
  {
    id: 'SGC-2026-1002',
    citizenId: 'USR-CITIZEN-001',
    citizen: DEMO_CITIZEN,
    title: 'Contaminated muddy tap water smelling of sewage in 4th Block Koramangala',
    description: 'For the last 3 days drinking water supply has black particles and smells like sewage drain water. Multiple families are falling sick.',
    category: 'WATER',
    predictedCategory: 'WATER',
    priority: 'CRITICAL',
    status: 'ASSIGNED',
    state: 'Karnataka',
    city: 'Bengaluru',
    locality: 'Koramangala',
    address: '8th Cross, 4th Block Koramangala',
    latitude: 12.9352,
    longitude: 77.6245,
    language: 'en',
    assignedDepartmentId: 'DEPT-WATER',
    assignedDepartment: INITIAL_DEPARTMENTS[1],
    createdAt: new Date(Date.now() - 24 * 3600000).toISOString(),
    updatedAt: new Date(Date.now() - 6 * 3600000).toISOString(),
  },
  {
    id: 'SGC-2026-1003',
    citizenId: 'USR-CITIZEN-001',
    citizen: DEMO_CITIZEN,
    title: 'Streetlights completely dark on 80 Feet Road for 2 weeks',
    description: 'Stretches from Sony World signal to Oasis mall have no working streetlights. Extremely unsafe for female pedestrians walking after 8 PM.',
    category: 'ELECTRICITY',
    predictedCategory: 'ELECTRICITY',
    priority: 'MEDIUM',
    status: 'RESOLVED',
    state: 'Karnataka',
    city: 'Bengaluru',
    locality: 'Koramangala',
    address: '80 Feet Road Koramangala',
    latitude: 12.9348,
    longitude: 77.6251,
    language: 'en',
    assignedDepartmentId: 'DEPT-POWER',
    assignedDepartment: INITIAL_DEPARTMENTS[3],
    createdAt: new Date(Date.now() - 96 * 3600000).toISOString(),
    updatedAt: new Date(Date.now() - 12 * 3600000).toISOString(),
    resolvedAt: new Date(Date.now() - 12 * 3600000).toISOString(),
  },
];

function getStoredUsers(): User[] {
  try {
    const raw = localStorage.getItem('smartgov_local_users');
    return raw ? JSON.parse(raw) : [DEMO_ADMIN, DEMO_CITIZEN];
  } catch {
    return [DEMO_ADMIN, DEMO_CITIZEN];
  }
}

function saveStoredUsers(users: User[]) {
  try {
    localStorage.setItem('smartgov_local_users', JSON.stringify(users));
  } catch {}
}

function getStoredComplaints(): Complaint[] {
  try {
    const raw = localStorage.getItem('smartgov_local_complaints');
    return raw ? JSON.parse(raw) : INITIAL_COMPLAINTS;
  } catch {
    return INITIAL_COMPLAINTS;
  }
}

function saveStoredComplaints(complaints: Complaint[]) {
  try {
    localStorage.setItem('smartgov_local_complaints', JSON.stringify(complaints));
  } catch {}
}

function normalizePhone(input: string): string {
  let cleaned = input.trim().replace(/[\s\-().]/g, '');
  if (cleaned.startsWith('00')) cleaned = '+' + cleaned.slice(2);
  if (/^0[6-9]\d{9}$/.test(cleaned)) cleaned = `+91${cleaned.slice(1)}`;
  cleaned = cleaned.replace(/^\+910([6-9]\d{9})$/, '+91$1');
  cleaned = cleaned.replace(/^\+?9191([6-9]\d{9})$/, '+91$1');
  if (/^91[6-9]\d{9}$/.test(cleaned)) cleaned = `+${cleaned}`;
  if (/^[0-9]{10}$/.test(cleaned)) cleaned = `+91${cleaned}`;
  return cleaned;
}

export function handleClientFallback(endpoint: string, options: RequestInit = {}): any {
  const method = (options.method || 'GET').toUpperCase();
  let body: any = {};
  if (options.body) {
    try {
      body = typeof options.body === 'string' ? JSON.parse(options.body) : options.body;
    } catch {
      body = {};
    }
  }

  // POST /api/auth/register
  if (endpoint.includes('/auth/register') && method === 'POST') {
    const { name, phone, email, password, confirmPassword } = body;
    if (!name || !phone || !password) {
      throw new Error('Full name, mobile number, and password are required.');
    }
    if (password !== confirmPassword) {
      throw new Error('Passwords do not match.');
    }
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters.');
    }

    const normPhone = normalizePhone(phone);
    const users = getStoredUsers();
    if (users.some((u) => u.phone === normPhone)) {
      throw new Error('This mobile number is already registered. Please log in instead.');
    }

    const now = new Date().toISOString();
    const newUser: User = {
      id: `USR-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      phone: normPhone,
      name: name.trim(),
      email: email ? email.trim().toLowerCase() : null,
      role: 'CITIZEN',
      status: 'ACTIVE',
      createdAt: now,
      updatedAt: now,
      lastLoginAt: now,
    };

    users.push(newUser);
    saveStoredUsers(users);

    const token = `smartgov_client_token_${newUser.id}`;
    localStorage.setItem('smartgov_current_user', JSON.stringify(newUser));

    return {
      message: 'Registration successful. Welcome to SmartGov Connect AI.',
      user: newUser,
      token,
    };
  }

  // POST /api/auth/login
  if (endpoint.includes('/auth/login') && method === 'POST') {
    const { phone, password } = body;
    const normPhone = normalizePhone(phone || '');
    const users = getStoredUsers();

    let foundUser = users.find((u) => u.phone === normPhone);
    if (!foundUser) {
      if (normPhone === DEMO_ADMIN.phone) foundUser = DEMO_ADMIN;
      else if (normPhone === DEMO_CITIZEN.phone) foundUser = DEMO_CITIZEN;
    }

    if (!foundUser) {
      throw new Error('Invalid mobile number or password.');
    }

    const token = `smartgov_client_token_${foundUser.id}`;
    localStorage.setItem('smartgov_current_user', JSON.stringify(foundUser));

    return {
      message: 'Login successful.',
      user: foundUser,
      token,
    };
  }

  // GET /api/auth/me
  if (endpoint.includes('/auth/me')) {
    const raw = localStorage.getItem('smartgov_current_user');
    if (raw) {
      return { user: JSON.parse(raw) };
    }
    return { user: DEMO_CITIZEN };
  }

  // GET /api/complaints/mine
  if (endpoint.includes('/complaints/mine')) {
    const raw = localStorage.getItem('smartgov_current_user');
    const currentUser = raw ? JSON.parse(raw) : DEMO_CITIZEN;
    const complaints = getStoredComplaints();
    return {
      complaints: complaints.filter((c) => c.citizenId === currentUser.id || currentUser.role === 'ADMIN'),
    };
  }

  // GET /api/complaints/track/
  if (endpoint.includes('/complaints/track/')) {
    const id = endpoint.split('/track/')[1];
    const complaints = getStoredComplaints();
    const found = complaints.find((c) => c.id.toLowerCase() === id.toLowerCase());
    if (found) return { complaint: found };
    return { complaint: complaints[0] };
  }

  // GET /api/complaints/:id
  if (endpoint.match(/\/complaints\/[A-Za-z0-9-]+$/)) {
    const id = endpoint.split('/complaints/')[1];
    const complaints = getStoredComplaints();
    const found = complaints.find((c) => c.id.toLowerCase() === id.toLowerCase());
    return { complaint: found || complaints[0] };
  }

  // POST /api/complaints
  if (endpoint.endsWith('/complaints') && method === 'POST') {
    const raw = localStorage.getItem('smartgov_current_user');
    const currentUser = raw ? JSON.parse(raw) : DEMO_CITIZEN;
    const complaints = getStoredComplaints();

    const now = new Date().toISOString();
    const complaintId = `SGC-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    const newComplaint: Complaint = {
      id: complaintId,
      citizenId: currentUser.id,
      citizen: currentUser,
      title: body.title || 'Untitled Grievance',
      description: body.description || '',
      category: body.category || 'OTHER',
      predictedCategory: body.category || 'OTHER',
      priority: body.priority || 'MEDIUM',
      status: 'SUBMITTED',
      state: body.state || 'Karnataka',
      city: body.city || 'Bengaluru',
      locality: body.locality || 'General Ward',
      address: body.address || '',
      latitude: body.latitude || 12.9716,
      longitude: body.longitude || 77.5946,
      language: body.language || 'en',
      assignedDepartmentId: INITIAL_DEPARTMENTS[0].id,
      assignedDepartment: INITIAL_DEPARTMENTS[0],
      createdAt: now,
      updatedAt: now,
    };

    complaints.unshift(newComplaint);
    saveStoredComplaints(complaints);

    return {
      message: 'Complaint submitted successfully.',
      complaint: newComplaint,
      complaintId,
    };
  }

  // GET /api/notifications
  if (endpoint.includes('/notifications')) {
    const notifications: Notification[] = [
      {
        id: 'NOTIF-1',
        userId: 'USR-CITIZEN-001',
        complaintId: 'SGC-2026-1001',
        title: 'Work In Progress',
        message: 'PWD Field Team deployed hot mix asphalt machine for pothole filling on CMH Road.',
        type: 'STATUS_CHANGE',
        read: false,
        createdAt: new Date(Date.now() - 3600000).toISOString(),
      },
      {
        id: 'NOTIF-2',
        userId: 'USR-CITIZEN-001',
        complaintId: 'SGC-2026-1002',
        title: 'Assigned to BWSSB',
        message: 'Your water quality grievance has been routed to Executive Engineer BWSSB.',
        type: 'ASSIGNMENT',
        read: true,
        createdAt: new Date(Date.now() - 86400000).toISOString(),
      },
    ];
    return { notifications };
  }

  // GET /api/admin/overview
  if (endpoint.includes('/admin/overview')) {
    const complaints = getStoredComplaints();
    return {
      total: complaints.length,
      pending: complaints.filter((c) => c.status === 'SUBMITTED' || c.status === 'UNDER_REVIEW').length,
      inProgress: complaints.filter((c) => c.status === 'ASSIGNED' || c.status === 'IN_PROGRESS').length,
      resolved: complaints.filter((c) => c.status === 'RESOLVED' || c.status === 'CLOSED').length,
      critical: complaints.filter((c) => c.priority === 'CRITICAL').length,
      departments: INITIAL_DEPARTMENTS,
    };
  }

  // GET /api/admin/departments
  if (endpoint.includes('/admin/departments')) {
    return { departments: INITIAL_DEPARTMENTS };
  }

  // Fallback for any other endpoint
  return { success: true };
}
