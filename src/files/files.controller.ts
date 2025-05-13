import {
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller('file')
export class FilesController {
  constructor(private readonly fileService: FilesService) {}

  @ApiResponse({
    status: 201,
    description: 'Returns contents of the provided CSV file.',
  })
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 10_000 }),
          new FileTypeValidator({
            fileType: 'text/csv',
            skipMagicNumbersValidation: true,
          }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.fileService.parseFile(file.buffer.toString('utf-8'));
  }
}
