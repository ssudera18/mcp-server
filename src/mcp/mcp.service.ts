// src/mcp/mcp.service.ts
import { Injectable } from '@nestjs/common';
import { SchoolTool } from '../tools/school/school.tool';

@Injectable()
export class McpService {
  constructor(private schoolTool: SchoolTool) {}

  async handleRequest(body: any) {
    const { tool, params } = body;

    switch (tool) {
      case 'searchSchools':
        return this.schoolTool.execute(params);

      default:
        return {
          error: 'Unknown tool'
        };
    }
  }
}