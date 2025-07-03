export interface Tour {
  _id: string;
  name: string;
  destination: string;
  duration: number;
  maxGroupSize: number;
  difficulty: 'easy' | 'medium' | 'difficult';
  price: number;
  description: string;
  image: string;
  ratingsAverage: number;
  ratingsQuantity: number;
  startDates?: Date[];
  guides?: string[];
  locations?: TourLocation[];
}

export interface TourLocation {
  type: 'Point';
  coordinates: [number, number];
  address: string;
  description: string;
  day?: number;
}

export interface TourBooking {
  tourId: string;
  userId: string;
  price: number;
  participants: number;
  startDate: Date;
  status: 'pending' | 'confirmed' | 'cancelled';
}
