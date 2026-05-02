import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { McpController } from './mcp/mcp.controller';
import { McpService } from './mcp/mcp.service';

@Module({
  imports: [],
  controllers: [AppController, McpController],
  providers: [AppService, McpService],
})
export class AppModule {}
