import { Controller, Get } from '@nestjs/common';
import { stripNestedObjects } from '@adragon-api/common/utilities/data.util';

@Controller()
export class AppController {
  @Get()
  health(): Record<string, unknown> {
    return {
      service: 'samples-api',
      status: 'ok',
    };
  }

  @Get('core-demo')
  coreDemo(): Record<string, unknown> {
    const payload = {
      id: 1,
      title: 'sample',
      profile: {
        email: 'sample@adragon.local',
      },
      tags: ['nestjs', 'azure-feed'],
      isActive: true,
    };

    return {
      package: '@adragon/api-core',
      result: stripNestedObjects(payload),
    };
  }
}
