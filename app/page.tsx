import { Button } from '@/components/ui/button';
import { CalendarIcon, MapPinIcon } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Concert crowd"
          className="w-full h-full object-cover opacity-70"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          Rock Fest 2024
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
          Experience the Ultimate Live Music Adventure
        </p>
        <div className="space-y-2 mb-8 text-lg">
          <div className="flex items-center justify-center gap-2">
            <CalendarIcon className="h-5 w-5" />
            <span>October 15, 2024</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPinIcon className="h-5 w-5" />
            <span>Madison Square Garden, New York</span>
          </div>
        </div>
        <Button
          size="lg"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg"
        >
          Get Tickets Now
        </Button>
      </div>
    </main>
  );
}
