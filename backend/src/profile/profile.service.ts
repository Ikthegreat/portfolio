import { Injectable } from '@nestjs/common';
import { ProfileData } from './interfaces';

@Injectable()
export class ProfileService {
  getProfile(): ProfileData {
    return {
      content1: '매초 성장하는 개발자',
      content2: '저는 뭐든지 고민하고 깊게 파고드는 걸 행복으로 여깁니다.',
      name: { icon: 'name', title: 'string', context: 'string' },
      contact: { icon: 'contact', title: 'string', context: 'string' },
      email: { icon: 'email', title: 'string', context: 'string' },
      experience: { icon: 'email', title: 'string', context: ['string'] },
    };
  }
}
