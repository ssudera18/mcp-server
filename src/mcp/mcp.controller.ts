import { Controller, Post, Body } from '@nestjs/common';
import { McpService } from './mcp.service';

@Controller('mcp')
export class McpController {
  constructor(private readonly mcpService: McpService) {}

  @Post()
  async handle(@Body() body: any) {
    return this.mcpService.handleRequest(body);
  }
}