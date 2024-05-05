import {ConflictException, UsePipes} from '@nestjs/common';
import {Body, Controller, HttpCode, Post} from '@nestjs/common';
import {hash} from 'bcryptjs';
import {ZodValidationPipe} from 'src/pipes/zod-validation-pipe';
import {PrismaService} from 'src/prisma/prisma.service';
import {z} from 'zod';

const configSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  apiUrl: z.string(),
  accessKey: z.string(),
  secretKey: z.string(),
});

type ConfigSchema = z.infer<typeof configSchema>;

@Controller('/configs')
export class ConfigController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(configSchema))
  async create(@Body() body: ConfigSchema) {
    const {email, password, apiUrl, accessKey, secretKey} = body;
    const configWithSameEmail = await this.prisma.config.findUnique({
      where: {email: email},
    });

    if (configWithSameEmail) {
      throw new ConflictException(
        'Já existe uma configuração com o email informado.',
      );
    }

    const hashedPassword = await hash(password, 8);

    const data = {
      email: email,
      password: hashedPassword,
      apiUrl: apiUrl,
      accessKey: accessKey,
      secretKey: secretKey,
    };
    await this.prisma.config.create({data});
  }
}
