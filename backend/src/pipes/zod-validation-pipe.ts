import {BadRequestException, PipeTransform} from '@nestjs/common';
import {ZodError, ZodSchema} from 'zod';
import {fromZodError} from 'zod-validation-error';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}
  transform(value: unknown) {
    try {
      this.schema.parse(value);
    } catch (error) {
      if (error instanceof ZodError) {
        throw new BadRequestException({
          statusCode: 400,
          message: 'Falha na validação.',
          errors: fromZodError(error),
        });
      }
      throw new BadRequestException('Falha na validação.');
    }
    return value;
  }
}
