// src/tools/school/school.tool.ts
import { Injectable } from '@nestjs/common';
import { searchSchoolSchema } from './school.schema';
import { SchoolService } from './school.service';

@Injectable()
export class SchoolTool {
  constructor(private schoolService: SchoolService) {}

  async execute(params: any) {
    const parsed = searchSchoolSchema.parse(params);

    const schools = await this.schoolService.search(parsed);

    return this.formatResponse(schools);
  }

  formatResponse(schools: any[]) {
    return {
      type: "collection",
      layout: "card",
      items: schools.map((s) => ({
        type: "card",
        title: s.name,
        subtitle: `${s.location} • ${s.distance || ''}`,
        image_url: s.image,
        rating: {
          value: s.rating,
          count: s.votes
        },
        badges: [
          { label: `Fees: ₹${s.fee}` }
        ],
        sections: [
          {
            type: "table",
            rows: [
              { label: "Board", value: s.board },
              { label: "Type", value: s.type }
            ]
          }
        ],
        actions: [
          {
            type: "link",
            label: "View Details",
            url: s.url
          }
        ]
      }))
    };
  }
}