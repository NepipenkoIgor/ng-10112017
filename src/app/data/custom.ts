import { Observable } from 'rxjs/Observable';
// import { delay } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

const data: Product[] = [
  {
    '_id': '58e1f809c0b34dc771346a57',
    'price': '265.33',
    'picture': 'http://placehold.it/320x320',
    'title': 'RUBADUB'
  },
  {
    '_id': '58e1f809fd6385dd5adc1baa',
    'price': '1822.77',
    'picture': 'http://placehold.it/320x320',
    'title': 'SONIQUE'
  },
  {
    '_id': '58e1f809711416f3d8c0a7ad',
    'price': '1296.17',
    'picture': 'http://placehold.it/320x320',
    'title': 'XIIX'
  },
  {
    '_id': '58e1f80939d7162e9a0a9eb0',
    'price': '1784.31',
    'picture': 'http://placehold.it/320x320',
    'title': 'DIGIRANG'
  },
  {
    '_id': '58e1f80996409af652ff5997',
    'price': '1951.37',
    'picture': 'http://placehold.it/320x320',
    'title': 'BARKARAMA'
  },
  {
    '_id': '58e1f809438ccc28b805ea3b',
    'price': '1505.13',
    'picture': 'http://placehold.it/320x320',
    'title': 'GLOBOIL'
  },
  {
    '_id': '58e1f809a8fd877d977d9e22',
    'price': '1440.52',
    'picture': 'http://placehold.it/320x320',
    'title': 'DRAGBOT'
  },
  {
    '_id': '58e1f809473528b3533131d0',
    'price': '459.52',
    'picture': 'http://placehold.it/320x320',
    'title': 'CENTREXIN'
  },
  {
    '_id': '58e1f80962fd2c3cb475978d',
    'price': '866.55',
    'picture': 'http://placehold.it/320x320',
    'title': 'HYPLEX'
  },
  {
    '_id': '58e1f8095d5bc87ca60def1c',
    'price': '1436.43',
    'picture': 'http://placehold.it/320x320',
    'title': 'GAPTEC'
  }
];

export const products$: Observable<Product[]> =
  Observable.of(data)
    .delay(2000);
