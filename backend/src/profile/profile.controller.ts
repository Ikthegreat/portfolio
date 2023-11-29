import { Controller, Get } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileData } from './interfaces';

@Controller('/profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  getProfile(): ProfileData {
    return this.profileService.getProfile();
  }
}
