import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { 
        id: 1, 
        name: 'Chilli Mac',
        ingredients: ['Chilli','Mac'],
        website: 'https://namelymarly.com/vegan-one-pot-chili-mac-cheese/' 

      },
      { id: 2, name: 'Narco' }
    ];
    return {heroes};
  }
}
