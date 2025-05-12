import { Injectable } from '@nestjs/common';
import { parse } from 'csv-parse/sync';

@Injectable()
export class FilesService {
  parseFile(input: string) {
    return parse(input, {
      columns: true,
      skip_empty_lines: true,
      delimiter: [';', ','],
    }) as unknown[];
  }
}
