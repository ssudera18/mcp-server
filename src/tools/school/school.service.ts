// src/tools/school/school.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class SchoolService {
  async search(filters: any) {
    // Replace with Prisma / SQL
    return [
      {
        name: "National Public School",
        location: "Bangalore",
        fee: 170000,
        rating: 4.1,
        votes: 16,
        board: "CBSE",
        type: "Day School",
        image: "https://...",
        url: "https://yoursite.com/..."
      }
    ];
  }
}