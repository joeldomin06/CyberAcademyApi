import { NestFactory } from "@nestjs/core";
import { SeederModule } from "./routes/seeder/seeder.module";
import { SeederService } from "./routes/seeder/seeder.service";

async function bootstrap() {
    const app = await NestFactory.create(SeederModule);
    const seeder = app.get(SeederService)
    await seeder.seed()
    await app.close()
}
bootstrap();